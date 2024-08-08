const esModules = [
  "@mui",
  "@material-ui",
  "rc-.+?",
  "axios",
  "@babel/runtime",
].join("|");

module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "\\.(styl|less|sass|png|jpg|ttf|woff|woff2|css|scss|svg)$":
      "identity-obj-proxy",
  },
  coverageDirectory: "coverage",
  transformIgnorePatterns: [`/node_modules/(?!${esModules}).+(js|jsx|ts|tsx)$`],
  watchPathIgnorePatterns: ["<rootDir>/node_modules/"],
  setupFiles: ["<rootDir>/src/setupTests.js"],
};
