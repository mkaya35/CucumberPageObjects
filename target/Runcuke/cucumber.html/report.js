$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchNewCars.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testin to validate search cars",
  "description": "to validate search car  is working fine\r\nacceptance test",
  "id": "acceptance-testin-to-validate-search-cars",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Search-Cars"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "validate  search cars feature",
  "description": "",
  "id": "acceptance-testin-to-validate-search-cars;validate--search-cars-feature",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Search-Cars-Positive"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the homepage \"https://www.carsguide.com.au/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I move to the menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 10
    },
    {
      "cells": [
        "Buy+Sell"
      ],
      "line": 11
    },
    {
      "cells": [
        "reviews"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "click on \"Search Cars\" menu",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the make as \"\u003cmake\u003e\" from anymake dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the model as \"\u003cmodel\u003e\" from select model dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select location as \"\u003clocation\u003e\" from select location dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select the price as \"\u003cprice\u003e\" price dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on find_my_next_car button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see the list of cars as \"\u003cmake\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I sould see the page title should be \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "acceptance-testin-to-validate-search-cars;validate--search-cars-feature;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 23,
      "id": "acceptance-testin-to-validate-search-cars;validate--search-cars-feature;;1"
    },
    {
      "cells": [
        "BMW",
        "1 SERIES",
        "Australia",
        "$10,000"
      ],
      "line": 24,
      "id": "acceptance-testin-to-validate-search-cars;validate--search-cars-feature;;2"
    },
    {
      "cells": [
        "KIA",
        "RIO",
        "ACT - All",
        "$15,000"
      ],
      "line": 25,
      "id": "acceptance-testin-to-validate-search-cars;validate--search-cars-feature;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6997484209,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "validate  search cars feature",
  "description": "",
  "id": "acceptance-testin-to-validate-search-cars;validate--search-cars-feature;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Search-Cars"
    },
    {
      "line": 6,
      "name": "@Search-Cars-Positive"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the homepage \"https://www.carsguide.com.au/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I move to the menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 10
    },
    {
      "cells": [
        "Buy+Sell"
      ],
      "line": 11
    },
    {
      "cells": [
        "reviews"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "click on \"Search Cars\" menu",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the make as \"BMW\" from anymake dropdown",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the model as \"1 SERIES\" from select model dropdown",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select location as \"Australia\" from select location dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select the price as \"$10,000\" price dropdown",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on find_my_next_car button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see the list of cars as \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I sould see the page title should be \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au/",
      "offset": 22
    }
  ],
  "location": "SearchCarsSteps.i_am_on_the_homepage(String)"
});
formatter.result({
  "duration": 13235010751,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 495432455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 10
    }
  ],
  "location": "SearchCarsSteps.click_on_menu(String)"
});
formatter.result({
  "duration": 16783523127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 22
    }
  ],
  "location": "SearchCarsSteps.i_select_the_make_as_from_anymake_dropdown(String)"
});
formatter.result({
  "duration": 612652618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 SERIES",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.i_select_the_model_as_from_select_model_dropdown(String)"
});
formatter.result({
  "duration": 1526778986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Australia",
      "offset": 22
    }
  ],
  "location": "SearchCarsSteps.i_select_location_as_from_select_location_dropdown(String)"
});
formatter.result({
  "duration": 475871418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$10,000",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.i_select_the_price_as_price_dropdown(String)"
});
formatter.result({
  "duration": 490517326,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_click_on_find_my_next_car_button()"
});
formatter.result({
  "duration": 14324979601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 34
    }
  ],
  "location": "SearchCarsSteps.i_should_see_the_list_of_cars_as(String)"
});
formatter.result({
  "duration": 878873314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 38
    }
  ],
  "location": "SearchCarsSteps.i_sould_see_the_page_title_should_be(String)"
});
formatter.result({
  "duration": 20603592,
  "status": "passed"
});
formatter.after({
  "duration": 902436406,
  "status": "passed"
});
formatter.before({
  "duration": 5735839940,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "validate  search cars feature",
  "description": "",
  "id": "acceptance-testin-to-validate-search-cars;validate--search-cars-feature;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Search-Cars"
    },
    {
      "line": 6,
      "name": "@Search-Cars-Positive"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the homepage \"https://www.carsguide.com.au/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I move to the menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 10
    },
    {
      "cells": [
        "Buy+Sell"
      ],
      "line": 11
    },
    {
      "cells": [
        "reviews"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "click on \"Search Cars\" menu",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the make as \"KIA\" from anymake dropdown",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the model as \"RIO\" from select model dropdown",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select location as \"ACT - All\" from select location dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select the price as \"$15,000\" price dropdown",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on find_my_next_car button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see the list of cars as \"KIA\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I sould see the page title should be \"KIA\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au/",
      "offset": 22
    }
  ],
  "location": "SearchCarsSteps.i_am_on_the_homepage(String)"
});
formatter.result({
  "duration": 11594114399,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 76427079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 10
    }
  ],
  "location": "SearchCarsSteps.click_on_menu(String)"
});
formatter.result({
  "duration": 6637525911,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KIA",
      "offset": 22
    }
  ],
  "location": "SearchCarsSteps.i_select_the_make_as_from_anymake_dropdown(String)"
});
formatter.result({
  "duration": 677684224,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RIO",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.i_select_the_model_as_from_select_model_dropdown(String)"
});
formatter.result({
  "duration": 456653820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 22
    }
  ],
  "location": "SearchCarsSteps.i_select_location_as_from_select_location_dropdown(String)"
});
formatter.result({
  "duration": 317680530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$15,000",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.i_select_the_price_as_price_dropdown(String)"
});
formatter.result({
  "duration": 360955062,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_click_on_find_my_next_car_button()"
});
formatter.result({
  "duration": 15899769027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KIA",
      "offset": 34
    }
  ],
  "location": "SearchCarsSteps.i_should_see_the_list_of_cars_as(String)"
});
formatter.result({
  "duration": 300437510,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KIA",
      "offset": 38
    }
  ],
  "location": "SearchCarsSteps.i_sould_see_the_page_title_should_be(String)"
});
formatter.result({
  "duration": 47374880,
  "status": "passed"
});
formatter.after({
  "duration": 1078587588,
  "status": "passed"
});
formatter.uri("UsedCarsSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testin to validate used search cars",
  "description": "to validate used search car  is working fine\r\nacceptance test",
  "id": "acceptance-testin-to-validate-used-search-cars",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Used-Search-Cars"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "validate used search cars feature",
  "description": "",
  "id": "acceptance-testin-to-validate-used-search-cars;validate-used-search-cars-feature",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Used-Search-Cars-Positive"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the homepage \"https://www.carsguide.com.au/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I move to the menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 10
    },
    {
      "cells": [
        "Buy+Sell"
      ],
      "line": 11
    },
    {
      "cells": [
        "reviews"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "click on Used menu",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the make as \"\u003cmake\u003e\" from anymake dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the model as \"\u003cmodel\u003e\" from select model dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select location as \"\u003clocation\u003e\" from select location dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select the price as \"\u003cprice\u003e\" price dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on find_my_next_car button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see the list of cars as \"\u003cmake\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I sould see the page title should be \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "acceptance-testin-to-validate-used-search-cars;validate-used-search-cars-feature;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 23,
      "id": "acceptance-testin-to-validate-used-search-cars;validate-used-search-cars-feature;;1"
    },
    {
      "cells": [
        "AUDI",
        "A4",
        "SA - All",
        "$10,000"
      ],
      "line": 24,
      "id": "acceptance-testin-to-validate-used-search-cars;validate-used-search-cars-feature;;2"
    },
    {
      "cells": [
        "KIA",
        "RIO",
        "ACT - All",
        "$15,000"
      ],
      "line": 25,
      "id": "acceptance-testin-to-validate-used-search-cars;validate-used-search-cars-feature;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5291571250,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "validate used search cars feature",
  "description": "",
  "id": "acceptance-testin-to-validate-used-search-cars;validate-used-search-cars-feature;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Used-Search-Cars"
    },
    {
      "line": 6,
      "name": "@Used-Search-Cars-Positive"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the homepage \"https://www.carsguide.com.au/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I move to the menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 10
    },
    {
      "cells": [
        "Buy+Sell"
      ],
      "line": 11
    },
    {
      "cells": [
        "reviews"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "click on Used menu",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the make as \"AUDI\" from anymake dropdown",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the model as \"A4\" from select model dropdown",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select location as \"SA - All\" from select location dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select the price as \"$10,000\" price dropdown",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on find_my_next_car button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see the list of cars as \"AUDI\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I sould see the page title should be \"AUDI\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au/",
      "offset": 22
    }
  ],
  "location": "SearchCarsSteps.i_am_on_the_homepage(String)"
});
formatter.result({
  "duration": 12966931141,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 89544485,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.click_on_Used_menu()"
});
formatter.result({
  "duration": 9182882197,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AUDI",
      "offset": 22
    }
  ],
  "location": "SearchCarsSteps.i_select_the_make_as_from_anymake_dropdown(String)"
});
formatter.result({
  "duration": 1007738437,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A4",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.i_select_the_model_as_from_select_model_dropdown(String)"
});
formatter.result({
  "duration": 1008575717,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SA - All",
      "offset": 22
    }
  ],
  "location": "SearchCarsSteps.i_select_location_as_from_select_location_dropdown(String)"
});
formatter.result({
  "duration": 681393369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$10,000",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.i_select_the_price_as_price_dropdown(String)"
});
formatter.result({
  "duration": 480714307,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_click_on_find_my_next_car_button()"
});
formatter.result({
  "duration": 10766183391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AUDI",
      "offset": 34
    }
  ],
  "location": "SearchCarsSteps.i_should_see_the_list_of_cars_as(String)"
});
formatter.result({
  "duration": 786824881,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AUDI",
      "offset": 38
    }
  ],
  "location": "SearchCarsSteps.i_sould_see_the_page_title_should_be(String)"
});
formatter.result({
  "duration": 20161464,
  "status": "passed"
});
formatter.after({
  "duration": 988083447,
  "status": "passed"
});
formatter.before({
  "duration": 4315805035,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "validate used search cars feature",
  "description": "",
  "id": "acceptance-testin-to-validate-used-search-cars;validate-used-search-cars-feature;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Used-Search-Cars"
    },
    {
      "line": 6,
      "name": "@Used-Search-Cars-Positive"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the homepage \"https://www.carsguide.com.au/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I move to the menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 10
    },
    {
      "cells": [
        "Buy+Sell"
      ],
      "line": 11
    },
    {
      "cells": [
        "reviews"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "click on Used menu",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the make as \"KIA\" from anymake dropdown",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the model as \"RIO\" from select model dropdown",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select location as \"ACT - All\" from select location dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select the price as \"$15,000\" price dropdown",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on find_my_next_car button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see the list of cars as \"KIA\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I sould see the page title should be \"KIA\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au/",
      "offset": 22
    }
  ],
  "location": "SearchCarsSteps.i_am_on_the_homepage(String)"
});
formatter.result({
  "duration": 13441957777,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 350398054,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.click_on_Used_menu()"
});
formatter.result({
  "duration": 12824352923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KIA",
      "offset": 22
    }
  ],
  "location": "SearchCarsSteps.i_select_the_make_as_from_anymake_dropdown(String)"
});
formatter.result({
  "duration": 852314801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RIO",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.i_select_the_model_as_from_select_model_dropdown(String)"
});
formatter.result({
  "duration": 927482997,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 22
    }
  ],
  "location": "SearchCarsSteps.i_select_location_as_from_select_location_dropdown(String)"
});
formatter.result({
  "duration": 463979734,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$15,000",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.i_select_the_price_as_price_dropdown(String)"
});
formatter.result({
  "duration": 498043778,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_click_on_find_my_next_car_button()"
});
formatter.result({
  "duration": 14562295343,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KIA",
      "offset": 34
    }
  ],
  "location": "SearchCarsSteps.i_should_see_the_list_of_cars_as(String)"
});
formatter.result({
  "duration": 200311543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KIA",
      "offset": 38
    }
  ],
  "location": "SearchCarsSteps.i_sould_see_the_page_title_should_be(String)"
});
formatter.result({
  "duration": 21291261,
  "status": "passed"
});
formatter.after({
  "duration": 3219732441,
  "status": "passed"
});
});