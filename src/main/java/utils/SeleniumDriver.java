package utils;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SeleniumDriver {//SINGLETON CLASS

	private static SeleniumDriver seleniumDriver;
	
	//initialize webdriver
	private static WebDriver driver;
	
	private static WebDriverWait waitDriver;
	public final static int TIMEOUT= 30;
	public final static int PAGE_LOAD_TIMEOUT= 40;
	
	private SeleniumDriver() {
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\src\\test\\resources\\executables\\chromedriver.exe");

		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		waitDriver= new WebDriverWait(driver,TIMEOUT);
		
	}
	
	public static void openPage(String URL) {
	driver.get(URL);	
	}
	public static WebDriver getDriver() {
		
		return driver;
		
	}
	public static void setUpDriver() {// each time called it will create seleniumDriver object if null
	
		if(seleniumDriver==null) {
			seleniumDriver=new SeleniumDriver();
		}
	}
	public static void tearDown() {
		if (driver!=null) {
			driver.close();
			driver.quit();
		}
		seleniumDriver=null;
		
	}
	
	
}
