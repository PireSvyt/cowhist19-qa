Feature: App menu

    This feature provides a menu to navigate through the app

    Background:
        Given I open home page

    # CORE
    # Unsigned
    @sanity
    Scenario: I can access to some documentation, even unsigned
        When I click open menu button from app bar
        Then app bar menu list from app bar should contain "Help" by "text"
        And app bar menu list from app bar should contain "About" by "text"
        And I click item 0 of app bar menu list from app bar
        And help page should be visible
        Then title of app bar should be "Help"
    
    # Authenticated
    @sanity
    Scenario: When authenticated, I have access to much more
        And I sign in with "activated account creadentials" - RED
        When I click open menu button from app bar
        Then app bar menu list from app bar should contain "My account" by "text"
        And app bar menu list from app bar should contain "Help" by "text"
        And app bar menu list from app bar should contain "About" by "text"
        And app bar menu list from app bar should contain "Contact" by "text"
        And app bar menu list from app bar should contain "Sign out" by "text"
    @sanity
    Scenario: When authenticated, I can access my account
        And I sign in with "activated account creadentials" - RED
        And I click open menu button from app bar
        When I click item 0 of app bar menu list from app bar
        Then account page should be visible
        And title of app bar should be "My account"
    @sanity
    Scenario: When authenticated, I can sign out
        And I sign in with "activated account creadentials" - RED
        And I click open menu button from app bar
        When I click item 4 of app bar menu list from app bar
        Then my home should be hidden
    @sanity
    Scenario: The app menu allows me to come back to home page
        And I sign in with "activated account creadentials" - RED
        And my tables should be visible
        And I click item 0 of tables list from my tables
        And table page should be visible
        And I click open menu button from app bar
        When I click item 0 of app bar menu list from app bar
        Then my home should be visible

    # OTHER
    @standard @todo
    Scenario: The app menu allows to go to admin page for admin