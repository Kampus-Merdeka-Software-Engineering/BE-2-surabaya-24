const { Order } = require("../models");

async function createordering(req, res) {
  try {
    const { orderId, NamaProduct, NamaUser, Email, JmlOrder, productId } =
      req.body;

    // const order = await Order.findByPk(orderId);
    // if (!order) {
    //   return res
    //     .status(404)
    //     .json({ code: 404, status: "Not Found", message: "order not found" });
    // }

    const ordering = await Order.create({
      orderId: orderId,
      NamaProduct: NamaProduct,
      NamaUser: NamaUser,
      Email: Email,
      JmlOrder: JmlOrder,
      productId: productId,
    });

    // Update status buku menjadi 'ordered' atau sesuai kebutuhan
    // await order.update({ status: "ordered" });

    // Berikan respons
    const response = {
      code: 201,
      status: "Created",
      data: ordering,
    };

    return res.status(response.code).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      code: 500,
      status: "Internal Server Error",
      message: "An error occurred while processing your request",
    });
  }
}

module.exports = {
  createordering,
};
