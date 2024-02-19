import { NextFunction, Response } from 'express';
import boom from '@hapi/boom';
import { ObjectSchema } from 'joi';

function validatorHandler(schema: ObjectSchema, property: string) {
	return (
		req: any,
		_: Response,
		next: NextFunction
	) => {
		try {
			const data = req[property];
			const { error } = schema.validate(data);

			if (error) {
				const errorMessage = error.details.map((err) => err.message).join(', ');
				return next(boom.badRequest(errorMessage));
			}
			next();
		} catch (err) {
			return next(boom.badImplementation('Error en la validación de datos.'));
		}
	};
}

export { validatorHandler };
