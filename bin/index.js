#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
const parser_1 = require("./parser");
console.log('USFM Parser');
const config = new models_1.ParserConfig();
(0, parser_1.parse)(config);
