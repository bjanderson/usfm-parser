#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('USFM Parser Loaded');
const models_1 = require("./models");
const usfm_js_1 = require("./usfm-js");
const file_io_1 = require("./utils/file-io");
const bsb_usfm_files = (0, file_io_1.getFiles)('bsb_usfm').filter((f) => f.endsWith('.SFM'));
console.log('bsb_usfm_files :>> ', bsb_usfm_files);
let fileText = (0, file_io_1.readFile)(`bsb_usfm/01GENBSB.SFM`);
var toJSON = (0, usfm_js_1.usfmToJSON)(fileText);
(0, file_io_1.writeFile)(`./usfm.json`, JSON.stringify(toJSON, null, 2), true);
const usfmJson = new models_1.UsfmJson(toJSON);
const usfmBook = usfmJson.getUsfmBook();
// const markdown = usfmBook.toMarkdown();
// console.log(markdown);
const html = usfmBook.toHtml();
// console.log(html);
const now = new Date();
const year = now.getFullYear();
const month = `${now.getMonth() + 1}`.padStart(2, '0');
const day = `${now.getDate()}`.padStart(2, '0');
const dateString = `${year}-${month}-${day}`;
const text = `---
title: usfm-book
date: ${dateString}
description:
draft: false
tags:
aliases:
cssclasses:
  - berean-standard-bible
---

${html}`;
(0, file_io_1.writeFile)(`./usfm-book.md`, text, true);
