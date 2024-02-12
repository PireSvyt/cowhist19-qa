Feature: Manage games

    This feature enables to create and delete games

    Background:
        Given I sign in with "activated account creadentials" - RED

    # CONTEXT
    @sanity @standard
    Scenario: CONTEXT: Create a table to support games related tests
        And I create a table with "intention to test game capabilities" - RED
        And I click edit table button from app bar
        And table modal should be visible
        And I fill table inputs with "Games.table"
        And I invite player "Games.Player 1" - RED
        And I invite player "Games.Player 2" - RED
        And I invite player "Games.Player 3" - RED
        When I click save button from table

    # CORE CAPABILITIES
    @sanity
    Scenario: I can close the modal
        And I open table "Games.table" - RED
        And I click new game button from table
        And game modal should be visible
        When I click cancel button from game 
        Then game modal should be hidden
    @sanity
    Scenario: I can save a valid game
        And I open table "Games.table" - RED
        And I click new game button from table
        And game modal should be visible
        And I click item '0' of contract dropdown list from contracts
        And I click item '0' of attack dropdown list from contracts
        And I click item '0' of attack dropdown list from contracts
        And I click item '0' of defense dropdown list from contracts
        And I click item '0' of defense dropdown list from contracts
        And I fill contracts sliders with "valid game inputs"
        When I click save button from game
        Then game modal should be hidden

    # STANDARD CAPABILITIES
    @standard
    Scenario: I can't save without contract

    Scenario: I can't save without the number of attackants

    Scenario: I can't save without the number of defenders

    Scenario: I can't save with an invalid outcome