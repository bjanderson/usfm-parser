import { getNumber, getObject, getString } from '@bjanderson/utils';

export class UsfmObject {
  content: string;
  endTag: string;
  footnoteNum: number;
  nextChar: string;
  tag: string;
  text: string;
  type: string;

  constructor(o?: Partial<UsfmObject>) {
    const obj: Partial<UsfmObject> = getObject(o);
    this.content = getString(obj.content);
    this.endTag = getString(obj.endTag);
    this.footnoteNum = getNumber(obj.footnoteNum);
    this.nextChar = getString(obj.nextChar);
    this.tag = getString(obj.tag);
    this.text = getString(obj.text);
    this.type = getString(obj.type);
  }

  toMarkdown(): string {
    switch (this.tag) {
      case 'p':
        return `${this.text}\n\n`;
      case 'q':
        return `> ${this.text}\n\n`;
      case 'mt':
        return `# ${this.text}\n\n`;
      case 'ms':
        return `## ${this.text}\n\n`;
      case 's1':
        return `### ${this.content}`;
      case 'r':
        return `${this.content}`;
      default:
        return this.text;
    }
  }

  toHtml(grandParentId: string, parentId?: string): string {
    switch (this.tag) {
      case 'f':
        const id = `${grandParentId}_footnote_${this.footnoteNum}`;
        return `<span> <a href="#${id}">[${this.footnoteNum}]</a> </span>\n`;
      case 'ms':
        return `<h2> ${this.text} </h2>\n`;
      case 'mt':
        return `<h1> ${this.text} </h1>\n`;
      case 'p':
        return `<p> ${this.text} </p>\n`;
      case 'q':
        return `<blockquote> ${this.text} </blockquote>\n`;
      case 'r':
        return `<span> ${this.content} </span>\n`;
      case 's1':
        return `<h3> ${this.content} </h3>\n`;
      default:
        return this.text;
    }
  }

  toFootnoteHtml(parentId: string): string {
    const id = `${parentId}_footnote_${this.footnoteNum}`;
    const parts = this.content.replace('+ \\fr', '').split('\\ft');
    const verseRef = parts[0].trim();
    const text = parts[1]?.trim() || '';
    return `<div> <a id=${id}>[${this.footnoteNum}]</a> <em>${verseRef}</em>: ${text} </div>\n`;
  }
}
