// eslint-disable-next-line @typescript-eslint/no-var-requires
const { installGlobals } = require("@remix-run/node");
const { defaults } = require("jest-config");
installGlobals();

module.exports = {
  roots: ["./app"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testEnvironment: "jsdom",
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  testPathIgnorePatterns: ["node_modules/", "app/utils/test/"],
  transformIgnorePatterns: ["node_modules"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: ["**/*.test.(ts|tsx)"],
  reporters: ["default"],
  coverageReporters: ["json", "lcov", "text"],
  collectCoverage: true,
};
