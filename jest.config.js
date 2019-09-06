const { defaults } = require('jest-config');

module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>config/setupTest.ts'],
  testEnvironment: 'node',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx']
};