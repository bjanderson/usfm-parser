"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleFromKabob = exports.snakeFromKabob = exports.pascalFromKabobOrCamel = exports.camelFromKabobOrPascal = exports.uppercaseFirst = exports.lowercaseFirst = exports.upperize = exports.lowerize = exports.getString = void 0;
/**
 * Get a string. Eliminate null and invalid types.
 */
const getString = (value, defaultValue = '') => {
    let str = value || defaultValue;
    if (typeof value !== 'string') {
        str = defaultValue;
    }
    if (str != null) {
        str = str.toString();
    }
    return str;
};
exports.getString = getString;
/**
 * Convert value string to all lowercase.
 */
const lowerize = (value) => {
    return (0, exports.getString)(value).toLocaleLowerCase();
};
exports.lowerize = lowerize;
/**
 * Convert the value to all uppercase.
 */
const upperize = (value) => {
    return (0, exports.getString)(value).toLocaleUpperCase();
};
exports.upperize = upperize;
/**
 * Convert the first character of the value to lowercase.
 */
const lowercaseFirst = (value) => {
    const str = (0, exports.getString)(value);
    return `${(0, exports.lowerize)(str.charAt(0))}${str.slice(1)}`;
};
exports.lowercaseFirst = lowercaseFirst;
/**
 * Convert the first character of the value to uppercase.
 */
const uppercaseFirst = (value) => {
    const str = (0, exports.getString)(value);
    return `${(0, exports.upperize)(str.charAt(0))}${str.slice(1)}`;
};
exports.uppercaseFirst = uppercaseFirst;
/**
 * Convert a kabob-case or PascalCase string to camelCase.
 */
const camelFromKabobOrPascal = (value) => {
    const str = (0, exports.lowercaseFirst)(value);
    const parts = str.split('-');
    let camel = parts.shift();
    parts.forEach((part) => {
        camel += (0, exports.uppercaseFirst)(part);
    });
    return camel;
};
exports.camelFromKabobOrPascal = camelFromKabobOrPascal;
/**
 * Convert a kabob-case or camelCase string to PascalCase.
 */
const pascalFromKabobOrCamel = (value) => {
    const str = (0, exports.camelFromKabobOrPascal)(value);
    return (0, exports.uppercaseFirst)(str);
};
exports.pascalFromKabobOrCamel = pascalFromKabobOrCamel;
/**
 * Convert a kabob-case string to capitalized SNAKE_CASE.
 */
const snakeFromKabob = (value) => {
    const str = (0, exports.getString)(value).replace(/-/g, '_');
    return (0, exports.upperize)(str);
};
exports.snakeFromKabob = snakeFromKabob;
/**
 * Convert a kabob-case string to Title Case.
 */
const titleFromKabob = (value) => {
    const str = (0, exports.getString)(value);
    const parts = str.split('-');
    let title = (0, exports.uppercaseFirst)(parts.shift());
    parts.forEach((part) => {
        title += ` ${(0, exports.uppercaseFirst)(part)}`;
    });
    return title;
};
exports.titleFromKabob = titleFromKabob;
