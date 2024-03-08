const { $ } = require('@wdio/globals')
const Page = require('./page');

class CookieModalPage extends Page {
    get confirmCookiesBtn () {
        return $('#onetrust-pc-btn-handler');
    }

    get xBtnToDismissModal () {
        return $('#onetrust-close-btn-container');
    }
}

module.exports = new CookieModalPage();