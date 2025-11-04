import { UsfmChapter } from './usfm-chapter.model';

describe('UsfmChapter', () => {
  describe('constructor defaults', () => {
    const defaults = {
      chapter: null,
      verses: [],
    };

    it('should have the expected fields', () => {
      expect(Object.keys(defaults)).toEqual(Object.keys(new UsfmChapter()));
    });

    it('should set the default values when given no input object', () => {
      expect(Object.values(defaults)).toEqual(Object.values(new UsfmChapter()));
    });
  });

  describe('constructor assignments', () => {
    it('should set all values passed into the constructor', () => {
      const test = {
        chapter: 'test chapter',
        verses: [],
      };

      expect(Object.values(test)).toEqual(Object.values(new UsfmChapter(test)));
    });
  });
});
