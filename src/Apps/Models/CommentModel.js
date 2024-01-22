const mongoose = require("../../Common/database")();


const commentSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    content:{
        type: String,
        default: 0,
    },
    product_id:{
        type: String,
        ref: "Products",
        require: true,
    },
},{
    timestamps: true,
})

const CommentModel = mongoose.model("Comments",commentSchema,"comments")

module.exports = CommentModel;