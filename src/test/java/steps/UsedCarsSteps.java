package steps;

import cucumber.api.java.en.And;
import pages.actions.UsedCarsSearchPageActions;

public class UsedCarsSteps {
	UsedCarsSearchPageActions usedActions= new UsedCarsSearchPageActions();
	@And("^click on Used menu$")
	public void click_on_Used_menu() throws Throwable {
	
		usedActions.clickUsedMenu();
	}

}
