import { UsfmBook } from '../usfm-book';
import { UsfmChapter } from '../usfm-chapter';
import { UsfmVerse } from '../usfm-verse';
export declare class UsfmJson {
    chapters: any;
    headers: any[];
    constructor(o?: Partial<UsfmJson>);
    getUsfmBook(): UsfmBook;
    parseChapters(): UsfmChapter[];
    parseVerses(chapter: any): UsfmVerse[];
}
