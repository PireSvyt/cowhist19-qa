Feature: Landing page

    Scenario: Sign up modal can be open of landing page
        Given I am on landing page
        When I click the sign up call to action of the landing page
        Then the sign up modal should be open

    Scenario: Sign in modal can be open of landing page
        Given I am on landing page
        When I click the sign in call to action of the landing page
        Then the sign in modal should be open
