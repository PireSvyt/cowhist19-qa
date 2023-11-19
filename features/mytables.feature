Feature: Sign in modal

    Background:
        Given I opened the landing page
        And I signed in with activated account creadentials

    Scenario: New table modal can be open
        When I click the new table call to action of my tables
        Then the table modal should be open