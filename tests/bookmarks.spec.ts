import {test, expect} from '@playwright/test';
import { setCookies } from '../utils/cookies';
import { bookmarks } from '../fixtures/bookmark';

test.describe('Bookmarks Test Suite', () => {

    test.beforeEach(async({page}) => {
        await page.goto('/', {waitUntil: 'networkidle'})
        await setCookies(page, 'borlabs-cookie', 'true');
        await page.reload({waitUntil: 'networkidle'})
    })

    for (const bookmark of bookmarks) {
        test(`${bookmark.name} is visible`, async ({page}) => {
            const requestPromise = page.waitForRequest('https://in.hotjar.com/api/v2/client/sites/**')
            const platformButton = page.getByRole('button', {name: `${bookmark.name}`});
            await requestPromise;
    
            await expect(platformButton).toBeVisible();
            await expect(platformButton).toHaveAttribute('href', `${bookmark.url}`)
        });
    }
})