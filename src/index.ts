#! /usr/bin/env node

import { ParserConfig } from './models';
import { parse } from './parser';

console.log('USFM Parser');

const config = new ParserConfig();
parse(config);
