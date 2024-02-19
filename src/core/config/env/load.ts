import dotenv from 'dotenv';
import path from 'path';
import { Environment, validEnvironments } from './types';
import { validator } from './validator';

const ENV_FILE_BASE_PATH = '../../../.env.';

function validateNodeEnv(nodeEnv: string | undefined) {
	if (!validEnvironments.includes(nodeEnv as Environment)) {
		throw new Error(
			`Error: Invalid NODE_ENV value. NODE_ENV must be one of ${validEnvironments.join(
				', '
			)}.`
		);
	}
}

export function load() {
	const nodeEnv = process.env.NODE_ENV;
	validateNodeEnv(nodeEnv);
	dotenv.config({
		path: path.resolve(__dirname, `${ENV_FILE_BASE_PATH}${nodeEnv}`),
	});
	validator();
}
