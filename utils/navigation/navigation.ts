import { Locator, Page } from '@playwright/test';

export const getBookmarkButton = (page: Page, text: string): Locator =>
  page.getByRole('button', { name: text });
