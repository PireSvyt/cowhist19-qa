Feature: Sign in

    Background:
        Given I open landing page
        And I click sign in button of landing page


    Scenario: I can sign in
        And I fill sign in modal with "activated account creadentials"
        When I click proceed button of sign in modal
        Then sign in modal should be hidden
        And home page should be visible

    Scenario: I can close the modal
        When I click close button of sign in modal
        Then sign in modal should be hidden
        

    Scenario: I can't sign in without creadentials
        When I click proceed button of sign in modal
        Then sign in modal should be visible
        And login should be in error in sign in modal
        And password should be in error in sign in modal

    Scenario: I can't sign in without erroneous creadentials
        And I fill sign in modal with "erroneous email"
        When I click proceed button of sign in modal
        Then sign in modal should be visible
        And login should be in error in sign in modal

    Scenario: I can't sign in without unknown creadentials
        And I fill sign in modal with "random credentials"
        When I click proceed button of sign in modal
        Then sign in modal should be visible
        And login should be in error in sign in modal
        And password should not be in error in sign in modal

    Scenario: I can't sign in with invalid password
        And I fill sign in modal with "activated account creadentials but invalid password"
        When I click proceed button of sign in modal
        Then sign in modal should be visible
        And password should be in error in sign in modal

    Scenario: I can't sign in with an inactive account
        And I fill sign in modal with "inactive account creadentials"
        When I click proceed button of sign in modal
        Then sign in modal should be visible
        And inactive account should be visible