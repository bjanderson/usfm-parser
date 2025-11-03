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
 * @description - create a USFM object from marker
 * @param {object} marker - object that contains usfm marker
 * @param {boolean} noNext - if true, then ignore nextChar
 * @return {{tag: *}} USFM object
 */
export declare const createUsfmObject: (marker: any, noNext?: boolean) => any;
/**
 * @description push usfm object to array, and concat strings of last array item is also string
 * @param {object} state - holds parsing state information
 * @param {array} saveTo - location to place verse content
 * @param {object|string} usfmObject - object that contains usfm marker, or could be raw text
 */
export declare const pushObject: (state: any, saveTo: any, usfmObject: any) => void;
/**
 * find the Alignment Format level in content
 * @param {String} usfm - the raw usfm string
 * @param {object} state - holds parsing state information
 */
export declare const getAlignmentFormat: (usfm: any, state: any) => void;
/**
 * @description - Parses the usfm string and returns an object
 * @param {String} usfm - the raw usfm string
 * @param {Object} params - extra params to use for chunk parsing. Properties:
 *                    chunk {boolean} - if true then output is just a small piece of book
 *                    content-source {String} - content source attribute to add to word imports
 *                    convertToInt {Array} - attributes to convert to integer
 * @return {Object} - json object that holds the parsed usfm data, headers and chapters
 */
export declare const usfmToJSON: (usfm: any, params?: {}) => any;
