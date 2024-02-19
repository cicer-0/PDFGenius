const axios = require("axios");
const fs = require("fs");

/**
 * Datos de ejemplo para la plantilla HTML.
 * Puedes modificar estos datos según tus necesidades.
 */
const data = {
	title: "Ejemplo de PDF",
	content: "Este es un documento PDF generado dinámicamente.",
};

/**
 * Plantilla HTML de ejemplo.
 * Puedes personalizar esta plantilla según tus necesidades.
 */
const template = `
<html>
<head>
	<title><%= title %></title>
</head>
<body>
	<h1><%= title %></h1>
	<p><%= content %></p>
</body>
</html>
`;

/**
 * Función para generar un archivo PDF utilizando la API PDFGenius.
 * @param {string} template La plantilla HTML.
 * @param {Object} data Los datos a insertar en la plantilla.
 * @returns {Promise<void>} Promesa que se resuelve una vez que se genera el PDF.
 */
async function generatePDF(template, data) {
	try {
		// Realizar una solicitud POST a la API PDFGenius
		const response = await axios.post(
			"http://localhost:5000/generate-pdf/html",
			{
				template: template,
				data: data,
			},
			{
				responseType: "arraybuffer", // Especificar el tipo de respuesta como arreglo de bytes
			}
		);

		// Guardar el PDF generado en el sistema de archivos
		fs.writeFileSync("ejemplo.pdf", response.data);
		console.log("PDF generado exitosamente.");
	} catch (error) {
		console.error(
			"Error al generar el PDF:",
			error.response ? error.response.data : error.message
		);
	}
}

// Llamar a la función para generar el PDF
generatePDF(template, data);
