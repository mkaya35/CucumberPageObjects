package pages.actions;

import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import pages.locators.CarsGuideHomeLocators;
import utils.SeleniumDriver;

public class CarGuideHomePageActions {

	CarsGuideHomeLocators cghl = null; // locator class object reference

	public CarGuideHomePageActions() {
		this.cghl = new CarsGuideHomeLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), cghl);// initializeses elements in CarsGuideHomeLocators
	}

	public void movetoBuySellMenu() {
		Actions action =new Actions(SeleniumDriver.getDriver());
		action.moveToElement(cghl.carBuySellMenu).perform();
	}

	public void clickOnSearchMenu() {
		//movetoBuySellMenu
		cghl.searchCarMenu.click();
	}
	public void clickOnUsedMenu() {
		//movetoBuySellMenu
		cghl.usedCarMenu.click();
	}

	public void clickOnNewMenu() {

	}

	public void clickOnFindADealerMenu() {

	}

	public void clickOnWhatCarShouldIBuyMenu() {

	}

	public void clickOnSellMayCarMenu() {
		//movetoBuySellMenu
		cghl.sellMayCarMenu.click();
	}

	public void clickOnEdityourAdMenu() {
		//movetoBuySellMenu
		cghl.editYourAddMenu.click();
	}

	public void clickCarSellingTipsMenu() {

	}
}
