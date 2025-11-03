import { UsfmVerse } from '../usfm-verse';
export declare class UsfmChapter {
    chapter: string;
    verses: UsfmVerse[];
    constructor(o?: Partial<UsfmChapter>);
    toMarkdown(): string;
    toHtml(parentId: string): string;
}
