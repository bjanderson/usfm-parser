import { UsfmObject } from '../usfm-object';
import { Chapter } from './chapter.model';

describe('Chapter', () => {
  describe('constructor defaults', () => {
    const defaults = {
      usfm: new UsfmObject(),
    };

    it('should have the expected fields', () => {
      expect(Object.keys(defaults)).toEqual(Object.keys(new Chapter()));
    });

    it('should set the default values when given no input object', () => {
      expect(Object.values(defaults)).toEqual(Object.values(new Chapter()));
    });
  });

  describe('constructor assignments', () => {
    it('should set all values passed into the constructor', () => {
      const test = {
        usfm: new UsfmObject(),
      };

      expect(Object.values(test)).toEqual(Object.values(new Chapter(test)));
    });
  });
});
