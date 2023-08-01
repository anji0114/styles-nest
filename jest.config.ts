const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  // moduleNameMapper: {
  //   "^@/components/(.*)$": "<rootDir>/components/$1",
  //   "^@/pages/(.*)$": "<rootDir>/components/$1",
  // },
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./jest.setup.ts"],
};

module.exports = createJestConfig(customJestConfig);
