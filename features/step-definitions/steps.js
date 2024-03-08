const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
// const { Selector } = require("webdriverio");

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const StandingsPage = require('../pageobjects/standings.page');
const HeaderPage = require('../pageobjects/header.page');
const HomePage = require('../pageobjects/homepage.page');
const CookieModalPage = require('../pageobjects/cookiemodal.page');

const pages = {
    login: LoginPage,
    standings: StandingsPage,
    header: HeaderPage,
    homepage: HomePage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

When(/^I click on close cookies button$/, async () => {
    await CookieModalPage.xBtnToDismissModal.click();
})

When(/^I click on the navigation ellipses$/, async () => {
    await HeaderPage.navEllipses.click();
});

When(/^I click on the sign in text within the expanded navigation$/, async () => {
    await HeaderPage.signInTextWithinExpandedNav.click();
});

Then(/^I expect the sign in modal will be displayed$/, async () => {
    await LoginPage.signInModal.waitForDisplayed();
})

Then(/^I expect the expanded navigation menu to be displayed$/, async () => {
    await expect(HeaderPage.expandedNavMenu).toBeDisplayed();
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

