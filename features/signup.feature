Feature: Sign up modal

    Scenario: Closing modal
        Given I opened the sign up modal
        When I click the cancel call to action of the sign up modal
        Then the sign up modal should be closed

    Scenario: Sign up attempt with empty inputs
        Given I opened the sign up modal
        When I click the sign up call to action of the sign up modal
        Then the sign up modal should be open
        Then the sign up modal pseudo field should be in error
        Then the sign up modal login field should be in error
        Then the sign up modal password field should be in error
        Then the sign up modal password repeat field should be in error

    Scenario: Sign up attempt with erroneous email inputs
        Given I opened the sign up modal
        Given I set the sign up modal login field with an erroneous email
        When I click the sign up call to action of the sign up modal
        Then the sign up modal login field should be in error

    Scenario: Sign up attempt with missmatching passwords

    Scenario: Sign up attempt with existing credentials

    Scenario: Sign up attempt with valid credentials