const mongoose = require("mongoose");
module.exports = ()=>{
    mongoose
    .connect("mongodb://127.0.0.1:27017/vietpro_shop_api")
    .then(()=>console.log("connected"));
    return mongoose;

}