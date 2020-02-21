const util = require('util');
/**
 * Get URLs for a series of API requests.
 * @param {*} tickers 
 * @param {*} baseUrl 
 * @param {*} apis 
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
