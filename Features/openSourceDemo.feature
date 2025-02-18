@OpenSourceDemoHRM
Feature: Login into Open Source HRM

    Scenario: Login into Open Source HRM
    Given I am on the login page
    When I enter the below data for Username and Password:
        | Username | Password |
        | Admin    | admin123    |
    Then I should be able to see the OrangeHRM Dashboard
