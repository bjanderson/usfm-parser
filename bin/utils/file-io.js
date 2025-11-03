"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = exports.writeJsonFile = exports.writeFile = exports.readJsonFile = exports.readFile = exports.getFiles = exports.createDirectoryIfNotExists = exports.pathExists = exports.createDirectory = void 0;
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const createDirectory = (path) => {
    try {
        (0, fs_1.mkdirSync)(path, { recursive: true });
    }
    catch (err) {
        console.error(`Failed to create directory: ${path}`);
        console.error(err);
        process.exit(1);
    }
};
exports.createDirectory = createDirectory;
const pathExists = (path) => {
    return (0, fs_1.existsSync)(path);
};
exports.pathExists = pathExists;
const createDirectoryIfNotExists = (path) => {
    if (!(0, exports.pathExists)(path)) {
        (0, exports.createDirectory)(path);
    }
};
exports.createDirectoryIfNotExists = createDirectoryIfNotExists;
const getFiles = (directory) => {
    try {
        const files = (0, fs_1.readdirSync)(directory);
        return files;
    }
    catch (error) {
        return [];
    }
};
exports.getFiles = getFiles;
const readFile = (fileName) => {
    try {
        const fileContents = (0, fs_1.readFileSync)(fileName, { encoding: 'utf-8' });
        return fileContents;
    }
    catch (error) {
        return '';
    }
};
exports.readFile = readFile;
const readJsonFile = (filename) => {
    if ((0, exports.pathExists)(filename)) {
        try {
            const str = (0, exports.readFile)(filename);
            return JSON.parse(str);
        }
        catch (err) {
            console.error(`ERROR: Could not read file ${filename}`);
            return {};
        }
    }
    return {};
};
exports.readJsonFile = readJsonFile;
const writeFile = (file, text, overwrite = false) => {
    if (!overwrite && (0, exports.pathExists)(file)) {
        console.error(`${file} already exists. Enter a different name.`);
        process.exit(1);
    }
    try {
        (0, fs_1.writeFileSync)(file, text, { encoding: 'utf-8' });
    }
    catch (err) {
        console.error(`Failed to write file: ${file}`);
        console.error(err);
        process.exit(1);
    }
};
exports.writeFile = writeFile;
const writeJsonFile = (filename, json) => {
    const str = JSON.stringify(json, null, 2);
    (0, exports.writeFile)(filename, str);
};
exports.writeJsonFile = writeJsonFile;
const execute = (command) => {
    try {
        (0, child_process_1.execSync)(command);
    }
    catch (err) {
        console.error(`Error executing command: ${command}`);
        console.error(err);
    }
};
exports.execute = execute;
