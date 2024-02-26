### Descripción del Proyecto: PDFGenius

PDFGenius es una herramienta poderosa diseñada para convertir HTML en PDF de manera eficiente y precisa. Está construida con una arquitectura limpia y modular que permite convertir fácilmente datos JSON en HTML dinámico y generar documentos PDF profesionales al instante.

---

### Levantar el Backend

#### En Desarrollo

1. **Instalación de Dependencias**: Asegúrate de tener Node.js y npm instalados en tu sistema. Luego, clona el repositorio del proyecto PDFGenius.

   ```bash
   git clone <url_del_repositorio>
   cd PDFGenius
   npm install
   ```

2. **Configuración de Variables de Entorno**: Ajusta las variables de entorno para el entorno de Desarrollo.

   En el archivo `.env.development`, configura las siguientes variables:

   ```plaintext
   PORT=5000
   EXEC_GS=gs
   ```

3. **Ejecución en Modo Desarrollo**: Inicia el servidor en modo de desarrollo con nodemon para reiniciar automáticamente cuando detecte cambios.

   ```bash
   npm run start:dev
   ```

#### En Producción

1. **Compilación del Código**: Antes de desplegar en producción, asegúrate de compilar el código TypeScript a JavaScript.

   ```bash
   npm run build
   ```

2. **Configuración de Variables de Entorno**: Ajusta las variables de entorno para el entorno de producción.

   En el archivo `.env.production`, configura las siguientes variables:

   ```plaintext
   PORT=8080
   EXEC_GS=/usr/bin/gs
   ```

3. **Ejecución en Modo Producción**: Inicia el servidor en modo de producción con la configuración correspondiente.

   ```bash
   npm start
   ```

---

### Variables de Entorno

El archivo `.env` contiene variables que configuran aspectos del servidor en diferentes entornos. Ajusta estas variables según tus necesidades:

- `PORT`: Define el puerto en el que el servidor escuchará las solicitudes.
- `EXEC_GS`: Ruta o comando para ejecutar Ghostscript, necesario para ciertas operaciones.

---

Entendido, entonces podemos actualizar la sección de Ejemplos para reflejar cómo se utilizan los scripts `generate-body.js` y `html-to-pdf.js` en el script `generate.js`. Aquí tienes la documentación revisada:

### Ejemplos

#### 1. Configuración de archivos

   - Asegúrate de tener los siguientes archivos:
     - `data.json`: Contiene los datos que deseas incluir en tu PDF.
     - `template.ejs`: Es el template HTML que servirá como base para tu PDF.

#### 2. Ejecución de `generate.js`

   Este script utiliza los archivos `data.json` y `template.ejs` para generar un PDF. Combina `generate-body.js` y `html-to-pdf.js` para convertir la plantilla en un archivo `output.pdf` y generar un `body.json`.

   ```bash
   node examples/template/<template>/generate.js
   ```

   Al finalizar, verás archivos en la carpeta `generated-files`.

---
## Documentación de la Ruta `/generate-pdf/html`

### Descripción
Esta ruta permite generar un archivo PDF a partir de una plantilla HTML proporcionada junto con datos en formato JSON.

### URL
```
POST /generate-pdf/html
```

### Parámetros de la Solicitud
La solicitud debe incluir un cuerpo en formato JSON con los siguientes campos:

1. **template** (cadena de texto, requerido): La plantilla HTML que se utilizará para generar el PDF.
2. **data** (objeto JSON, requerido): Los datos que se utilizarán para llenar la plantilla.

Ejemplo del cuerpo de la solicitud:
```json
{
  "template": "<html><body><h1>{{ title }}</h1><p>{{ content }}</p></body></html>",
  "data": {
    "title": "Ejemplo de PDF Generado",
    "content": "Este es un ejemplo de contenido para el PDF."
  }
}
```
