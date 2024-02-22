const fs = require("fs").promises;
const axios = require("axios");
const path = require("path");
const { createBodyJSON } = require("./generate-body");

async function loadJsonFromFile(filePath) {
	try {
		const jsonData = await fs.readFile(filePath, "utf-8");
		return JSON.parse(jsonData);
	} catch (error) {
		throw new Error(
			`Error loading JSON from file ${filePath}: ${error.message}`
		);
	}
}

async function generatePdfFromTemplate(url, template, data) {
	try {
		const requestBody = JSON.stringify({
			template,
			data,
		});

		const response = await axios.post(url, requestBody, {
			headers: {
				"Content-Type": "application/json",
			},
			responseType: "arraybuffer",
		});

		return response.data;
	} catch (error) {
		throw new Error(`Error generating PDF from template: ${error.message}`);
	}
}

async function savePdfToFile(pdfBuffer, outputPath) {
	try {
		console.log("Saving PDF...");
		await fs.writeFile(outputPath, pdfBuffer);
		console.log("PDF saved successfully at:", outputPath);
	} catch (error) {
		throw new Error(`Error saving PDF to ${outputPath}: ${error.message}`);
	}
}

async function generateAndSavePdf(url, data, template, outputFile) {
	try {
		if (!data) {
			throw new Error("Failed to load data.");
		}

		const pdfBuffer = await generatePdfFromTemplate(url, template, data);
		await savePdfToFile(pdfBuffer, outputFile);

		return outputFile;
	} catch (error) {
		throw new Error(`Error generating and saving PDF: ${error.message}`);
	}
}

async function main(basePath) {
	try {
		const dataFilePath = path.join(basePath, "data.json");
		const templateFilePath = path.join(basePath, "template.ejs");

		const generatedFilesDir = path.join(basePath, "generated-files");
		const pdfOutputPath = path.join(generatedFilesDir, "output.pdf");
		const bodyFilePath = path.join(generatedFilesDir, "body.json");

		const generatePdfUrl = "http://localhost:5000/generate-pdf/html";

		console.log("Generating PDF...");

		const template = await fs.readFile(templateFilePath, "utf-8");
		const data = await loadJsonFromFile(dataFilePath);

		const pdfFilePath = await generateAndSavePdf(
			generatePdfUrl,
			data,
			template,
			pdfOutputPath
		);

		console.log("PDF completed and saved at:", pdfFilePath);

		await createBodyJSON(template, data, bodyFilePath);
	} catch (error) {
		console.error("An error occurred during the process:", error.message);
	}
}

module.exports = { main };
