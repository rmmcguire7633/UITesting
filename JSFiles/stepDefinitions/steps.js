"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const Calculator_1 = require("../PageObjects/Calculator");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
const AngularHomePage_1 = require("../PageObjects/AngularHomePage");
var expect = chai_1.default.expect;
let calc = new Calculator_1.Calculator();
let site = new AngularHomePage_1.AngularHomePage();
cucumber_1.Given('I will navigate to {string} site', (string) => __awaiter(this, void 0, void 0, function* () {
    if (string == "Calc") {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    }
    else if (string == "AngularJs") {
        yield protractor_1.browser.get("https://angularjs.org");
    }
}));
cucumber_1.When('I add two numbers {string} and {string}', (string, string2) => __awaiter(this, void 0, void 0, function* () {
    yield calc.firstEditBox.sendKeys(string);
    yield calc.secondEditBox.sendKeys(string2);
}));
cucumber_1.Then('the output displayed should be {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    yield calc.go.click();
    yield calc.getResult.getText().then(function (text) {
        expect(text).to.equals(string);
    });
}));
cucumber_1.When('I click on header link', () => __awaiter(this, void 0, void 0, function* () {
    yield site.go.click();
}));
cucumber_1.When('you will navigate to angular page', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("yae it worked");
});
cucumber_1.Then('you will enter {string} in search box', (string) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(3000);
    yield site.search.sendKeys(string);
    yield protractor_1.browser.sleep(4000);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUEyQztBQUMzQywwREFBcUQ7QUFDckQsMkNBQW1DO0FBQ25DLGdEQUF3QjtBQUN4QixvRUFBK0Q7QUFFL0QsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUVqQyxnQkFBSyxDQUFDLGtDQUFrQyxFQUFFLENBQU8sTUFBTSxFQUFDLEVBQUU7SUFDdEQsSUFBSSxNQUFNLElBQUksTUFBTSxFQUFFO1FBQ2xCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztLQUNsRTtTQUFNLElBQUksTUFBTSxJQUFJLFdBQVcsRUFBQztRQUM3QixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7S0FDOUM7QUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHlDQUF5QyxFQUFHLENBQU8sTUFBTSxFQUFFLE9BQU8sRUFBQyxFQUFFO0lBQ3RFLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHlDQUF5QyxFQUFFLENBQU8sTUFBTSxFQUFDLEVBQUU7SUFDNUQsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRXRCLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO1FBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx3QkFBd0IsRUFBRSxHQUFRLEVBQUU7SUFDckMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzFCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsbUNBQW1DLEVBQUU7SUFDdEMsb0VBQW9FO0lBQ3BFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUE7QUFDaEMsQ0FBQyxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsdUNBQXVDLEVBQUUsQ0FBTyxNQUFNLEVBQUMsRUFBRTtJQUMxRCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5QixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=