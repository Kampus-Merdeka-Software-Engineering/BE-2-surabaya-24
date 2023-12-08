"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      this.Product = Order.belongsTo(models.Order, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        foreignKey: {
          name: "productId",
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      });
    }
  }
  Order.init(
    {
      orderId: {
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.INTEGER,
        primaryKey: true,
      },
      NamaProduct: DataTypes.STRING,
      NamaUser: DataTypes.STRING,
      Email: DataTypes.STRING,
      JmlOrder: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
