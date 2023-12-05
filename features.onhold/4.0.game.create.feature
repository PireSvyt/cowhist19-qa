Feature: Game create

    Background:
        Given I open landing page
        And I click sign in button of landing page
        And I fill sign in modal with "activated account creadentials"
        And I click proceed button of sign in modal
        And I click "Table without guest" from my tables
        And table page should be visible
        And I click new game button of table page
        And game modal should be visible

    Scenario: I can close the modal
        When I click cancel button of game modal 
        Then game modal should be hidden

    Scenario: I can save a valid game
        Given I fill game modal with "valid game inputs"
        When I click save button of game modal
        Then game modal should be hidden