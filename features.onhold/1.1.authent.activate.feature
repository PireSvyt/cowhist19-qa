Feature: Activation

    Scenario: I can't activate a random account
        Given I opened a random activation page

    Scenario: I can activate a signed up account
        Given I opened a signed up activation page
        Then the account should be activated