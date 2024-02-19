import handlebars from 'handlebars';
import { TemplateProvider } from '../providers/template-provider';

export class TemplateProcessor {
	static async fetchTemplate(
		filePath: string,
		templateProvider: TemplateProvider
	): Promise<string> {
		const content = await templateProvider.getTemplateContent(filePath);
		return content;
	}

	static compileTemplate(content: string, data: any): string {
		try {
			const compiledTemplate = handlebars.compile(content);
			return compiledTemplate(data);
		} catch (err) {
			console.error(err);
			throw new Error('Error compiling template');
		}
	}

	static async processTemplate(
		filePath: string,
		data: any,
		templateProvider: TemplateProvider
	): Promise<string> {
		const template = await TemplateProcessor.fetchTemplate(
			filePath,
			templateProvider
		);
		const compiledTemplate = TemplateProcessor.compileTemplate(template, data);
		return compiledTemplate;
	}
}
