const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://todomvc.com",
    specPattern: "cypress/e2e",
    chromeWebSecurity: false,
    supportFile: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    videoCompression: false,
    reporter: "mochawesome",
    reporterOption: {
      overwrite: false,
      html: false,
      json: true,
      reportPageTitle: "Report",
      charts: true,
    },
    projectId: "upyrht",
  },
});
