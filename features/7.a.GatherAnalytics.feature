Feature: Gather analytics

    This feature enables user to interact with product to gather analytics

    Background:
        Given I sign in with "activated account creadentials" - RED

    # CORE
    @sanity
    Scenario: I can access my analytics from home
        Then my stats should be visible
    @sanity
    Scenario: I can see the table analytics when reaching a table
        And I click item 0 of tables list from my tables
        And table page should be visible
        Then analytics tab should be visible

    # STANDARD CAPABILITIES
    @standard
    Scenario: I can open the graph view
    @standard
    Scenario: I can highlight another player in the graph view
    @standard
    Scenario: I can open the ranking view
    