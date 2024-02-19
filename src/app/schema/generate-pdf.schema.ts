import Joi from 'joi';

// Definir una interfaz para la estructura esperada de la solicitud POST
interface RequestBody {
	template: string; // HTML como cadena de texto
	data: Record<string, unknown>; // JSON como objeto
}

// Esquema de validación para la solicitud POST
export const htmlToPdfSchema = Joi.object<RequestBody>({
	template: Joi.string().required(),
	data: Joi.object().required(),
});
