Feature: Game create

    Background:
        Given I opened the game modal

    Scenario: I can close the modal
        When I click the cancel call to action of the game modal
        Then the game modal should be closed

    Scenario: I can save a valid game
        When I click the save game call to action
        Then the game modal should be closed
        And the game should be saved