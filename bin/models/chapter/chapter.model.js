"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chapter = void 0;
const utils_1 = require("@bjanderson/utils");
const usfm_object_1 = require("../usfm-object");
class Chapter {
    usfm;
    constructor(o) {
        const obj = (0, utils_1.getObject)(o);
        this.usfm = new usfm_object_1.UsfmObject(obj.usfm);
    }
}
exports.Chapter = Chapter;
