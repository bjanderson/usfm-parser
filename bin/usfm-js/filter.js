"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeVerseData = exports.convertStringToVerseObjects = exports.removeMarker = void 0;
/* eslint-disable no-use-before-define,brace-style */
const usfmToJson_1 = require("./usfmToJson");
/* Method to filter specified usfm marker from a string
 * @param {string} string - The string to remove specfic marker from
 * @return {string}
 */
const removeMarker = (string = '') => {
    let output = string; // default results
    if (string) {
        const verseObjects = (0, exports.convertStringToVerseObjects)(string);
        if (verseObjects) {
            output = (0, exports.mergeVerseData)(verseObjects); // get displayed text from verseObjects
        }
    }
    return output;
};
exports.removeMarker = removeMarker;
/**
 * takes the text of a verse and converts to verseObjects
 * @param {String} text - verse text to convert
 * @return {Object|*} verseObjects for verseText
 */
const convertStringToVerseObjects = (text) => {
    // first parse to verse objects
    const jsonData = (0, usfmToJson_1.usfmToJSON)('\\v 1 ' + text, { chunk: true });
    const verseObjects = jsonData && jsonData.verses && jsonData.verses['1'] && jsonData.verses['1'].verseObjects;
    return verseObjects;
};
exports.convertStringToVerseObjects = convertStringToVerseObjects;
/**
 * parse a single child
 * @param {Object} child
 * @param {String} text
 * @param {String} wordSpacing
 * @return {{wordSpacing: string, text: string}}
 */
const parseChild = (child, text, wordSpacing) => {
    switch (child.type) {
        case 'word':
            text += wordSpacing + child.text;
            wordSpacing = ' ';
            break;
        case 'milestone':
            text += wordSpacing + parseMilestone(child);
            wordSpacing = ' ';
            break;
        default:
            if (child.text) {
                text += child.text;
                const lastChar = text.substr(-1);
                if (lastChar !== ',' && lastChar !== '.' && lastChar !== '?' && lastChar !== ';') {
                    // legacy support, make sure padding before word
                    wordSpacing = '';
                }
            }
            if (child.children) {
                const length = child.children.length;
                for (let i = 0; i < length; i++) {
                    const childChild = child.children[i];
                    const __ret = parseChild(childChild, text, wordSpacing);
                    text = __ret.text;
                    wordSpacing = __ret.wordSpacing;
                }
            }
            break;
    }
    return { text, wordSpacing };
};
/**
 * dive down into milestone to extract words and text
 * @param {Object} verseObject - milestone to parse
 * @return {string} text content of milestone
 */
const parseMilestone = (verseObject) => {
    let text = verseObject.text || '';
    let wordSpacing = '';
    const length = verseObject.children.length;
    for (let i = 0; i < length; i++) {
        const child = verseObject.children[i];
        const __ret = parseChild(child, text, wordSpacing);
        text = __ret.text;
        wordSpacing = __ret.wordSpacing;
        if (child.nextChar) {
            text += child.nextChar;
        }
    }
    if (verseObject.nextChar) {
        text += verseObject.nextChar;
    }
    return text;
};
/**
 * get text from word and milestone markers
 * @param {Object} verseObject - to parse
 * @param {String} wordSpacing - spacing to use before next word
 * @return {*} new verseObject and word spacing
 */
const replaceWordsAndMilestones = (verseObject, wordSpacing) => {
    let text = '';
    if (verseObject.type === 'word') {
        text = wordSpacing + verseObject.text;
    }
    else if (verseObject.children) {
        text = wordSpacing + parseMilestone(verseObject);
    }
    if (text) {
        // replace with text object
        verseObject = {
            type: 'text',
            text,
        };
        wordSpacing = ' ';
    }
    else {
        wordSpacing = ' ';
        if (verseObject.nextChar) {
            wordSpacing = ''; // no need for spacing before next word if this item has it
        }
        else if (verseObject.text) {
            const lastChar = verseObject.text.substr(-1);
            if (![',', '.', '?', ';'].includes(lastChar)) {
                // legacy support, make sure padding before next word if punctuation
                wordSpacing = '';
            }
        }
        if (verseObject.children) {
            // handle nested
            const verseObject_ = structuredClone(verseObject);
            let wordSpacing_ = '';
            const length = verseObject.children.length;
            for (let i = 0; i < length; i++) {
                const flattened = replaceWordsAndMilestones(verseObject.children[i], wordSpacing_);
                wordSpacing_ = flattened.wordSpacing;
                verseObject_.children[i] = flattened.verseObject;
            }
            verseObject = verseObject_;
        }
    }
    return { verseObject, wordSpacing };
};
/**
 * @description merge verse data into a string
 * @param {Object|Array} verseData - verse objects to be merged
 * @param {array} filter - Optional filter to get a specific type of word object type.
 * @return {String} - the merged verse object string
 */
const mergeVerseData = (verseData) => {
    if (verseData.verseObjects) {
        verseData = verseData.verseObjects;
    }
    const flattenedData = [];
    if (Array.isArray(verseData)) {
        let wordSpacing = '';
        const length = verseData.length;
        for (let i = 0; i < length; i++) {
            const verseObject = verseData[i];
            const flattened = replaceWordsAndMilestones(verseObject, wordSpacing);
            wordSpacing = flattened.wordSpacing;
            flattenedData.push(flattened.verseObject);
        }
        verseData = {
            // use flattened data
            verseObjects: flattenedData,
        };
    }
    let verseText = '';
    const length = flattenedData.length;
    for (let i = 0; i < length; i++) {
        const verseObj = flattenedData[i];
        if (verseObj.text) {
            if (verseObj.tag) {
                const lastChar = verseText && verseText[verseText.length - 1];
                if (!['', ' ', '\n'].includes(lastChar)) {
                    verseText += ' ';
                }
            }
            verseText += verseObj.text;
        }
        if (verseObj.nextChar) {
            verseText += verseObj.nextChar;
        }
    }
    return verseText;
};
exports.mergeVerseData = mergeVerseData;
