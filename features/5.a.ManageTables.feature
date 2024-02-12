Feature: Manage tables

    This feature enables to create, navigate to, update and delete tables

    Background:
        Given I sign in with "activated account creadentials" - RED

    # CORE CAPABILITIES
    @sanity
    Scenario: I am by default among the players
        When I click new table button from my tables
        Then players list from table should contain "Testing user" by "text"
    @sanity
    Scenario: I can close the new table modal
        And I click new table button from my tables
        And table modal should be visible
        When I click cancel button from table
        Then table modal should be hidden
    @sanity
    Scenario: I can create a table with "valid inputs"
        And I click new table button from my tables
        And I fill table inputs with "valid inputs"
        When I click save button from table
        Then table modal should be hidden
        And table page should be visible
    @sanity
    Scenario: I can navigate to an existing table
        And my tables should be visible
        And I click item 0 of tables list from my tables
        And table page should be visible
    @sanity
    Scenario: I can navigate back home from an existing table
        And my tables should be visible
        And I click item 0 of tables list from my tables
        And table page should be visible
        And I click open menu button from app bar
        When I click item 0 of app bar menu list from app bar
        Then my home should be visible
    @sanity
    Scenario: I can open the table edit modal
        And my tables should be visible
        And I click item 0 of tables list from my tables
        And table page should be visible
        When I click edit table button from app bar
        Then table modal should be visible 
    @sanity
    Scenario: I can edit the table
    @sanity
    Scenario: I can remove a player
            # I can add a player is covered by invite player feautre
        And my tables should be visible
        When I click remove player "0" by "index" button from players
        Then players list from table should be empty
    @sanity
    Scenario: I can delete an existing table
        And my tables should be visible
        And I click item 0 of tables list from my tables
        And table page should be visible
        And I click edit table button from app bar
        And table modal should be visible 
        And I click remove player "0" by "index" button from players
        And players list from table should be empty
        And error on saving without user should be visible
        And I click save button from table
        And confirm modal should be visible
        When I click item 1 of call to actions list from confirm
        Then home page should be visible
        And my tables should be visible
    @sanity    
    Scenario: I can open the table history
        And my tables should be visible
        And I click item 0 of tables list from my tables
        And table page should be visible
        When I click to history tab button from granted access
        Then history tab should be visible
    @sanity    
    Scenario: I can open the table analytics
        And my tables should be visible
        And I click item 0 of tables list from my tables
        And table page should be visible
        When I click to history tab button from granted access
        And I click to analytics tab button from granted access
        Then analytics tab should be visible
    @sanity    
    Scenario: I can open a new game modal
        And my tables should be visible
        And I click item 0 of tables list from my tables
        And table page should be visible
        When I click new game button from table
        Then game modal should be visible

    # STANDARD CAPABILITIES
    @standard
    Scenario: I can't create a table without a name
        And I click new table button from my tables
        And I fill table inputs with "an empty name"
        When I click save button from table
        Then table modal should be visible
        And name input should be in error from table
    @standard
    Scenario: I can't create a table with an already existing name
        And if existing, I delete a table with "an existing name" - RED
        And I create a table with "an existing name" - RED
        And I open home page
        And I click new table button from my tables
        And I fill table inputs with "an existing name"
        When I click save button from table
        Then table modal should be visible
        And name input should be in error from table
    @standard
    Scenario: I can't create a table without being part of the players
        And I click new table button from my tables
        And I fill table inputs with "an existing name"
        And I click remove player "0" by "index" button from players
        When I click save button from table
        Then table modal should be visible
        And error on creating without user should be visible

        

