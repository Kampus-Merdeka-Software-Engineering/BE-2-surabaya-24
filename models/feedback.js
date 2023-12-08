"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class feedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  feedback.init(
    {
      feedbackId: {
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.INTEGER,
        primaryKey: true,
      },

      feedbacktName: DataTypes.STRING,
      feedbackEmail: DataTypes.STRING,
      feedbackComment: DataTypes.TEXT,
      feedbackImg: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "feedback",
    }
  );
  return feedback;
};
