Feature: Table save

    Background:
        Given I open landing page
        And I click sign in button of landing page
        And I fill sign in modal with "activated account creadentials"
        And I click proceed button of sign in modal
        And home page should be visible
        And I click "Table without guest" by "text" from my tables
        And table page should be visible
        And I click edit table button of app bar
        And table modal should be visible     


    Scenario: I am by default among the players
        Then players should contain "Testing user" by "text"

    Scenario: I can close the table modal
        When I click cancel button of table modal
        Then table modal should be hidden

    Scenario: I can rename the table and save

    Scenario: I can remove a player and save

    Scenario: I can add a player and save
    
    Scenario: I can change the number of guests and save

    Scenario: I can delete the table
    