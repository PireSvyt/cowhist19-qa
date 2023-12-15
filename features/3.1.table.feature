Feature: Table

    Background:
        Given I open landing page
        And I click sign in button of landing page
        And I fill sign in modal with "activated account creadentials"
        And I click proceed button of sign in modal
        And home page should be visible
        And I click "Table without guest" by "text" from my tables
        And table page should be visible

    Scenario: I see the table analytics by default
        Then table analytics should be visible

    Scenario: I can open the table history
        When I click to history tab button of table page
        Then history tab should be visible

    Scenario: I can open the table analytics
        When I click to history tab button of table page
        When I click to analytics tab button of table page
        Then analytics tab should be visible

    Scenario: I can open a new game modal
        When I click new game button of table page
        Then game modal should be visible

    Scenario: I can open the edit table modal
        When I click edit table button of app bar
        Then table modal should be visible        

    Scenario: I can open the graph view

    Scenario: I can highlight another player in the graph view

    Scenario: I can open the ranking view

