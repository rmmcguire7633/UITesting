import {browser, by, element, ElementFinder, until} from "protractor";
import elementIsEnabled = until.elementIsEnabled;

export class automationPractice {

    dressButton:ElementFinder;
    specificDress:ElementFinder;
    blueOption:ElementFinder;
    mediumSize:ElementFinder;
    addToCart:ElementFinder;
    continueButton:ElementFinder;
    mouseOverWomen:ElementFinder;
    blouseOption:ElementFinder;
    selectBlouse: ElementFinder;
    whiteOption: ElementFinder;
    largeSelection: ElementFinder;
    tShirt:ElementFinder;
    tshirtSelection:ElementFinder;
    quantityBox:ElementFinder;
    orrangeOption:ElementFinder;
    smallSize:ElementFinder;
    minusButton:ElementFinder;
    goToCheckOur: ElementFinder;
    totalAmmount:ElementFinder;
    summary:ElementFinder;
    signIn:ElementFinder;
    address:ElementFinder;
    shipping:ElementFinder;
    payment: ElementFinder;

    constructor(){

        this.dressButton = element(by.linkText("DRESSES"));
        this.specificDress = element(by.css("img[src='http://automationpractice.com/img/p/1/2/12-home_default.jpg']"));
        this.blueOption = element(by.name("Blue"));
        this.mediumSize = element(by.cssContainingText("[id='group_1'] option", "M"));
        this.addToCart = element(by.buttonText("Add to cart"));
        this.continueButton = element(by.css("span[title='Continue shopping']"));
        this.mouseOverWomen = element(by.css("a[title='Women']"));
        this.blouseOption = element(by.css("a[title='Blouses']"));
        this.selectBlouse = element(by.css("img[title='Blouse']"));
        this.whiteOption = element(by.css("a[title='White']"));
        this.largeSelection = element(by.cssContainingText("[id='group_1'] option", "L"));
        this.tShirt = element(by.linkText("T-SHIRTS"));
        this.tshirtSelection = element(by.css("img[src='http://automationpractice.com/img/p/1/1-home_default.jpg']"));
        this.quantityBox = element(by.id("quantity_wanted"));
        this.orrangeOption = element(by.name("Orange"));
        this.smallSize = element(by.cssContainingText("[id='group_1'] option", "S"));
        this.minusButton = element(by.css("a[class='btn btn-default button-minus product_quantity_down']"));
        this.goToCheckOur = element(by.css("a[title='Proceed to checkout']"));
        this.totalAmmount = element(by.id("total_price"));
    }
}

