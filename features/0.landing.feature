Feature: Landing

    Background:
        Given I opened the landing page


    Scenario: I can open the sign in modal
        When I click the sign up call to action of the landing page
        Then the sign up modal should be open

    Scenario: I can open the sign up modal
        When I click the sign in call to action of the landing page
        Then the sign in modal should be open

    
    Scenario: I can access the carousel
    
    Scenario: I can access documentation page
        Given I clicked the appbar menu
        When I click the documentation from the menu
        Then the documentation page should be open
    
    Scenario: I can access about page
        Given I clicked the appbar menu
        When I click the about from the menu
        Then the about page should be open