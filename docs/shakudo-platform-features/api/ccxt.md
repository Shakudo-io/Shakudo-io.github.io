---
sidebar_position: 6
---

# CCXT
[CCXT - CryptoCurrency eXchange Trading Library](https://github.com/ccxt/ccxt) is a JavaScript / Python / PHP library for cryptocurrency trading and e-commerce with support for many bitcoin/ether/altcoin exchange markets and merchant APIs. CCXT Supports unified APIs to access marketing data and OrderBook data on over 100 Crypto exchanges including the most popular ones such as Binance, FTX, Coinbase, Kraken, Kucoin and etc.

[CCXT.Pro](https://ccxt.pro/) is the paid professional version of CCXT and it's offered to Shakudo Platform users for free and it's fully integrated with the Shakudo Platform. Compared to the basic CCXT, CCXT.Pro provides WebSocket APIs to enable real-time high frequency trading and ensure efficiency, higher speeds, and lower latencies.

## Typical work flow
Shakudo Platform is fully integrated with the pro version of [CCXT](https://github.com/ccxt/ccxt), making it an ideal platform to build and deploy trading bots. Below is a typical workflow of building a Crypto trading App:

1. Start a Shakudo Platform Sessions with the `Crypto` image to write a trading script using `web3` to access blockchain data and `ccxt.pro` to exchange markets and APIs.
2. Use distributed data processing such as Dask, Ray to process Order Book data.
3. Build a frontend app to visualize the trades with built-in tools such as Streamlit.
4. Deploy a Shakudo Platform service with the trading script and the frontend app, read more about deploying a Shakudo Platform service.
