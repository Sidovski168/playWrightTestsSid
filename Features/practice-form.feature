@CompletingPracticeForm
Feature: Completing Practice Form

  Scenario: Completing Practice Form
    Given I navigate to the demoqa website and land on practice form
    When I enter the following information for the practice form:
        | firstName | lastName | email                     | gender | mobileNumber | dateOfBirth   | subjects                          | hobbies                 | picture                | currentAddress                                 | state |city|
        | Sidanth   | Tewari   | tewarisidanth@gmail.com   | Male   | 1234567890   | 06 May 1986   | Maths, Computer Science, English  | Sports, Reading, Music  | C:/Users/tewar/1.jpg   | 16 Tewari Street, Tewari Town, County Tewari   | NCR   |Delhi| 
    Then I should see the form was submitted successfully