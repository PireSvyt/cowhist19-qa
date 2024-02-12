Feature: Authent

    This feature provides a secured access to the product

    Background:
        Given I open home page

    # CORE CAPABILITIES
    # Sign in
    @sanity
    Scenario: I can open the sign in modal
        When I click sign in button from landing
        Then sign in modal should be visible
    @sanity
    Scenario: I can close the sign in modal
        And I click sign in button from landing
        When I click close button from sign in
        Then sign in modal should be hidden
    @sanity
    Scenario: Sign in modal grants access with valid credentials
        And I click sign in button from landing
        And I fill sign in inputs with "activated account creadentials"
        When I click proceed button from sign in
        Then my home should be visible
        And sign in modal should be hidden
    @standard
    Scenario: Sign in modal provides feedback when proceeding with invalid password
        And I click sign in button from landing
        And I fill sign in inputs with "activated account creadentials but invalid password"
        When I click proceed button from sign in
        Then sign in modal should be visible
        And password input should be in error from sign in

    # Sign out
    @sanity
    Scenario: I can sign out
        Given I sign in with "activated account creadentials" - RED
        And I click open menu button from app bar
        When I click item 4 of app bar menu list from app bar
        Then my home should be hidden

    # STANDARD CAPABILITIES
    # Sign in
    @standard
    Scenario: Sign in modal provides feedback when proceeding without creadentials
        And I click sign in button from landing
        Then sign in modal should be visible
        And I click proceed button from sign in
        Then sign in modal should be visible
        And login input should be in error from sign in
        And password input should be in error from sign in
    @standard
    Scenario: Sign in modal provides feedback when proceeding with erroneous creadentials
        And I click sign in button from landing
        And I fill sign in inputs with "erroneous email"
        When I click proceed button from sign in
        Then sign in modal should be visible
        And login input should be in error from sign in
    @standard
    Scenario: Sign in modal provides feedback when proceeding with unknown creadentials
        And I click sign in button from landing
        And I fill sign in inputs with "random credentials"
        When I click proceed button from sign in
        Then sign in modal should be visible
        And login input should be in error from sign in
        And password input should not be in error from sign in
    @standard
    Scenario: Sign in modal provides feedback when proceeding with inactive account
        And I click sign in button from landing
        And I fill sign in inputs with "inactive account creadentials"
        When I click proceed button from sign in
        Then sign in modal should be visible
        And inactive account should be visible
