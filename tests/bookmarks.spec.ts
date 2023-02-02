import { test, expect } from '@playwright/test';
import { setCookies } from '../utils/cookies';
import { bookmarks } from '../fixtures/bookmark';
import { hoverOnMainContent } from '../utils/common/common';
import { getBookmarkButton } from '../utils/navigation/navigation';

test.describe('Bookmarks Test Suite', () => {
  for (const bookmark of bookmarks) {
    test(`${bookmark.name} is visible`, async ({ page }) => {
      await page.goto('/', { waitUntil: 'domcontentloaded' });
      await setCookies(page, 'borlabs-cookie', 'true');

      await hoverOnMainContent(page);
      const navigationBookmark = getBookmarkButton(page, bookmark.name);

      await expect(navigationBookmark).toBeVisible();
      await expect(navigationBookmark).toHaveAttribute(
        'href',
        `${bookmark.url}`
      );
    });
  }
});
