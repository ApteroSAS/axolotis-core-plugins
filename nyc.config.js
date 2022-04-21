const path = require("path");
module.exports = {
    "extends": "@istanbuljs/nyc-config-typescript",
    "all": true,
    //"check-coverage":true,
    "include":["src/lib/**/*.ts"],
    "reporter":['lcov','text','html'],
    //"extension":['.ts']
};