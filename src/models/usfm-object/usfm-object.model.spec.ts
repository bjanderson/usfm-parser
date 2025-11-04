import { DEFAULT_NUMBER, DEFAULT_STRING } from '@bjanderson/utils';
import { UsfmObject } from './usfm-object.model';

describe('UsfmObject', () => {
  describe('constructor defaults', () => {
    const defaults = {
      content: DEFAULT_STRING,
      endTag: DEFAULT_STRING,
      footnoteNum: DEFAULT_NUMBER,
      nextChar: DEFAULT_STRING,
      tag: DEFAULT_STRING,
      text: DEFAULT_STRING,
      type: DEFAULT_STRING,
    };

    it('should have the expected fields', () => {
      expect(Object.keys(defaults)).toEqual(Object.keys(new UsfmObject()));
    });

    it('should set the default values when given no input object', () => {
      expect(Object.values(defaults)).toEqual(Object.values(new UsfmObject()));
    });
  });

  describe('constructor assignments', () => {
    it('should set all values passed into the constructor', () => {
      const test = {
        content: 'test content',
        endTag: 'test endTag',
        footnoteNum: 1,
        nextChar: 'test nextChar',
        tag: 'test tag',
        text: 'test text',
        type: 'test type',
      };

      expect(Object.values(test)).toEqual(Object.values(new UsfmObject(test)));
    });
  });
});
