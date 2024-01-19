const express = require("express");
const router = express.Router();

const CategoriesController = require("./../Apps/Controllers/API/CategoriesController");
router.get("/category", CategoriesController.index)
const ProductsController = require("./../Apps/Controllers/API/ProductsController");
router.get("/product", ProductsController.index)
const OdersController = require("./../Apps/Controllers/API/OdersComponent");
router.get("/oder", OdersController.oder)

module.exports = router;