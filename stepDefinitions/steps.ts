import {Given, Then, When} from "cucumber";
import {Calculator} from "../PageObjects/Calculator";
import {browser} from "protractor";
import chai from "chai";
import {AngularHomePage} from "../PageObjects/AngularHomePage";

var expect = chai.expect;
let calc = new Calculator();
let site = new AngularHomePage();

Given('I will navigate to {string} site', async (string)=> {
    if (string == "Calc") {
        await browser.get('http://juliemr.github.io/protractor-demo/');
    } else if (string == "AngularJs"){
        await browser.get("https://angularjs.org");
    }
});

When('I add two numbers {string} and {string}',  async (string, string2)=> {
    await calc.firstEditBox.sendKeys(string);
    await calc.secondEditBox.sendKeys(string2);
});

Then('the output displayed should be {string}', async (string)=> {
    await calc.go.click();

    await calc.getResult.getText().then(function (text) {
        expect(text).to.equals(string);
    });
});

When('I click on header link', async ()=> {
    await site.go.click();
});

When('you will navigate to angular page', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("yae it worked")
});

Then('you will enter {string} in search box', async (string)=> {
    await browser.sleep(3000);
    await site.search.sendKeys(string);
    await browser.sleep(4000);
});





