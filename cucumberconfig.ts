exports.config = {
    // set to "custom" instead of cucumber.
    framework: 'custom',

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),


    capabilities: {
        browserName: 'chrome'
    },

    // require feature files
    specs: [
        '../features/demo.feature' // accepts a glob
    ],

    cucumberOpts: {
        // require step definitions
        tags:"@calculatorTesting",
        require: [
            './stepDefinitions/*.js' // accepts a glob
        ]
    }
};