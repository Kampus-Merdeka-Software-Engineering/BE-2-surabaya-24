"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("feedbacks", {
      feedbackId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      feedbacktName: {
        type: Sequelize.STRING,
      },
      feedbackEmail: {
        type: Sequelize.STRING,
      },
      feedbackComment: {
        type: Sequelize.TEXT,
      },
      feedbackImg: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("feedbacks");
  },
};
