/**
 * Get a string. Eliminate null and invalid types.
 */
export declare const getString: (value: any, defaultValue?: string) => any;
/**
 * Convert value string to all lowercase.
 */
export declare const lowerize: (value: any) => any;
/**
 * Convert the value to all uppercase.
 */
export declare const upperize: (value: any) => any;
/**
 * Convert the first character of the value to lowercase.
 */
export declare const lowercaseFirst: (value: any) => string;
/**
 * Convert the first character of the value to uppercase.
 */
export declare const uppercaseFirst: (value: any) => string;
/**
 * Convert a kabob-case or PascalCase string to camelCase.
 */
export declare const camelFromKabobOrPascal: (value: any) => string;
/**
 * Convert a kabob-case or camelCase string to PascalCase.
 */
export declare const pascalFromKabobOrCamel: (value: any) => string;
/**
 * Convert a kabob-case string to capitalized SNAKE_CASE.
 */
export declare const snakeFromKabob: (value: any) => any;
/**
 * Convert a kabob-case string to Title Case.
 */
export declare const titleFromKabob: (value: any) => string;
