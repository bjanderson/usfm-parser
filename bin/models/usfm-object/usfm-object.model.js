"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsfmObject = void 0;
const utils_1 = require("@bjanderson/utils");
class UsfmObject {
    content;
    endTag;
    footnoteNum;
    nextChar;
    tag;
    text;
    type;
    constructor(o) {
        const obj = (0, utils_1.getObject)(o);
        this.content = (0, utils_1.getString)(obj.content);
        this.endTag = (0, utils_1.getString)(obj.endTag);
        this.footnoteNum = (0, utils_1.getNumber)(obj.footnoteNum);
        this.nextChar = (0, utils_1.getString)(obj.nextChar);
        this.tag = (0, utils_1.getString)(obj.tag);
        this.text = (0, utils_1.getString)(obj.text);
        this.type = (0, utils_1.getString)(obj.type);
    }
    toMarkdown() {
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
    toHtml(grandParentId, parentId) {
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
    toFootnoteHtml(parentId) {
        const id = `${parentId}_footnote_${this.footnoteNum}`;
        const parts = this.content.replace('+ \\fr', '').split('\\ft');
        const verseRef = parts[0].trim();
        const text = parts[1]?.trim() || '';
        return `<div> <a id=${id}>[${this.footnoteNum}]</a> <em>${verseRef}</em>: ${text} </div>\n`;
    }
}
exports.UsfmObject = UsfmObject;
