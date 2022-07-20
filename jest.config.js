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
  moduleNameMapper: {
    // Mocks out all these file formats when tests are run
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "identity-obj-proxy",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  collectCoverage: true,
};
