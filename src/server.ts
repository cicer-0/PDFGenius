import express, { type Request, type Response } from 'express';
const app = express();

import { config } from './config';

app.get('/', (_: Request, res: Response) => {
	res.send('Hola, mundo!');
});

app.listen(config.port, () => {
	console.log(`Servidor corriendo en el puerto ${config.port}`);
});
