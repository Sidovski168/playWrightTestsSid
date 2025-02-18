const { Given } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { expect } = require('@playwright/test');

Given('I navigate to the demoqa website and click on text box', async function () {
  this.browser = await chromium.launch({ headless: false, slowMo: 100, fullPage: true });
  this.page =await this.browser.newPage(); 
  
  await this.page.goto('https://demoqa.com/automation-practice-form', { waitUntil: 'load' });
  console.log('Navigated to the page successfully');

  await this.page.getByText('Elements').click();
  console.log('Clicked on the Elements list');

  await this.page.getByText('Text Box').click();
  console.log('Clicked on the Text Box');
});


Given('I navigate to the demoqa website and land on practice form', async function () {
  this.browser = await chromium.launch({ headless: false, slowMo: 100, fullPage: true });
  this.page =await this.browser.newPage(); 
  
  await this.page.goto('https://demoqa.com/automation-practice-form', { waitUntil: 'load' });
  console.log('Navigated to the page successfully');
});

//OrangeHRM Login Feature

Given('I am on the login page',  async function () {
  this.browser = await chromium.launch({ headless: false, slowMo: 500, fullPage: true });
  this.page =await this.browser.newPage(); 

  await this.page.goto('https://opensource-demo.orangehrmlive.com', { waitUntil: 'load' });
  console.log('Orange HRM page is loaded successfully');
});

//Punching in time for OrangeHRM Feature
//Author: Sid Tewari 

Given('I have logged into the HRM system and I can see my dashboard',  async function (dataTable) {
  this.browser = await chromium.launch({ headless: false, slowMo: 100, fullPage: true });
  this.page = await this.browser.newPage(); 
  await this.page.goto('https://opensource-demo.orangehrmlive.com', { waitUntil: 'load' });
  console.log('Orange HRM page is loaded successfully');
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
  await this.page.getByText('#Dashboard').isVisible();
  console.log('Dashboard is visible');
});
      
