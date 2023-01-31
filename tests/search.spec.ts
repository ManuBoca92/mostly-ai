import {test, expect} from '@playwright/test';
import { setCookies } from '../utils/cookies';

test.describe('Search Test Suite', () => {
    test('Wrong search text', async({page}) => {
        await page.goto('/', {waitUntil: 'networkidle'});
        await setCookies(page, 'borlabs-cookie', 'true');
        await page.reload({waitUntil: 'networkidle'})

        await page.locator('button[aria-label="Open search"]').click()
        const searchBar = page.locator('input[type="search"]')
        await searchBar.fill('sythetic')
        // const requestPromise = page.waitForRequest('https://in.hotjar.com/api/v2/client/sites/**')
        await searchBar.press('Enter')
        // await requestPromise;

        const headline = page.locator('h1[class="ct-headline "]')
        await page.locator('//*[@id="div_block-273-1315"]').innerText()
        await expect(headline).toBeVisible();
        await expect(page.getByText('sythetic')).toBeVisible();
    })
})