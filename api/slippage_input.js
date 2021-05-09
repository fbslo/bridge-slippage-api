const express = require('express')
const router = express.Router()
const uniswapPrice = require('uniswap-price')

const wleo = ''

router.get('/', async (req, res) => {
  let source = req.query.input
  let source_decimals = req.query.input_decimals
  let amount = req.query.amount

  let dest = '0x73A9fb46e228628f8f9BB9004eCa4f4F529D3998' //wleo
  let dest_decimals = 3
  let weth = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
  let weth_decimals = 18

  let infura_key = process.env.INFURA_KEY

  let data = await uniswapPrice.getExecutionPriceViaExactToken(source, source_decimals, dest, dest_decimals, weth, weth_decimals, amount, 1, infura_key)
  let final_amount_after_slippage = data * 0.98

  res.json({
    amount: final_amount_after_slippage
  })
})


module.exports = router;
