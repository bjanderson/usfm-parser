import { ParserConfig } from './parser-config.model';

describe('ParserConfig', () => {
  describe('constructor defaults', () => {
    const defaults = {
      inputDirectory: 'bsb_usfm',
      outputDirectory: 'bsb_html',
    };

    it('should have the expected fields', () => {
      expect(Object.keys(defaults)).toEqual(Object.keys(new ParserConfig()));
    });

    it('should set the default values when given no input object', () => {
      expect(Object.values(defaults)).toEqual(Object.values(new ParserConfig()));
    });
  });

  describe('constructor assignments', () => {
    it('should set all values passed into the constructor', () => {
      const test = {
        inputDirectory: 'test_inputDirectory',
        outputDirectory: 'test_outputDirectory',
      };

      expect(Object.values(test)).toEqual(Object.values(new ParserConfig(test)));
    });
  });
});
