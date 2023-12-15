Feature: Invite

    Background:
        Given I open landing page
        And I click sign in button of landing page
        And I fill sign in modal with "activated account creadentials"
        And I click proceed button of sign in modal
        And I click new table button of my tables
        And I click invite player button of table modal
        
        
    Scenario: I can invite a player
        And I fill invite modal with "valid inputs"
        When I click invite button of invite modal
        Then invite modal should be hidden
        And table modal should be visible

    Scenario: I can close the invite modal
        When I click cancel button of invite modal
        Then invite modal should be hidden
        

    Scenario: I can't invite without creadentials
        When I click invite button of invite modal
        Then invite modal should be visible
        And pseudo should be in error in invite modal
        And login should be in error in invite modal

    Scenario: I can't invite without erroneous creadentials
        And I fill invite modal with "erroneous email"
        When I click invite button of invite modal
        Then invite modal should be visible
        And login should be in error in invite modal

    Scenario: I can't invite without pseudo
        And I fill invite modal with "missing pseudo"
        When I click invite button of invite modal
        Then invite modal should be visible
        And pseudo should be in error in invite modal
        And login should not be in error in invite modal

    Scenario: I can't invite without without acknowledgement
        And I fill invite modal with "missing acknowledgement"
        When I click invite button of invite modal
        Then invite modal should be visible
        And pseudo should not be in error in invite modal
        And login should not be in error in invite modal
        

