import { defineConfig } from 'cypress';

import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  fixturesFolder: '__tests__/cypress/fixtures',
  screenshotsFolder: '__tests__/cypress/screenshots',
  videosFolder: '__tests__/cypress/videos',
  downloadsFolder: '__tests__/cypress/downloads',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5555',
    supportFile: '__tests__/cypress/support/e2e.js',
    specPattern: '__tests__/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    env: {
      serverPassword: `${process.env.VITE_USER_PASSWORD}`
    }
  },
});
