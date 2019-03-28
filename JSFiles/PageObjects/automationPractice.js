"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class automationPractice {
    constructor() {
        this.dressButton = protractor_1.element(protractor_1.by.linkText("DRESSES"));
        this.specificDress = protractor_1.element(protractor_1.by.css("img[src='http://automationpractice.com/img/p/1/2/12-home_default.jpg']"));
        this.blueOption = protractor_1.element(protractor_1.by.name("Blue"));
        this.mediumSize = protractor_1.element(protractor_1.by.cssContainingText("[id='group_1'] option", "M"));
        this.addToCart = protractor_1.element(protractor_1.by.buttonText("Add to cart"));
        this.continueButton = protractor_1.element(protractor_1.by.css("span[title='Continue shopping']"));
        this.mouseOverWomen = protractor_1.element(protractor_1.by.css("a[title='Women']"));
        this.blouseOption = protractor_1.element(protractor_1.by.css("a[title='Blouses']"));
        this.selectBlouse = protractor_1.element(protractor_1.by.css("img[title='Blouse']"));
        this.whiteOption = protractor_1.element(protractor_1.by.css("a[title='White']"));
        this.largeSelection = protractor_1.element(protractor_1.by.cssContainingText("[id='group_1'] option", "L"));
        this.tShirt = protractor_1.element(protractor_1.by.linkText("T-SHIRTS"));
        this.tshirtSelection = protractor_1.element(protractor_1.by.css("img[src='http://automationpractice.com/img/p/1/1-home_default.jpg']"));
        this.quantityBox = protractor_1.element(protractor_1.by.id("quantity_wanted"));
        this.orrangeOption = protractor_1.element(protractor_1.by.name("Orange"));
        this.smallSize = protractor_1.element(protractor_1.by.cssContainingText("[id='group_1'] option", "S"));
        this.minusButton = protractor_1.element(protractor_1.by.css("a[class='btn btn-default button-minus product_quantity_down']"));
        this.goToCheckOur = protractor_1.element(protractor_1.by.css("a[title='Proceed to checkout']"));
        this.totalAmmount = protractor_1.element(protractor_1.by.id("total_price"));
    }
}
exports.automationPractice = automationPractice;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b21hdGlvblByYWN0aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvYXV0b21hdGlvblByYWN0aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXNFO0FBR3RFLE1BQWEsa0JBQWtCO0lBMkIzQjtRQUVJLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0VBQXdFLENBQUMsQ0FBQyxDQUFDO1FBQy9HLElBQUksQ0FBQyxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsZUFBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxxRUFBcUUsQ0FBQyxDQUFDLENBQUM7UUFDOUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLCtEQUErRCxDQUFDLENBQUMsQ0FBQztRQUNwRyxJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0NBQ0o7QUFqREQsZ0RBaURDIn0=