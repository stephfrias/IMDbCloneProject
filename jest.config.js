module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
  };
  