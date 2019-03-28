"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const automationPractice_1 = require("./pageObjects/automationPractice");
describe('Protractor testing', function () {
    function addItems() {
        let webStuff = new automationPractice_1.automationPractice();
        protractor_1.element.all(protractor_1.by.css("a[title='Add to cart']")).get(0).click().then(function () {
            protractor_1.browser.sleep(3000);
            webStuff.continueButton.click();
        });
        protractor_1.element.all(protractor_1.by.css("a[title='Add to cart']")).get(1).click().then(function () {
            protractor_1.browser.sleep(3000);
            webStuff.goToCheckOur.click();
        });
    }
    xit('Scenario 1', function () {
        let webCommands = new automationPractice_1.automationPractice();
        protractor_1.browser.waitForAngularEnabled(false);
        //Step 1 navigates to the page.
        protractor_1.browser.get("http://automationpractice.com/index.php");
        //Step 2 clicks the dress tab.
        webCommands.dressButton.click();
        //Step 3 skipped no filter
        //Step 4 clicks the dress
        webCommands.specificDress.click();
        //Step 5 select the blue option and size medium then click the Add to cart button.
        webCommands.blueOption.click();
        webCommands.mediumSize.click();
        webCommands.addToCart.click().then(function () {
            //This is not best practice but was unsure how else to tell the system to wait the box to load.
            protractor_1.browser.sleep(3000);
            //Step 5 click Continue shopping button.
            webCommands.continueButton.click();
        });
        //Step 7 hover over the 'Women' tab and select the blouses option.
        protractor_1.browser.actions().mouseMove(webCommands.mouseOverWomen).perform().then(function () {
            //Again not best practise
            protractor_1.browser.sleep(2000);
            webCommands.blouseOption.click();
        });
        //Step 8 skipped can not filter
        //Step 9 click on the blouse
        webCommands.selectBlouse.click();
        //Step 10 Select the white option and size large then click the add to cart button.
        webCommands.whiteOption.click();
        webCommands.largeSelection.click();
        webCommands.addToCart.click().then(function () {
            protractor_1.browser.sleep(3000);
            //Step 11 click the continue shopping button
            webCommands.continueButton.click();
            protractor_1.browser.sleep(2000);
        });
        // Step 12 click on the T-Shirt tab.
        webCommands.tShirt.click();
        // Step 13 skipped can not filter
        // Step 14 click on the a t-shirt
        webCommands.tshirtSelection.click();
        //15 change the quantity to 2 by entering text, select the orange color shirt,
        //then click the Add to Cart Button.
        webCommands.quantityBox.clear().then(function () {
            webCommands.quantityBox.sendKeys("2");
        });
        webCommands.orrangeOption.click();
        webCommands.smallSize.click();
        webCommands.addToCart.click().then(function () {
            protractor_1.browser.sleep(3000);
            //Step 16 click the continue shopping button
            webCommands.continueButton.click();
            protractor_1.browser.sleep(2000);
        });
        //Step 17 change the quantity to 1 by using the -+ buttons, select the color shirt, and size small
        //then click the Add to cart button
        webCommands.minusButton.click().then(function () {
            webCommands.blueOption.click();
            webCommands.smallSize.click();
            webCommands.addToCart.click();
            protractor_1.browser.sleep(3000);
            //Step 18 click proceed to checkout
            webCommands.goToCheckOur.click();
        });
        protractor_1.browser.sleep(3000);
    }), it('Scenario 2', function () {
        let webStuff = new automationPractice_1.automationPractice();
        protractor_1.browser.waitForAngularEnabled(false);
        //Step 1 navigate to site
        protractor_1.browser.get("http://automationpractice.com/index.php");
        //Step 2 add 2 items and go to checkout page.
        addItems();
        //Step 3 click the garbage icon for one of the articles of clothing on the checkout page.
        protractor_1.element.all(protractor_1.by.css("a[title='Delete']")).first().click();
        //Step 4 validate the content of the summary page
        protractor_1.browser.sleep(3000);
        webStuff.totalAmmount.getText().then(function (text) {
            expect(text).toEqual("$29.00");
        });
    }), it('Scenario 3', function () {
        //Step 1 navigate to website
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.get("http://automationpractice.com/index.php");
        //Step 2 Add 2 items and go to checkout.
        addItems();
        //Step 3 validate the checkout page tabs
        protractor_1.element.all(protractor_1.by.css("li[class*='step']")).getText().then(function (text) {
            expect(text[0]).toEqual("01. Summary");
            expect(text[1]).toEqual("02. Sign in");
            expect(text[2]).toEqual("03. Address");
            expect(text[3]).toEqual("04. Shipping");
            expect(text[4]).toEqual("05. Payment");
        });
        //Step 4 Validate the items displayed on the screen
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFnRDtBQUNoRCx5RUFBc0U7QUFLdEUsUUFBUSxDQUFDLG9CQUFvQixFQUFFO0lBQy9CLFNBQVMsUUFBUTtRQUViLElBQUksUUFBUSxHQUFHLElBQUksdUNBQWtCLEVBQUUsQ0FBQztRQUN4QyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBRTlELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFFO1lBRS9ELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDO0lBQUMsR0FBRyxDQUFDLFlBQVksRUFBRTtRQUdaLElBQUksV0FBVyxHQUFHLElBQUksdUNBQWtCLEVBQUUsQ0FBQztRQUUzQyxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJDLCtCQUErQjtRQUMvQixvQkFBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1FBRXZELDhCQUE4QjtRQUM5QixXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBR2hDLDBC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