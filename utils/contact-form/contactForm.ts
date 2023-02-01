import { Page } from '@playwright/test';
import { ContactFormComponent } from './selectors';

export const fillFirstname = async (page: Page, text: string): Promise<void> =>
  await page.locator(ContactFormComponent.firstnameTextField).fill(text);

export const fillLastname = async (page: Page, text: string): Promise<void> =>
  await page.locator(ContactFormComponent.lastnameTextField).fill(text);

export const fillEmail = async (page: Page, text: string): Promise<void> =>
  await page.locator(ContactFormComponent.emailTextField).fill(text);

export const fillMobilePhone = async (
  page: Page,
  text: string
): Promise<void> =>
  await page.locator(ContactFormComponent.mobilephoneTextField).fill(text);

export const fillCompany = async (page: Page, text: string): Promise<void> =>
  await page.locator(ContactFormComponent.companyTextField).fill(text);

export const selectCountry = async (
  page: Page,
  text: string
): Promise<string[]> =>
  await page
    .locator(ContactFormComponent.countrySelect)
    .selectOption({ value: text });

export const selectAboutUs = async (
  page: Page,
  text: string
): Promise<string[]> =>
  await page
    .locator(ContactFormComponent.aboutUsSelect)
    .selectOption({ value: text });

export const fillMessageDescription = async (
  page: Page,
  text: string
): Promise<void> =>
  await page.locator(ContactFormComponent.messageTextArea).fill(text);

export const checkMarketingOffers = async (page: Page): Promise<void> =>
  await page.locator(ContactFormComponent.marketingOffersCheckbox).check();

export const hoverOnSendMessageBtn = async (page: Page): Promise<void> =>
  await page.locator(ContactFormComponent.sendMassageButton).hover();
