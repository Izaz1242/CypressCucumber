const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    excludeSpecPattern: '**/cypress/e2e/testset1.cy.js',
    baseUrl: 'https://magento.softwaretestingboard.com/'
  },
});

