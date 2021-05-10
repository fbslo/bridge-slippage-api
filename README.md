API:

`GET` `/slippage`

Query params:

`input`: token address

`input_decimals`: int

`amount`: int,

Example (1 USDC, USDC has 6 decimal places): `/slippage?input=0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48&input_decimals=6&amount=1000000`

Returned data (JSON, WLEO amount):

```
{
  amount: 1000 //1 WLEO
}
```
