import { UsfmObject } from '../usfm-object';
export declare class UsfmVerse {
    verse: string;
    verseObjects: UsfmObject[];
    constructor(o?: Partial<UsfmVerse>);
    toMarkdown(): string;
    toHtml(parentId: string): string;
}
