const {Product} = require("../models");

async function getProduct(req, res){
    const products = await Product.findAll()
// coba
    const response = {
        code: 200,
        status: "Ok",
        data: products,

    };
    return res.status(response.code).json(response);
}

module.exports = {
    getProduct
}