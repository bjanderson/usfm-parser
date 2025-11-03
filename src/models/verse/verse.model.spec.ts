import { UsfmObject } from '../usfm-object';
import { Verse } from './verse.model';

describe('Verse', () => {
  describe('constructor defaults', () => {
    const defaults = {
      usfm: new UsfmObject(),
    };

    it('should have the expected fields', () => {
      expect(Object.keys(defaults)).toEqual(Object.keys(new Verse()));
    });

    it('should set the default values when given no input object', () => {
      expect(Object.values(defaults)).toEqual(Object.values(new Verse()));
    });
  });

  describe('constructor assignments', () => {
    it('should set all values passed into the constructor', () => {
      const test = {
        usfm: new UsfmObject(),
      };

      expect(Object.values(test)).toEqual(Object.values(new Verse(test)));
    });
  });
});
