module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  cacheDirectory: '.tmp/jestCache',
  coveragePathIgnorePatterns: [
    '<rootDir>/test',
    '<rootDir>/node_modules'
  ],
	testMatch: [
    '<rootDir>/tests/**/*.test.ts'
  ],
	reporters: ['default']
};
