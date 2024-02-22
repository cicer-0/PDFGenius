const fs = require("fs").promises;
const path = require("path");

// Función para crear el cuerpo del JSON
async function createBodyJSON(template, data, filePath) {
	try {
		const body = {
			template,
			data,
		};

		const jsonData = JSON.stringify(body, null, 2);

		await writeJsonToFile(filePath, jsonData);

		console.log(`Se ha creado el archivo ${filePath} correctamente.`);
	} catch (error) {
		console.error(`Error al crear el archivo ${filePath}:`, error);
	}
}

// Función para escribir el JSON en el archivo
async function writeJsonToFile(filePath, jsonData) {
	const fullPath = path.resolve(filePath);
	await fs.writeFile(fullPath, jsonData, "utf8");
}

module.exports = { createBodyJSON };
