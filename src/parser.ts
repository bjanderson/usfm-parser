import { ParserConfig, UsfmJson } from './models';
import { usfmToJSON } from './usfm-js';
import { createDirectoryIfNotExists, getFiles, readFile, writeFile } from './utils/file-io';

export function parse(config: ParserConfig): void {
  console.log('Parsing...');

  const files = getFiles(config.inputDirectory).filter((f) => f.endsWith('.SFM'));
  createDirectoryIfNotExists(config.outputDirectory);

  // const file = '01GENBSB.SFM';
  // parseFile(config, file);

  files.forEach((file) => {
    parseFile(config, file);
  });

  console.log(`Parsed ${files.length} files.`);
}

function parseFile(config: ParserConfig, file: string): void {
  const filePath = `${config.inputDirectory}/${file}`;
  const fileText = readFile(filePath);
  const json = usfmToJSON(fileText);
  // console.log('json :>> ', json);
  // createDirectoryIfNotExists('bsb-json');
  // writeFile(`bsb-json/${file.replace('.SFM', '.json')}`, JSON.stringify(json, null, 2), true);

  const usfmJson = new UsfmJson(json);
  const usfmBook = usfmJson.getUsfmBook();

  const text = usfmBook.toHtml();

  writeFile(`${config.outputDirectory}/${usfmBook.title}.md`, text, true);
}
