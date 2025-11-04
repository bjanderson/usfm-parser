"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = parse;
const models_1 = require("./models");
const usfm_js_1 = require("./usfm-js");
const file_io_1 = require("./utils/file-io");
function parse(config) {
    console.log('Parsing...');
    const files = (0, file_io_1.getFiles)(config.inputDirectory).filter((f) => f.endsWith('.SFM'));
    (0, file_io_1.createDirectoryIfNotExists)(config.outputDirectory);
    // const file = '01GENBSB.SFM';
    // parseFile(config, file);
    files.forEach((file) => {
        parseFile(config, file);
    });
    console.log(`Parsed ${files.length} files.`);
}
function parseFile(config, file) {
    const filePath = `${config.inputDirectory}/${file}`;
    const fileText = (0, file_io_1.readFile)(filePath);
    const json = (0, usfm_js_1.usfmToJSON)(fileText);
    // console.log('json :>> ', json);
    // createDirectoryIfNotExists('bsb-json');
    // writeFile(`bsb-json/${file.replace('.SFM', '.json')}`, JSON.stringify(json, null, 2), true);
    const usfmJson = new models_1.UsfmJson(json);
    const usfmBook = usfmJson.getUsfmBook();
    const text = usfmBook.toHtml();
    (0, file_io_1.writeFile)(`${config.outputDirectory}/${usfmBook.title}.md`, text, true);
}
