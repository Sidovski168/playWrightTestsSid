const { test, expect } = require('@playwright/test');

test('Submit the ToolsQA form successfully', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form', { waitUntil: 'load' });
  await page.fill('#firstName', 'Sidanth');
  await page.fill('#lastName', 'Tewari');
  await page.fill('#userEmail', 'tewarisidanth@bobomail.com');
  await page.locator('label [for="#gender-radio-1"]', 'Male').scrollIntoViewIfNeeded();
  await page.click('#gender-radio-1');
  await page.fill('#userNumber', '0777777777');
  await page.fill('#dateOfBirthInput', '06 May 1986');
  await page.fill('.subjects-auto-complete__control input', 'Maths');
  await page.fill('.subjects-auto-complete__control input', 'Computer Science');
  await page.click('#hobbies-checkbox-1');
  await page.click('#hobbies-checkbox-2');
  await page.click('#hobbies-checkbox-3');
  await page.setInputFiles('#uploadPicture', 'assets/profile.jpg');
  await page.fill('#currentAddress', '16 Tewari Street, Tewari Town, County Tewari, Tewari, PostCode: TT1 1TT');
  await page.selectOption('#state', 'NCR');
  await page.selectOption('#city', 'Delhi');
  await page.click('#submit');

  await page.waitForSelector('#example-modal-sizes-title-lg', { timeout: 5000 });
  const successMessage = await page.textContent('#example-modal-sizes-title-lg');
  
  if (successMessage.trim() === 'Thanks for submitting the form') {
    console.log('Test Passed: Form was submitted successfully');
  } else {
    console.log('Test Failed: Form was not submitted successfully');
  }
});