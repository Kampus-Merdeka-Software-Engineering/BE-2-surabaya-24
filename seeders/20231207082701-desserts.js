'use strict';

// @type {import('sequelize-cli').Migration}
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      "desserts",
      [
        {
          DessertsName: "Matcha Mochi",
          productId: 1,
        },
        {
          DessertsName: "Matcha Tiramisu",
          productId: 1,
        },
        {
          DessertsName: "Matcha Pancakes",
          productId: 1,
        },
        {
          DessertsName: "Matcha Cheesecake",
          productId: 1,
        },
        {
          DessertsName: "Matcha Anmitsu",
          productId: 1,
        },
        {
          DessertsName: "Matcha Chiffon Cake",
          productId: 1,
        },
        {
          DessertsName: "Green Tea Latte Panna Cotta",
          productId: 1,
        },
        {
          DessertsName: "Mochi",
          productId: 2,
        },
        {
          DessertsName: "Tiramisu",
          productId: 2,
        },
        {
          DessertsName: "Pancakes",
          productId: 2,
        },
        {
          DessertsName: "Cheesecake",
          productId: 2,
        },
        {
          DessertsName: "Anmitsu",
          productId: 2,
        },
        {
          DessertsName: "Chiffon Cake",
          productId: 2,
        },
        {
          DessertsName: "Tea Latte Panna Cotta",
          productId: 2,
        },
      ],
    );

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete("desserts", null, {});
  }
};
