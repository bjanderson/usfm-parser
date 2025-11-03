import { DEFAULT_STRING } from '@bjanderson/utils';
import { UsfmVerse } from './usfm-verse.model';

describe('UsfmVerse', () => {
  describe('constructor defaults', () => {
    const defaults = {
      id: DEFAULT_STRING,
    };

    it('should have the expected fields', () => {
      expect(Object.keys(defaults)).toEqual(Object.keys(new UsfmVerse()));
    });

    it('should set the default values when given no input object', () => {
      expect(Object.values(defaults)).toEqual(Object.values(new UsfmVerse()));
    });
  });

  describe('constructor assignments', () => {
    it('should set all values passed into the constructor', () => {
      const test = {
        id: 'test id',
      };

      expect(Object.values(test)).toEqual(Object.values(new UsfmVerse(test)));
    });
  });
});
