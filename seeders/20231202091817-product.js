"use strict";

// @type {import('sequelize-cli').Migration}
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          // OriginTea
          nameProduct: "Green Tea",
          priceProduct: 15,
          DescProduct: "Green Tea, Health Infused with Every Breath",
          stock: 130,
          ProductImg: "https://iili.io/JzNAgfV.png",
          Discount: 10,
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
          Discount: 5,
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
          Discount: 5,
          CategoryName: "Sweet Tea",
          DesInfo:
            "Green tea is a lightly oxidized tea from Camellia sinensis leaves, valued for its fresh taste and potential health benefits due to antioxidants and polyphenols. Popular types include Japanese Sencha and Chinese Longjing, enjoyed globally in various forms for its refreshing flavor and health potential.",
        },
        {
          nameProduct: "Blue Thai Tea",
          priceProduct: 25,
          DescProduct:
            "A delicate blend of sweet and spicy Thai Tea with blue pearls from the Thai blue orchid flower.",
          stock: 28,
          ProductImg: "https://iili.io/JzNETp2.png",
          CategoryName: "SweeTea",
          DesInfo:
            "The traditional Thai tea combined with pearls of natural blue color from Thai orchid flower. Enjoy the authentic taste that gives you a calming effect and harmonizes your emotions.",
        },
        {
          nameProduct: "Alga On Ocean",
          priceProduct: 25,
          DescProduct:
            "The matcha's tangy flavor blends perfectly with the pearls derived from butterfly pea flowers.",
          stock: 28,
          ProductImg: "https://iili.io/JzNEnrG.png",
          Discount: 15,
          CategoryName: "SweeTea",
          DesInfo:
            "An exclusive upgrade from your usual matcha latte with natural blue color pearls. Enjoy the next level experience of having a matcha latte that amplifies your focus and immuni-tea!",
        },
        {
          nameProduct: "Matcha Boba",
          priceProduct: 25,
          DescProduct:
            "Rich matcha sweet-bitterness complemented by the chewiness of brown sugar pearls.",
          stock: 27,
          ProductImg: "https://iili.io/JzNETp2.png",
          CategoryName: "SweeTea",
          DesInfo:
            "Flavorful green tea with less caffeine, natural sugar content, and chewy boba pearls. Specially tailored for those who need a boost of energy without having the anxie-tea side effect.",
        },
        {
          nameProduct: "Taiwan Milk Tea",
          priceProduct: 22,
          DescProduct: "The taste of authentic taiwan milk tea",
          stock: 25,
          ProductImg: "https://iili.io/JzNEAIS.png",
          CategoryName: "SweeTea",
          DesInfo:
            "A unique blend of robust Taiwanese black tea, caramelized brown sugar, plus boba, and extra bubble jelly on top. Perfect for your mood booster and extra happiness.",
        },
        {
          nameProduct: "Rose Matcha",
          priceProduct: 22,
          DescProduct: "The sweetness of rose syrup in thick matcha",
          stock: 24,
          ProductImg: "https://iili.io/JzNERh7.png",
          CategoryName: "SweeTea",
          DesInfo:
            "Features a homemade rose syrup that sweetens and adds a delicate floral fragrance to the green tea. Have trouble sleeping? this is the ultimate choice to fight insomnia!",
        },
        {
          nameProduct: "Taro Boba Tea",
          priceProduct: 25,
          DescProduct:
            "Nutty-vanilla taro flavour complemented by chewiness of brown sugar pearls.",
          stock: 23,
          ProductImg: "https://iili.io/JzNE5Q9.png",
          CategoryName: "SweeTea",
          DesInfo:
            "The perfect purple color combines with taro root's sweet, nutty-vanilla taste. Great for restoring that stamina and adding excitement to your boring day!",
        },
        {
          nameProduct: "Butterfly Pea Boba",
          priceProduct: 25,
          DescProduct:
            "Butterfly pea flower tea with milk, paired with brown sugar pearls.",
          stock: 21,
          ProductImg: "https://iili.io/JzNEYBe.png",
          Discount: 15,
          CategoryName: "SweeTea",
          DesInfo:
            "The exotic variation of the classic boba tea, made with Thai butterfly pea flower tea and fresh coconut milk. Feeling Tired? Refresh the brain and bolster energy levels with this!",
        },
        // Tisane
        {
          nameProduct: "Chamomile Tea",
          priceProduct: 15,
          DescProduct:
            "Chamomile calms your nerves and supports healthy digestion.",
          stock: 22,
          ProductImg: "https://iili.io/JzNEaEu.png",
          Discount: 5,
          CategoryName: "Tisane",
          DesInfo:
            "With chamomile tea benefits ranging from calming your nerves to supporting digestion, it’s no wonder chamomile is one of the most beloved plants in herbalism and a reliable household staple. To deliver the health benefits of chamomile tea, we use chamomile’s prized flowers—the most potent part of the plant due to its high essential oil content.",
        },
        {
          nameProduct: "Spearmint Tea",
          priceProduct: 15,
          DescProduct: "Spearmint Tea, rejuvenating and distinct spearmint tea",
          stock: 25,
          ProductImg: "https://iili.io/JzNE02j.png",
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
          CategoryName: "Tisane",
          DesInfo: "The perfect post-meal tea!",
        },
        {
          nameProduct: "Lemongrass Tea",
          priceProduct: 13,
          DescProduct: "Lemongrass Tea, lovely lemony notes and mildly tannic",
          stock: 30,
          ProductImg: "https://iili.io/JzNEVTB.png",
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
          Discount: 5,
          CategoryName: "Tisane",
          DesInfo:
            "Our Jasmine Tea blends high-quality green tea leaves with fresh jasmine petals, creating a smooth and fragrant brew. Enjoy the delightful flavor of jasmine flowers blended with green tea in every cup.",
        },
        {
          nameProduct: "Jasmine Tea",
          priceProduct: 15,
          DescProduct:
            "Enjoy a fragrant and pleasant tea experience with jasmine-scented green tea leaves.",
          stock: 24,
          ProductImg: "https://iili.io/JzNEXQ1.png",
          CategoryName: "Tisane",
          DesInfo:
            "Our Jasmine Tea blends high-quality green tea leaves with fresh jasmine petals, creating a smooth and fragrant brew. Enjoy the delightful flavor of jasmine flowers blended with green tea in every cup.",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
