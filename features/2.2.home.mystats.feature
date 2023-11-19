Feature: My analytics

    Background:
        Given I opened the landing page
        And I signed in with activated account creadentials

    Scenario: I can access my analytics
        Then my user analytics are displayed