Feature: Sign up

    Background:
        Given I opened the landing page


    Scenario: I can sign up with valid credentials

    Scenario: I can close the modal
        And I opened the sign up modal
        When I click the cancel call to action of the sign up modal
        Then the sign up modal should be closed


    Scenario: I can't sign up without inputs
        And I opened the sign up modal
        When I click the sign up call to action of the sign up modal
        Then the sign up modal should be open
        And the sign up modal pseudo field should be in error
        And the sign up modal login field should be in error
        And the sign up modal password field should be in error
        And the sign up modal password repeat field should be in error

    Scenario: I can't sign up with erroneous email
        And I opened the sign up modal
        And I filled the sign up modal login field with an erroneous email
        When I click the sign up call to action of the sign up modal
        Then the sign up modal login field should be in error

    Scenario: I can't sign up with missmatching passwords
        And I opened the sign up modal
        And I filled in the sign up modal with missmatching passwords
        When I click the sign up call to action of the sign up modal
        Then the sign up modal password repeat field should be in error

    Scenario: I can't sign up with existing credentials
        And I filled in the sign up modal with existing credentials
        When I click the sign up call to action of the sign up modal
        Then the sign up modal should be open