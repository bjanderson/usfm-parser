#! /usr/bin/env node
console.log('USFM Parser Loaded');

import { UsfmJson } from './models';
import { usfmToJSON } from './usfm-js';
import { getFiles, readFile, writeFile } from './utils/file-io';

const bsb_usfm_dir = 'bsb_usfm';
const bsb_html_dir = 'bsb_html';
const bsb_usfm_files = getFiles(bsb_usfm_dir).filter((f) => f.endsWith('.SFM'));
bsb_usfm_files.forEach((file) => {
  console.log(`Processing ${file}...`);
  parse(file);
});

function parse(file) {
  let fileText = readFile(`${bsb_usfm_dir}/${file}`);
  var toJSON = usfmToJSON(fileText);
  writeFile(`./usfm.json`, JSON.stringify(toJSON, null, 2), true);

  const usfmJson = new UsfmJson(toJSON);
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
title: ${usfmBook.title}
date: ${dateString}
description:
draft: false
tags:
aliases:
cssclasses:
  - berean-standard-bible
---

${html}`;
  writeFile(`${bsb_html_dir}/usfm-book.md`, text, true);
}
