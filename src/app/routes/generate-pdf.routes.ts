import express from 'express';
import { validatorHandler } from '../middleware/validation.middleware';
import { htmlToPdfSchema } from '../schema/generate-pdf.schema';
import { HTMLtoPDFController } from '../controller/html-to-pdf.controller';
const htmlToPdfController = new HTMLtoPDFController();
const router = express.Router();
router.post(
	'/html',
	validatorHandler(htmlToPdfSchema, 'body'),
	htmlToPdfController.generatePDF
);

export { router as generatePdfRoutes };
