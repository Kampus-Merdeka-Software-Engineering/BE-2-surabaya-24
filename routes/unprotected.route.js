const {
    getProduct
  } = require("../controllers/product");
  
const {
    getdesserts
  } = require("../controllers/desserts");
const express = require("express");
const { getDetailProduct } = require("../controllers/getProductsDetail");
const { createordering } = require("../controllers/createOrder");

const router = express.Router();

router.get('/product', getProduct)
router.get('/desserts', getdesserts)
router.get("/detail/:productId", getDetailProduct);
router.post("/order", createordering);
module.exports = router;
