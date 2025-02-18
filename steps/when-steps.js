const { When } = require('@cucumber/cucumber');

When('I enter the following information:', async function (dataTable) {
    const userInfo = dataTable.hashes()[0]; // Get the first row (object format)

    // Save user info in test context
    this.context = {
        fullName: userInfo.fullName,
        email: userInfo.email,
        currentAddress: userInfo.currentAddress,
        permanentAddress: userInfo.permanentAddress,
    };

    // Fill form fields
    await this.page.fill('#userName', this.context.fullName);
    await this.page.fill('#userEmail', this.context.email);
    await this.page.fill('#currentAddress', this.context.currentAddress);
    await this.page.fill('#permanentAddress', this.context.permanentAddress);

    await this.page.click('#submit');

});

When('I enter the following information for the practice form:', async function (dataTable) {
    const userInfo = dataTable.hashes()[0]; // Get the first row (object format)

    // Save user info in test context
    this.context = {
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userInfo.email,
        gender: userInfo.gender,
        mobileNumber: userInfo.mobileNumber,
        dateOfBirth: userInfo.dateOfBirth,
        subjects: userInfo.subjects,
        hobbies: userInfo.hobbies,
        picture: userInfo.picture,
        currentAddress: userInfo.currentAddress,
        state: userInfo.state,
        city: userInfo.city,
    };

    // Fill form fields
    await this.page.fill('#firstName', this.context.firstName);
    await this.page.fill('#lastName', this.context.lastName);
    console.log('Full Name Entered:', this.context.firstName + ' ' + this.context.lastName);
    await this.page.fill('#userEmail', this.context.email);
    console.log('Email Entered:', this.context.email);
    await this.page.click('label[for="gender-radio-1"]');
    console.log('gender selected')
    await this.page.fill('#userNumber', this.context.mobileNumber);
    console.log('Mobile Number Entered:', this.context.mobileNumber);
    await this.page.fill('#dateOfBirthInput', this.context.dateOfBirth);
    const subjectsArray = this.context.subjects.split(',');
    for (const subject of subjectsArray) {
        await this.page.click('#subjectsInput');
        await this.page.type('#subjectsInput', subject.trim());
        await this.page.keyboard.press('Enter');
    console.log('Subjects Entered:', this.context.subjects);
}
    await this.page.click('label[for="hobbies-checkbox-1"]');
    await this.page.click('label[for="hobbies-checkbox-2"]');
    await this.page.click('label[for="hobbies-checkbox-3"]');
    console.log('Hobbies Selected:', this.context.hobbies);
    await this.page.setInputFiles('#uploadPicture', this.context.picture);
    console.log('Picture Uploaded:', this.context.picture);
    await this.page.fill('#currentAddress', this.context.currentAddress);
    console.log('Current Address Entered:', this.context.currentAddress);
    await this.page.locator('#state').scrollIntoViewIfNeeded();
    await this.page.click('#state');
    await this.page.keyboard.type(this.context.state);
    await this.page.keyboard.press('Enter');
    await this.page.keyboard.press('Tab');
    console.log('State Selected:', this.context.state);
    await this.page.locator("#city").scrollIntoViewIfNeeded();
    await this.page.click('#city');
    await this.page.keyboard.type(this.context.city);
    await this.page.keyboard.press('Enter');
    await this.page.keyboard.press('Tab');
    console.log('City Selected:', this.context.city);
    await this.page.click('#submit');
    console.log('Form Submitted, check output');
});


When('I enter the below data for Username and Password:', async function (dataTable) {
    const userInfo = dataTable.hashes()[0];
    this.context = {
        username: userInfo.Username,
        password: userInfo.Password,
    };
    await this.page.fill('input[name="username"]', this.context.username);
    await this.page.fill('input[name="password"]', this.context.password);
    console.log('the username entered is:', this.context.username) + console.log('the password entered is:', this.context.password);
    await this.page.click('button[type="submit"]');
    console.log('Logged In, check output');
});

//OrangeHRM Login Feature
When('I enter the following check-in information:', async function (dataTable) {
    const userInfo = dataTable.hashes()[0];
    this.context = {
        Date: userInfo.Date,
        Hour: userInfo.Hour,
        Minute: userInfo.Minute,
        AMPM: userInfo.AMPM,
        Notes: userInfo.Notes,
    };
    await this.page.click("//i[contains(@class, 'bi-stopwatch')]");
    console.log('Check-in button clicked');

  // Wait for the date input to be visible
 // await this.page.waitForSelector("//input[@placeholder='yyyy-mm-dd']", { timeout: 5000 });
  
  // Fill the date input
  //await this.page.fill("//input[@placeholder='yyyy-mm-dd']", this.context.Date);
  //console.log('Date Entered:', this.context.Date);

  // Wait for the time input to be visible
 // Click the <i> element with those three classes
    await this.page.click('i.oxd-icon.bi-clock.oxd-time-input--clock');
    console.log('Time button clicked');
  //{ timeout: 5000 });
  
  // Fill the time input
  //might have to split hh mm am/pm and fill them separately
    await this.page.fill('.oxd-input.oxd-time-hour-input-text', this.context.Hour);
    await this.page.fill('.oxd-input.oxd-time-minute-input-text', this.context.Minute);
    await this.page.click('[name="am"]', this.context.AMPM);
    await this.page.click('.oxd-layout-context');
    await this.page.click('.oxd-layout-context');
    await this.page.keyboard.press('Tab');
    await this.page.fill('//textarea[@placeholder="Type here"]', this.context.Notes);
    console.log('Time Entered:', this.context.Hour + " " +  this.context.Minute  + " "+ this.context.AMPM);
    console.log('Note Entered:', this.context.Notes);
    // Click the submit (Punch In) button (adjust the locator if needed)
    await this.page.click('.oxd-button--secondary');
    console.log('Check-in submitted, check output');
});
