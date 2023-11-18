Feature: Sign in modal

    Scenario: Closing modal
        Given I opened the sign in modal
        When I click the cancel call to action of the sign in modal
        Then the sign in modal should be closed

    Scenario: Sign in attempt with empty inputs
        Given I opened the sign in modal
        When I click the sign in call to action of the sign in modal
        Then the sign in modal should be open
        Then the sign in modal login field should be in error
        Then the sign in modal password field should be in error

    Scenario: Sign in attempt with erroneous email inputs
        Given I opened the sign in modal
        Given I set the sign in modal login field with an erroneous email
        When I click the sign in call to action of the sign in modal
        Then the sign in modal should be open
        Then the sign in modal login field should be in error

    Scenario: Sign in attempt with unknown email inputs
        Given I opened the sign in modal
        Given I set the sign in modal login field with a random email
        Given I set the sign in modal password field with a random password
        When I click the sign in call to action of the sign in modal
        Then the sign in modal should be open
        Then the sign in modal login field should be in error
        Then the sign in modal password field should not be in error

    Scenario: Sign in attempt with invalid password
        Given I opened the sign in modal
        Given I fill in the sign in modal with activated account creadentials but invalid password
        When I click the sign in call to action of the sign in modal
        Then the sign in modal should be open
        Then the sign in modal password field should not be in error


    Scenario: Sign in attempt with inactive account
        Given I opened the sign in modal
        Given I fill in the sign in modal with inactive account creadentials
        When I click the sign in call to action of the sign in modal
        Then the sign in modal should be open

    Scenario: Sign in attempt with valid credentials
        Given I opened the sign in modal
        Given I fill in the sign in modal with activated account creadentials
        When I click the sign in call to action of the sign in modal
        Then the sign in modal should be closed
        Then I should be connected