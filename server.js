const express = require("./master/express")
const mongoose = require("./master/mongoose")
const config = require("./config/index")
const PORT = config.port

const app = express()
mongoose()

const RedGuitar = '\x1b[31m🎸\x1b[0m';
app.listen(PORT, () => {
  console.log(`${RedGuitar} Server is running on port ${PORT} ${RedGuitar} `);
});