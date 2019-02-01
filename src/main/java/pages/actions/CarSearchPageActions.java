package pages.actions;

import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import pages.locators.CarSearchPageLocators;
import utils.SeleniumDriver;

public class CarSearchPageActions {
	CarSearchPageLocators carSearchPageLocators;
	
	public CarSearchPageActions() {
		this.carSearchPageLocators=new CarSearchPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), carSearchPageLocators);
		}
	/*public void clickCarSearchMenu(String Make) {
		SeleniumDriver.getDriver().findElement(By.xpath(".//*[@id='block-system-main']/div/div/div/div/div/form")).click();
		Select select=new Select(carSearchPageLocators.carMakeDD);
		select.selectByValue(Make);
	}*/
	public void selectMake(String Make) {
		SeleniumDriver.getDriver().findElement(By.xpath(".//*[@id='block-system-main']/div/div/div/div/div/form")).click();
		Select select=new Select(carSearchPageLocators.carMakeDD);
		select.selectByValue(Make);
	}
	public void selectModel(String Model) {
		Select select=new Select(carSearchPageLocators.carModelDD);
		select.selectByValue(Model);
	}
	public void selectLocation(String location) {
		Select select=new Select(carSearchPageLocators.carLocationDD);
		select.selectByValue(location);
	}
	public void selectMaxPrice(String maxPrice) {
		Select select=new Select(carSearchPageLocators.carPricaMaxDD);
		select.selectByVisibleText(maxPrice);
	}
	public void clickOnFindCars() {
		carSearchPageLocators.FindMyNextCarButton.click();
	}
	public boolean isSearchTitleText(String s) {
		return carSearchPageLocators.resultstitle.getText().toUpperCase().contains(s);
		
	}
	public String GetSearchTitle() {
		
		return carSearchPageLocators.resultstitle.getText();
	}
	
	public boolean getPageTitle(String s) {
		return SeleniumDriver.getDriver().getTitle().toUpperCase().contains(s);
	}

}
