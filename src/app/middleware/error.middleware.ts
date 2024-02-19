import { Request, Response, NextFunction } from 'express';
import { Boom } from '@hapi/boom';

function boomErrorHandler(
	err: Boom,
	_: Request,
	res: Response,
	next: NextFunction
) {
	if (err.isBoom) {
		const { output } = err;
		const statusCode = output.statusCode || 500;
		const payload = output.payload || { message: 'Internal Server Error' };

		// Registra el error para fines de depuración, si es necesario.
		console.error(`[${statusCode}] ${payload.message}`);

		return res.status(statusCode).json(payload);
	}
	next(err);
}

export { boomErrorHandler };
