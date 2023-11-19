Feature: Table

    Background:
        Given I opened to one of my tables

    Scenario: I see the table analytics by default
        Then I should access the table analytics

    Scenario: I can open the table history
        When I navigate to the table history
        Then I should access the table history

    Scenario: I can open the table analytics
        And I navigated to the table history
        When I navigate to the table analytics
        Then I should access the table analytics

    Scenario: I can open a new game modal
        When I click the new game call to action
        Then the game modal should be open

    Scenario: I can open the graph view

    Scenario: I can highlight another player in the graph view

    Scenario: I can open the ranking view

