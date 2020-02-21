const _ = require('lodash');

/**
 * Get high and low pair from historical stock data
 * @param {*} ticker 
 * @param {*} historicalPriceData 
 */
function highLow(ticker, historicalPriceData) {
  var high = 0;
  var low = 0;
  var historical;
  if (_.isEmpty(historicalPriceData)) {
    return { "high": high, "low": low };
  }
  if (_.has(historicalPriceData, 'historicalStockList')) {
    var tmp = _.find(historicalPriceData.historicalStockList, { "symbol": ticker });
    historical = tmp.historical;
  } else {
    historical = historicalPriceData.historical;
  }
  historical.forEach(element => {
    if (element.high > high) {
      high = element.high;
    }
    if (element.low < low || low === 0) {
      low = element.low;
    }
  });
  return { "high": high, "low": low };
}

module.exports = highLow;