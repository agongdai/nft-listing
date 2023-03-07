import { defineConfig } from 'cypress';

module.exports = defineConfig({
  projectId: 'cmsdcf',
  defaultCommandTimeout: 10_000,
  requestTimeout: 10_000,
  watchForFileChanges: false,
  animationDistanceThreshold: 1,
  numTestsKeptInMemory: 10,
  reporterOptions: {
    reportDir: 'cypress/reports',
  },
});
