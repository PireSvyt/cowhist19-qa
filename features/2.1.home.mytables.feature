Feature: My tables

    Background:
        Given I opened the landing page
        And I signed in with activated account creadentials

    Scenario: I can open the new table modal
        When I click the new table call to action of my tables
        Then the table modal should be open

    Scenario: I can reach my tables
        When I click the card of one of my tables
        Then the table page is open