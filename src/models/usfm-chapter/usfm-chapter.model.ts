import { getArrayOfModels, getObject, getString } from '@bjanderson/utils';
import { UsfmObject } from '../usfm-object';
import { UsfmVerse } from '../usfm-verse';

export class UsfmChapter {
  chapter: string;
  verses: UsfmVerse[];

  constructor(o?: Partial<UsfmChapter>) {
    const obj: Partial<UsfmChapter> = getObject(o);
    this.chapter = getString(obj.chapter, null);
    this.verses = getArrayOfModels(UsfmVerse, obj.verses);
  }

  toMarkdown(): string {
    let md = `## ${this.chapter}\n\n`;
    const front = this.verses.pop();
    md += front.toMarkdown();
    this.verses.forEach((verse) => {
      md += verse.toMarkdown();
    });
    return md;
  }

  toHtml(parentId: string): string {
    const id = `${parentId}_${this.chapter}`;
    let md = `<div style="margin-bottom:2rem;">\n`;
    md += `<h2 id="${id}"> ${this.chapter} </h2>\n`;

    // put front first
    const front = this.verses.pop();
    md += front.toHtml(id);

    const footnotes: UsfmObject[] = [];

    this.verses.forEach((verse) => {
      verse.verseObjects.forEach((vo) => {
        if (vo.tag === 'f') {
          vo.footnoteNum = footnotes.length + 1;
          footnotes.push(vo);
        }
      });

      md += verse.toHtml(id);
    });

    // put footnotes at the end
    if (footnotes.length > 0) {
      md += `<div style="display: flex; flex-direction: column; gap: 0.5rem; border-top:1px solid #ccc; border-bottom:1px solid #ccc; margin:1rem 0; padding:1rem 0;" id="${id}_footnotes">\n`;
      md += `<h3> Footnotes </h3>\n`;
      footnotes.forEach((fn) => {
        md += fn.toFootnoteHtml(id);
      });
      md += `</div>\n`;
    }

    md += `</div>\n`;
    return md;
  }
}
