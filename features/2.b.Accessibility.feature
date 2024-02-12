Feature: Accessibility

    This feature provides tollgate on accessibility per standards

    # Home page
    @sanity @standard
    Scenario: Home page meets expectations, even unsigned
        Given I open home page
        When showroom should be visible
        Then usability is acceptable
    @sanity @standard
    Scenario: When authenticated, home page meets expectations
        Given I sign in with "activated account creadentials" - RED
        When my tables should be visible
        Then usability is acceptable

    # Sign up
    @sanity @standard
    Scenario: Sign up modal meets expectations
        Given I open home page
        And I click sign up button from landing
        When sign up modal should be visible
        Then usability is acceptable

    # Sign in
    @sanity @standard
    Scenario: Sign in modal meets expectations
        Given I open home page
        And I click sign in button from landing
        When sign in modal should be visible
        Then usability is acceptable

    # Table
    @sanity @standard
    Scenario: Table modal meets expectations
        Given I sign in with "activated account creadentials" - RED
        And my tables should be visible
        And I click new table button from my tables
        When table modal should be visible
        Then usability is acceptable
    @sanity @standard
    Scenario: Analytics tab from table page meets expectations
        Given I sign in with "activated account creadentials" - RED
        And my tables should be visible
        And I click item 0 of tables list from my tables
        When table page should be visible
        Then usability is acceptable
    @sanity @standard
    Scenario: History tab from table page meets expectations
        Given I sign in with "activated account creadentials" - RED
        And my tables should be visible
        And I click item 0 of tables list from my tables
        And table page should be visible
        And I click to history tab button from granted access
        When table history should be visible
        Then usability is acceptable

    # Invite
    @sanity @standard
    Scenario: Invite modal meets expectations
        Given I sign in with "activated account creadentials" - RED
        And my tables should be visible
        And I click new table button from my tables
        And table modal should be visible
        And I click invite player button from table
        When invite modal should be visible
        Then usability is acceptable

    # Game
    @sanity @standard
    Scenario: Game modal meets expectations
        Given I sign in with "activated account creadentials" - RED
        And my tables should be visible
        And I click item 0 of tables list from my tables
        And table page should be visible
        And I click new game button from table
        When game modal should be visible
        Then usability is acceptable

    # Help
    @sanity @standard
    Scenario: Help page meets expectations

    # About
    @sanity @standard
    Scenario: About page meets expectations

    # My account
    @sanity @standard
    Scenario: My account page meets expectations

    # Contact
    @sanity @standard
    Scenario: Contact modal meets expectations