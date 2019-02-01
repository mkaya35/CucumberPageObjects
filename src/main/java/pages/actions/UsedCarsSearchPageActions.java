package pages.actions;

import org.openqa.selenium.support.PageFactory;

import pages.locators.UsedCarsSearchPageLocators;
import utils.SeleniumDriver;

public class UsedCarsSearchPageActions {
	
UsedCarsSearchPageLocators usedCarLocators;
	
	public UsedCarsSearchPageActions() {
		this.usedCarLocators=new UsedCarsSearchPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), usedCarLocators);
		}
		
	public void clickUsedMenu() {
		usedCarLocators.usedMenu.click();
	}
}
