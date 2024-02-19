Aquí tienes la documentación actualizada para utilizar EJS en lugar de Handlebars:

## Documentación de la API PDFGenius

¡Bienvenido a la documentación de la API PDFGenius! Esta API te permite generar archivos PDF a partir de plantillas HTML y datos JSON utilizando Node.js y Express. A continuación, encontrarás una guía paso a paso sobre cómo utilizar esta API de manera efectiva.

## Tabla de Contenidos
- [Documentación de la API PDFGenius](#documentación-de-la-api-pdfgenius)
- [Tabla de Contenidos](#tabla-de-contenidos)
- [Introducción](#introducción)
- [Requisitos](#requisitos)
- [Configuración](#configuración)
- [Uso de la API](#uso-de-la-api)
	- [Generar PDF desde HTML](#generar-pdf-desde-html)
- [Errores](#errores)

## Introducción
PDFGenius es una API que simplifica la generación de archivos PDF a partir de plantillas HTML dinámicas y datos JSON. Utiliza las tecnologías Node.js, Express, Puppeteer y EJS para lograr esta funcionalidad.

## Requisitos
Asegúrate de tener instalado lo siguiente antes de comenzar:
- Node.js (v14.x o superior)
- npm o yarn
- Google Chrome (para Puppeteer)

## Configuración
1. Clona el repositorio de PDFGenius en tu máquina local.
2. Instala las dependencias ejecutando `npm install` o `yarn install`.
3. Crea un archivo `.env` en la raíz del proyecto y define las siguientes variables de entorno:
   - `NODE_ENV`: Entorno de la aplicación (development, production, test).
   - `PORT`: Puerto en el que se ejecutará el servidor Express.
   - `EXEC_GS`: Ruta al ejecutable GhostScript.
4. Asegúrate de tener una plantilla HTML preparada con sintaxis EJS (`<%= variable %>`) y los datos JSON correspondientes para generar el PDF.

## Uso de la API
### Generar PDF desde HTML
- **URL:** `/generate-pdf/html`
- **Método:** `POST`
- **Parámetros de la solicitud:**
  - `template`: Cadena de texto que representa la plantilla HTML con sintaxis EJS.
  - `data`: Objeto JSON que contiene los datos a insertar en la plantilla.
- **Respuesta exitosa:** Devuelve el PDF generado como una respuesta binaria.
- **Ejemplo de solicitud:**
  ```json
  {
    "template": "<h1><%= title %></h1><p><%= content %></p>",
    "data": {
      "title": "Ejemplo de PDF",
      "content": "Este es un documento PDF generado dinámicamente."
    }
  }
  ```

## Errores
La API puede devolver los siguientes códigos de estado y mensajes de error en caso de problemas:
- `400 Bad Request`: Error en la solicitud debido a datos incorrectos.
- `500 Internal Server Error`: Error interno en el servidor.

¡Y eso es todo! Con esta guía, deberías poder utilizar la API PDFGenius para generar fácilmente archivos PDF desde plantillas HTML con sintaxis EJS y datos JSON. Si encuentras algún problema o tienes alguna pregunta, no dudes en ponerte en contacto con el equipo de desarrollo. ¡Feliz generación de PDF! 📄✨
