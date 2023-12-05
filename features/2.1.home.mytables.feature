Feature: My tables

    Background:
        Given I open landing page
        And I click sign in button of landing page
        And I fill sign in modal with "activated account creadentials"
        And I click proceed button of sign in modal
        And home page should be visible

    Scenario: I can open the new table modal
        When I click new table button of my tables
        Then table modal should be visible

    Scenario: I can reach my tables
        When I click "Table without guest" by "text" from my tables
        Then table page should be visible