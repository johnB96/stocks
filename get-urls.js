const util = require('util');
/*
portfolio should be sent in the following manner
const portfolio = [
    { 'Ticker': 'MSFT', 'Quantity': 171 },
    { 'Ticker': 'VOO', 'Quantity': 218 },
    { 'Ticker': 'SPCE', 'Quantity': 38 }
];
*/

function getUrls(tickers, baseUrl, apis) {
    var results = [];
    apis.forEach(element => {
        // approach from https://stackoverflow.com/a/7811136/4513382
        results.push(baseUrl + util.format(element, tickers));
    });
    return results;
}

module.exports = getUrls;
