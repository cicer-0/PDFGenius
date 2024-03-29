import * as Joi from 'joi';
export const envSchema: Joi.ObjectSchema = Joi.object({
	NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),
	PORT: Joi.number().default(3000).required(),
	EXEC_GS: Joi.string().required(),
}).unknown(true);
