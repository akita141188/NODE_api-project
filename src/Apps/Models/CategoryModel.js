const mongoose = require("../../Common/database")();


const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
},{
    timestamps: true,
})

const CategoryModel = mongoose.model("Category",categorySchema,"categories")

module.exports = CategoryModel;