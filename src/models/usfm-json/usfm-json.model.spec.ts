import { UsfmJson } from './usfm-json.model';

describe('UsfmJson', () => {
  describe('constructor defaults', () => {
    const defaults = {
      chapters: undefined,
      headers: [],
    };

    it('should have the expected fields', () => {
      expect(Object.keys(defaults)).toEqual(Object.keys(new UsfmJson()));
    });

    it('should set the default values when given no input object', () => {
      expect(Object.values(defaults)).toEqual(Object.values(new UsfmJson()));
    });
  });

  describe('constructor assignments', () => {
    it('should set all values passed into the constructor', () => {
      const test = {
        chapters: {},
        headers: [],
      };

      expect(Object.values(test)).toEqual(Object.values(new UsfmJson(test)));
    });
  });
});
