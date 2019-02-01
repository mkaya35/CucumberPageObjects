@Used-Search-Cars 
Feature: Acceptance testin to validate used search cars 
	to validate used search car  is working fine
 acceptance test
 
@Used-Search-Cars-Positive 
Scenario Outline: validate used search cars feature 
	Given I am on the homepage "https://www.carsguide.com.au/" 
	When I move to the menu 
		| Menu    |
		| Buy+Sell|
		| reviews |
	And click on Used menu
	And I select the make as "<make>" from anymake dropdown 
	And I select the model as "<model>" from select model dropdown 
	And I select location as "<location>" from select location dropdown 
	And I select the price as "<price>" price dropdown 
	And I click on find_my_next_car button 
	Then I should see the list of cars as "<make>" 
	And I sould see the page title should be "<make>"
	
	Examples: 
		| make | model  | location  | price |
		| AUDI |   A4   | SA - All  |$10,000|
		| KIA  |  RIO   | ACT - All |$15,000|