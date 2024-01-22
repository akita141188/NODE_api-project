const express = require("express");
const router = express.Router();

const CategoriesController = require("./../Apps/Controllers/API/CategoriesController");
router.get("/category", CategoriesController.index);
router.get("/category/:id", CategoriesController.show);
router.post("/category/:id", CategoriesController.updateCategory);

const ProductsController = require("./../Apps/Controllers/API/ProductsController");
router.get("/products", ProductsController.index);
router.get("/products/:id", ProductsController.show);
router.get("/products/:id/comments",ProductsController.comments)
router.post("/products/:id/comments",ProductsController.storeComments)

const OrdersController = require("./../Apps/Controllers/API/OdersComponent");
router.get("/order", OrdersController.order);

const testController = require("./../Apps/Controllers/API/testController")
router.get("/test",testController.test1);

module.exports = router;