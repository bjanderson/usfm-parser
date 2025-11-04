"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDateString = void 0;
const getDateString = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, '0');
    const day = `${now.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
};
exports.getDateString = getDateString;
