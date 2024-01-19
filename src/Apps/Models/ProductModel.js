const mongoose = require("../../Common/database")();

const productSchema = new mongoose.Schema({
    category_id:{
        type: mongoose.Types.ObjectId,
        require: true,
    },
    name:{
        type: String,
        require: true,
    },
    image:{
        type: String,
        require: true,
    },
    price:{
        type: Number,
        default: 0,
    },
    status:{
        type: String,
        require: true,
    },
    acceessories:{
        type: String,
        require: true,
    },
    promotion:{
        type: String,
        default: null,
    },
    details:{
        type: String,
        default: null,
    },
    is_stock:{
        type: Boolean,
        default: true,
    },
    is_featured:{
        type: Boolean,
        default: true,
    },
})

const ProductModel = mongoose.model("Product",productSchema,"products")

module.exports = ProductModel;