import { promises as fs } from 'fs';

export interface TemplateProvider {
	getTemplateContent(filePath: string): Promise<string>;
}

export class FileTemplateProvider implements TemplateProvider {
	async getTemplateContent(filePath: string): Promise<string> {
		try {
			const content = await fs.readFile(filePath, 'utf8');
			return content;
		} catch (error: any) {
			throw new Error(`Error reading template file: ${error.message}`);
		}
	}
}
