import { Page } from '@playwright/test';
import { CommonComponent } from './selectors';

export const hoverOnMainContent = async (page: Page): Promise<void> =>
  await page.locator(CommonComponent.mainContent).hover();

export const pressEnter = async (page: Page): Promise<void> =>
  await page.keyboard.press('Enter');
