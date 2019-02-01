package steps;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.actions.CarGuideHomePageActions;
import pages.actions.CarSearchPageActions;
import utils.SeleniumDriver;

public class SearchCarsSteps {
	
	CarSearchPageActions cSPA=new CarSearchPageActions();
	CarGuideHomePageActions cGHPA=new CarGuideHomePageActions();

	@Given("^I am on the homepage \"([^\"]*)\"$")
	public void i_am_on_the_homepage(String url) throws Throwable {
		SeleniumDriver.openPage(url);

	}

	@When("^I move to the menu$")
	public void i_move_to_the_menu(List<String> list) throws Throwable {
		String menu=list.get(1);
		System.out.println("Selected menu is :"+menu);
		cGHPA.movetoBuySellMenu();
	}

	@And("^click on \"([^\"]*)\" menu$")
	public void click_on_menu(String searchCars) throws Throwable {
		cGHPA.clickOnSearchMenu();
		
	}

	@And("^I select the make as \"([^\"]*)\" from anymake dropdown$")
	public void i_select_the_make_as_from_anymake_dropdown(String Make) throws Throwable {
		cSPA.selectMake(Make);
	}

	@And("^I select the model as \"([^\"]*)\" from select model dropdown$")
	public void i_select_the_model_as_from_select_model_dropdown(String Model) throws Throwable {
		cSPA.selectModel(Model);
	}

	@When("^I select location as \"([^\"]*)\" from select location dropdown$")
	public void i_select_location_as_from_select_location_dropdown(String location) throws Throwable {
		cSPA.selectLocation(location);
	}

	@When("^I select the price as \"([^\"]*)\" price dropdown$")
	public void i_select_the_price_as_price_dropdown(String maxPrice) throws Throwable {
		cSPA.selectMaxPrice(maxPrice);
	}

	@And("^I click on find_my_next_car button$")
	public void i_click_on_find_my_next_car_button() throws Throwable {
		cSPA.clickOnFindCars();
	}

	@Then("^I should see the list of cars as \"([^\"]*)\"$")
	public void i_should_see_the_list_of_cars_as(String title) throws Throwable {
		System.out.println("Search title contains "+title+": "+ cSPA.isSearchTitleText(title));
		System.out.println("Search title: "+cSPA.GetSearchTitle());
	   Assert.assertTrue(cSPA.isSearchTitleText(title));
	}

	@And("^I sould see the page title should be \"([^\"]*)\"$")
	public void i_sould_see_the_page_title_should_be(String pageTitle) throws Throwable {
		System.out.println("Page title contains "+pageTitle+": "+ cSPA.getPageTitle(pageTitle));
		System.out.println(SeleniumDriver.getDriver().getTitle());
		//Assert.assertTrue(SeleniumDriver.getDriver().getTitle().contains(pageTitle));
	Assert.assertTrue(cSPA.getPageTitle(pageTitle));
		
	}

}
