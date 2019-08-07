module.exports = {
  transform: {
    "^.+\\.[jt]sx?$": "ts-jest"
  },

  testRegex: "/tests/.+\\.spec\\.(js|ts)x?$",

  moduleNameMapper: {
    "^~/(.+)$": "<rootDir>/src/$1"
  },

  moduleFileExtensions: ["ts", "js", "tsx"],

  collectCoverageFrom: ["src/**/*.{ts,tsx}"],

  globals: {
    "ts-jest": {
      tsConfigFile: "tsconfig.json"
    }
  },

  testURL: "http://localhost/"
};
