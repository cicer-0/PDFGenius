import { config } from '../config';

export class CommandBuilder {
	static buildPDFCompressionCommand(
		outputFile: string,
		inputFile: string
	): string {
		return `${config.execGs} -sDEVICE=pdfwrite -dCompatibilitylevel=1.4 -dPDFSETTINGF=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile=${outputFile} ${inputFile}`;
	}
}
