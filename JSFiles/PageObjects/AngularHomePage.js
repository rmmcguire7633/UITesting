"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class AngularHomePage {
    constructor() {
        this.go = protractor_1.element(protractor_1.by.linkText("angular.io"));
        this.search = protractor_1.element(protractor_1.by.css("a[title='Dresses']"));
    }
}
exports.AngularHomePage = AngularHomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ndWxhckhvbWVQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUGFnZU9iamVjdHMvQW5ndWxhckhvbWVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXNEO0FBRXRELE1BQWEsZUFBZTtJQUt4QjtRQUVJLElBQUksQ0FBQyxFQUFFLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Q0FDSjtBQVZELDBDQVVDIn0=