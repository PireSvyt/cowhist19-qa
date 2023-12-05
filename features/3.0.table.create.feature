Feature: Table create

    Background:
        Given I open landing page
        And I click sign in button of landing page
        And I fill sign in modal with "activated account creadentials"
        And I click proceed button of sign in modal
        And I click new table button of my tables
        

    Scenario: I am by default among the players
        Then players should contain "Testing user" by "text"

    Scenario: I can close the new table modal
        When I click cancel button of table modal
        Then table modal should be hidden
        
    Scenario: I can create a new table with valid inputs
        And I fill table modal with "valid inputs"
        When I click save button of table modal
        Then table modal should be hidden
        And table page should be visible
        
    Scenario: I can remove a player
        When I click remove player "Testing user" by "label" button of players
        Then players should be empty
        
    Scenario: I can add a player
        And I click remove player "Testing user" by "label" button of players
        And I click invite player button of table modal
        And I fill invite modal with "valid inputs"
        When I click invite button of invite modal
        Then invite modal should be hidden
        And players should not be empty


    Scenario: I can't create a table without inputs
        When I click save button of table modal
        Then table modal should be visible
        And name should be in error in table modal

    Scenario: I can't create a table without users
        And I click remove player "Testing user" by "label" button of players
        And players should be empty
        And error on creating without user should be visible
        When I click save button of table modal
        Then table modal should be visible