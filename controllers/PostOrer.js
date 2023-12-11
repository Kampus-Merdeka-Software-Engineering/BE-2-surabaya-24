const { Order } = require("../models");

async function postOrder(req, res) {
  try {
    const { NamaProduct, NamaUser, Email, JmlOrder, productId } = req.body;

    // Validate required fields
    if (!NamaProduct || !Email || !productId) {
      return res.status(400).json({ error: "Incomplete data" });
    }

    const order = await Order.create({
      NamaProduct,
      NamaUser,
      Email,
      JmlOrder,
      productId, // Include productId in the creation data
    });

    const response = {
      code: 201,
      status: "Created",
      data: order,
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
  postOrder,
};
