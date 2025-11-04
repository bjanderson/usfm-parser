import { getArrayOfModels, getObject, getString } from '@bjanderson/utils';
import { UsfmObject } from '../usfm-object';

export class UsfmVerse {
  verse: string;
  verseObjects: UsfmObject[];

  constructor(o?: Partial<UsfmVerse>) {
    const obj: Partial<UsfmVerse> = getObject(o);
    this.verse = getString(obj.verse, null);
    this.verseObjects = getArrayOfModels(UsfmObject, obj.verseObjects);
  }

  toMarkdown(): string {
    let md = this.verse === 'front' ? '' : `###### ${this.verse} \n`;
    this.verseObjects.forEach((verseObject) => {
      md += verseObject.toMarkdown();
    });
    md += `\n\n`;
    return md;
  }

  toHtml(parentId: string): string {
    const id = `${parentId}_${this.verse}`;

    if (this.verse === 'front') {
      let html = `<div style="padding:0.5rem;" id="${id}">\n`;
      this.verseObjects.forEach((verseObject) => {
        html += verseObject.toHtml(parentId, id);
      });
      html += `</div>\n\n`;
      return html;
    }

    // section headings are included as part of the verse, but we want them in a separate div after the verse
    const i = this.verseObjects.findIndex((vo) => vo.tag === 's1');
    let section = null;
    if (i > -1) {
      section = this.verseObjects.splice(i, 1)[0];
    }

    let html = `<div style="display:flex; padding:0.5rem; gap:0.5rem; align-items:flex-start; ">\n`;
    html += `<a id="${id}"> ${this.verse} </a> \n`;
    html += `<div>`;
    this.verseObjects.forEach((verseObject) => {
      html += verseObject.toHtml(parentId, id);
    });
    html += `</div>`;
    html += `</div>\n\n`;

    // put the section heading after the verse
    if (section != null) {
      html += `<div style="padding:0.5rem;" id="${id}_section">\n`;
      html += section.toHtml();
      html += `</div>\n\n`;
    }

    return html;
  }
}
