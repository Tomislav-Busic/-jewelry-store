module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^.+\\.(css|sass|scss)$": "identity-obj-proxy",
  },
};
