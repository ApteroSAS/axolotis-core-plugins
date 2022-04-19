// playwright.config.js
// @ts-check
/** @type {import('@playwright/test').PlaywrightTestConfig} */
// @ts-check
const { devices } = require('@playwright/test');

const config = {
    testDir:"./src/tests/playwright",
    expect: {
        timeout: 2*60*1000,
    },
    use: {
        baseURL: 'http://localhost:9080',
    },
    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']},
        },
    ]
};
module.exports = config;