'use strict';

// @type {import('sequelize-cli').Migration}
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert("desserts", [
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
      {
        DessertsName: "Strawberry Shortcake",
        productId: 3,
      },
      {
        DessertsName: "Blueberry Parfait",
        productId: 3,
      },
      {
        DessertsName: "Lemon Meringue Pie",
        productId: 3,
      },
      {
        DessertsName: "Raspberry Sorbet",
        productId: 3,
      },
      {
        DessertsName: "Chocolate Fondue",
        productId: 3,
      },
      {
        DessertsName: "Vanilla Bean Pudding",
        productId: 3,
      },
      {
        DessertsName: "Caramel Apple Crisp",
        productId: 3,
      },
      // Continue with productId 4 to 24
      {
        DessertsName: "Red Velvet Cupcakes",
        productId: 4,
      },
      {
        DessertsName: "Pistachio Baklava",
        productId: 4,
      },
      {
        DessertsName: "Coconut Cream Pie",
        productId: 4,
      },
      {
        DessertsName: "Hazelnut Torte",
        productId: 4,
      },
      {
        DessertsName: "Mango Sorbet",
        productId: 4,
      },
      {
        DessertsName: "Peach Cobbler",
        productId: 4,
      },
      {
        DessertsName: "Banana Foster Parfait",
        productId: 4,
      },
      {
        DessertsName: "Strawberry Shortcake",
        productId: 5,
      },
      {
        DessertsName: "Blueberry Parfait",
        productId: 5,
      },
      {
        DessertsName: "Lemon Meringue Pie",
        productId: 5,
      },
      {
        DessertsName: "Raspberry Sorbet",
        productId: 5,
      },
      {
        DessertsName: "Chocolate Fondue",
        productId: 5,
      },
      {
        DessertsName: "Vanilla Bean Pudding",
        productId: 5,
      },
      {
        DessertsName: "Caramel Apple Crisp",
        productId: 5,
      },
      {
        DessertsName: "Red Velvet Cupcakes",
        productId: 6,
      },
      {
        DessertsName: "Pistachio Baklava",
        productId: 6,
      },
      {
        DessertsName: "Coconut Cream Pie",
        productId: 6,
      },
      {
        DessertsName: "Hazelnut Torte",
        productId: 6,
      },
      {
        DessertsName: "Mango Sorbet",
        productId: 6,
      },
      {
        DessertsName: "Peach Cobbler",
        productId: 6,
      },
      {
        DessertsName: "Banana Foster Parfait",
        productId: 6,
      },
      // Continue with productId 7 to 24
      {
        DessertsName: "Chocolate Lava Cake",
        productId: 7,
      },
      {
        DessertsName: "Strawberry Cheesecake",
        productId: 7,
      },
      {
        DessertsName: "Pecan Pie",
        productId: 7,
      },
      {
        DessertsName: "Cinnamon Roll Sundae",
        productId: 7,
      },
      {
        DessertsName: "Pumpkin Spice Mousse",
        productId: 7,
      },
      {
        DessertsName: "Cherry Almond Tart",
        productId: 7,
      },
      {
        DessertsName: "Maple Walnut Ice Cream",
        productId: 7,
      },
      {
        DessertsName: "Matcha Mochi",
        productId: 8,
      },
      {
        DessertsName: "Matcha Tiramisu",
        productId: 8,
      },
      {
        DessertsName: "Matcha Pancakes",
        productId: 8,
      },
      {
        DessertsName: "Matcha Cheesecake",
        productId: 8,
      },
      {
        DessertsName: "Matcha Anmitsu",
        productId: 8,
      },
      {
        DessertsName: "Matcha Chiffon Cake",
        productId: 8,
      },
      {
        DessertsName: "Green Tea Latte Panna Cotta",
        productId: 8,
      },
      {
        DessertsName: "Mochi",
        productId: 9,
      },
      {
        DessertsName: "Tiramisu",
        productId: 9,
      },
      {
        DessertsName: "Pancakes",
        productId: 9,
      },
      {
        DessertsName: "Cheesecake",
        productId: 9,
      },
      {
        DessertsName: "Anmitsu",
        productId: 9,
      },
      {
        DessertsName: "Chiffon Cake",
        productId: 9,
      },
      {
        DessertsName: "Tea Latte Panna Cotta",
        productId: 9,
      },
      {
        DessertsName: "Strawberry Shortcake",
        productId: 10,
      },
      {
        DessertsName: "Blueberry Parfait",
        productId: 10,
      },
      {
        DessertsName: "Lemon Meringue Pie",
        productId: 10,
      },
      {
        DessertsName: "Raspberry Sorbet",
        productId: 10,
      },
      {
        DessertsName: "Chocolate Fondue",
        productId: 10,
      },
      {
        DessertsName: "Vanilla Bean Pudding",
        productId: 10,
      },
      {
        DessertsName: "Caramel Apple Crisp",
        productId: 10,
      },
      // Continue with productId 4 to 24
      {
        DessertsName: "Red Velvet Cupcakes",
        productId: 11,
      },
      {
        DessertsName: "Pistachio Baklava",
        productId: 11,
      },
      {
        DessertsName: "Coconut Cream Pie",
        productId: 11,
      },
      {
        DessertsName: "Hazelnut Torte",
        productId: 11,
      },
      {
        DessertsName: "Mango Sorbet",
        productId: 11,
      },
      {
        DessertsName: "Peach Cobbler",
        productId: 11,
      },
      {
        DessertsName: "Banana Foster Parfait",
        productId: 11,
      },
      {
        DessertsName: "Strawberry Shortcake",
        productId: 12,
      },
      {
        DessertsName: "Blueberry Parfait",
        productId: 12,
      },
      {
        DessertsName: "Lemon Meringue Pie",
        productId: 12,
      },
      {
        DessertsName: "Raspberry Sorbet",
        productId: 12,
      },
      {
        DessertsName: "Chocolate Fondue",
        productId: 12,
      },
      {
        DessertsName: "Vanilla Bean Pudding",
        productId: 12,
      },
      {
        DessertsName: "Caramel Apple Crisp",
        productId: 12,
      },
      {
        DessertsName: "Red Velvet Cupcakes",
        productId: 13,
      },
      {
        DessertsName: "Pistachio Baklava",
        productId: 13,
      },
      {
        DessertsName: "Coconut Cream Pie",
        productId: 13,
      },
      {
        DessertsName: "Hazelnut Torte",
        productId: 13,
      },
      {
        DessertsName: "Mango Sorbet",
        productId: 13,
      },
      {
        DessertsName: "Peach Cobbler",
        productId: 13,
      },
      {
        DessertsName: "Banana Foster Parfait",
        productId: 13,
      },
      {
        DessertsName: "Chocolate Lava Cake",
        productId: 14,
      },
      {
        DessertsName: "Strawberry Cheesecake",
        productId: 14,
      },
      {
        DessertsName: "Pecan Pie",
        productId: 14,
      },
      {
        DessertsName: "Cinnamon Roll Sundae",
        productId: 14,
      },
      {
        DessertsName: "Pumpkin Spice Mousse",
        productId: 14,
      },
      {
        DessertsName: "Cherry Almond Tart",
        productId: 14,
      },
      {
        DessertsName: "Maple Walnut Ice Cream",
        productId: 14,
      },
      {
        DessertsName: "Matcha Mochi",
        productId: 15,
      },
      {
        DessertsName: "Matcha Tiramisu",
        productId: 15,
      },
      {
        DessertsName: "Matcha Pancakes",
        productId: 15,
      },
      {
        DessertsName: "Matcha Cheesecake",
        productId: 15,
      },
      {
        DessertsName: "Matcha Anmitsu",
        productId: 15,
      },
      {
        DessertsName: "Matcha Chiffon Cake",
        productId: 15,
      },
      {
        DessertsName: "Green Tea Latte Panna Cotta",
        productId: 15,
      },
      {
        DessertsName: "Mochi",
        productId: 16,
      },
      {
        DessertsName: "Tiramisu",
        productId: 16,
      },
      {
        DessertsName: "Pancakes",
        productId: 16,
      },
      {
        DessertsName: "Cheesecake",
        productId: 16,
      },
      {
        DessertsName: "Anmitsu",
        productId: 16,
      },
      {
        DessertsName: "Chiffon Cake",
        productId: 16,
      },
      {
        DessertsName: "Tea Latte Panna Cotta",
        productId: 16,
      },
      {
        DessertsName: "Strawberry Shortcake",
        productId: 17,
      },
      {
        DessertsName: "Blueberry Parfait",
        productId: 17,
      },
      {
        DessertsName: "Lemon Meringue Pie",
        productId: 17,
      },
      {
        DessertsName: "Raspberry Sorbet",
        productId: 17,
      },
      {
        DessertsName: "Chocolate Fondue",
        productId: 17,
      },
      {
        DessertsName: "Vanilla Bean Pudding",
        productId: 17,
      },
      {
        DessertsName: "Caramel Apple Crisp",
        productId: 17,
      },
      {
        DessertsName: "Red Velvet Cupcakes",
        productId: 18,
      },
      {
        DessertsName: "Pistachio Baklava",
        productId: 18,
      },
      {
        DessertsName: "Coconut Cream Pie",
        productId: 18,
      },
      {
        DessertsName: "Hazelnut Torte",
        productId: 18,
      },
      {
        DessertsName: "Mango Sorbet",
        productId: 18,
      },
      {
        DessertsName: "Peach Cobbler",
        productId: 18,
      },
      {
        DessertsName: "Banana Foster Parfait",
        productId: 18,
      },
      {
        DessertsName: "Strawberry Shortcake",
        productId: 19,
      },
      {
        DessertsName: "Blueberry Parfait",
        productId: 19,
      },
      {
        DessertsName: "Lemon Meringue Pie",
        productId: 19,
      },
      {
        DessertsName: "Raspberry Sorbet",
        productId: 19,
      },
      {
        DessertsName: "Chocolate Fondue",
        productId: 19,
      },
      {
        DessertsName: "Vanilla Bean Pudding",
        productId: 19,
      },
      {
        DessertsName: "Caramel Apple Crisp",
        productId: 19,
      },
      {
        DessertsName: "Red Velvet Cupcakes",
        productId: 20,
      },
      {
        DessertsName: "Pistachio Baklava",
        productId: 20,
      },
      {
        DessertsName: "Coconut Cream Pie",
        productId: 20,
      },
      {
        DessertsName: "Hazelnut Torte",
        productId: 20,
      },
      {
        DessertsName: "Mango Sorbet",
        productId: 20,
      },
      {
        DessertsName: "Peach Cobbler",
        productId: 20,
      },
      {
        DessertsName: "Banana Foster Parfait",
        productId: 20,
      },
      {
        DessertsName: "Chocolate Lava Cake",
        productId: 21,
      },
      {
        DessertsName: "Strawberry Cheesecake",
        productId: 21,
      },
      {
        DessertsName: "Pecan Pie",
        productId: 21,
      },
      {
        DessertsName: "Cinnamon Roll Sundae",
        productId: 21,
      },
      {
        DessertsName: "Pumpkin Spice Mousse",
        productId: 21,
      },
      {
        DessertsName: "Cherry Almond Tart",
        productId: 21,
      },
      {
        DessertsName: "Maple Walnut Ice Cream",
        productId: 21,
      },
      {
        DessertsName: "Strawberry Shortcake",
        productId: 22,
      },
      {
        DessertsName: "Blueberry Parfait",
        productId: 22,
      },
      {
        DessertsName: "Lemon Meringue Pie",
        productId: 22,
      },
      {
        DessertsName: "Raspberry Sorbet",
        productId: 22,
      },
      {
        DessertsName: "Chocolate Fondue",
        productId: 22,
      },
      {
        DessertsName: "Vanilla Bean Pudding",
        productId: 22,
      },
      {
        DessertsName: "Caramel Apple Crisp",
        productId: 22,
      },
      {
        DessertsName: "Red Velvet Cupcakes",
        productId: 23,
      },
      {
        DessertsName: "Pistachio Baklava",
        productId: 23,
      },
      {
        DessertsName: "Coconut Cream Pie",
        productId: 23,
      },
      {
        DessertsName: "Hazelnut Torte",
        productId: 23,
      },
      {
        DessertsName: "Mango Sorbet",
        productId: 23,
      },
      {
        DessertsName: "Peach Cobbler",
        productId: 23,
      },
      {
        DessertsName: "Banana Foster Parfait",
        productId: 23,
      },
      // {
      //   DessertsName: "Chocolate Lava Cake",
      //   productId: 24,
      // },
      // {
      //   DessertsName: "Strawberry Cheesecake",
      //   productId: 24,
      // },
      // {
      //   DessertsName: "Pecan Pie",
      //   productId: 24,
      // },
      // {
      //   DessertsName: "Cinnamon Roll Sundae",
      //   productId: 24,
      // },
      // {
      //   DessertsName: "Pumpkin Spice Mousse",
      //   productId: 24,
      // },
      // {
      //   DessertsName: "Cherry Almond Tart",
      //   productId: 24,
      // },
      // {
      //   DessertsName: "Maple Walnut Ice Cream",
      //   productId: 24,
      // },
    ]);

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete("desserts", null, {});
  }
};
