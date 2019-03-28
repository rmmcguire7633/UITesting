import {browser, by, element} from "protractor";
import { automationPractice } from "./pageObjects/automationPractice";
import {automationPractice2} from "./PageObjects/automationPractice2";



describe('Protractor testing', function(){
function addItems() {

    let webStuff = new automationPractice();
    element.all(by.css("a[title='Add to cart']")).get(0).click().then(function () {

        browser.sleep(3000);
        webStuff.continueButton.click();
    });

    element.all(by.css("a[title='Add to cart']")).get(1).click().then (function () {

        browser.sleep(3000);
        webStuff.goToCheckOur.click();
    })

} xit('Scenario 1', function ()  {


        let webCommands = new automationPractice();

        browser.waitForAngularEnabled(false);

        //Step 1 navigates to the page.
        browser.get("http://automationpractice.com/index.php");

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
            browser.sleep(3000);

            //Step 5 click Continue shopping button.
            webCommands.continueButton.click()
        });

        //Step 7 hover over the 'Women' tab and select the blouses option.
        browser.actions().mouseMove(webCommands.mouseOverWomen).perform().then(function () {

            //Again not best practise
            browser.sleep(2000);
            webCommands.blouseOption.click();
        });

        //Step 8 skipped can not filter
        //Step 9 click on the blouse
        webCommands.selectBlouse.click();

        //Step 10 Select the white option and size large then click the add to cart button.
        webCommands.whiteOption.click();
        webCommands.largeSelection.click();

        webCommands.addToCart.click().then(function () {

            browser.sleep(3000);

            //Step 11 click the continue shopping button
            webCommands.continueButton.click();
            browser.sleep(2000);
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

            browser.sleep(3000);

            //Step 16 click the continue shopping button
            webCommands.continueButton.click();
            browser.sleep(2000);
        });


        //Step 17 change the quantity to 1 by using the -+ buttons, select the color shirt, and size small
        //then click the Add to cart button

        webCommands.minusButton.click().then(function () {

            webCommands.blueOption.click();
            webCommands.smallSize.click();
            webCommands.addToCart.click();
            browser.sleep(3000);

            //Step 18 click proceed to checkout
            webCommands.goToCheckOur.click();
        });

        browser.sleep(3000);
    }), it('Scenario 2', function (){

        let webStuff = new automationPractice();
        browser.waitForAngularEnabled(false);

        //Step 1 navigate to site
        browser.get("http://automationpractice.com/index.php");


        //Step 2 add 2 items and go to checkout page.
        addItems();

        //Step 3 click the garbage icon for one of the articles of clothing on the checkout page.
        element.all(by.css("a[title='Delete']")).first().click();

        //Step 4 validate the content of the summary page
        browser.sleep(3000);
        webStuff.totalAmmount.getText().then(function (text) {
            expect(text).toEqual("$29.00");
        })
    }), it('Scenario 3', function (){

        //Step 1 navigate to website
        browser.waitForAngularEnabled(false);

        browser.get("http://automationpractice.com/index.php");

        //Step 2 Add 2 items and go to checkout.
        addItems();

        //Step 3 validate the checkout page tabs
        element.all(by.css("li[class*='step']")).getText().then(function (text) {
            expect(text[0]).toEqual("01. Summary");
            expect(text[1]).toEqual("02. Sign in");
            expect(text[2]).toEqual("03. Address");
            expect(text[3]).toEqual("04. Shipping");
            expect(text[4]).toEqual("05. Payment");
        })

        //Step 4 Validate the items displayed on the screen



    })
});
