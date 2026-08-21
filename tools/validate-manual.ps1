[CmdletBinding()]
param(
    [int]$MinSecondaryProducts = 3,
    [switch]$Json
)

$ErrorActionPreference = 'Stop'
$null = [Console]::OutputEncoding = [System.Text.UTF8Encoding]::new($false)
$manualRoot = Split-Path -Parent $PSScriptRoot
$results = [System.Collections.Generic.List[object]]::new()
$errors = [System.Collections.Generic.List[string]]::new()
$warnings = [System.Collections.Generic.List[string]]::new()

function Add-Result {
    param(
        [string]$Name,
        [bool]$Passed,
        [string]$Detail,
        [ValidateSet('OK', 'ERROR', 'WARNING')]
        [string]$Level = 'OK'
    )

    $results.Add([pscustomobject]@{
        name = $Name
        passed = $Passed
        level = $Level
        detail = $Detail
    })

    if ($Level -eq 'ERROR') { $errors.Add($Detail) }
    if ($Level -eq 'WARNING') { $warnings.Add($Detail) }
}

function Get-TextFile {
    param([string]$RelativePath)

    $path = Join-Path $manualRoot $RelativePath
    if (-not (Test-Path -LiteralPath $path -PathType Leaf)) {
        Add-Result "Archivo $RelativePath" $false 'No existe.' 'ERROR'
        return $null
    }

    try {
        $bytes = [System.IO.File]::ReadAllBytes($path)
        $utf8 = [System.Text.UTF8Encoding]::new($false, $true)
        $text = $utf8.GetString($bytes)
        Add-Result "Archivo $RelativePath" $true "UTF-8 válido ($($bytes.Length) bytes)."
        return $text
    } catch {
        Add-Result "Archivo $RelativePath" $false "No se pudo leer como UTF-8: $($_.Exception.Message)" 'ERROR'
        return $null
    }
}

$index = Get-TextFile 'index.html'
$styles = Get-TextFile 'css/styles.css'
$tailwind = Get-TextFile 'js/tailwind.config.js'
$app = Get-TextFile 'js/app.js'
$products = Get-TextFile 'data/productos.js'
$guides = Get-TextFile 'data/padecimientos.js'

if ($null -ne $index) {
    $requiredLoaders = @(
        './js/tailwind.config.js',
        './data/productos.js',
        './data/padecimientos.js',
        './js/app.js',
        './css/styles.css'
    )
    $missingLoaders = @($requiredLoaders | Where-Object { $index.IndexOf($_, [System.StringComparison]::Ordinal) -lt 0 })
    Add-Result 'Módulos cargados por index.html' ($missingLoaders.Count -eq 0) $(if ($missingLoaders.Count -eq 0) { 'Todos los módulos están referenciados.' } else { "Faltan: $($missingLoaders -join ', ')" }) $(if ($missingLoaders.Count -eq 0) { 'OK' } else { 'ERROR' })

    $inlineScripts = [regex]::Matches($index, '<script(?![^>]*\bsrc=)[^>]*>')
    Add-Result 'Scripts inline' ($inlineScripts.Count -eq 0) "Detectados: $($inlineScripts.Count)." $(if ($inlineScripts.Count -eq 0) { 'OK' } else { 'WARNING' })

    $inlineHandlers = [regex]::Matches($index, '\son[a-z]+\s*=')
    Add-Result 'Manejadores inline' ($inlineHandlers.Count -eq 0) "Detectados: $($inlineHandlers.Count)." $(if ($inlineHandlers.Count -eq 0) { 'OK' } else { 'WARNING' })
}

$allText = @($index, $styles, $tailwind, $app, $products, $guides) -join "`n"
$markers = [regex]::Matches($allText, 'truncated|Total output lines|original token count|Warning:')
Add-Result 'Marcadores de extracción incompleta' ($markers.Count -eq 0) "Detectados: $($markers.Count)." $(if ($markers.Count -eq 0) { 'OK' } else { 'ERROR' })

$leadingPlusCount = 0
foreach ($module in @($tailwind, $app, $products, $guides)) {
    if ($null -ne $module) {
        $leadingPlusCount += @($module -split "`r?`n" | Where-Object { $_ -match '^\+' }).Count
    }
}
Add-Result 'Artefactos de parche en JavaScript' ($leadingPlusCount -eq 0) "Líneas con prefijo +: $leadingPlusCount." $(if ($leadingPlusCount -eq 0) { 'OK' } else { 'ERROR' })

if ($null -ne $styles) {
    Add-Result 'Estilos de impresión' ($styles.Contains('@media print')) 'La hoja externa contiene reglas de impresión.' $(if ($styles.Contains('@media print')) { 'OK' } else { 'WARNING' })
}

