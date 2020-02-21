const highLow = require('./high-low')
const _ = require('lodash');

/**
 * Convery API results into a consise list of attributes.
 * @param {*} portfolio 
 * @param {*} historicalPriceData 
 * @param {*} currentPriceData 
 */
function rowData(portfolio, historicalPriceData, currentPriceData) {
  var results = [];
  var total = 0;
  portfolio.forEach(elemenent => {
    var ticker = elemenent.Ticker;
    var quantity = elemenent.Quantity;
    var res = highLow(ticker, historicalPriceData);
    var currentPrice = getCurrentPrice(ticker, currentPriceData)
    total += quantity * currentPrice;
    results.push(
      singleRowData(ticker, quantity, currentPrice, res.high, res.low));
  });
  results.push(getTotalRow(total));
  return results;
}

function getCurrentPrice(ticker, currentPriceData) {
  var results = 0;
  if (_.has(currentPriceData, 'companiesPriceList')) {
    results = _.find(currentPriceData.companiesPriceList, { "symbol": ticker }).price;
  } else {
    results = currentPriceData.price;
  }
  return results
}

function getTotalRow(total) {
  return {
    'Ticker': 'Total',
    'Quantity': null,
    'Current Price': null,
    'High': null,
    'Low': null,
    'Current Value': formatUsDollars(total)
  };
}

function singleRowData(ticker, quantity, currentPrice, high, low) {
  return {
    'Ticker': ticker,
    'Quantity': quantity,
    'Current Price': formatUsDollars(currentPrice),
    'High': formatUsDollars(high),
    'Low': formatUsDollars(low),
    'Current Value': formatUsDollars(currentPrice * quantity)
  };
}

function formatUsDollars(val) {
  // approach for adding commas https://stackoverflow.com/a/17663871/4513382
  var tmp = '$' + val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  // once formatted, if the value has commas, add quotes
  if (tmp.includes(',')) {
    tmp = '"' + tmp + '"';
  }
  return tmp;
}

module.exports = rowData;