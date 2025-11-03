import { UsfmChapter } from '../usfm-chapter';
import { UsfmObject } from '../usfm-object';
export declare class UsfmBook {
    headers: UsfmObject[];
    chapters: UsfmChapter[];
    constructor(o?: Partial<UsfmBook>);
    toMarkdown(): string;
    toHtml(): string;
}
