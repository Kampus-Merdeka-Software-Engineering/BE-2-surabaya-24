const {Order} = require("../models");

async function getOrderDetail(req, res){
    const order = await Order.findAll()

    const response = {
        code: 200,
        status: "Ok",
        data: order,

    };
    return res.status(response.code).json(response);
}

module.exports = {
    getOrderDetail
}