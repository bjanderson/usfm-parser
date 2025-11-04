"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParserConfig = void 0;
const utils_1 = require("@bjanderson/utils");
class ParserConfig {
    inputDirectory;
    outputDirectory;
    constructor(o) {
        const obj = (0, utils_1.getObject)(o);
        this.inputDirectory = (0, utils_1.getString)(obj.inputDirectory, 'bsb_usfm');
        this.outputDirectory = (0, utils_1.getString)(obj.outputDirectory, 'bsb_html');
    }
}
exports.ParserConfig = ParserConfig;
