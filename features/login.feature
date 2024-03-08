Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the homepage page
    When I click on close cookies button
    And I click on the navigation ellipses
    When I click on the sign in text within the expanded navigation
    Then I expect the sign in modal will be displayed