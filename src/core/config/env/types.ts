export interface EnvConfig {
	nodeEnv: Environment;
	port: string;
	execGs: string;
}

export const validEnvironments = ['development', 'production', 'test'] as const;
export type Environment = (typeof validEnvironments)[number];
