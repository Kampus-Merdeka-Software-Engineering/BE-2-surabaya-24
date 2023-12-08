'use strict';

// @type {import('sequelize-cli').Migration}
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert(
      "products",
      [
        {
          // OriginTea
          nameProduct: "Green Tea",
          priceProduct: 15,
          DescProduct: "Green Tea, Health Infused with Every Breath",
          stock: 130,
          ProductImg: "https://iili.io/JzNA8Wx.png",
          Discount: "10%",
          CategoryName: "Origin Tea",
          DesInfo:
            "Green tea is a lightly oxidized tea from Camellia sinensis leaves, valued for its fresh taste and potential health benefits due to antioxidants and polyphenols. Popular types include Japanese Sencha and Chinese Longjing, enjoyed globally in various forms for its refreshing flavor and health potential.",
        },
        {
          nameProduct: "Oolong",
          priceProduct: 13,
          DescProduct:
            "Oolong tea is a semi-oxidized tea with a flavor profile between green and black tea",
          stock: 30,
          ProductImg: "https://iili.io/JzNAgfV.png",
          Discount: "",
          CategoryName: "Origin Tea",
          DesInfo:
            "Oolong is a type of tea that undergoes partial oxidation, resulting in a balanced flavor profile between green and black tea.",
        },
        {
          nameProduct: "white tea",
          priceProduct: 20,
          DescProduct:
            "Oolong tea is a semi-oxidized tea with a flavor profile between green and black tea",
          stock: 30,
          ProductImg: "https://iili.io/JzNASiQ.png",
          Discount: "",
          CategoryName: "Origin Tea",
          DesInfo:
            "White tea is the least processed among all tea types, made from young tea leaves and buds that are minimally oxidized and simply dried, resulting in a delicate flavor with subtle floral notes.",
        },
        {
          nameProduct: "Black Tea",
          priceProduct: 15,
          DescProduct:
            "Oolong tea is a semi-oxidized tea with a flavor profile between green and black tea",
          stock: 20,
          ProductImg: "https://iili.io/JzNAvxj.png",
          Discount: "",
          CategoryName: "Origin Tea",
          DesInfo:
            "Green tea is a lightly oxidized tea from Camellia sinensis leaves, valued for its fresh taste and potential health benefits due to antioxidants and polyphenols. Popular types include Japanese Sencha and Chinese Longjing, enjoyed globally in various forms for its refreshing flavor and health potential.",
        },
        {
          nameProduct: "Genmaicha",
          priceProduct: 24,
          DescProduct:
            "Oolong tea is a semi-oxidized tea with a flavor profile between green and black tea",
          stock: 3,
          ProductImg: "https://iili.io/JzNAr0B.png",
          Discount: "5",
          CategoryName: "Origin Tea",
          DesInfo:
            "Green tea is a lightly oxidized tea from Camellia sinensis leaves, valued for its fresh taste and potential health benefits due to antioxidants and polyphenols. Popular types include Japanese Sencha and Chinese Longjing, enjoyed globally in various forms for its refreshing flavor and health potential.",
        },
        {
          nameProduct: "Earl Grey",
          priceProduct: 30,
          DescProduct:
            "Oolong tea is a semi-oxidized tea with a flavor profile between green and black tea",
          stock: 90,
          ProductImg: "https://iili.io/JzNA4UP.png",
          Discount: "",
          CategoryName: "Origin Tea",
          DesInfo:
            "Green tea is a lightly oxidized tea from Camellia sinensis leaves, valued for its fresh taste and potential health benefits due to antioxidants and polyphenols. Popular types include Japanese Sencha and Chinese Longjing, enjoyed globally in various forms for its refreshing flavor and health potential.",
        },
        {
          nameProduct: "Pu-erh Tea",
          priceProduct: 25,
          DescProduct:
            "Oolong tea is a semi-oxidized tea with a flavor profile between green and black tea",
          stock: 10,
          ProductImg: "https://iili.io/JzNEz74.png",
          Discount: "",
          CategoryName: "Origin Tea",
          DesInfo:
            "Green tea is a lightly oxidized tea from Camellia sinensis leaves, valued for its fresh taste and potential health benefits due to antioxidants and polyphenols. Popular types include Japanese Sencha and Chinese Longjing, enjoyed globally in various forms for its refreshing flavor and health potential.",
        },
        {
          nameProduct: "Masala Chai Tea",
          priceProduct: 20,
          DescProduct:
            "Oolong tea is a semi-oxidized tea with a flavor profile between green and black tea",
          stock: 60,
          ProductImg: "https://iili.io/JzNEIkl.png",
          Discount: "",
          CategoryName: "Origin Tea",
          DesInfo:
            "Green tea is a lightly oxidized tea from Camellia sinensis leaves, valued for its fresh taste and potential health benefits due to antioxidants and polyphenols. Popular types include Japanese Sencha and Chinese Longjing, enjoyed globally in various forms for its refreshing flavor and health potential.",
        },

        {
          // SweeTea
          nameProduct: "Butterfly Pea Elixir",
          priceProduct: 15,
          DescProduct: "Green Tea, Health Infused with Every Breath",
          stock: 130,
          ProductImg: "https://iili.io/JzNEx2f.png",
          Discount: "5%",
          CategoryName: "Sweet Tea",
          DesInfo:
            "Green tea is a lightly oxidized tea from Camellia sinensis leaves, valued for its fresh taste and potential health benefits due to antioxidants and polyphenols. Popular types include Japanese Sencha and Chinese Longjing, enjoyed globally in various forms for its refreshing flavor and health potential.",
        },
        {
          nameProduct: "Oolong",
          priceProduct: 13,
          DescProduct:
            "Oolong tea is a semi-oxidized tea with a flavor profile between green and black tea",
          stock: 30,
          ProductImg: "https://iili.io/JzNAgfV.png",
          Discount: "",
          CategoryName: "Sweet Tea",
          DesInfo:
            "Oolong is a type of tea that undergoes partial oxidation, resulting in a balanced flavor profile between green and black tea.",
        },
        {
          nameProduct: "white tea",
          priceProduct: 20,
          DescProduct:
            "Oolong tea is a semi-oxidized tea with a flavor profile between green and black tea",
          stock: 30,
          ProductImg: "https://iili.io/JzNASiQ.png",
          Discount: "",
          CategoryName: "Sweet Tea",
          DesInfo:
            "White tea is the least processed among all tea types, made from young tea leaves and buds that are minimally oxidized and simply dried, resulting in a delicate flavor with subtle floral notes.",
        },
        {
          nameProduct: "Black Tea",
          priceProduct: 15,
          DescProduct:
            "Oolong tea is a semi-oxidized tea with a flavor profile between green and black tea",
          stock: 30,
          ProductImg: "https://iili.io/JzNAvxj.png",
          Discount: "",
          CategoryName: "Sweet Tea",
          DesInfo:
            "Green tea is a lightly oxidized tea from Camellia sinensis leaves, valued for its fresh taste and potential health benefits due to antioxidants and polyphenols. Popular types include Japanese Sencha and Chinese Longjing, enjoyed globally in various forms for its refreshing flavor and health potential.",
        },
        {
          nameProduct: "Genmaicha",
          priceProduct: 15,
          DescProduct:
            "Oolong tea is a semi-oxidized tea with a flavor profile between green and black tea",
          stock: 30,
          ProductImg: "https://iili.io/JzNAr0B.png",
          Discount: "",
          CategoryName: "Sweet Tea",
          DesInfo:
            "Green tea is a lightly oxidized tea from Camellia sinensis leaves, valued for its fresh taste and potential health benefits due to antioxidants and polyphenols. Popular types include Japanese Sencha and Chinese Longjing, enjoyed globally in various forms for its refreshing flavor and health potential.",
        },
        {
          nameProduct: "Earl Grey",
          priceProduct: 15,
          DescProduct:
            "Oolong tea is a semi-oxidized tea with a flavor profile between green and black tea",
          stock: 30,
          ProductImg: "https://iili.io/JzNA4UP.png",
          Discount: "",
          CategoryName: "Sweet Tea",
          DesInfo:
            "Green tea is a lightly oxidized tea from Camellia sinensis leaves, valued for its fresh taste and potential health benefits due to antioxidants and polyphenols. Popular types include Japanese Sencha and Chinese Longjing, enjoyed globally in various forms for its refreshing flavor and health potential.",
        },
        {
          nameProduct: "Pu-erh Tea",
          priceProduct: 15,
          DescProduct:
            "Oolong tea is a semi-oxidized tea with a flavor profile between green and black tea",
          stock: 30,
          ProductImg: "https://iili.io/JzNEz74.png",
          Discount: "",
          CategoryName: "Sweet Tea",
          DesInfo:
            "Green tea is a lightly oxidized tea from Camellia sinensis leaves, valued for its fresh taste and potential health benefits due to antioxidants and polyphenols. Popular types include Japanese Sencha and Chinese Longjing, enjoyed globally in various forms for its refreshing flavor and health potential.",
        },
        {
          nameProduct: "Masala Chai Tea",
          priceProduct: 15,
          DescProduct:
            "Oolong tea is a semi-oxidized tea with a flavor profile between green and black tea",
          stock: 30,
          ProductImg: "https://iili.io/JzNEIkl.png",
          Discount: "",
          CategoryName: "Sweet Tea",
          DesInfo:
            "Green tea is a lightly oxidized tea from Camellia sinensis leaves, valued for its fresh taste and potential health benefits due to antioxidants and polyphenols. Popular types include Japanese Sencha and Chinese Longjing, enjoyed globally in various forms for its refreshing flavor and health potential.",
        },
      ],
      {}
    );
  
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete("products", null, {});
     
  }
};
