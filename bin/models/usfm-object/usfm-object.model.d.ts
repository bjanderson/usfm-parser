export declare class UsfmObject {
    content: string;
    endTag: string;
    footnoteNum: number;
    nextChar: string;
    tag: string;
    text: string;
    type: string;
    constructor(o?: Partial<UsfmObject>);
    toMarkdown(): string;
    toHtml(grandParentId: string, parentId?: string): string;
    toFootnoteHtml(parentId: string): string;
}
