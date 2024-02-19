import puppeteer from 'puppeteer';
import ejs from 'ejs';

export class HTMLtoPDFConverter {
	public async convertToPDF(template: string, jsonData: any): Promise<Buffer> {
		// Renderizar la plantilla con los datos JSON utilizando EJS
		const renderedHtml = ejs.render(template, jsonData);

		// Generar PDF con Puppeteer
		const browser = await puppeteer.launch({
			headless: true,
			args: ['--no-sandbox'],
		});
		const page = await browser.newPage();
		await page.setJavaScriptEnabled(false);
		await page.setContent(renderedHtml);
		const pdfBuffer = await page.pdf({ format: 'A4' });
		await browser.close();

		return pdfBuffer;
	}
}
