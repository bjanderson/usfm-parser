"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsfmVerse = void 0;
const utils_1 = require("@bjanderson/utils");
const usfm_object_1 = require("../usfm-object");
class UsfmVerse {
    verse;
    verseObjects;
    constructor(o) {
        const obj = (0, utils_1.getObject)(o);
        this.verse = (0, utils_1.getString)(obj.verse, null);
        this.verseObjects = (0, utils_1.getArrayOfModels)(usfm_object_1.UsfmObject, obj.verseObjects);
    }
    toMarkdown() {
        let md = this.verse === 'front' ? '' : `###### ${this.verse} \n`;
        this.verseObjects.forEach((verseObject) => {
            md += verseObject.toMarkdown();
        });
        md += `\n\n`;
        return md;
    }
    toHtml(parentId) {
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
exports.UsfmVerse = UsfmVerse;
