module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'tsx', 'json'],
  rootDir: __dirname,
  testMatch: ['<rootDir>/src/components/**/*.test.tsx','<rootDir>/src/components/**/test.tsx'],
  transform: {
    '^.+\\.js?$': 'babel-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    react: 'nervjs',
    'react-addons-test-utils': 'nerv-test-utils',
    'react-dom': 'nervjs',
    'weui': '<rootDir>/__mock__/styleMock.js',
    '\\.(css|less|sass|scss)$': '<rootDir>/__mock__/styleMock.js'
  }
}