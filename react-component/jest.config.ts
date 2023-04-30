export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/src/tests/mocks/styleMock.ts',
  },
};
