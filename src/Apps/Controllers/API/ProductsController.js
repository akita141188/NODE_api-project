const ProductModel = require("../../Models/ProductModel")
const CommentModel = require("../../Models/CommentModel")
const pagination = require("../../../Libs/pagination")
exports.index = async (req, res) => {
    const query = {};
    query.is_stock = req.query.is_stock || true;
    query.is_featured = req.query.is_featured || false;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = page * limit - limit;
    const products = await ProductModel.find(query)
        .sort({ _id: -1 })
        .skip(skip)
        .limit(limit)
    res
        .status(200)
        .json({
            status: "Success !",
            filter: {
                is_stock: query.is_stock,
                is_featured: query.is_featured,
                page,
                limit,

            },
            data: {
                docs: products,
            },
            pages: await pagination(ProductModel, query, limit, page),

        });

};

exports.show = async (req, res) => {
    const { id } = req.params;
    const products = await ProductModel.findById(id);
    res
        .status(200)
        .json({
            status: "success!",
            data: products,
        })

}
exports.comments = async (req, res) => {
    const query = {};
    query.product_id = req.params.id;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = page * limit - limit;
    const comments = await CommentModel.find(query)
        .skip(skip)
        .limit(limit)
        .sort({_id: -1});
    res
        .status(200)
        .json({
            status: " success",
            filter: {
                page,
                limit,


            },
            data: {
                docs: comments,
            },
            pages: await pagination(CommentModel, query, limit, page)
        })
}
exports.storeComments = async (req, res) => {
    const {id}= req.params;
    const body=req.body;
    const comment = {
        name: body.name,
        email: body.email,
        content: body.content ,
        product_id : id,
    }
    await new CommentModel(comment).save();
    res
        .status(201)
        .json({
            status: "success",
            message: " create comment successfully" 
        })

}