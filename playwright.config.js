const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./test",
  timeout: 45000,
  workers: 2,
  reporter: "list",
  use: {
    baseURL: process.env.SITE_URL || "http://127.0.0.1:4173",
    channel: "chrome",
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  projects: [
    { name: "desktop", use: { viewport: { width: 1440, height: 1000 } } },
    { name: "mobile", use: { ...devices["iPhone 13"], defaultBrowserType: "chromium" } },
  ],
  webServer: process.env.SITE_URL
    ? undefined
    : {
        command: "python3 -m http.server 4173 --bind 127.0.0.1 --directory _site",
        url: "http://127.0.0.1:4173",
        reuseExistingServer: !process.env.CI,
      },
});
