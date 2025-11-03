"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsfmBook = void 0;
const utils_1 = require("@bjanderson/utils");
const usfm_chapter_1 = require("../usfm-chapter");
const usfm_object_1 = require("../usfm-object");
class UsfmBook {
    headers;
    chapters;
    constructor(o) {
        const obj = (0, utils_1.getObject)(o);
        this.chapters = (0, utils_1.getArrayOfModels)(usfm_chapter_1.UsfmChapter, obj.chapters);
        this.headers = (0, utils_1.getArrayOfModels)(usfm_object_1.UsfmObject, obj.headers);
    }
    toMarkdown() {
        const title = this.headers.find((h) => h.tag === 'toc1')?.content || 'Unknown Title';
        let md = `# ${title}\n\n`;
        this.chapters.forEach((chapter) => {
            md += chapter.toMarkdown();
        });
        return md;
    }
    toHtml() {
        const book = this.headers.find((h) => h.tag === 'toc1')?.content || 'Unknown Title';
        const id = book.toLowerCase().replace(/ /g, '_');
        let md = `<h1 id="${id}"> ${book} </h1>\n`;
        this.chapters.forEach((chapter) => {
            md += chapter.toHtml(id);
        });
        return md;
    }
}
exports.UsfmBook = UsfmBook;
