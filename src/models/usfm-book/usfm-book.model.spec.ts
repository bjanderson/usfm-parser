import { UsfmChapter } from '../usfm-chapter';
import { UsfmObject } from '../usfm-object';
import { UsfmBook } from './usfm-book.model';

describe('UsfmBook', () => {
  describe('constructor defaults', () => {
    const defaults = {
      chapters: [],
      headers: [],
      title: 'Unknown Title',
    };

    it('should have the expected fields', () => {
      expect(Object.keys(defaults)).toEqual(Object.keys(new UsfmBook()));
    });

    it('should set the default values when given no input object', () => {
      expect(Object.values(defaults)).toEqual(Object.values(new UsfmBook()));
    });
  });

  describe('constructor assignments', () => {
    it('should set all values passed into the constructor', () => {
      const test: any = {
        chapters: [new UsfmChapter()],
        headers: [new UsfmObject({ tag: 'toc1', content: 'Test Title' })],
        title: 'Test Title',
      };

      expect(Object.values(test)).toEqual(Object.values(new UsfmBook(test)));
    });
  });
});
