import { test, expect } from '@playwright/test';
import { hoverOnMainContent, pressEnter } from '../utils/common/common';
import { setCookies } from '../utils/cookies';
import {
  clickOnSearchButton,
  fillSearchTextField,
  getSearchResultText
} from '../utils/search/search';

test.describe('Search Test Suite', () => {
  test('Wrong search text', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await setCookies(page, 'borlabs-cookie', 'true');

    await hoverOnMainContent(page);
    await clickOnSearchButton(page);
    await fillSearchTextField(page, 'sythetic');
    await pressEnter(page);
    const searchResult = getSearchResultText(page);
    const searchResultText = (await searchResult.innerText()).replace(
      /\s/g,
      ' '
    );

    expect(searchResultText).toMatch(/Sorry, no results for:( |  )sythetic/);
  });
});
