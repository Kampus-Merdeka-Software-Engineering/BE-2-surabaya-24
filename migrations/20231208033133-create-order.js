"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Orders", {
      orderId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      NamaProduct: {
        type: Sequelize.STRING,
      },
      NamaUser: {
        type: Sequelize.STRING,
      },
      Email: {
        type: Sequelize.STRING,
      },
      JmlOrder: {
        type: Sequelize.STRING,
      },
      productId: {
        type: Sequelize.INTEGER,
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
    await queryInterface.addConstraint("Orders", {
      fields: ["productId"],
      type: "foreign key",
      references: {
        table: "products",
        field: "productId",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Orders");
  },
};
