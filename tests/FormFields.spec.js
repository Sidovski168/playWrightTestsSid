const { test, expect } = require('playwright/test');
const { timeout } = require('../playwright.config');

test('Submit a formfields form successfully', async ({ page }) => {
        await page.goto('https://practice-automation.com/form-fields/', {waitUntil: 'load'});
        await page.fill('#name-input', 'Sidanth Tewari');
        await page.locator('#name-input').press('Tab');
        await page.getByLabel('password').fill('Password123');
        await page.getByLabel('password').press('Tab');
        await page.click('#drink1');
        await page.click('#drink2');
        await page.click('#drink3');
        await page.click('#drink4');
        await page.locator('input#color2').click(); 
        await page.locator('#automation','automation-yes').click();
        await page.fill('#email', 'sidzpire_pro@bobomail.com');
        await page.fill('#message', 'This is a test message');
        await page.click('#submit-btn');
        await page.waitForSelector('.wpcf7-response-output', { timeout: 5000 });
        if (successMessage.trim() === 'Message received!') {
            console.log('Test Passed: Form was submitted successfully');
        } else {
            console.log('Test Failed: Form was not submitted successfully');

        }
});