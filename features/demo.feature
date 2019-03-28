Feature: I am going to validate my Calculator App

@calculatorTesting
Scenario Outline: Calculator add functionality testing

Given I will navigate to "Calc" site
When I add two numbers "<number1>" and "<number2>"
Then the output displayed should be "<result>"
  Examples:
    | number1 | number2 | result   |
    | 5       | 6       | 11       |
    | 3       | 9       | 12       |

@AngularTesting
Scenario Outline: Calculator add functionality

Given I will navigate to "AngularJs" site
When I click on header link
And you will navigate to angular page
Then you will enter "<key>" in search box
Examples:
  | key |
  | hello |
  | hey |