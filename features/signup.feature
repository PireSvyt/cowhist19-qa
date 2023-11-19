Feature: Sign up modal

    Background:
        Given I opened the landing page

    Scenario: Closing modal
        And I opened the sign up modal
        When I click the cancel call to action of the sign up modal
        Then the sign up modal should be closed

    Scenario: Sign up attempt with empty inputs
        And I opened the sign up modal
        When I click the sign up call to action of the sign up modal
        Then the sign up modal should be open
        And the sign up modal pseudo field should be in error
        And the sign up modal login field should be in error
        And the sign up modal password field should be in error
        And the sign up modal password repeat field should be in error

    Scenario: Sign up attempt with erroneous email inputs
        And I opened the sign up modal
        And I filled the sign up modal login field with an erroneous email
        When I click the sign up call to action of the sign up modal
        Then the sign up modal login field should be in error

    Scenario: Sign up attempt with missmatching passwords
        And I opened the sign up modal
        And I filled in the sign up modal with missmatching passwords
        When I click the sign up call to action of the sign up modal
        Then the sign up modal password repeat field should be in error

    Scenario: Sign up attempt with existing credentials

    Scenario: Sign up attempt with valid credentials