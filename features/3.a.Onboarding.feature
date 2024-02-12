Feature: Onboarding

    This feature provides means to onboard the product

    Background:
        Given I open home page

    # CORE CAPABILITIES
    # Sign up
    @sanity
    Scenario: I can open the sign up modal
        When I click sign up button from landing
        Then sign up modal should be visible
    @sanity
    Scenario: I can close the sign up modal
        And I click sign up button from landing
        When I click close button from sign up
        Then sign up modal should be hidden

    # STANDARD CAPABILITIES
    # Sign up
    @standard
    Scenario: I can't sign up without inputs
        And I click sign up button from landing
        When I click proceed button from sign up
        Then sign up modal should be visible
        And pseudo input should be in error from sign up
        And login input should be in error from sign up
        And password input should be in error from sign up
        And password repeat input should be in error from sign up
    @standard
    Scenario: I can't sign up with erroneous email
        And I click sign up button from landing
        And I fill sign up inputs with "erroneous email"
        When I click proceed button from sign up
        Then sign up modal should be visible
        And login input should be in error from sign up
    @standard
    Scenario: I can't sign up with missmatching passwords
        And I click sign up button from landing
        And I fill sign up inputs with "missmatching passwords"
        When I click proceed button from sign up
        Then sign up modal should be visible
        And password repeat input should be in error from sign up
    @standard
    Scenario: I can't sign up with existing credentials
        And I click sign up button from landing
        And I fill sign up inputs with "existing credentials"
        When I click proceed button from sign up
        Then sign up modal should be visible