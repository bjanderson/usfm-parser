import { getArrayOfModels, getObject } from '@bjanderson/utils';
import { UsfmBook } from '../usfm-book';
import { UsfmChapter } from '../usfm-chapter';
import { UsfmObject } from '../usfm-object';
import { UsfmVerse } from '../usfm-verse';

export class UsfmJson {
  chapters: any;
  headers: any[];

  constructor(o?: Partial<UsfmJson>) {
    const obj: Partial<UsfmJson> = getObject(o);
    this.chapters = obj.chapters;
    this.headers = obj.headers;
  }

  getUsfmBook() {
    const headers = getArrayOfModels(UsfmObject, this.headers);
    const chapters = this.parseChapters();
    return new UsfmBook({ chapters, headers });
  }

  parseChapters(): UsfmChapter[] {
    return Object.keys(this.chapters).map((chapter) => {
      const verses = this.parseVerses(this.chapters[chapter]);
      return new UsfmChapter({ chapter, verses });
    });
  }

  parseVerses(chapter: any): UsfmVerse[] {
    return Object.keys(chapter).map((verse) => {
      const verseObjects = getArrayOfModels(UsfmObject, chapter[verse].verseObjects);
      return new UsfmVerse({ verse, verseObjects });
    });
  }
}
