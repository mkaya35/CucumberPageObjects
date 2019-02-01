package steps;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import utils.SeleniumDriver;

public class BeforeActions {
	
	@Before
	public static void setUp(){
		
		SeleniumDriver.setUpDriver();
	}

}
