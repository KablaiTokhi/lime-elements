exports.config = Object.assign({}, require('./hooks'), {
  hostname: 'chromedriver',
  path: '/',
  capabilities: [
    {
      // Set maxInstances to 1 if screen recordings are enabled:
      // maxInstances: 1,
      browserName: 'chrome',
      chromeOptions: {
        // Disable headless mode if screen recordings are enabled:
        args: ['--headless', '--window-size=1440,900']
      }
    }
  ],
  logLevel: 'warn',
  reporters: ['spec'],
  framework: 'mocha',
  mochaOpts: {
    timeout: 60000
  },
  specs: ['test/**/*.js'],
  maximizeWindow: true,
  screenshots: {
    saveOnFail: true
  },
  videos: {
    enabled: false
  },
  baseUrl: 'http://doczserver:1337/lime-elements/'
})
