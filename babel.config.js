// babel.config.js
const plugins = [
  ["@babel/plugin-proposal-class-properties"],
  ["@babel/plugin-transform-typescript"],
];

// Instrument for code coverage in development mode
if (process.env.USE_BABEL_PLUGIN_ISTANBUL) {
  console.log(
    "Detected USE_BABEL_PLUGIN_ISTANBUL. Instrumenting code for coverage."
  );
  plugins.push("babel-plugin-istanbul");
}

module.exports = {
  presets: [["@babel/env"]],
  plugins,
};
