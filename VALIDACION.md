# Validación del manual

El manual incluye un validador automático en `tools/validate-manual.ps1`.

También puedes abrir `validacion.html` directamente en el navegador. La página carga los datos del manual y muestra el resultado visualmente; el botón **Volver a validar** permite repetir la revisión después de editar los archivos.

## Ejecutar

Desde la carpeta raíz del proyecto:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\tools\validate-manual.ps1
```

También se puede cambiar el mínimo de productos secundarios:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\tools\validate-manual.ps1 -MinSecondaryProducts 3
```

Para integrarlo con otra herramienta, solicitar salida JSON:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\tools\validate-manual.ps1 -Json
```

## Qué revisa

- Archivos requeridos y codificación UTF-8.
- Módulos referenciados desde `index.html`.
- Ausencia de scripts y manejadores inline.
- Marcadores de extracción incompleta.
- IDs duplicados de productos y padecimientos.
- Referencias a productos inexistentes.
- Cantidad explícita en cada porción de las guías de padecimiento.
- Guías sin combo principal o sin apoyos secundarios suficientes.
- Presencia del comparador de productos y su lógica asociada.
- Artefactos de parche que puedan invalidar los módulos JavaScript.
- Cierre correcto de los arreglos de datos.

El proceso devuelve código `0` cuando todo es correcto y código `1` si encuentra errores.
