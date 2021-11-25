const { join } =  require('path')

const { ConsoleReporter } = require('@serenity-js/console-reporter'),
  { ArtifactArchiver } = require('@serenity-js/core'),
  {
    Photographer,
    TakePhotosOfInteractions,
  } = require('@serenity-js/protractor'),
  { SerenityBDDReporter } = require('@serenity-js/serenity-bdd'),
  isCI = require('is-ci')

exports.config = {
  seleniumAddress: 'http://localhost:4723/wd/hub',

  chromeDriver: require(`chromedriver/lib/chromedriver`).path,

  seleniumServerJar:
    '/usr/local/lib/node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',

  baseUrl: 'http://localhost:8000',

  SELENIUM_PROMISE_MANAGER: false,

  directConnect: false,

  // https://github.com/angular/protractor/blob/master/docs/timeouts.md
  allScriptsTimeout: 110000,

  framework: 'custom',
  frameworkPath: require.resolve('@serenity-js/protractor/adapter'),

  specs: ['features/**/*.feature'],

  serenity: {
    runner: 'cucumber',
    crew: [
      // Learn more at https://serenity-js.org/handbook/reporting/index.html
      ArtifactArchiver.storingArtifactsAt('./target/site/serenity'),
      ConsoleReporter.forDarkTerminals(),
      Photographer.whoWill(TakePhotosOfInteractions), // slower execution, more comprehensive reports
      // Photographer.whoWill(TakePhotosOfFailures),      // fast execution, screenshots only when tests fail
      new SerenityBDDReporter(),
    ],
  },

  cucumberOpts: {
    require: ['src/step_definitions/*.ts', 'src/support/.serenity.ts'],
    'require-module': ['ts-node/register'],
    tags: ['~@test'],
    strict: false,
  },

  /**
   * If you're interacting with a non-Angular application,
   * uncomment the below onPrepare section,
   * which disables Angular-specific test synchronisation.
   */
  // onPrepare: function() {
  //     browser.waitForAngularEnabled(false);
  // },

  capabilities: {
    browserName: 'safari',
    platformName: 'iOS',
    platformVersion: '14.5',
    deviceName: 'iPhone 12',
    app: join(process.cwd(), './apps/navapp.app'),

    // see https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities#loggingpreferences-json-object
    loggingPrefs: {
      browser: 'SEVERE', // "OFF", "SEVERE", "WARNING", "INFO", "CONFIG", "FINE", "FINER", "FINEST", "ALL".
    },

    // chromeOptions: {
    //   args: [
    //     '--no-sandbox',
    //     '--disable-infobars',
    //     '--disable-dev-shm-usage',
    //     '--disable-extensions',
    //     '--log-level=3',
    //     '--disable-gpu',
    //     '--window-size=1920,1080',
    //   ].concat(isCI ? ['--headless'] : []), // run in headless mode on the CI server
    // },
  },
}
