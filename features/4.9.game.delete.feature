Feature: Game delete

    Background:
        Given I opened to one of my tables
        And I opened the table history

    Scenario: I am asked to confirm to delete a game
        And I navigate to the table history
        When I delete a game
        Then I shoudl be asked to confirm game deletion

    Scenario: I can delete a game
        And I navigate to the table history
        And I delete a game
        When I confirm game deletion
        Then the game shall be deleted