const express = require("express");
const app = express();
const config = require("config")
app.use(config.get("app.PrefixApiVersion"),require(`${__dirname}/../Routers/web.js`));

module.exports = app;