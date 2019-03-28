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
        tags: "@calculatorTesting",
        require: [
            './stepDefinitions/*.js' // accepts a glob
        ]
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLENBQUMsTUFBTSxHQUFHO0lBQ2IsdUNBQXVDO0lBQ3ZDLFNBQVMsRUFBRSxRQUFRO0lBRW5CLDJDQUEyQztJQUMzQyxhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUcvRCxZQUFZLEVBQUU7UUFDVixXQUFXLEVBQUUsUUFBUTtLQUN4QjtJQUVELHdCQUF3QjtJQUN4QixLQUFLLEVBQUU7UUFDSCwwQkFBMEIsQ0FBQyxpQkFBaUI7S0FDL0M7SUFFRCxZQUFZLEVBQUU7UUFDViwyQkFBMkI7UUFDM0IsSUFBSSxFQUFDLG9CQUFvQjtRQUN6QixPQUFPLEVBQUU7WUFDTCx3QkFBd0IsQ0FBQyxpQkFBaUI7U0FDN0M7S0FDSjtDQUNKLENBQUMifQ==