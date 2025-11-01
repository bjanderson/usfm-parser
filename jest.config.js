module.exports = {
  collectCoverageFrom: ['**/*.(t|j)s'],

  coverageDirectory: '../coverage',

  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
    },
  },

  moduleFileExtensions: ['js', 'json', 'ts'],

  moduleNameMapper: {
    'src/(.*)': '<rootDir>/$1',
  },

  rootDir: 'src',

  testEnvironment: 'node',

  testRegex: '.*\\.spec\\.ts$',

  transform: {
    '^.+\\.(t|j)s$': ['ts-jest', { isolatedModules: true }],
  },
};
