// babel.config.js
const plugins = [
  ["@babel/plugin-proposal-class-properties"],
  ["@babel/plugin-transform-typescript"],
];

// Instrument for code coverage in development mode
if (process.env.USE_BABEL_PLUGIN_ISTANBUL) {
  console.log("Detected development environment. Instrumenting code for coverage.");
  plugins.push("babel-plugin-istanbul");
} else {
  console.log("Detected prod environment.");
}

module.exports = {
  presets: [["@babel/env"]],
  plugins,
};
