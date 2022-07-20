---
sidebar_position: 5
---

# Crypto_API
Shakudo's Crypto API includes functions to help ease the access and usability of web3 on-chain data. Currently Shakudo offers several functions within the Crypto API package as well as indexed on-chain data for Solana and integration with CCXT library. 

## Account setup
First you need to create an account by following the steps below.

```python
import crypto_api as api

token = api.signup("demo")
print("Our unique token:", token)
```

## Transaction Tracking
With Shakudo's crypto_api you can subscribe get notifications whenever there's events belonging to a specific address as a webhook. 

```python
r = api.subscribe(chain="eth", address=shiba, webhook_url=webhook_url, token=token)
```
** Parameters **

| Name                                                        | Type      | Description    |
| :-----------------------------------------------------------| :---------| :--------------------------------------------- |
| chain  <div class="label basic required">Required</div>     | string    | String for which chain address you'd like to subscribe to Options are [`eth`, `bsc`,`polygon`]|
| address  <div class="label basic required">Required</div>   | string    | Address to track|
| webhook_url <div class="label basic required">Required</div>| string    | Webhook URL to recieve notifications|
| token<div class="label basic required">Required</div>       | string    | The token generated at [account setup](#account-setup) step|

For example: subscribe to SHIBA transactions on Ethereum, and we will recieve the streamed data at https://webhook.site/e536b5fa-d98e-4fa2-9454-2a8ae57631b9
```python
shiba = "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce"
webhook_url = "https://webhook.site/e536b5fa-d98e-4fa2-9454-2a8ae57631b9"

# chain can be one of eth, polygon, bsc, mumbai
r = api.subscribe(chain="eth", address=shiba, webhook_url=webhook_url, token=token)
r
```
<!-- ## Indexed Data -->

