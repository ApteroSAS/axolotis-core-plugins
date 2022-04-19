// playwright.config.js
// @ts-check
/** @type {import('@playwright/test').PlaywrightTestConfig} */
// @ts-check
const { devices } = require('@playwright/test');

const config = {
    testDir:"./src/lib/tests/playwright",
    webServer: {
        command: 'yarn run coverage:serve',
        url: 'http://localhost:9080',
        timeout: 120 * 1000,
        reuseExistingServer: !process.env.CI,
        env: {
            USE_BABEL_PLUGIN_ISTANBUL: '1',
        },
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