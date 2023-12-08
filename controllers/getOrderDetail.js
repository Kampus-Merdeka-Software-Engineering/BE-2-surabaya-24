const { Product } = require("../models");
const { Order } = require("../models");

async function getOrderDetail(req, res) {
  const detailOrder = await Product.findOne({
    where: { productId: req.params.productId },
    include: { model: Order},
  });

  const response = {
    code: 200,
    status: "Ok",
    data: detailOrder,
  };
  return res.status(response.code).json(response);
}

module.exports = {
  getOrderDetail,
};
