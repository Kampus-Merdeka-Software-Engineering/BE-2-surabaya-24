const {
    getProduct
  } = require("../controllers/product");
  
const {
    getdesserts
  } = require("../controllers/desserts");
const express = require("express");
const { getDetailProduct } = require("../controllers/getProductsDetail");
const { createordering } = require("../controllers/createOrder");
const { postfeed } = require("../controllers/postfeed");


const router = express.Router();

router.get('/product', getProduct);
router.get('/desserts', getdesserts);
router.get("/detail/:productId", getDetailProduct);
router.post("/order", createordering);
router.post("/submit-feedback", postfeed);

module.exports = router;
