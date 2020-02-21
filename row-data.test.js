const rowData = require('./row-data');

const portfolio = [
    {
        "Ticker": "MSFT",
        "Quantity": 171
    },
    {
        "Ticker": "VOO",
        "Quantity": 218
    },
    {
        "Ticker": "SPCE",
        "Quantity": 38
    }
];

const historicalStockList = {
    "historicalStockList": [{
        "symbol": "MSFT",
        "historical": [{
            "date": "2020-02-18",
            "open": 185.61,
            "high": 187.7,
            "low": 185.5,
            "close": 187.23,
            "adjClose": 186.72,
            "volume": 2.77922E7,
            "unadjustedVolume": 2.77922E7,
            "change": -1.62,
            "changePercent": -0.873,
            "vwap": 186.81,
            "label": "February 18, 20",
            "changeOverTime": -0.00873
        }, {
            "date": "2020-02-19",
            "open": 188.06,
            "high": 188.18,
            "low": 186.47,
            "close": 187.28,
            "adjClose": 187.28,
            "volume": 2.98851E7,
            "unadjustedVolume": 2.98851E7,
            "change": 0.78,
            "changePercent": 0.415,
            "vwap": 187.31,
            "label": "February 19, 20",
            "changeOverTime": 0.00415
        }]
    }, {
        "symbol": "VOO",
        "historical": [{
            "date": "2020-02-18",
            "open": 309.24,
            "high": 309.82,
            "low": 308.03,
            "close": 309.43,
            "adjClose": 309.43,
            "volume": 3000300.0,
            "unadjustedVolume": 3000300.0,
            "change": -0.19,
            "changePercent": -0.061,
            "vwap": 309.09333,
            "label": "February 18, 20",
            "changeOverTime": -6.1E-4
        }, {
            "date": "2020-02-19",
            "open": 310.42,
            "high": 311.59,
            "low": 310.12,
            "close": 310.92,
            "adjClose": 310.92,
            "volume": 2245300.0,
            "unadjustedVolume": 2245300.0,
            "change": -0.5,
            "changePercent": -0.161,
            "vwap": 310.87667,
            "label": "February 19, 20",
            "changeOverTime": -0.00161
        }]
    }, {
        "symbol": "SPCE",
        "historical": [{
            "date": "2020-02-18",
            "open": 32.17,
            "high": 38.72,
            "low": 28.71,
            "close": 30.3,
            "adjClose": 30.3,
            "volume": 1.037158E8,
            "unadjustedVolume": 1.037158E8,
            "change": 1.87,
            "changePercent": 5.813,
            "vwap": 32.57667,
            "label": "February 18, 20",
            "changeOverTime": 0.05813
        }, {
            "date": "2020-02-19",
            "open": 34.3,
            "high": 37.5,
            "low": 32.0,
            "close": 37.35,
            "adjClose": 37.35,
            "volume": 8.39764E7,
            "unadjustedVolume": 8.39764E7,
            "change": -3.05,
            "changePercent": -8.892,
            "vwap": 35.61667,
            "label": "February 19, 20",
            "changeOverTime": -0.08892
        }]
    }]
};

const companiesPriceList = {
    "companiesPriceList": [{
        "symbol": "MSFT",
        "price": 184.39
    }, {
        "symbol": "SPCE",
        "price": 37.275
    }, {
        "symbol": "VOO",
        "price": 309.7
    }]
};

const expected = [
    {
        Ticker: 'MSFT',
        Quantity: 171,
        'Current Price': '$184.39',
        High: '$188.18',
        Low: '$185.50',
        'Current Value': '"$31,530.69"'
    },
    {
        Ticker: 'VOO',
        Quantity: 218,
        'Current Price': '$309.70',
        High: '$311.59',
        Low: '$308.03',
        'Current Value': '"$67,514.60"'
    },
    {
        Ticker: 'SPCE',
        Quantity: 38,
        'Current Price': '$37.28',
        High: '$38.72',
        Low: '$28.71',
        'Current Value': '"$1,416.45"'
    },
    {
        Ticker: 'Total',
        Quantity: null,
        'Current Price': null,
        High: null,
        Low: null,
        'Current Value': '"$100,461.74"'
    }
]

test('get row data', () => {
    expect(rowData(portfolio, historicalStockList, companiesPriceList)).toMatchObject(expected);
});