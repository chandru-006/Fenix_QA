const { defineConfig } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60000,
  workers: 1,          // 🔒 memory-safe
  retries: 0,

  reporter: [
    ['list'],
    ['allure-playwright']
  ],

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  }
});
