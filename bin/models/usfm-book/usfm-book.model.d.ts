import { UsfmChapter } from '../usfm-chapter';
import { UsfmObject } from '../usfm-object';
export declare class UsfmBook {
    chapters: UsfmChapter[];
    headers: UsfmObject[];
    title: string;
    constructor(o?: Partial<UsfmBook>);
    toMarkdown(): string;
    toHtml(): string;
}
