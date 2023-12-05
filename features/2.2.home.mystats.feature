Feature: My analytics

    Background:
        Given I open landing page
        And I click sign in button of landing page
        And I fill sign in modal with "activated account creadentials"
        And I click proceed button of sign in modal
        And home page should be visible

    Scenario: I can access my analytics
        Then my stats should be visible