import express, { type Request, type Response } from 'express';
import cors from 'cors';
import { config } from './core/config';
import { routerApi } from './app/routes';
import { boomErrorHandler } from './app/middleware/error.middleware';
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));
routerApi(app);
app.use(boomErrorHandler);
app.get('/', (_: Request, res: Response) => {
	res.send('Hola, mundo!');
});

app.listen(config.port, () => {
	console.log(`Servidor corriendo en el puerto ${config.port}`);
});
