const { $ } = require('@wdio/globals')
const Page = require('./page');

class HeaderPage extends Page {
    get navEllipses () {
        return $('//header/section[1]/div[1]/div[1]/div[1]/div[1]/nav[2]/ul[1]/li[5]/button[1]/span[1]/*[1]');
    }

    get expandedNavMenu () {
        return $('.mls-o-navigation__side-bar-wrapper');
    }

    get signInTextWithinExpandedNav () {
        return $('//header/section[1]/div[1]/div[1]/div[1]/div[1]/nav[2]/ul[1]/li[5]/div[1]/div[1]/section[1]/aside[1]/ul[1]/li[11]/a[1]/span[2]');
    }
}

module.exports = new HeaderPage();