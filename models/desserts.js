'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Desserts extends Model {

    static associate(models) {
      this.Product = Desserts.belongsTo(models.Product, {
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
  Desserts.init(
    {
      DessertsId: {
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.INTEGER,
        primaryKey: true,
      },
      DessertsName: DataTypes.STRING,
      productId: DataTypes.INTEGER,
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },{
      sequelize,
      modelName: "Desserts",
      tableName: "desserts"
    }
  );
  return Desserts;
};