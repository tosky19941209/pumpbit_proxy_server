const PORT = 8080;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const morgan = require("morgan")
require("dotenv").config();

const app = express();

app.use(cors());
app.use(morgan("dev"))
app.use(express.json())

app.get("*", async (req, res) => {

  try {
    const fullUrl = req.originalUrl;
    const accessToken = req.headers.authorization
    const url = "https://api.inftytrade.xyz" + fullUrl
    const headers = {
      "Authorization": accessToken
    }
    const result = await axios.get(url, { headers: headers })
    res.json(result.data)
  } catch (error) {
    res.json(error)
  }
});


app.post("*", async (req, res) => {
  try {
    const fullUrl = req.originalUrl;
    const body = req.body
    const url = "https://api.inftytrade.xyz" + fullUrl
    const result = await axios.post(url, body)
    res.json(result.data)
  } catch (error) {
    res.json(error)
  }

});
const RedGuitar = '\x1b[31m🎸\x1b[0m';
app.listen(PORT, () => {
  console.log(`${RedGuitar} Server is running on port ${PORT} ${RedGuitar } `);
});