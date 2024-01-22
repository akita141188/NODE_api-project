const CategoryModel = require("../../Models/CategoryModel");
const pagination = require("../../../Libs/pagination");
const { query } = require("express");



    exports.index = async (req,res)=>{
        const query = {};
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = page*limit - limit;
        const categories = await CategoryModel.find()
        .skip(skip)
        .limit(limit)
        .sort({_id:-1})
        res
        .status(200)
        .json({
            status: "success!",
            filter: {
                limit,
                page,
            },
            data: {
                docs: categories,
            },
            pages: await pagination(CategoryModel,query,limit,page)

        })
};

exports.show = async (req,res)=>{
    const {id} = req.params;
    const categories = await CategoryModel.findById(id);
    res
    .status(200)
    .json({
        status: "success",
        data: categories,
    })
};

exports.updateCategory = async (req,res)=>{
    const {id}= req.params;
    const body = req.body;
    const category = {
        name : body.name,
        category_id: id,

    }
    await new CategoryModel(category).save();
    res
    .status(201)
    .json({
        status: "success",
        message: " create comment successfully" 
    })
};