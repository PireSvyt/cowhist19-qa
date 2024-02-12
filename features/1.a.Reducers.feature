Feature: Reducers

    Reducers consist in sets of steps for easier scenario definition
    This feature enables to check if any reducer is malfunctioning
    They are sorted by order of usage in the test suite (to identify the weaklink easily)

    @reducers
    Scenario: REDUCER: I sign in with {string} - RED
        Given I open home page
        And my home should be hidden
        When I sign in with 'activated account creadentials' - RED
        Then my home should be visible

    @reducers
    Scenario: REDUCER: I create a table with {string} - RED
        # May fail in case table was not previously deleted
        And I sign in with "activated account creadentials" - RED
        And if existing, I delete a table with "a brand new name" - RED
        When I create a table with "a brand new name" - RED
        Then table page should be visible
        And title of app bar should be "A brand new table"
        And if existing, I delete a table with "a brand new name" - RED

    @reducers
    Scenario: REDUCER: if existing, I delete a table with {string} - RED

    @reducers
    Scenario: REDUCER: I open table {string} - RED

    @reducers
    Scenario: REDUCER: I invite player {string} - RED
        Given I sign in with 'activated account creadentials' - RED
        And my home should be visible
        And my tables should be visible
        And I click new table button from my tables
        When I invite player "Games.Player 1" - RED
        Then players list from table should contain "Games.Player 1" by "text"


        