if ($null -ne $app) {
    $appFeatures = @('window.manualData', 'populateSideMenuFilters()', 'renderProducts(', 'renderPadecimientosWeb()', 'window.openModal', 'GUIDE_SPECIALIST_NOTE', 'getGuideServing(')
    $missingFeatures = @($appFeatures | Where-Object { $app.IndexOf($_, [System.StringComparison]::Ordinal) -lt 0 })
    Add-Result 'Funciones principales de app.js' ($missingFeatures.Count -eq 0) $(if ($missingFeatures.Count -eq 0) { 'Funciones de renderizado e interacción presentes.' } else { "Faltan: $($missingFeatures -join ', ')" }) $(if ($missingFeatures.Count -eq 0) { 'OK' } else { 'ERROR' })

    if ($null -ne $index) {
        $compareFeatures = @('window.toggleCompare', 'compareBar', 'compareModal', 'compareTableWrap')
        $missingCompareFeatures = @($compareFeatures | Where-Object {
            $source = if ($_ -eq 'window.toggleCompare') { $app } else { $index }
            $source.IndexOf($_, [System.StringComparison]::Ordinal) -lt 0
        })
        Add-Result 'Comparador de productos' ($missingCompareFeatures.Count -eq 0) $(if ($missingCompareFeatures.Count -eq 0) { 'Markup y lógica del comparador presentes.' } else { "Faltan: $($missingCompareFeatures -join ', ')" }) $(if ($missingCompareFeatures.Count -eq 0) { 'OK' } else { 'ERROR' })
    }
}

$productIds = @()
$guideIds = @()
$referenceIds = @()
$guideStats = [System.Collections.Generic.List[object]]::new()

if ($null -ne $products) {
    $productIds = @([regex]::Matches($products, '(?m)^\s*id:\s*(\d+)\s*,') | ForEach-Object { [int]$_.Groups[1].Value })
    $productDuplicates = @($productIds | Group-Object | Where-Object { $_.Count -gt 1 })
    Add-Result 'IDs de productos únicos' ($productDuplicates.Count -eq 0) "Productos: $($productIds.Count); duplicados: $($productDuplicates.Count)." $(if ($productDuplicates.Count -eq 0) { 'OK' } else { 'ERROR' })
    $productCloseCount = [regex]::Matches($products, '(?m)^\];').Count
    Add-Result 'Cierre del arreglo de productos' ($productCloseCount -eq 1) "Cierres detectados: $productCloseCount." $(if ($productCloseCount -eq 1) { 'OK' } else { 'ERROR' })
}

