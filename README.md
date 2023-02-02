# mostly-ai

[Playwright](https://playwright.dev/) was chosen as the test framework of choice for this task. The test is run on [mostly.ai](https://mostly.ai/) site.

### CI/CD

I used Github Actions as the CI/CD tool.

## Setup

To run this test, follow these steps, please make sure you have **node v18** installed on your local machine then follow these steps;

- Clone repo
- Go into directory and run `npm install` to install all dependencies.

### How to run tests

Tests can be found inside the `tests` directory.
To run all tests, use they following commands listed below inside the root directory.

- To run all tests in headless mode `npm run test`
- To run all tests in headed(browser) mode `npm run test:headed`
- If you want to run tests in debug mode, `npm run tests:debug`

## Linting

Eslint is used for linting. To run **eslint** use `npm run lint` command

To fix eslint errors run `npm run lint --fix`

## Formatting

Prettier is used to format the code automatically on save. To run **prettier** manually, please use this command `npm run format`

## Test Report

I used playwright's [HTML Reporter](https://playwright.dev/docs/test-reporters#html-reporter) for this task. The HTML Report shows you a full report of your tests. You can filter the report by browsers, passed tests, failed tests, skipped tests and flaky tests.

### Locally

In order to get the test report for tests ran locally, run the `npm run tests:report` command inside the project directory.

### CI

Click on the **Actions** tab to see the workflows. Here you will see if your tests have passed or failed.

#### Viewing Test Logs

Clicking on the workflow run will show you the all the actions that GitHub performed and clicking on **Run Playwright tests** will show the error messages, what was expected and what was received as well as the call log if a test failed.

On the CI, the test report is stored as an artifacts, so in the Artifacts section click on the **playwright-report** to download your report in the format of a zip file.

#### Viewing the HTML Report

Locally opening the report will not work as expected as you need a web server in order for everything to work correctly. First, extract the zip and then go into the directory and click on the `index.html`. This will serve up the report and enable you to view it in your browser.
