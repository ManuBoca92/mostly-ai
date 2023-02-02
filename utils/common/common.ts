import { Page } from '@playwright/test';
import { CommonComponent } from './selectors';
import config from '../../playwright.config';

export const hoverOnMainContent = async (page: Page): Promise<void> =>
  await page.locator(CommonComponent.mainContent).hover();

export const pressEnter = async (page: Page): Promise<void> =>
  await page.keyboard.press('Enter');

export const openURL = async (page: Page, url: string) =>
  await page.goto(url, { waitUntil: 'domcontentloaded' });

export const setCookies = async (
  page: Page,
  name: string,
  value: string
): Promise<void> =>
  page.context().addCookies([{ name, value, url: config.use?.baseURL }]);
