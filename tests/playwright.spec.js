//learning to write automation tests with Playwright
//below i am importing test and expect elements from the Playwright library
//const { test, expect } = require('@playwright/test');
//const {given, when, then} = require('@cucumber/cucumber');

//test('Completing a text box and Practice Form', async ({ page }) => {
//await page.goto('https://demoqa.com/automation-practice-form', { waitUntil: 'load' });
//console.log('page loaded successfully');
//await page.getByText('Elements').click();
//console.log('clicked on the element list');
//await page.getByText('Text Box').click();
//console.log('clicked on the text box');
//await page.fill('#userName', 'Sidanth Tewari');
//console.log('userName is entered');
//await page.fill('#userEmail', 'Sidanth.tewari@bobomail.com');
//console.log('Email has been successfully entered');
//await page.fill('#currentAddress', '16 Tewari Street, Tewari Town, County Tewari, Tewari, PostCode: TT1 1TT');
//console.log('Address has been entered successfully');
//await page.fill('#permanentAddress', '16 Tewari Street, Tewari Town, County Tewari, Tewari, PostCode: TT1 1TT');
//console.log('Permanent address has been entered successfully');
//await page.click('#submit');
//console.log('The form has been successfully submitted');
//Now fill out Practice Form
//await page.getByText('Elements').click();
//console.log('elements list collapsed');
//await page.getByText('Forms').click();
//console.log('Forms list expanded');
//await page.getByText('Practice Form').click();
//console.log('Practice form clicked');
//await page.fill('#firstName', 'Sidanth');
//console.log('First name entered');
//await page.fill('#lastName', 'Tewari');
//console.log('Last name entered');
//await page.fill('#userEmail', 'Sidanth.tewari@bobomail.com');
//console.log('Email entered');
//await page.locator('label[for="gender-radio-1"]').click();
//console.log('gender selected');
//await page.fill('#userNumber', '07777777777');
//console.log('phone number entered');
//await page.locator('label[for="hobbies-checkbox-1"]').click();
//await page.locator('label[for="hobbies-checkbox-2"]').click();
//await page.locator('label[for="hobbies-checkbox-3"]').click();
//console.log('hobbies selected');
//await page.fill('#currentAddress', '16 Tewari Street, Tewari Town, County Tewari, Tewari, PostCode: TT1 1TT');
//console.log('current address entered');
//await page.locator('div css=". css-1uccc91-singleValue', 'NCR').click();
//console.log('state selected');
//});