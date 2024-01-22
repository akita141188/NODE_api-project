const express = require("express");
const app = express();
const config = require("config")
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(config.get("app.PrefixApiVersion"),require(`${__dirname}/../Routers/web.js`));

module.exports = app;