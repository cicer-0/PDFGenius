import { exec } from 'child_process';

export class ShellCommandExecutor {
	static async execute(command: string): Promise<string> {
		try {
			const stdout = await ShellCommandExecutor.runCommand(command);
			return stdout;
		} catch (error: any) {
			console.error(`Error executing command: ${error.message}`);
			throw error;
		}
	}

	private static runCommand(command: string): Promise<string> {
		return new Promise((resolve, reject) => {
			exec(command, (error, stdout, stderr) => {
				if (error) {
					reject(error);
					return;
				}
				resolve(stdout || stderr);
			});
		});
	}
}
