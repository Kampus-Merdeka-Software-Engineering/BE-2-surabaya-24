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
          ProductImg: "httpngps://iili.io/JzNA8Wx.",
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
        // Tisane
        {
          nameProduct: "Butterfly Pea Elixir",
          priceProduct: 15,
          DescProduct: "Green Tea, Health Infused with Every Breath",
          stock: 130,
          ProductImg: "https://iili.io/JzNEx2f.png",
          Discount: "",
          CategoryName: "Tisane",
          DesInfo:
            "Green tea is a lightly oxidized tea from Camellia sinensis leaves, valued for its fresh taste and potential health benefits due to antioxidants and polyphenols. Popular types include Japanese Sencha and Chinese Longjing, enjoyed globally in various forms for its refreshing flavor and health potential.",
        },
        {
          nameProduct: "Spearmint Tea",
          priceProduct: 15,
          DescProduct: "Spearmint Tea, rejuvenating and distinct spearmint tea",
          stock: 25,
          ProductImg: "https://iili.io/JzNE02j.png",
          Discount: "",
          CategoryName: "Tisane",
          DesInfo:
            "Native to the sub-Himalayan regions of India and Nepal, moringa thrives in drought-like conditions. We blend it with sage and spearmint for a refreshing, minty lift, perfect for everyday support.",
        },
        {
          nameProduct: "Moringa Tea",
          priceProduct: 15,
          DescProduct:
            "Moringa Tea, moringa thrives in drought-like conditions",
          stock: 27,
          ProductImg: "https://iili.io/JzNE1Yx.png",
          Discount: "",
          CategoryName: "Tisane",
          DesInfo:
            "Their pristine conditions and organic practices help us achieve a crop that’s rich in essential oils, lending our tea its distinctive minty taste and its highly soothing digestive benefits.",
        },
        {
          nameProduct: "Peppermint Tea",
          priceProduct: 17,
          DescProduct:
            "Peppermint Tea, soothes your belly and alleviates digestive discomfort",
          stock: 23,
          ProductImg: "https://iili.io/JzNEEkQ.png",
          Discount: "",
          CategoryName: "Tisane",
          DesInfo: "The perfect post-meal tea!",
        },
        {
          nameProduct: "Lemongrass Tea",
          priceProduct: 13,
          DescProduct: "Lemongrass Tea, lovely lemony notes and mildly tannic",
          stock: 30,
          ProductImg: "https://iili.io/JzNEVTB.png",
          Discount: "",
          CategoryName: "Tisane",
          DesInfo:
            "An exclusive Rosella Tea - a refreshing blend of sweet and sour rosella flowers and high-quality tea leaves for a unique and satisfying drinking experience.",
        },
        {
          nameProduct: "Rosella Tea",
          priceProduct: 17,
          DescProduct:
            "Rosella Tea, a combination of rosella flowers that impart a distinctive sweet and sour taste to it",
          stock: 28,
          ProductImg: "https://iili.io/JzNEWhP.png",
          Discount: "",
          CategoryName: "Tisane",
          DesInfo:
            "Indulge your senses with our Rosebud Tea. Made from high-quality rose petals, it has a delicate floral aroma and elegant flavor in every sip.",
        },
        {
          nameProduct: "Rosebud Tea",
          priceProduct: 13,
          DescProduct:
            "Rosebud Tea, enjoy the delicate and elegant floral aroma of rose petals in your tea",
          stock: 29,
          ProductImg: "https://iili.io/JzNEXQ1.png",
          Discount: "",
          CategoryName: "Tisane",
          DesInfo:
            "Our Jasmine Tea blends high-quality green tea leaves with fresh jasmine petals, creating a smooth and fragrant brew. Enjoy the delightful flavor of jasmine flowers blended with green tea in every cup.",
        },
      ],
      {}
    );
  
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete("products", null, {});
     
  }
};
