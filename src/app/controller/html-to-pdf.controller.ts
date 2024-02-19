import { Request, Response } from 'express';
import { HTMLtoPDFConverter } from '../service/generate-pdf/html';
const service = new HTMLtoPDFConverter();

export class HTMLtoPDFController {
	public async generatePDF(req: Request, res: Response): Promise<void> {
		try {
			const { template, data } = req.body;

			// Generar PDF utilizando el servicio de conversión
			const pdfBuffer = await service.convertToPDF(template, data);

			// Enviar el PDF como respuesta
			res.setHeader('Content-Type', 'application/pdf');
			res.send(pdfBuffer);
		} catch (error) {
			console.error('Error al generar el PDF:', error);
			res.status(500).send('Error al generar el PDF');
		}
	}
}
