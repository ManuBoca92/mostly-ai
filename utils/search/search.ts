import { Locator, Page } from '@playwright/test';
import { SearchComponent } from './selectors';

export const clickOnSearchButton = async (page: Page): Promise<void> =>
  await page.locator(SearchComponent.searchButton).click();

export const getSearchTextField = (page: Page): Locator =>
  page.locator(SearchComponent.searchTextField);

export const fillSearchTextField = async (
  page: Page,
  text: string
): Promise<void> => await getSearchTextField(page).fill(text);

export const getSearchResultText = (page: Page) =>
  page.locator(SearchComponent.searchResult);
