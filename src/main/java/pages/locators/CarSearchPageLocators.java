package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class CarSearchPageLocators {
	
	@FindBy(how=How.XPATH, using="//a[contains(text(),'Search Cars')]")
	public WebElement searchCarMenu; 
	
	@FindBy(how=How.XPATH, using="//select[@id='makes']")
	public WebElement carMakeDD;
	
	@FindBy(how=How.XPATH, using="//select[@id='models']")
	public WebElement carModelDD;
	
	@FindBy(how=How.XPATH, using="//select[@id='locations']")
	public WebElement carLocationDD;
	
	@FindBy(how=How.XPATH, using="//select[@id='price-max']")
	public WebElement carPricaMaxDD;
	
	@FindBy(how=How.XPATH, using="//input[@id='search-submit']")
	public WebElement FindMyNextCarButton;
	
	@FindBy(how=How.XPATH, using="//h1[@class='listing-search-title']")
	public WebElement resultstitle;

}
