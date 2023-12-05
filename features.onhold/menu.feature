Feature: Menu

    Background:
        Given I opened the landing page

    Scenario: I can access documentation from the menu, even unsigned
        When I click the appbar menu
        Then the appbar menu should be open
        And the appbar menu should contain the documentation options
        And the appbar menu should not contain the authenticated user options

    Scenario: I can access authenticated menu items when signed
        And I signed in with activated account creadentials
        When I click the appbar menu
        Then the appbar menu should be open
        And the appbar menu should contain the documentation options
        And the appbar menu should contain the authenticated user options

