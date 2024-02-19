import { load as loadEnv } from './env/load';
import { EnvConfig, Environment } from './env/types';

loadEnv();

export const config: EnvConfig = {
	nodeEnv: process.env.NODE_ENV as Environment,
	port: process.env.PORT as string,
	execGs: process.env.EXEC_GS as string,
};
