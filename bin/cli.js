#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const models_1 = require("./models");
const parser_1 = require("./parser");
// parse(config);
const askQuestion = (rl, question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};
const ask = (questions) => {
    return new Promise(async (resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        const results = [];
        for (let i = 0; i < questions.length; i++) {
            const result = await askQuestion(rl, questions[i]);
            results.push(result);
        }
        rl.close();
        resolve(results);
    });
};
const questions = ['Input directory (bsb_usfm): ', 'Output directory (bsb_html): '];
ask(questions).then((answers) => {
    const config = new models_1.ParserConfig({
        inputDirectory: answers[0] || null,
        outputDirectory: answers[1] || null,
    });
    (0, parser_1.parse)(config);
});
