module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/.next/**',
    '!**/out/**',
    '!**/next.config.js',
    // '!**/server.js',
    '!**/src/pages/_app.js',
    // '!**/src/pages/_error.js',
  ],
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/coverage/'],
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
  },
}
