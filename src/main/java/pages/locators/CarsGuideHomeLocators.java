package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class CarsGuideHomeLocators {
	
	@FindBy(how=How.LINK_TEXT, using="buy + sell")
	public WebElement carBuySellMenu;
	@FindBy(how=How.XPATH, using="//a[contains(text(),'Search Cars')]")
	public WebElement searchCarMenu; 
	@FindBy(how=How.XPATH, using="//a[@href='/buy-a-car/used-car-search']")
	public WebElement usedCarMenu;   
	@FindBy(how=How.XPATH, using="//a[contains(text(),'Sell my car')]")
	public WebElement sellMayCarMenu;
	@FindBy(how=How.XPATH, using="//a[contains(text(),'Edit Your Ad')]")
	public WebElement editYourAddMenu;
	
	
	@FindBy(how=How.LINK_TEXT, using="reviews")
	public WebElement carReviewsMenu;
	
	@FindBy(how=How.LINK_TEXT, using="news")
	public WebElement carnewsMenu;
	
	@FindBy(how=How.LINK_TEXT, using="advice")
	public WebElement carAdviceMenu;
	
	@FindBy(how=How.LINK_TEXT, using="pricing + specs")
	public WebElement carPricingMenu;
	
	@FindBy(how=How.LINK_TEXT, using="guides")
	public WebElement carGuidesMenu;
	
	
	
	

}
