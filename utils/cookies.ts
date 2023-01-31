import {Page} from '@playwright/test';
import config from '../playwright.config'

export const setCookies = async(page: Page, name: string, value: string) : Promise<void> => page.context().addCookies([{name, value, url: config.use?.baseURL}])