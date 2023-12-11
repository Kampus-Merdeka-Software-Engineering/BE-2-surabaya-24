"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.Desserts = Product.hasMany(models.Desserts, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        foreignKey: {
          name: "productId",
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      });
      this.Order = Product.hasMany(models.Order, {
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
  Product.init(
    {
      productId: {
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.INTEGER,
        primaryKey: true,
      },

      nameProduct: DataTypes.STRING,
      priceProduct: DataTypes.INTEGER,
      DescProduct: DataTypes.TEXT,
      stock: DataTypes.INTEGER,
      ProductImg: DataTypes.STRING,
      CategoryName: DataTypes.STRING,
      Discount: DataTypes.STRING,
      DesInfo: DataTypes.TEXT,
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
      modelName: "Product",
      tableName: "products",
    }
  );
  return Product;
};
