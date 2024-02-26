import dotenv from 'dotenv';
import path from 'path';
import { validator } from './validator';

const ENV_FILE_BASE_PATH = '../../../.env';

export function load() {
	dotenv.config({
		path: path.resolve(__dirname, `${ENV_FILE_BASE_PATH}`),
	});
	validator();
}
