import express, { Express } from 'express';
import { generatePdfRoutes } from './generate-pdf.routes';
function routerApi(app: Express): void {
	const router = express.Router();
	app.use('/', router);
	router.use('/generate-pdf', generatePdfRoutes);
}
export { routerApi };
