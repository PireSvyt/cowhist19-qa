Feature: Sign in modal

    Background:
        Given I opened the landing page

    Scenario: Closing modal
        And I opened the sign in modal
        When I click the cancel call to action of the sign in modal
        Then the sign in modal should be closed

    Scenario: Sign in attempt with empty inputs
        And I opened the sign in modal
        When I click the sign in call to action of the sign in modal
        Then the sign in modal should be open
        And the sign in modal login field should be in error
        And the sign in modal password field should be in error

    Scenario: Sign in attempt with erroneous email inputs
        And I opened the sign in modal
        And I filled the sign in modal login field with an erroneous email
        When I click the sign in call to action of the sign in modal
        Then the sign in modal should be open
        And the sign in modal login field should be in error

    Scenario: Sign in attempt with unknown email inputs
        And I opened the sign in modal
        And I filled the sign in modal with random credentials
        When I click the sign in call to action of the sign in modal
        Then the sign in modal should be open
        And the sign in modal login field should be in error
        And the sign in modal password field should not be in error

    Scenario: Sign in attempt with invalid password
        And I opened the sign in modal
        And I filled in the sign in modal with activated account creadentials but invalid password
        When I click the sign in call to action of the sign in modal
        Then the sign in modal should be open
        And the sign in modal password field should not be in error

    Scenario: Sign in attempt with inactive account
        And I opened the sign in modal
        And I filled in the sign in modal with inactive account creadentials
        When I click the sign in call to action of the sign in modal
        Then the sign in modal should be open
        And the sign in modal send activation call to action should be visible

    Scenario: Sign in attempt with valid credentials
        And I opened the sign in modal
        And I filled in the sign in modal with activated account creadentials
        When I click the sign in call to action of the sign in modal
        Then the sign in modal should be closed
        And I should be connected