const {Desserts} = require("../models");

async function getdesserts(req, res){
    const desserts = await Desserts.findAll()

    const response = {
        code: 200,
        status: "Ok",
        data: desserts,

    };
    return res.status(response.code).json(response);
}

module.exports = {
    getdesserts
}