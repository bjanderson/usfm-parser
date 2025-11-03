"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Verse = void 0;
const utils_1 = require("@bjanderson/utils");
const usfm_object_1 = require("../usfm-object");
class Verse {
    usfm;
    constructor(o) {
        const obj = (0, utils_1.getObject)(o);
        this.usfm = new usfm_object_1.UsfmObject(obj.usfm);
    }
}
exports.Verse = Verse;
