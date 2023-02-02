import { test, expect } from '@playwright/test';
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
import {
  hoverOnMainContent,
  openURL,
  setCookies
} from '../utils/common/common';
import {
  clickOnContact,
  hoverOnBookmark
} from '../utils/navigation/navigation';

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = faker.internet.email('john', 'doe', 'example.com');
const phoneNumber = faker.phone.number('###-####-###');
const companyName = faker.company.name();
const paragraph = faker.lorem.paragraphs();

test.describe('STEP 2 - Contact Form Test Suite', () => {
  test('Fills contact form but does not send it.', async ({ page }) => {
    await openURL(page, '/');
    await setCookies(page, 'borlabs-cookie', 'true');

    await hoverOnMainContent(page);
    await hoverOnBookmark(page, 'Company');
    await clickOnContact(page);

    await expect(page).toHaveURL('/contact/');

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

    /*
    I have done everything in task 3,
    this is where I will write my assertions,
    but according to the task there was nothing to verify/assert.
    */
  });
});
