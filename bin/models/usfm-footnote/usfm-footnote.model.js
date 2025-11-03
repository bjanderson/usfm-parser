"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsfmFootnote = void 0;
const utils_1 = require("@bjanderson/utils");
class UsfmFootnote {
    id;
    constructor(o) {
        const obj = (0, utils_1.getObject)(o);
        this.id = (0, utils_1.getString)(obj.id, null);
    }
}
exports.UsfmFootnote = UsfmFootnote;
