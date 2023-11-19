Feature: Sign in

    Background:
        Given I opened the landing page
        And I opened the sign in modal


    Scenario: I can sign in
        And I filled in the sign in modal with activated account creadentials
        When I click the sign in call to action of the sign in modal
        Then the sign in modal should be closed
        And I should be connected

    Scenario: I can close the modal
        When I click the cancel call to action of the sign in modal
        Then the sign in modal should be closed
        

    Scenario: I can't sign in without creadentials
        When I click the sign in call to action of the sign in modal
        Then the sign in modal should be open
        And the sign in modal login field should be in error
        And the sign in modal password field should be in error

    Scenario: I can't sign in without erroneous creadentials
        And I filled the sign in modal login field with an erroneous email
        When I click the sign in call to action of the sign in modal
        Then the sign in modal should be open
        And the sign in modal login field should be in error

    Scenario: I can't sign in without unknown creadentials
        And I filled the sign in modal with random credentials
        When I click the sign in call to action of the sign in modal
        Then the sign in modal should be open
        And the sign in modal login field should be in error
        And the sign in modal password field should not be in error

    Scenario: I can't sign in without invalid password
        And I filled in the sign in modal with activated account creadentials but invalid password
        When I click the sign in call to action of the sign in modal
        Then the sign in modal should be open
        And the sign in modal password field should not be in error

    Scenario: I can't sign in with an inactive account
        And I filled in the sign in modal with inactive account creadentials
        When I click the sign in call to action of the sign in modal
        Then the sign in modal should be open
        And the sign in modal send activation call to action should be visible