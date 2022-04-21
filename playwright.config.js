// playwright.config.js
// @ts-check
/** @type {import('@playwright/test').PlaywrightTestConfig} */
// @ts-check
const { devices } = require('@playwright/test');

const config = {
    testDir:"./src/tests/playwright",
    webServer: {
        command: 'yarn run ci:coverage:serve',
        url: 'http://localhost:9080',
        reuseExistingServer: !!process.env.CI,
        timeout: 120 * 1000
    },
    expect: {
        timeout: 2*60*1000,
    },
    use: {
        baseURL: 'http://127.0.0.1:9080',
    }
};
module.exports = config;