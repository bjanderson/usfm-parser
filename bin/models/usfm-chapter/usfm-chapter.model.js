"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsfmChapter = void 0;
const utils_1 = require("@bjanderson/utils");
const usfm_verse_1 = require("../usfm-verse");
class UsfmChapter {
    chapter;
    verses;
    constructor(o) {
        const obj = (0, utils_1.getObject)(o);
        this.chapter = (0, utils_1.getString)(obj.chapter, null);
        this.verses = (0, utils_1.getArrayOfModels)(usfm_verse_1.UsfmVerse, obj.verses);
    }
    toMarkdown() {
        let md = `## ${this.chapter}\n\n`;
        const front = this.verses.pop();
        md += front.toMarkdown();
        this.verses.forEach((verse) => {
            md += verse.toMarkdown();
        });
        return md;
    }
    toHtml(parentId) {
        const id = `${parentId}_${this.chapter}`;
        let md = `<div style="margin-bottom:2rem;">\n`;
        md += `<h2 id="${id}"> ${this.chapter} </h2>\n`;
        // put front first
        const front = this.verses.pop();
        md += front.toHtml(id);
        let footnotes = [];
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
exports.UsfmChapter = UsfmChapter;
