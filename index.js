require('dotenv').config();
const express = require('express');
const app = express();

app.use('/slippage', require('./api/slippage_input.js'));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
