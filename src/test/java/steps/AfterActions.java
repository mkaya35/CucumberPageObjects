package steps;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import utils.SeleniumDriver;

public class AfterActions {
	
	@After
	public static void tearDown(Scenario scenario) {
		if(scenario.isFailed()) {// this code will create report of when test fails
			byte[] screenShotBytes=((TakesScreenshot)SeleniumDriver.getDriver()).getScreenshotAs(OutputType.BYTES);
			scenario.embed(screenShotBytes, "image/png");
			}
		SeleniumDriver.tearDown();
	}

}
