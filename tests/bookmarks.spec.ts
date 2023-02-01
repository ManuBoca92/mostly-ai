import { test, expect } from '@playwright/test';
import { setCookies } from '../utils/cookies';
import { bookmarks } from '../fixtures/bookmark';
import { hoverOnMainContent } from '../utils/common/common';

test.describe('Bookmarks Test Suite', () => {
  for (const bookmark of bookmarks) {
    test(`${bookmark.name} is visible`, async ({ page }) => {
      await page.goto('/', { waitUntil: 'domcontentloaded' });
      await setCookies(page, 'borlabs-cookie', 'true');

      await hoverOnMainContent(page);
      const bookmarkButton = page.getByRole('button', { name: bookmark.name });

      await expect(bookmarkButton).toBeVisible();
      await expect(bookmarkButton).toHaveAttribute('href', `${bookmark.url}`);
    });
  }
});
