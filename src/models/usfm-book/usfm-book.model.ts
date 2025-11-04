import { getArrayOfModels, getObject } from '@bjanderson/utils';
import { getDateString } from '../../utils/date';
import { UsfmChapter } from '../usfm-chapter';
import { UsfmObject } from '../usfm-object';

export class UsfmBook {
  chapters: UsfmChapter[];
  headers: UsfmObject[];
  title: string;

  constructor(o?: Partial<UsfmBook>) {
    const obj: Partial<UsfmBook> = getObject(o);
    this.chapters = getArrayOfModels(UsfmChapter, obj.chapters);
    this.headers = getArrayOfModels(UsfmObject, obj.headers);
    this.title = this.headers.find((h) => h.tag === 'toc1')?.content || 'Unknown Title';
  }

  toMarkdown(): string {
    let md = `---
title: ${this.title}
date: ${getDateString()}
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

  toHtml(): string {
    const id = this.title.toLowerCase().replace(/ /g, '_');

    let html = `---
title: ${this.title}
date: ${getDateString()}
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
