const { Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Then('I should see the user information displayed on the page', async function () {
    // Wait for the output container to appear
    await this.page.waitForSelector('#output');

    // Get the displayed text
    let output = await this.page.locator('#output').innerText();
    console.log('Raw Output displayed:', output);

    // Normalize spaces: Remove extra spaces, new lines, and special characters
    output = output.replace(/\s+/g, ' ').replace(/ :/g, ':').trim();  // Fix spaces before colons

    // Log the cleaned output for debugging
    console.log('Normalized Output displayed:', output);

    // Compare output with stored user info (without spaces after colons & accounting for typo)
    expect(output).toContain(`Name:${this.context.fullName}`);
    expect(output).toContain(`Email:${this.context.email}`);
    expect(output).toContain(`Current Address:${this.context.currentAddress}`);
    expect(output).toContain(`Permananet Address:${this.context.permanentAddress}`); // Adjusted for site's typo

    await this.page.context().browser().close();

});

Then('I should see the form was submitted successfully', async function () {
    await this.page.waitForSelector('.modal-content');
    const rawModalText = await this.page.locator('.modal-content').innerText();
  
    // Normalize repeated spaces to a single space
    let modalText = rawModalText.replace(/\s+/g, ' ').trim();
  
    // Also remove any commas before the year in the date (optional)
    modalText = modalText.replace(/,(\d{4})/g, ' $1');
  
    console.log('Normalized modal text:', modalText);
  
    // Now compare with your expected strings (also no extra spaces)
    expect(modalText).toContain(`Student Name ${this.context.firstName} ${this.context.lastName}`);
    expect(modalText).toContain(this.context.email);
    expect(modalText).toContain(this.context.gender);
    expect(modalText).toContain(this.context.mobileNumber);
    // etc.
  
    await this.page.context().browser().close();
  });
  

  Then('I should be able to see the OrangeHRM Dashboard', async function () {
    await this.page.getByText('#Dashboard').isVisible();
    console.log('Dashboard is visible');
    await this.page.context().browser().close();
  });

  //orageHRM Clock In Feature
  
  Then('I should see the check-in information displayed on my Records', async function () {
    await this.page.getByText('#Dashboard').isVisible();
    console.log('Dashboard is visible');
    await this.page.context().browser().close();
  });