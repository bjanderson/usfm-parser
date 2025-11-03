import { UsfmObject } from '../usfm-object';
import { Book } from './book.model';

describe('Book', () => {
  describe('constructor defaults', () => {
    const defaults = {
      usfm: new UsfmObject(),
    };

    it('should have the expected fields', () => {
      expect(Object.keys(defaults)).toEqual(Object.keys(new Book()));
    });

    it('should set the default values when given no input object', () => {
      expect(Object.values(defaults)).toEqual(Object.values(new Book()));
    });
  });

  describe('constructor assignments', () => {
    it('should set all values passed into the constructor', () => {
      const test = {
        usfm: new UsfmObject(),
      };

      expect(Object.values(test)).toEqual(Object.values(new Book(test)));
    });
  });
});
