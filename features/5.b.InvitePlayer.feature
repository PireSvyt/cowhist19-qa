Feature: Invite player

    This feature enables to invite a player to a table

    Background:
        Given I sign in with "activated account creadentials" - RED
        And I click new table button from my tables
        And I click invite player button from table
        

    # CORE CAPABILITIES
    @sanity
    Scenario: I can invite a player
        And I fill invite inputs with "valid inputs"
        And I fill invite checkboxes with "valid inputs"
        When I click invite button from invite
        Then invite modal should be hidden
        And table modal should be visible
        And players list from table should contain "1" by "index"
    @sanity
    Scenario: I can close the invite modal
        When I click cancel button from invite
        Then invite modal should be hidden


    # STANDARD CAPABILITIES
    @standard
    Scenario: I can't invite without creadentials
        When I click invite button from invite
        Then invite modal should be visible
        And pseudo input should be in error from invite
        And login input should be in error from invite
    @standard
    Scenario: I can't invite without erroneous creadentials
        And I fill invite inputs with "erroneous email"
        And I fill invite checkboxes with "erroneous email"
        When I click invite button from invite
        Then invite modal should be visible
        And login input should be in error from invite
    @standard
    Scenario: I can't invite without pseudo
        And I fill invite inputs with "missing pseudo"
        And I fill invite checkboxes with "missing pseudo"
        When I click invite button from invite
        Then invite modal should be visible
        And pseudo input should be in error from invite
        And login input should not be in error from invite
    @standard
    Scenario: I can't invite without without acknowledgement
        And I fill invite inputs with "missing acknowledgement"
        And I fill invite checkboxes with "missing acknowledgement"
        When I click invite button from invite
        Then invite modal should be visible
        And pseudo input should not be in error from invite
        And login input should not be in error from invite