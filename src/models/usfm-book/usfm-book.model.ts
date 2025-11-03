import { getArrayOfModels, getObject } from '@bjanderson/utils';
import { UsfmChapter } from '../usfm-chapter';
import { UsfmObject } from '../usfm-object';

export class UsfmBook {
  chapters: UsfmChapter[];
  headers: UsfmObject[];
  title: string;

  constructor(o?: Partial<UsfmBook>) {
    const obj: UsfmBook = getObject(o);
    this.chapters = getArrayOfModels(UsfmChapter, obj.chapters);
    this.headers = getArrayOfModels(UsfmObject, obj.headers);
    this.title = this.headers.find((h) => h.tag === 'toc1')?.content || 'Unknown Title';
  }

  toMarkdown(): string {
    let md = `# ${this.title}\n\n`;
    this.chapters.forEach((chapter) => {
      md += chapter.toMarkdown();
    });
    return md;
  }

  toHtml(): string {
    const id = this.title.toLowerCase().replace(/ /g, '_');
    let md = `<h1 id="${id}"> ${this.title} </h1>\n`;
    this.chapters.forEach((chapter) => {
      md += chapter.toHtml(id);
    });
    return md;
  }
}
