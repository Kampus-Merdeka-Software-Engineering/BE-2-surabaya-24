const {
    getProduct
  } = require("../controllers/product");
  
const {
    getdesserts
  } = require("../controllers/desserts");
const express = require("express");
const { getDetailProduct } = require("../controllers/getProductsDetail");
const { postfeed } = require("../controllers/postfeed");
const { getFeedback } = require("../controllers/getFeedback");
const { postOrder } = require("../controllers/PostOrer");
const { getOrderDetail } = require("../controllers/getOrder");

const router = express.Router();

router.get('/product', getProduct);
router.get('/desserts', getdesserts);
router.get("/detail/:productId", getDetailProduct);
router.post("/submitFeedback", postfeed);
router.get("/feedback", getFeedback);
router.post("/submitOrder", postOrder);
router.get("/OrderGet", getOrderDetail);

module.exports = router;
