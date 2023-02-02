import { test, expect } from '@playwright/test';
import { bookmarks } from '../fixtures/bookmark';
import {
  hoverOnMainContent,
  openURL,
  setCookies
} from '../utils/common/common';
import { getBookmarkButton } from '../utils/navigation/navigation';

test.describe('STEP 1 - Bookmarks Test Suite', () => {
  for (const bookmark of bookmarks) {
    test(`${bookmark.name} is visible`, async ({ page }) => {
      await openURL(page, '/');
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
