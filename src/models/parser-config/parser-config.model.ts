import { getObject, getString } from '@bjanderson/utils';

export class ParserConfig {
  inputDirectory: string;
  outputDirectory: string;

  constructor(o?: Partial<ParserConfig>) {
    const obj: Partial<ParserConfig> = getObject(o);
    this.inputDirectory = getString(obj.inputDirectory, 'bsb_usfm');
    this.outputDirectory = getString(obj.outputDirectory, 'bsb_html');
  }
}
