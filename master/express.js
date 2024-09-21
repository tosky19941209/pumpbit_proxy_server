module.exports = () => {
    const express = require("express");
    const cors = require("cors");
    const axios = require("axios");
    const morgan = require("morgan");
    const ProxyRouter = require("../router/proxyrouter")
    require("dotenv").config();

    const app = express();

    app.use(cors());
    app.use(morgan("dev"))
    app.use(express.json())
    app.use("/v1", ProxyRouter)

    return app
}