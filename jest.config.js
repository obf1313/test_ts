// Jest 配置文件
// 详情配置信息见 https://jestjs.io/docs/en/configuration
const { defaults } = require('jest-config');

module.exports = {
  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',
  // enzyme 配置文件
  setupFilesAfterEnv: ['<rootDir>__config__/setupTest.ts'],
  // 测试环境
  testEnvironment: 'node',
  // An array of file extensions your modules use.
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  // An alternative API to setting the NODE_PATH env variable, modulePaths is an array of absolute paths to additional locations to search when resolving modules.
  modulePaths: [
    '<rootDir>/src/'
  ],
  // 指示在执行测试时是否应收集覆盖范围信息。
  collectCoverage: true,
  // 使用什么方式输出信息
  coverageReporters: ['text']
};
