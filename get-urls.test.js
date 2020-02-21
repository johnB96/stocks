const getUrls = require('./get-urls');

test('build urls', () => {
    expect(getUrls('MSFT,VOO,SPCE',
        'https://financialmodelingprep.com',
        [
            '/api/v3/historical-price-full/%s?from=2020-02-18',
            '/api/v3/stock/real-time-price/%s'
        ])).toMatchObject([
            'https://financialmodelingprep.com/api/v3/historical-price-full/MSFT,VOO,SPCE?from=2020-02-18',
            'https://financialmodelingprep.com/api/v3/stock/real-time-price/MSFT,VOO,SPCE']);
});
