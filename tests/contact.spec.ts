import {test, expect} from '@playwright/test';
import { setCookies } from '../utils/cookies';

test.describe('Contact Form Test Suite', () => {
    test('Fill Contact form but do not send form.', async({page}) => {
        await page.goto('/', {waitUntil: 'networkidle'});
        await setCookies(page, 'borlabs-cookie', 'true');
        await page.reload({waitUntil: 'networkidle'})

        const requestPromise = page.waitForRequest('https://in.hotjar.com/api/v2/client/sites/**')
        const companyButton = page.getByRole('button', {name: 'Company'});
        // await requestPromise;
        await companyButton.hover();
        
        await page.locator('a[class="ct-link"]').filter({hasText: 'Contact'}).click();
        await page.waitForURL('**/contact/');
        await requestPromise;
        await page.locator('input[name="firstname"]').fill('Ebonom');
        await page.locator('input[name="lastname"]').fill('Mfam');
        await page.locator('input[name="email"]').fill('ebonom.n.mfam@gmail.com');
        await page.locator('input[name="mobilephone"]').fill('07762353320');
        await page.locator('input[name="company"]').fill('Mostly.AI');
        await page.locator('select[name="country"]').selectOption({value: 'United Kingdom'})
        await page.locator('select[name="how_did_you_hear_about_mostly_ai_"]').selectOption({value: 'LinkedIn'})
        await page.locator('textarea[name="message"]').fill('I love test automation');
        await page.getByLabel('Marketing offers and updates.*').check()
        // await page.locator('li[class="hs-form-booleancheckbox"]>input').check();
        await page.locator('input[value="SEND MESSAGE"]').hover();
    })
})