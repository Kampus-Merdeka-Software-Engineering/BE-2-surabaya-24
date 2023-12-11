// models/feedback.js
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
    static associate(models) {
      // define association here
    }
  }
  Feedback.init(
    {
      feedbackId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      feedbackName: DataTypes.STRING,
      feedbackEmail: DataTypes.STRING,
      feedbackComment: DataTypes.TEXT,
      feedbackImg: DataTypes.STRING,
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
      modelName: "Feedback",
      tableName: "feedback",
    }
  );
  return Feedback;
};
