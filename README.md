# Stocks

Sample nodejs script that looksup the value of a portfolio and save portfolio value to csv file.

## Getting Started

### Prerequisites

The following are required to run the sample
```
git to clone the repository
npm + node to build, run, and test
```
### Installing

Clone the repository
```
git clone https://github.com/johnB96/stocks.git
```

### Building

From the stocks directory, run
```
npm install
```

### Running

From the stock directory, run
```
npm run api
```
You should see a message similar to this
```
> stocks@1.0.0 api /Users/johnbedalov/dev/src/stocks
> node index

Stocks file saved to: MSFT-VOO-SPCE-2020-02-21T16:30:11.065Z.csv
```

The file name inclues the ticker symbols and approximate time the current price was retrieved.

The results will be saved to the stocks directory.

The contents should look similar to this depending on the portfolio

Ticker,Quantity,Current Price,High,Low,Current Value
MSFT,171,$180.37,$188.18,$181.10,"$30,843.27"
VOO,218,$307.20,$311.59,$306.67,"$66,969.60"
SPCE,38,$34.97,$42.49,$28.71,"$1,328.86"
Total,,,,,"$99,141.73"

### Updating Portfolio

The stock portfolio is saved to the portfolio.json file and can be changed to include different symbols and quantities; also more or less positions.

Here is an example portfolio.json
```
[
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
]
```

### Running Tests

To run tests with coverage, run the following
```
npm test
```
