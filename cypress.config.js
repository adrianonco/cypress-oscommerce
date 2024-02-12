const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Enable experimental Studio
    experimentalStudio: true,

    // Enable screenshots on test failures
    screenshotOnRunFailure: true,

    // Enable video recording of tests
    video: true,
  },
});
