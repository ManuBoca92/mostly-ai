import { Locator, Page } from '@playwright/test';
import { NavigationComponent } from './selectors';

export const getBookmarkButton = (page: Page, text: string): Locator =>
  page.getByRole('button', { name: text });

export const clickOnContact = async (page: Page): Promise<void> =>
  await page
    .getByText(NavigationComponent.contactText, { exact: true })
    .click();

export const hoverOnBookmark = async (
  page: Page,
  text: string
): Promise<void> => await getBookmarkButton(page, text).hover();
