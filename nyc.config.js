module.exports = {
    "extends": "@istanbuljs/nyc-config-typescript",
    "all": true,
    "include":["src/lib/**/*.ts"],
    "report-dir":"./coverage",
    "reporter":['lcov','text','html']
};