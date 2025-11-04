import { UsfmObject } from '../usfm-object';
import { UsfmVerse } from './usfm-verse.model';

describe('UsfmVerse', () => {
  describe('constructor defaults', () => {
    const defaults = {
      verse: null,
      verseObjects: [],
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
      const test: any = {
        verse: 'test verse',
        verseObjects: [new UsfmObject({ tag: 't', content: 'test verse' })],
      };

      expect(Object.values(test)).toEqual(Object.values(new UsfmVerse(test)));
    });
  });
});
