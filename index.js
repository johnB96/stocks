const { parseAsync } = require('json2csv');
const fs = require('fs');
const request = require('request-promise');
const rowData = require('./row-data');
const getUrls = require('./get-urls');

const portfolio = JSON.parse(fs.readFileSync('portfolio.json'));
const fields = ['Ticker', 'Quantity', 'Current Price', 'High', 'Low', 'Current Value'];

var urls = getUrls(getTickers(portfolio, ','),
    'https://financialmodelingprep.com',
    [
        '/api/v3/historical-price-full/%s?from=2019-01-01',
        '/api/v3/stock/real-time-price/%s'
    ]);

var fileName = getFileName(portfolio);

// approach from https://stackoverflow.com/a/42741081/4513382
const promises = urls.map(url => request(url));
Promise.all(promises).then((data) => {
    // note that order returned is deterministic https://stackoverflow.com/a/28066851/4513382
    var rows = rowData(portfolio, JSON.parse(data[0]), JSON.parse(data[1]));
    parseAsync(rows, { fields, quote: '' })
        .then(csv => {
            fs.writeFile(fileName, csv, function (err) {
                if (err) throw err;
                console.log('Stocks file saved to: ' + fileName);
            })
        }).catch(err => console.error(err));
}, reject => {
    console.error('Error from calling APIs');
});

/**
 * Returns ticker symbols in a single string with separator character as specified.
 * @param {*} portfolio 
 * @param {*} char 
 */
function getTickers(portfolio, char) {
    var results = [];
    portfolio.forEach(element => {
        results.push(element.Ticker);
    });
    return results.join(char);
}
/**
 *  Get file name for results.
 * @param {*} portfolio 
 */
function getFileName(portfolio) {
    return getTickers(portfolio, '-') + '-' + new Date().toISOString() + '.csv'
}
