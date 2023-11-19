Feature: Menu component

    Background:
        Given I opened the landing page

    Scenario: Menu contains documentation even unsigned
        When I click the appbar menu
        Then the appbar menu should be open
        And the appbar menu should contain the documentation options
        And the appbar menu should not contain the authenticated user options

    Scenario: Menu contains all available options when signed in
        And I signed in with activated account creadentials
        When I click the appbar menu
        Then the appbar menu should be open
        And the appbar menu should contain the documentation options
        And the appbar menu should contain the authenticated user options

