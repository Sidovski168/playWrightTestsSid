@CompletingTextBox-test
Feature: Completing text box
  
  Scenario: Completing text box
    Given I navigate to the demoqa website and click on text box
    When I enter the following information:
      | fullName          | email                      | currentAddress                               | permanentAddress                              |
      | Sidanth Tewari    | tewarisidanth@gmail.com    | 16 Tewari Street, Tewari Town, County Tewari | 16 Tewari Street, Tewari Town, County Tewari  |
    Then I should see the user information displayed on the page
