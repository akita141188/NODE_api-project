const app =require("../Apps/app");
const config = require("config");

const server = app.listen(port = config.get("app.port"),()=>{
    console.log(`server running on: ${port}`);
});