if ($null -ne $guides) {
    $guideIds = @([regex]::Matches($guides, "(?m)^\s*id:\s*'([^']+)'\s*,") | ForEach-Object { $_.Groups[1].Value })
    $guideDuplicates = @($guideIds | Group-Object | Where-Object { $_.Count -gt 1 })
    Add-Result 'IDs de padecimientos únicos' ($guideDuplicates.Count -eq 0) "Guías: $($guideIds.Count); duplicados: $($guideDuplicates.Count)." $(if ($guideDuplicates.Count -eq 0) { 'OK' } else { 'ERROR' })

    $referenceIds = @([regex]::Matches($guides, '\{\s*id:\s*(\d+)\s*,\s*serving:') | ForEach-Object { [int]$_.Groups[1].Value })
    $missingIds = @($referenceIds | Where-Object { $_ -notin $productIds } | Sort-Object -Unique)
    Add-Result 'Referencias de productos válidas' ($missingIds.Count -eq 0) $(if ($missingIds.Count -eq 0) { "Referencias: $($referenceIds.Count); ninguna falta." } else { "IDs faltantes: $($missingIds -join ', ')" }) $(if ($missingIds.Count -eq 0) { 'OK' } else { 'ERROR' })

    $servingMatches = [regex]::Matches($guides, "serving:\s*'([^']*)'")
    $servingsWithoutQuantity = @($servingMatches | Where-Object { $_.Groups[1].Value -notmatch '\d' })
    Add-Result 'Porciones con cantidad explícita' ($servingsWithoutQuantity.Count -eq 0) $(if ($servingsWithoutQuantity.Count -eq 0) { "Porciones revisadas: $($servingMatches.Count); todas incluyen una cantidad." } else { "Sin cantidad: $($servingsWithoutQuantity.Count)" }) $(if ($servingsWithoutQuantity.Count -eq 0) { 'OK' } else { 'ERROR' })

    $guideLines = $guides -split "`r?`n"
    $currentGuide = ''
    $section = ''
    $principalCount = 0
    $secondaryCount = 0

    foreach ($line in $guideLines) {
        if ($line -match "^\s*id:\s*'([^']+)'\s*,") {
            if ($currentGuide -ne '') {
                $guideStats.Add([pscustomobject]@{ id = $currentGuide; principal = $principalCount; secondary = $secondaryCount })
            }
            $currentGuide = $matches[1]
            $section = ''
            $principalCount = 0
            $secondaryCount = 0
        } elseif ($line -match '^\s*comboPrincipal:\s*\[') {
            $section = 'principal'
        } elseif ($line -match '^\s*comboSecundario:\s*\[') {
            $section = 'secondary'
        } elseif ($section -eq 'principal' -and $line -match '\{\s*id:\s*\d+,\s*serving:') {
            $principalCount++
        } elseif ($section -eq 'secondary' -and $line -match '\{\s*id:\s*\d+,\s*serving:') {
            $secondaryCount++
        }
    }
    if ($currentGuide -ne '') {
        $guideStats.Add([pscustomobject]@{ id = $currentGuide; principal = $principalCount; secondary = $secondaryCount })
    }

    $emptyPrincipal = @($guideStats | Where-Object { $_.principal -eq 0 })
    $emptySecondary = @($guideStats | Where-Object { $_.secondary -eq 0 })
    $underMinimum = @($guideStats | Where-Object { $_.secondary -lt $MinSecondaryProducts })
    Add-Result 'Combo principal no vacío' ($emptyPrincipal.Count -eq 0) $(if ($emptyPrincipal.Count -eq 0) { 'Todas las guías tienen productos principales.' } else { "Sin productos: $($emptyPrincipal.id -join ', ')" }) $(if ($emptyPrincipal.Count -eq 0) { 'OK' } else { 'ERROR' })
    Add-Result "Apoyos secundarios (mínimo $MinSecondaryProducts)" ($underMinimum.Count -eq 0) $(if ($underMinimum.Count -eq 0) { 'Todas las guías cumplen el mínimo.' } else { ($underMinimum | ForEach-Object { "$($_.id)=$($_.secondary)" }) -join ', ' }) $(if ($underMinimum.Count -eq 0) { 'OK' } else { 'ERROR' })
    Add-Result 'Combo secundario no vacío' ($emptySecondary.Count -eq 0) $(if ($emptySecondary.Count -eq 0) { 'Todas las guías tienen apoyos secundarios.' } else { "Sin productos: $($emptySecondary.id -join ', ')" }) $(if ($emptySecondary.Count -eq 0) { 'OK' } else { 'ERROR' })

    $guideCloseCount = [regex]::Matches($guides, '(?m)^\];').Count
    Add-Result 'Cierre del arreglo de padecimientos' ($guideCloseCount -eq 1) "Cierres detectados: $guideCloseCount." $(if ($guideCloseCount -eq 1) { 'OK' } else { 'ERROR' })
}

if ($Json) {
    [pscustomobject]@{
        passed = ($errors.Count -eq 0)
        errors = $errors
        warnings = $warnings
        results = $results
        summary = [pscustomobject]@{
            products = $productIds.Count
            guides = $guideIds.Count
            references = $referenceIds.Count
            minimumSecondaryProducts = $MinSecondaryProducts
        }
    } | ConvertTo-Json -Depth 6
} else {
    Write-Host ''
    Write-Host 'VALIDACIÓN DEL MANUAL' -ForegroundColor Cyan
    Write-Host '=====================' -ForegroundColor Cyan
    foreach ($result in $results) {
        $color = if ($result.level -eq 'ERROR') { 'Red' } elseif ($result.level -eq 'WARNING') { 'Yellow' } else { 'Green' }
        $label = if ($result.level -eq 'ERROR') { 'ERROR' } elseif ($result.level -eq 'WARNING') { 'AVISO' } else { 'OK' }
        Write-Host "[$label] $($result.name): $($result.detail)" -ForegroundColor $color
    }
    Write-Host ''
    if ($errors.Count -eq 0) {
        $successSummary = 'RESULTADO: VALIDACIÓN CORRECTA ({0} productos, {1} guías, {2} referencias).' -f $productIds.Count, $guideIds.Count, $referenceIds.Count
        Write-Host $successSummary -ForegroundColor Green
    } else {
        $failureSummary = 'RESULTADO: FALLÓ con {0} error(es).' -f $errors.Count
        Write-Host $failureSummary -ForegroundColor Red
    }
    if ($warnings.Count -gt 0) { Write-Host "Avisos: $($warnings.Count)." -ForegroundColor Yellow }
}

if ($errors.Count -gt 0) { exit 1 }
exit 0
