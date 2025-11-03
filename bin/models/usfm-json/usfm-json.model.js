"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsfmJson = void 0;
const utils_1 = require("@bjanderson/utils");
const usfm_book_1 = require("../usfm-book");
const usfm_chapter_1 = require("../usfm-chapter");
const usfm_object_1 = require("../usfm-object");
const usfm_verse_1 = require("../usfm-verse");
class UsfmJson {
    chapters;
    headers;
    constructor(o) {
        const obj = (0, utils_1.getObject)(o);
        this.chapters = obj.chapters;
        this.headers = obj.headers;
    }
    getUsfmBook() {
        const headers = (0, utils_1.getArrayOfModels)(usfm_object_1.UsfmObject, this.headers);
        const chapters = this.parseChapters();
        return new usfm_book_1.UsfmBook({ chapters, headers });
    }
    parseChapters() {
        return Object.keys(this.chapters).map((chapter) => {
            const verses = this.parseVerses(this.chapters[chapter]);
            return new usfm_chapter_1.UsfmChapter({ chapter, verses });
        });
    }
    parseVerses(chapter) {
        return Object.keys(chapter).map((verse) => {
            const verseObjects = (0, utils_1.getArrayOfModels)(usfm_object_1.UsfmObject, chapter[verse].verseObjects);
            return new usfm_verse_1.UsfmVerse({ verse, verseObjects });
        });
    }
}
exports.UsfmJson = UsfmJson;
