import { test, expect } from '@playwright/test';
import { setCookies } from '../utils/cookies';
import { faker } from '@faker-js/faker';
import {
  fillFirstname,
  fillCompany,
  fillEmail,
  fillLastname,
  fillMobilePhone,
  selectAboutUs,
  selectCountry,
  checkMarketingOffers,
  hoverOnSendMessageBtn,
  fillMessageDescription
} from '../utils/contact-form/contactForm';
import { hoverOnMainContent } from '../utils/common/common';

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = faker.internet.email('john', 'doe', 'example.com');
const phoneNumber = faker.phone.number('###-####-###');
const companyName = faker.company.name();
const paragraph = faker.lorem.paragraphs();

test.describe('Contact Form Test Suite', () => {
  test('Fills Contact form but do not send form.', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await setCookies(page, 'borlabs-cookie', 'true');

    await hoverOnMainContent(page);
    const companyButton = page.getByRole('button', { name: 'Company' });
    await companyButton.hover();

    await page
      .locator('a[class="ct-link"]')
      .filter({ hasText: 'Contact' })
      .click();
    await page.waitForURL('**/contact/');
    await hoverOnMainContent(page);
    await fillFirstname(page, firstName);
    await fillLastname(page, lastName);
    await fillEmail(page, email);
    await fillMobilePhone(page, phoneNumber);
    await fillCompany(page, companyName);
    await selectCountry(page, 'United Kingdom');
    await selectAboutUs(page, 'LinkedIn');
    await fillMessageDescription(page, paragraph);
    await checkMarketingOffers(page);
    await hoverOnSendMessageBtn(page);
  });
});
