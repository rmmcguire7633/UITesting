import {by, element, ElementFinder} from "protractor";

export class AngularHomePage {

    go:ElementFinder;
    search:ElementFinder;

    constructor(){

        this.go = element(by.linkText("angular.io"));
        this.search = element(by.css("a[title='Dresses']"));
    }
}