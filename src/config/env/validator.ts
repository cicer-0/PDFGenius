import { envSchema } from './schema';

export function validator() {
	const { error, value: envVars } = envSchema.validate(process.env, {
		abortEarly: false,
	});
	if (error) {
		throw new Error(
			`Configuración de variables de entorno inválida: ${error.message}`
		);
	}
	return envVars;
}
