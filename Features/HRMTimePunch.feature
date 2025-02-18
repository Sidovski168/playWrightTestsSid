@HRMTimePunch
Feature: Time Punching into HRM Online
Scenario: Time Punching into HRM Online

Given I have logged into the HRM system and I can see my dashboard
  | Username | Password |
  | Admin    | admin123 |
When I enter the following check-in information:
  | Date           | Hour    | Minute | AMPM  |Notes|
  | 2025-17-02     | 09      |  00    |  AM   |Checking in|
Then I should see the check-in information displayed on my Records
