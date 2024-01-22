const CategoryModel = require("../../Models/CategoryModel")
const test1 = (req, res) => {

    CategoryModel.find((error, docs) => {
        console.log(docs);
    })
}

module.exports = {
    test1,
}