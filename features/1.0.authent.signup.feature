Feature: Sign up

    Background:
        Given I open landing page


    Scenario: I can sign up with valid credentials

    Scenario: I can close the modal
        And I click sign up button of landing page
        When I click close button of sign up modal
        Then sign up modal should be hidden


    Scenario: I can't sign up without inputs
        And I click sign up button of landing page
        When I click proceed button of sign up modal
        Then sign up modal should be visible
        And pseudo should be in error in sign up modal
        And login should be in error in sign up modal
        And password should be in error in sign up modal
        And password repeat should be in error in sign up modal

    Scenario: I can't sign up with erroneous email
        And I click sign up button of landing page
        And I fill sign up modal with "erroneous email"
        When I click proceed button of sign up modal
        Then sign up modal should be visible
        And login should be in error in sign up modal

    Scenario: I can't sign up with missmatching passwords
        And I click sign up button of landing page
        And I fill sign up modal with "missmatching passwords"
        When I click proceed button of sign up modal
        Then sign up modal should be visible
        And password repeat should be in error in sign up modal

    Scenario: I can't sign up with existing credentials
        And I click sign up button of landing page
        And I fill sign up modal with "existing credentials"
        When I click proceed button of sign up modal
        Then sign up modal should be visible