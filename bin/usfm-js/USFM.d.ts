/**
I am including a copy of this license here because the usfm-js project package.json
says that it uses the ISC license, but no copy of that license was included with
the source code when I copied it.

I copied this code from https://github.com/unfoldingWord/usfm-js on 11/1/2025, and
have modified it since then.

ISC License

Copyright <YEAR> <OWNER>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
*/
/**
 * USFM definitions
 */
export declare const MARKERS_WITH_NUMBERS: {
    c: boolean;
    v: boolean;
};
export declare const SPECIAL_END_TAGS: {
    esbe: string;
    'qt-e': string;
    'qt1-e': string;
    'qt2-e': string;
    'qt3-e': string;
    'qt4-e': string;
    'qt5-e': string;
};
export declare const USFM_PROPERTIES: {
    '+add': {
        endTag: string;
        display: boolean;
    };
    '+bd': {
        endTag: string;
        display: boolean;
    };
    '+bdit': {
        endTag: string;
        display: boolean;
    };
    '+bk': {
        endTag: string;
        display: boolean;
    };
    '+dc': {
        endTag: string;
        display: boolean;
    };
    '+em': {
        endTag: string;
        display: boolean;
    };
    '+it': {
        endTag: string;
        display: boolean;
    };
    '+k': {
        endTag: string;
        display: boolean;
    };
    '+lit': {
        display: boolean;
    };
    '+nd': {
        endTag: string;
        display: boolean;
    };
    '+no': {
        endTag: string;
        display: boolean;
    };
    '+ord': {
        endTag: string;
        display: boolean;
    };
    '+pn': {
        endTag: string;
        display: boolean;
    };
    '+png': {
        endTag: string;
        display: boolean;
    };
    '+qt': {
        type: string;
        endTag: string;
        display: boolean;
    };
    '+sc': {
        endTag: string;
        display: boolean;
    };
    '+sig': {
        endTag: string;
        display: boolean;
    };
    '+sls': {
        endTag: string;
        display: boolean;
    };
    '+sup': {
        endTag: string;
        display: boolean;
    };
    '+tl': {
        endTag: string;
        display: boolean;
    };
    '+wj': {
        endTag: string;
        display: boolean;
    };
    add: {
        endTag: string;
        display: boolean;
    };
    b: {
        type: string;
        display: boolean;
    };
    bd: {
        endTag: string;
        display: boolean;
    };
    bdit: {
        endTag: string;
        display: boolean;
    };
    bk: {
        endTag: string;
        display: boolean;
    };
    ca: {
        endTag: string;
    };
    cat: {
        endTag: string;
    };
    cls: {
        type: string;
        display: boolean;
    };
    d: {
        display: boolean;
    };
    dc: {
        endTag: string;
        display: boolean;
    };
    ef: {
        endTag: string;
    };
    em: {
        endTag: string;
        display: boolean;
    };
    esb: {
        endTag: string;
    };
    ex: {
        endTag: string;
    };
    f: {
        type: string;
        endTag: string;
    };
    fa: {
        endTag: string;
    };
    fdc: {
        endTag: string;
    };
    fe: {
        endTag: string;
    };
    fig: {
        endTag: string;
        attrib: boolean;
    };
    fm: {
        endTag: string;
    };
    fqa: {
        endTag: string;
    };
    fv: {
        endTag: string;
    };
    ior: {
        endTag: string;
    };
    iqt: {
        endTag: string;
    };
    it: {
        endTag: string;
        display: boolean;
    };
    jmp: {
        endTag: string;
        attrib: boolean;
        display: boolean;
    };
    k: {
        endTag: string[];
        type: string;
        display: boolean;
        attrib: boolean;
    };
    lf: {
        display: boolean;
    };
    lh: {
        display: boolean;
    };
    li: {
        endTag: string;
        display: boolean;
    };
    lik: {
        endTag: string;
        display: boolean;
    };
    lim: {
        display: boolean;
    };
    lim1: {
        display: boolean;
    };
    lim2: {
        display: boolean;
    };
    lim3: {
        display: boolean;
    };
    lim4: {
        display: boolean;
    };
    lim5: {
        display: boolean;
    };
    lit: {
        display: boolean;
    };
    litl: {
        endTag: string;
        display: boolean;
    };
    liv: {
        endTag: string;
        display: boolean;
    };
    liv1: {
        endTag: string;
        display: boolean;
    };
    liv2: {
        endTag: string;
        display: boolean;
    };
    liv3: {
        endTag: string;
        display: boolean;
    };
    liv4: {
        endTag: string;
        display: boolean;
    };
    liv5: {
        endTag: string;
        display: boolean;
    };
    m: {
        type: string;
        display: boolean;
    };
    mi: {
        type: string;
        display: boolean;
    };
    nb: {
        type: string;
        display: boolean;
    };
    nd: {
        endTag: string;
        display: boolean;
    };
    ndx: {
        endTag: string;
    };
    no: {
        endTag: string;
        display: boolean;
    };
    ord: {
        endTag: string;
        display: boolean;
    };
    p: {
        type: string;
        display: boolean;
    };
    pb: {
        type: string;
        display: boolean;
    };
    pc: {
        type: string;
        display: boolean;
    };
    ph: {
        type: string;
        display: boolean;
    };
    ph1: {
        type: string;
        display: boolean;
    };
    ph2: {
        type: string;
        display: boolean;
    };
    ph3: {
        type: string;
        display: boolean;
    };
    ph4: {
        type: string;
        display: boolean;
    };
    ph5: {
        type: string;
        display: boolean;
    };
    pi: {
        type: string;
        display: boolean;
    };
    pi1: {
        type: string;
        display: boolean;
    };
    pi2: {
        type: string;
        display: boolean;
    };
    pi3: {
        type: string;
        display: boolean;
    };
    pi4: {
        type: string;
        display: boolean;
    };
    pi5: {
        type: string;
        display: boolean;
    };
    pm: {
        type: string;
        display: boolean;
    };
    pmc: {
        type: string;
        display: boolean;
    };
    pmo: {
        type: string;
        display: boolean;
    };
    pmr: {
        type: string;
        display: boolean;
    };
    pn: {
        endTag: string;
        display: boolean;
    };
    png: {
        endTag: string;
        display: boolean;
    };
    po: {
        type: string;
        display: boolean;
    };
    pr: {
        type: string;
        display: boolean;
    };
    pro: {
        endTag: string;
    };
    q: {
        type: string;
        display: boolean;
    };
    q1: {
        type: string;
        display: boolean;
    };
    q2: {
        type: string;
        display: boolean;
    };
    q3: {
        type: string;
        display: boolean;
    };
    q4: {
        type: string;
        display: boolean;
    };
    qa: {
        type: string;
        display: boolean;
    };
    qac: {
        type: string;
        endTag: string;
        display: boolean;
    };
    qc: {
        type: string;
        display: boolean;
    };
    qm: {
        type: string;
        display: boolean;
    };
    qr: {
        type: string;
        display: boolean;
    };
    qs: {
        type: string;
        endTag: string;
        display: boolean;
    };
    qt: {
        type: string;
        endTag: string;
        display: boolean;
        milestone: boolean;
        attrib: boolean;
    };
    qt1: {
        type: string;
        endTag: string;
        display: boolean;
        milestone: boolean;
        attrib: boolean;
    };
    qt2: {
        type: string;
        endTag: string;
        display: boolean;
        milestone: boolean;
        attrib: boolean;
    };
    qt3: {
        type: string;
        endTag: string;
        display: boolean;
        milestone: boolean;
        attrib: boolean;
    };
    qt4: {
        type: string;
        endTag: string;
        display: boolean;
        milestone: boolean;
        attrib: boolean;
    };
    qt5: {
        type: string;
        endTag: string;
        display: boolean;
        milestone: boolean;
        attrib: boolean;
    };
    'qt-e': {
        endAttrib: boolean;
    };
    'qt1-e': {
        endAttrib: boolean;
    };
    'qt2-e': {
        endAttrib: boolean;
    };
    'qt3-e': {
        endAttrib: boolean;
    };
    'qt4-e': {
        endAttrib: boolean;
    };
    'qt5-e': {
        endAttrib: boolean;
    };
    'qt-s': {
        type: string;
        endTag: string;
        display: boolean;
        milestone: boolean;
        usfm3Milestone: boolean;
        attrib: boolean;
    };
    'qt1-s': {
        type: string;
        endTag: string;
        display: boolean;
        milestone: boolean;
        usfm3Milestone: boolean;
        attrib: boolean;
    };
    'qt2-s': {
        type: string;
        endTag: string;
        display: boolean;
        milestone: boolean;
        usfm3Milestone: boolean;
        attrib: boolean;
    };
    'qt3-s': {
        type: string;
        endTag: string;
        display: boolean;
        milestone: boolean;
        usfm3Milestone: boolean;
        attrib: boolean;
    };
    'qt4-s': {
        type: string;
        endTag: string;
        display: boolean;
        milestone: boolean;
        usfm3Milestone: boolean;
        attrib: boolean;
    };
    'qt5-s': {
        type: string;
        endTag: string;
        display: boolean;
        milestone: boolean;
        usfm3Milestone: boolean;
        attrib: boolean;
    };
    rb: {
        endTag: string;
        display: boolean;
        attrib: boolean;
    };
    rq: {
        endTag: string;
    };
    rt: {
        endTag: string;
    };
    s: {
        type: string;
    };
    s1: {
        type: string;
    };
    s2: {
        type: string;
    };
    s3: {
        type: string;
    };
    s4: {
        type: string;
    };
    s5: {
        type: string;
    };
    sc: {
        endTag: string;
        display: boolean;
    };
    sig: {
        endTag: string;
        display: boolean;
    };
    sis: {
        endTag: string;
    };
    sls: {
        endTag: string;
        display: boolean;
    };
    sp: {
        display: boolean;
    };
    sup: {
        endTag: string;
        display: boolean;
    };
    tl: {
        endTag: string;
        display: boolean;
    };
    ts: {
        milestone: boolean;
        display: boolean;
        standalone: boolean;
    };
    'ts-e': {
        milestone: boolean;
        display: boolean;
        endAttrib: boolean;
        standalone: boolean;
    };
    'ts-s': {
        milestone: boolean;
        display: boolean;
        endAttrib: boolean;
        standalone: boolean;
    };
    v: {
        display: boolean;
    };
    va: {
        endTag: string;
    };
    vp: {
        endTag: string;
    };
    w: {
        endTag: string;
        display: boolean;
        attrib: boolean;
    };
    wa: {
        endTag: string;
        display: boolean;
    };
    wg: {
        endTag: string;
        display: boolean;
    };
    wh: {
        endTag: string;
        display: boolean;
    };
    wj: {
        endTag: string;
        display: boolean;
    };
    x: {
        endTag: string;
    };
    xdc: {
        endTag: string;
    };
    xnt: {
        endTag: string;
    };
    xop: {
        endTag: string;
    };
    xot: {
        endTag: string;
    };
    xt: {
        endTag: string;
        attrib: boolean;
    };
    zaln: {
        endTag: string;
        type: string;
        display: boolean;
        attrib: boolean;
    };
};
export declare const propType: (tagProps: any) => any;
export declare const markerType: (tag: any) => any;
export declare const propTermination: (tagProps: any) => any;
export declare const markerTermination: (tag: any) => any;
export declare const propAttributes: (tagProps: any) => any;
export declare const markerHasEndAttributes: (tag: any) => any;
export declare const propStandalone: (tagProps: any) => any;
export declare const markerStandalone: (tag: any) => any;
export declare const propDisplayable: (tagProps: any) => any;
export declare const markerDisplayable: (tag: any) => any;
export declare const markerContentDisplayable: (tag: any) => any;
export declare const markerSupportsNumbers: (tag: any) => any;
export declare const markerIsMilestone: (tag: any) => any;
export declare const markerHasSpecialEndTag: (tag: any) => any;
export declare const propUsfm3Milestone: (tagProps: any) => any;
export declare const wordSpecialAttributes: string[];
