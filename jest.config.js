module.exports = {
  testMatch: ["<rootDir>/test/named_error.spec.ts"],
  reporters: ["jest-spec-reporter"],
  rootDir: ".",
  moduleFileExtensions: [
    "ts",
    "js",
  ],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  testEnvironment: "node",
};
