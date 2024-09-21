const router = require("express").Router()
const axios = require("axios")
router.get("*", async (req, res) => {
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


router.post("*", async (req, res) => {
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
module.exports = router