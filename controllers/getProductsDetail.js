const { Product } = require("../models");
const {Desserts} = require("../models");

async function getDetailProduct(req, res) {
  const detail = await Product.findOne({
    where: { productId: req.params.productId },
    include: { model: Desserts, attributes: ["DessertsName"] },
  });

  const response = {
    code: 200,
    status: "Ok",
    data: detail,
  };
  return res.status(response.code).json(response);
}

module.exports = {
  getDetailProduct,
};
