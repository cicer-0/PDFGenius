import express, { type Request, type Response } from 'express';
const app = express();
const PORT = process.env.PORT ?? 3000;

app.get('/', (_: Request, res: Response) => {
	res.send('Hola, mundo!');
});

app.listen(PORT, () => {
	console.log(`Servidor corriendo en el puerto ${PORT}`);
});
