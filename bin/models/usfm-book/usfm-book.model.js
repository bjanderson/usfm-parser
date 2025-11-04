"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsfmBook = void 0;
const utils_1 = require("@bjanderson/utils");
const date_1 = require("../../utils/date");
const usfm_chapter_1 = require("../usfm-chapter");
const usfm_object_1 = require("../usfm-object");
class UsfmBook {
    chapters;
    headers;
    title;
    constructor(o) {
        const obj = (0, utils_1.getObject)(o);
        this.chapters = (0, utils_1.getArrayOfModels)(usfm_chapter_1.UsfmChapter, obj.chapters);
        this.headers = (0, utils_1.getArrayOfModels)(usfm_object_1.UsfmObject, obj.headers);
        this.title = this.headers.find((h) => h.tag === 'toc1')?.content || 'Unknown Title';
    }
    toMarkdown() {
        let md = `---
title: ${this.title}
date: ${(0, date_1.getDateString)()}
description:
draft: false
tags:
aliases:
cssclasses:
  - berean-standard-bible
---

# ${this.title}\n
`;
        this.chapters.forEach((chapter) => {
            md += chapter.toMarkdown();
        });
        return md;
    }
    toHtml() {
        const id = this.title.toLowerCase().replace(/ /g, '_');
        let html = `---
title: ${this.title}
date: ${(0, date_1.getDateString)()}
description:
draft: false
tags:
aliases:
cssclasses:
  - berean-standard-bible
---

<h1 id="${id}"> ${this.title} </h1>\n
`;
        this.chapters.forEach((chapter) => {
            html += chapter.toHtml(id);
        });
        return html;
    }
}
exports.UsfmBook = UsfmBook;
