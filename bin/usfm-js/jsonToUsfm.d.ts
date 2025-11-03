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
 * @description Takes in scripture json and outputs it as a USFM string.
 * @param {Object} json - Scripture in JSON
 * @param {Object} params - optional parameters like attributes to ignore.  Properties:
 *                    chunk {boolean} - if true then output is just a small piece of book
 *                    ignore (Array} - list of attributes to ignore on word objects
 *                    map {Object} - dictionary of attribute names to map to new name on word objects
 *                    mileStoneIgnore (Array} - list of attributes to ignore on milestone objects
 *                    mileStoneMap {Object} - dictionary of attribute names to map to new name on milestone objects
 *                    forcedNewLines (boolean} - if true then we add newlines before alignment tags, verses, words
 * @return {String} - Scripture in USFM
 */
export declare const jsonToUSFM: (json: any, params?: any) => string;
