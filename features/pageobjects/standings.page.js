const { $ } = require('@wdio/globals')
const Page = require('./page');

class StandingsPage extends Page {
    open () {
        return super.open('standings');
    }
}

module.exports = new StandingsPage();