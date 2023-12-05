Feature: Landing

    Background:
        Given I open landing page


    Scenario: I can open the sign in modal
        When I click sign in button of landing page
        Then sign in modal should be visible

    Scenario: I can open the sign up modal
        When I click sign up button of landing page
        Then sign up modal should be visible

    
    Scenario: I can access the carousel
    
    Scenario: I can access documentation page
        Given I click open menu button of app bar
        When I click "help" from app bar menu
        Then help page should be visible
    
    Scenario: I can access about page
        Given I click open menu button of app bar
        When I click "about" by "text" from app bar menu
        Then about page should be visible