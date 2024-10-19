import { fruitsImages } from "./fruitsimages";

export const fruits = [
  {
    id: 1,
    name: "Apple",
    img: fruitsImages.apple,
    inGeneralHeading: `The Quintessential Fruit`,
    inGeneral: `An apple is the edible fruit of a number of trees, known for its juicy, green, or red varieties. The tree  is cultivated globally, and its fruit is low-cost, popular, and widely consumed around the world.
Applewood, a type of wood derived from this tree, is valued for its durability and is often used in furniture making and smoking foods.
The apple tree is believed to have originated in southern Kazakhstan, Kyrgyzstan, Uzbekistan, and the northwestern part of China. Apples have been cultivated for thousands of years in both Asia and Europe and were introduced to North America by European settlers. The fruit holds significant religious and mythological importance in many cultures, symbolizing knowledge, temptation, and health.
Apples are predominantly grown through grafting techniques, although wild apples can easily propagate from seeds. Trees grown from seeds tend to be larger, while those grafted onto rootstock are generally smaller. There are more than 10,000 known varieties of apples, each selected for unique characteristics and flavors. Common uses include eating fresh, cooking, and cider production.
Regarding food safety, apple seeds contain amygdalin, which can release cyanide when metabolized. Although the amount in seeds is typically low, and significant consumption would be needed to pose a risk, it is important to be aware of this toxicity.
Apple trees and their fruit are vulnerable to various threats, including fungi, bacteria, and pests. In 2010, the genome of the apple was sequenced, contributing to research aimed at enhancing disease resistance and improving breeding techniques.
In 2013, global apple production reached 90.8 million tonnes, with China accounting for 49% of the total output. This widespread cultivation reflects the apple's importance as a staple fruit in diets worldwide.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 52,
        measurementUnits: "kcal",
        description:
          "– Low in calories, making it a healthy, light snack option.",
      },
      {
        element: "Fats:",
        quantity: 0.2,
        measurementUnits: "g",
        description: "– Very low in fat, mostly made up of unsaturated fats.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 0.03,
        measurementUnits: "g",
        description:
          "– Contains a negligible amount of saturated fats, promoting heart health.",
      },
      {
        element: "Cholesterol:",
        quantity: 0,
        measurementUnits: "mg",
        description: "– Cholesterol-free, making it heart-healthy.",
      },
      {
        element: "Sodium:",
        quantity: 1,
        measurementUnits: "mg",
        description:
          "– Very low in sodium, helping to maintain normal blood pressure.",
      },
      {
        element: "Potassium:",
        quantity: 107,
        measurementUnits: "mg",
        description:
          "– Provides a small amount of potassium, important for muscle function.",
      },
      {
        element: "Carbohydrates:",
        quantity: 13.8,
        measurementUnits: "g",
        description:
          "– Primarily composed of carbohydrates, mainly sugars and fiber.",
      },
      {
        element: "Fiber:",
        quantity: 2.4,
        measurementUnits: "g",
        description:
          "– A good source of dietary fiber, supporting healthy digestion.",
      },
      {
        element: "Sugar:",
        quantity: 10.4,
        measurementUnits: "g",
        description:
          "– Contains natural sugars, providing sweetness without added sugar.",
      },
      {
        element: "Proteins:",
        quantity: 0.3,
        measurementUnits: "g",
        description: "– Low in protein, typical of most fruits.",
      },
      {
        element: "Vitamin C:",
        quantity: 4.6,
        measurementUnits: "mg",
        description:
          "– A decent source of vitamin C, important for immune health and skin.",
      },
      {
        element: "Calcium:",
        quantity: 6,
        measurementUnits: "mg",
        description:
          "– Contains a small amount of calcium, contributing to bone health.",
      },
      {
        element: "Iron:",
        quantity: 0.1,
        measurementUnits: "mg",
        description:
          "– Provides a small amount of iron, important for blood health.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description:
          "– No vitamin D present, which is obtained from sunlight or fortified foods.",
      },
      {
        element: "Vitamin B6:",
        quantity: 0.04,
        measurementUnits: "mg",
        description:
          "– Helps support metabolism and brain function, though in small amounts.",
      },
      {
        element: "Vitamin B12:",
        quantity: 0,
        measurementUnits: "µg",
        description:
          "– Does not contain vitamin B12, typically found in animal products.",
      },
      {
        element: "Magnesium:",
        quantity: 5,
        measurementUnits: "mg",
        description:
          "– A small source of magnesium, important for muscle and nerve health.",
      },
      {
        element: "Zinc:",
        quantity: 0.04,
        measurementUnits: "mg",
        description:
          "– Contains a trace amount of zinc, supporting immune function.",
      },
      {
        element: "Vitamin E:",
        quantity: 0.18,
        measurementUnits: "mg",
        description:
          "– A small amount of vitamin E, which helps protect cells from oxidative damage.",
      },
    ],
    cultivationHeading:
      "Apple cultivation involves growing apple trees, a process that requires specific conditions and care to produce high-quality fruit. Here's an overview of the key aspects of apple cultivation",
    cultivation: [
      {
        id: 11,
        topic: `Climate`,
        children: [
          {
            id: 111,
            topic: `Temperature`,
            text: `Apple trees grow best in regions with cool climates, where they experience cold winters and moderate summers. Ideal temperatures range between 21°C and 24°C (70°F and 75°F) during the growing season.`,
          },
          {
            id: 112,
            topic: `Chill Hours`,
            text: `Apples require a certain number of chill hours (hours below 7°C or 45°F) during winter for proper bud formation and fruit set. The required chill hours vary by apple variety.`,
          },
        ],
      },
      {
        id: 12,
        topic: `Soil`,
        children: [
          {
            id: 121,
            topic: `pH`,
            text: `Apple trees prefer well-drained, loamy soil with a pH level between 6.0 and 7.0.`,
          },
          {
            id: 122,
            topic: `Fertility`,
            text: `The soil should be rich in organic matter, with adequate levels of nitrogen, phosphorus, and potassium.`,
          },
          {
            id: 123,
            topic: `Drainage`,
            text: `Good drainage is critical, as apple trees do not tolerate waterlogged conditions. Raised beds or slopes can help with water drainage.`,
          },
        ],
      },
      {
        id: 13,
        topic: `Varieties`,
        text: `There are numerous apple varieties, including:
                                - Gala, Fuji, Granny Smith, and Honeycrisp (popular for eating fresh).
                                - Golden Delicious and Jonathan (used for baking or cooking).
                                `,
      },
      {
        id: 14,
        topic: `Planting`,
        children: [
          {
            id: 141,
            topic: `Time`,
            text: `The best time to plant apple trees is during the dormant season, typically in late winter or early spring, before new growth begins.`,
          },
          {
            id: 142,
            topic: `Spacing`,
            text: `Apple trees should be planted about 4.5 to 5.5 meters (15 to 18 feet) apart to allow sufficient space for growth and air circulation.`,
          },
          {
            id: 143,
            topic: `Pollination`,
            text: `Many apple varieties require cross-pollination from a different apple variety to set fruit. Planting compatible varieties near each other helps with this.`,
          },
        ],
      },
      {
        id: 15,
        topic: `Watering`,
        children: [
          {
            id: 151,
            topic: `Regular Watering`,
            text: `Apple trees need regular watering, especially in the first few years after planting. Once established, they require about 25–50 mm (1–2 inches) of water per week during the growing season.`,
          },
        ],
      },
      {
        id: 16,
        topic: `Pruning`,
        children: [
          {
            id: 161,
            topic: `Shape`,
            text: `Proper pruning helps apple trees develop a strong framework and improves air circulation, reducing disease risk. Trees are often trained to have an open center or a central leader structure.`,
          },
          {
            id: 162,
            topic: `Timing`,
            text: `Prune during the dormant season (late winter) to remove dead or diseased wood, as well as any branches that cross or crowd the canopy.`,
          },
        ],
      },
      {
        id: 17,
        topic: `Fertilization`,
        children: [
          {
            id: 171,
            topic: `Nutrients`,
            text: `Apply balanced fertilizers (such as 10-10-10 NPK) to provide necessary nutrients. Apple trees also benefit from organic compost or well-rotted manure.`,
          },
          {
            id: 172,
            topic: `Timing`,
            text: `Fertilization should be done in early spring before new growth begins.`,
          },
        ],
      },
      {
        id: 18,
        topic: `Pest and Disease Control`,
        text: `-Common pests include codling moth, apple maggot, and aphids. Using integrated pest management (IPM) strategies, such as traps, biological controls, and organic insecticides, can help.
                                -Diseases such as apple scab, powdery mildew, and fire blight can be managed through proper pruning, fungicides, and selecting disease-resistant varieties.`,
      },
      {
        id: 19,
        topic: `HarvestingSigns of ripeness`,
        children: [
          {
            id: 191,
            topic: `Signs of ripeness`,
            text: `Color development, firmness, and flavor are good indicators of when apples are ready for picking.`,
          },
        ],
      },
      {
        id: 20.1,
        topic: `Storage`,
        text: `After harvesting, apples can be stored in cool, humid conditions (between 0°C and 4°C, or 32°F and 39°F) to extend their shelf life.`,
      },
    ],
  },
  {
    id: 2,
    name: "Apricot",
    img: fruitsImages.apricot,
    inGeneralHeading: `A Delightful Stone Fruit`,
    inGeneral: `Apricots are vibrant, golden-orange fruits that belong to the Prunus family, closely related to peaches, plums, and cherries. Their smooth, velvety skin encases a soft, juicy flesh with a sweet yet subtly tart flavor, making them a popular choice for both fresh consumption and culinary uses. Apricots are rich in nutrients, particularly vitamins A and C, which contribute to eye health, immune support, and skin vitality. They also provide dietary fiber, which aids digestion, and antioxidants like beta-carotene that help combat free radicals.
                Dried apricots are a popular snack, providing concentrated nutrition and a long shelf life. Apricots are used in a variety of dishes, from jams and preserves to savory sauces, salads, and desserts. Originating from regions like Central Asia and the Mediterranean, apricots have been cultivated for centuries, prized for their health benefits, refreshing taste, and versatility in cooking.
                In addition to their impressive nutritional profile, apricots have been valued for their medicinal properties in traditional practices. They are believed to support heart health, due to their potassium content, which helps regulate blood pressure and maintain proper electrolyte balance. The natural sugars in apricots provide an energy boost, making them an ideal choice for snacks, especially for athletes or those with active lifestyles.
                Apricot kernels, found inside the pit, are used in some cultures for oil extraction, offering benefits for skin care and even culinary purposes. However, the kernels should be consumed cautiously, as they contain amygdalin, a compound that can release cyanide in the body when eaten in large amounts. Apricots have a short growing season, typically available in late spring and summer, and their delicate nature requires gentle handling during harvest and transport. Despite this, their bright flavor and nutritional richness make them a cherished fruit worldwide.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 48,
        measurementUnits: "kcal",
        description: "– Low in calories, making it a healthy snack option.",
      },
      {
        element: "Fats:",
        quantity: 0.1,
        measurementUnits: "g",
        description: "– Very low in fat, contributing to a heart-healthy diet.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 0,
        measurementUnits: "g",
        description: "– Contains negligible saturated fats.",
      },
      {
        element: "Cholesterol:",
        quantity: 0,
        measurementUnits: "mg",
        description: "– Cholesterol-free, promoting cardiovascular health.",
      },
      {
        element: "Sodium:",
        quantity: 1,
        measurementUnits: "mg",
        description:
          "– Very low in sodium, beneficial for maintaining healthy blood pressure.",
      },
      {
        element: "Potassium:",
        quantity: 259,
        measurementUnits: "mg",
        description:
          "– Good source of potassium, important for muscle function and heart health.",
      },
      {
        element: "Carbohydrates:",
        quantity: 12,
        measurementUnits: "g",
        description: "– Contains carbohydrates mainly from natural sugars.",
      },
      {
        element: "Fiber:",
        quantity: 2,
        measurementUnits: "g",
        description: "– High in dietary fiber, promoting healthy digestion.",
      },
      {
        element: "Sugar:",
        quantity: 9,
        measurementUnits: "g",
        description: "– Contains natural sugars, providing a sweet flavor.",
      },
      {
        element: "Proteins:",
        quantity: 1.4,
        measurementUnits: "g",
        description:
          "– Contains small amounts of protein, contributing to overall intake.",
      },
      {
        element: "Vitamin C:",
        quantity: 10,
        measurementUnits: "mg",
        description: "– A source of vitamin C, important for immune function.",
      },
      {
        element: "Calcium:",
        quantity: 6,
        measurementUnits: "mg",
        description:
          "– Provides a small amount of calcium, supporting bone health.",
      },
      {
        element: "Iron:",
        quantity: 0.17,
        measurementUnits: "mg",
        description:
          "– Contains small amounts of iron, essential for blood health.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description:
          "– No vitamin D present, typically obtained from sunlight.",
      },
      {
        element: "Vitamin B6:",
        quantity: 0.1,
        measurementUnits: "mg",
        description: "– Supports metabolism and brain function.",
      },
      {
        element: "Vitamin B12:",
        quantity: 0,
        measurementUnits: "µg",
        description: "– Lacks vitamin B12, which is found in animal products.",
      },
      {
        element: "Magnesium:",
        quantity: 10,
        measurementUnits: "mg",
        description:
          "– Contains small amounts of magnesium, important for various bodily functions.",
      },
      {
        element: "Zinc:",
        quantity: 0.1,
        measurementUnits: "mg",
        description:
          "– Contains trace amounts of zinc, supporting immune function.",
      },
      {
        element: "Vitamin E:",
        quantity: 0.9,
        measurementUnits: "mg",
        description:
          "– Contains small amounts of vitamin E, an antioxidant that protects cells.",
      },
    ],
    cultivationHeading: `Apricot cultivation requires specific conditions for optimal growth and fruit production. Here is an overview of the key factors involved in growing apricots`,
    cultivation: [
      {
        id: 21,
        topic: `Climate`,
        children: [
          {
            id: 211,
            topic: `Temperature`,
            text: `Apricots prefer temperate climates and are sensitive to frost. They require a cold winter for dormancy but are also susceptible to late spring frosts, which can damage flowers and reduce yield. The ideal temperature during the growing season is between 21°C and 27°C (70°F to 80°F).`,
          },
          {
            id: 212,
            topic: `Chill Hours`,
            text: `Most apricot varieties need about 300 to 900 chill hours (hours below 7°C or 45°F) during winter to ensure proper bud break and fruit set.`,
          },
        ],
      },
      {
        id: 22,
        topic: `Soil`,
        children: [
          {
            id: 221,
            topic: `pH`,
            text: `Apricots grow best in well-drained, fertile soil with a pH level between 6.0 and 7.5.`,
          },
          {
            id: 222,
            topic: `Soil Type`,
            text: `Loamy or sandy loam soils are ideal, as they provide good drainage. Apricots are sensitive to waterlogging, so avoid clay-heavy soils or areas prone to flooding.`,
          },
          {
            id: 223,
            topic: `Soil Preparation`,
            text: `Before planting, organic matter such as compost or well-rotted manure should be mixed into the soil to improve fertility and structure.`,
          },
        ],
      },
      {
        id: 23,
        topic: `Varieties`,
        text: `Popular apricot varieties include: - Moorpark, Tilton, and Goldcot (known for their sweet flavor and adaptability).- Golden Delicious and Jonathan (used for baking or cooking).`,
      },
      {
        id: 24,
        topic: `Planting`,
        children: [
          {
            id: 241,
            topic: `Time`,
            text: `The best time to plant apricots is during the dormant season (late winter to early spring) before new growth begins.`,
          },
          {
            id: 242,
            topic: `Spacing`,
            text: `Trees should be spaced about 6 to 7 meters (20 to 23 feet) apart to allow sufficient room for growth and airflow.`,
          },
          {
            id: 243,
            topic: `Pollination`,
            text: `Many apricot varieties are self-pollinating, but planting more than one variety can increase yield and improve fruit quality.`,
          },
        ],
      },
      {
        id: 25,
        topic: `Watering`,
        children: [
          {
            id: 251,
            topic: `Establishment Phase`,
            text: `Apricot trees need regular watering during the first few years after planting to establish strong roots.`,
          },
          {
            id: 252,
            topic: `Mature Trees`,
            text: `Once established, they should be watered deeply but infrequently to encourage deep root growth. Apricots require around 500 to 800 mm (20 to 31 inches) of water annually.`,
          },
          {
            id: 253,
            topic: `Avoid Overwatering`,
            text: `Waterlogging or excessive moisture can lead to root rot and other fungal diseases.`,
          },
        ],
      },
      {
        id: 26,
        topic: `Pruning`,
        children: [
          {
            id: 261,
            topic: `Shape`,
            text: `Apricot trees are typically pruned into an open-center shape, allowing sunlight to reach the center of the tree and promoting good air circulation.`,
          },
          {
            id: 262,
            topic: `Timing`,
            text: `Pruning should be done during the dormant season (late winter) to remove dead, diseased, or overcrowded branches. Avoid pruning in wet conditions to reduce the risk of disease.`,
          },
        ],
      },
      {
        id: 27,
        topic: `Fertilization`,
        children: [
          {
            id: 251,
            topic: `Nutrients`,
            text: `Apricots benefit from regular fertilization with a balanced fertilizer (e.g., 10-10-10 NPK) or organic compost.`,
          },
          {
            id: 252,
            topic: `Timing`,
            text: `Fertilizer should be applied in early spring, just before new growth begins. Avoid heavy fertilization late in the growing season, as this can lead to excessive vegetative growth at the expense of fruit production.`,
          },
        ],
      },
      {
        id: 28,
        topic: `Pest and Disease Control`,
        children: [
          {
            id: 281,
            topic: `Pests`,
            text: `Common pests affecting apricots include aphids, mites, fruit borers, and peach twig borer. Integrated pest management (IPM), such as the use of beneficial insects and organic insecticides, can help control pests.`,
          },
          {
            id: 282,
            topic: `Diseases`,
            text: `Apricots are susceptible to diseases such as brown rot, crown gall, bacterial canker, and shot hole disease. Preventive measures include proper pruning, good air circulation, and the use of fungicides when necessary.`,
          },
        ],
      },
      {
        id: 29,
        topic: `Harvesting`,
        children: [
          {
            id: 291,
            topic: `Time`,
            text: `Apricots are typically ready for harvest in late spring to early summer, depending on the variety and climate.`,
          },
          {
            id: 292,
            topic: `Signs of Ripeness`,
            text: `Ripe apricots are usually golden-orange, soft to the touch, and fragrant. They should be harvested when fully ripe for the best flavor.`,
          },
          {
            id: 293,
            topic: `Handling`,
            text: `Apricots are delicate and bruise easily, so they should be handled gently and stored carefully after harvest.`,
          },
        ],
      },
      {
        id: 30.2,
        topic: `Storage`,
        text: `Apricots have a relatively short shelf life and are best consumed fresh. If necessary, they can be stored in a cool place (0°C to 4°C or 32°F to 39°F) for about a week.`,
        children: [
          {
            id: 30.21,
            topic: `Preservation`,
            text: `Apricots can also be dried, canned, or made into jams and preserves to extend their use beyond the fresh season.`,
          },
        ],
      },
      {
        id: 31.2,
        topic: `Thinning`,
        text: `Apricots often produce more fruit than the tree can support, leading to smaller, lower-quality fruit. Thinning (removing some of the immature fruit) in early spring can help improve fruit size and quality.`,
      },
    ],
  },
  {
    id: 3,
    name: "Banana",
    img: fruitsImages.banana,
    inGeneralHeading: `Nature's Convenient Superfood`,
    inGeneral: `Bananas are one of the world’s most widely consumed fruits, known for their sweet taste, soft texture, and versatility. Belonging to the genus Musa, bananas are primarily grown in tropical regions, with countries like India, Brazil, and Ecuador being major producers. They are easily recognizable by their elongated shape, smooth yellow skin (when ripe), and creamy white flesh.
                  Bananas are a rich source of essential nutrients, particularly potassium, which is vital for maintaining proper heart function and regulating blood pressure. They also contain significant amounts of vitamin C, vitamin B6, and dietary fiber, which aids in digestion and promotes a healthy gut. Additionally, bananas are naturally low in fat and cholesterol, making them a heart-healthy snack.
                  Athletes often favor bananas due to their quick energy boost, provided by natural sugars like glucose, fructose, and sucrose. This makes them an ideal pre- or post-workout snack, aiding in muscle recovery and electrolyte balance. Bananas are also known for being gentle on the stomach and are often recommended for those recovering from digestive issues.
                  Beyond being eaten raw, bananas are incredibly versatile in cooking. They can be blended into smoothies, baked into bread, muffins, or cakes, and used in savory dishes such as curries or grilled as a dessert. Unripe bananas, also known as plantains, are a staple in many tropical cuisines, often fried or boiled. With their nutritional benefits and culinary flexibility, bananas are truly a global staple enjoyed in various forms.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 89,
        measurementUnits: "kcal",
        description:
          "– Provides a moderate amount of calories, making it a good source of energy.",
      },
      {
        element: "Fats:",
        quantity: 0.3,
        measurementUnits: "g",
        description: "– Very low in fat, contributing to a heart-healthy diet.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 0.1,
        measurementUnits: "g",
        description:
          "– Contains minimal saturated fats, supporting overall health.",
      },
      {
        element: "Cholesterol:",
        quantity: 0,
        measurementUnits: "mg",
        description: "– Cholesterol-free, promoting cardiovascular health.",
      },
      {
        element: "Sodium:",
        quantity: 1,
        measurementUnits: "mg",
        description:
          "– Very low in sodium, beneficial for blood pressure management.",
      },
      {
        element: "Potassium:",
        quantity: 358,
        measurementUnits: "mg",
        description:
          "– High in potassium, essential for muscle function and regulating blood pressure.",
      },
      {
        element: "Carbohydrates:",
        quantity: 22.8,
        measurementUnits: "g",
        description:
          "– A rich source of carbohydrates, providing quick energy.",
      },
      {
        element: "Fiber:",
        quantity: 2.6,
        measurementUnits: "g",
        description: "– Contains dietary fiber, promoting digestive health.",
      },
      {
        element: "Sugar:",
        quantity: 12.2,
        measurementUnits: "g",
        description:
          "– Contains natural sugars, contributing to its sweet taste.",
      },
      {
        element: "Proteins:",
        quantity: 1.1,
        measurementUnits: "g",
        description:
          "– Provides a small amount of protein, aiding in muscle repair.",
      },
      {
        element: "Vitamin C:",
        quantity: 8.7,
        measurementUnits: "mg",
        description:
          "– A good source of vitamin C, supporting the immune system.",
      },
      {
        element: "Calcium:",
        quantity: 5,
        measurementUnits: "mg",
        description:
          "– Contains a small amount of calcium, contributing to bone health.",
      },
      {
        element: "Iron:",
        quantity: 0.3,
        measurementUnits: "mg",
        description:
          "– Provides a small amount of iron, essential for blood health.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description:
          "– Does not contain vitamin D, typically obtained from sunlight.",
      },
      {
        element: "Vitamin B6:",
        quantity: 0.4,
        measurementUnits: "mg",
        description: "– Supports metabolism and brain health.",
      },
      {
        element: "Vitamin B12:",
        quantity: 0,
        measurementUnits: "µg",
        description: "– Lacks vitamin B12, which is found in animal products.",
      },
      {
        element: "Magnesium:",
        quantity: 27,
        measurementUnits: "mg",
        description:
          "– Contains magnesium, important for many bodily functions.",
      },
      {
        element: "Zinc:",
        quantity: 0.15,
        measurementUnits: "mg",
        description:
          "– Provides a small amount of zinc, supporting immune function.",
      },
      {
        element: "Vitamin E:",
        quantity: 0.1,
        measurementUnits: "mg",
        description: "– Contains minimal vitamin E, an antioxidant.",
      },
    ],
    cultivationHeading: `Bananas are one of the most widely consumed fruits in the world and are primarily grown in tropical regions. They are typically grown in large-scale plantations, but they can also be cultivated in smaller home gardens. Here's an overview of banana cultivation`,
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Bananas thrive in tropical and subtropical climates. Ideal temperatures for banana growth range between 26°C and 30°C (79°F to 86°F). They are highly sensitive to cold temperatures and frost, which can cause significant damage to the plant.",
          },
          {
            id: 212,
            topic: "Rainfall",
            text: "Bananas require a consistent water supply and do best in areas with annual rainfall between 1,500 and 2,500 mm (60 to 100 inches). Irrigation is often necessary in drier regions to ensure proper moisture levels.",
          },
        ],
      },
      {
        id: 22,
        topic: "Soil",
        children: [
          {
            id: 221,
            topic: "pH",
            text: "Bananas grow best in soil with a pH range of 5.5 to 7.0, which is slightly acidic to neutral.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "Bananas prefer well-drained, loamy, or sandy loam soils. They are sensitive to waterlogged conditions, so avoid planting in heavy clay or poorly drained soils.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Before planting, it is beneficial to add organic matter such as compost or well-rotted manure to improve soil structure and fertility.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: `Popular banana varieties include: 
                              - Cavendish (the most widely grown variety for commercial production).
                              - Plantains (often used for cooking).
                              - Red Bananas (known for their unique color and flavor).`,
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "Bananas are best planted at the beginning of the rainy season to ensure sufficient moisture for establishment.",
          },
          {
            id: 242,
            topic: "Spacing",
            text: "Plant banana suckers or plantlets 3 meters (10 feet) apart, with rows spaced 4 meters (13 feet) apart to allow proper growth and airflow.",
          },
          {
            id: 243,
            topic: "Propagation",
            text: "Bananas are propagated through suckers (young shoots) or tissue-cultured plantlets, ensuring uniform growth and disease resistance.",
          },
        ],
      },
      {
        id: 25,
        topic: "Watering",
        children: [
          {
            id: 251,
            topic: "Establishment Phase",
            text: "Young banana plants need regular watering to establish strong root systems. Ensure the soil stays moist but not waterlogged.",
          },
          {
            id: 252,
            topic: "Mature Plants",
            text: "Once established, bananas should be watered deeply but infrequently, as they require around 1,200 to 2,000 mm (47 to 79 inches) of water annually.",
          },
          {
            id: 253,
            topic: "Avoid Overwatering",
            text: "Overwatering can lead to root rot and other fungal diseases, so maintain good drainage and avoid waterlogged conditions.",
          },
        ],
      },
      {
        id: 26,
        topic: "Pruning",
        children: [
          {
            id: 261,
            topic: "Leaf Pruning",
            text: "Remove dead or damaged leaves to promote air circulation and reduce the risk of pests and diseases. Proper pruning helps the plant focus energy on fruit development.",
          },
        ],
      },
      {
        id: 27,
        topic: "Fertilization",
        children: [
          {
            id: 271,
            topic: "Nutrients",
            text: "Bananas require regular fertilization with nitrogen-rich fertilizers and a balanced mix of phosphorus and potassium for healthy growth and fruit production.",
          },
          {
            id: 272,
            topic: "Timing",
            text: "Fertilize bananas every 2-3 months during the growing season. Organic matter like compost or manure can also be applied to improve soil fertility.",
          },
        ],
      },
      {
        id: 28,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 281,
            topic: "Pests",
            text: "Common pests include banana weevils, aphids, and nematodes. Integrated pest management (IPM) strategies, such as using beneficial insects and organic pesticides, help control pest populations.",
          },
          {
            id: 282,
            topic: "Diseases",
            text: "Bananas are prone to diseases such as Panama disease, black Sigatoka, and banana bunchy top virus (BBTV). Disease-resistant varieties and proper sanitation practices are important for disease management.",
          },
        ],
      },
      {
        id: 29,
        topic: "Harvesting",
        children: [
          {
            id: 291,
            topic: "Time",
            text: "Bananas are usually ready for harvest 9 to 12 months after planting, depending on the variety and growing conditions. The fruit is harvested while green and ripened off the plant.",
          },
          {
            id: 292,
            topic: "Signs of Ripeness",
            text: "Bananas are harvested when the fruit is well-rounded and the edges are no longer angular. The skin will turn from green to yellow as it ripens off the plant.",
          },
          {
            id: 293,
            topic: "Handling",
            text: "Bananas should be handled carefully to avoid bruising, which can affect their shelf life and market value.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Bananas can be stored at room temperature for ripening. To slow down ripening, store them at cooler temperatures (around 13°C or 55°F), but avoid refrigeration, as this can cause chilling injuries.",
        children: [
          {
            id: 30.21,
            topic: `Preservation`,
            text: "Bananas can also be processed into products such as banana chips, puree, or dried bananas to extend their shelf life.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Thinning bananas involves removing excess suckers to maintain plant spacing and ensure that energy is focused on producing high-quality fruit.",
      },
    ],
  },
  {
    id: 4,
    name: "Blackberry",
    img: fruitsImages.blackberry,
    inGeneralHeading: `A Nutrient-Dense Delight`,
    inGeneral: `Blackberries are dark, juicy berries from the Rubus genus, commonly found in temperate regions across North America, Europe, and Asia. Known for their deep purple-black hue and small, clustered drupelets, blackberries offer a sweet yet slightly tart flavor that makes them popular in both fresh and culinary uses. These berries are not only delicious but are also packed with numerous health benefits.
                Blackberries are rich in essential vitamins and minerals, particularly vitamin C, vitamin K, and manganese, which help support immune function, bone health, and collagen production. They are also an excellent source of dietary fiber, aiding in digestion and promoting a healthy gut. The dark pigmentation of blackberries is due to anthocyanins, potent antioxidants that help reduce inflammation and protect the body against oxidative stress, potentially lowering the risk of chronic diseases like heart disease and cancer.
                In addition to being consumed fresh, blackberries are commonly used in jams, pies, cobblers, and smoothies. They also pair well with both sweet and savory dishes, such as salads, yogurt, or roasted meats. Due to their high antioxidant content, blackberries have become a popular ingredient in health-conscious recipes and beverages.
                Blackberries are relatively easy to grow, often found in wild thickets or home gardens. However, they have a short shelf life and are delicate, requiring gentle handling during harvest. Their combination of flavor, versatility, and nutritional benefits makes blackberries a cherished fruit enjoyed in a wide variety of culinary traditions around the world.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 43,
        measurementUnits: "kcal",
        description:
          "– Low in calories, making it an excellent option for a healthy snack.",
      },
      {
        element: "Fats:",
        quantity: 0.5,
        measurementUnits: "g",
        description: "– Very low in fat, contributing to a heart-healthy diet.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 0.0,
        measurementUnits: "g",
        description: "– Contains negligible saturated fats.",
      },
      {
        element: "Cholesterol:",
        quantity: 0,
        measurementUnits: "mg",
        description: "– Cholesterol-free, promoting cardiovascular health.",
      },
      {
        element: "Sodium:",
        quantity: 1,
        measurementUnits: "mg",
        description:
          "– Very low in sodium, beneficial for maintaining healthy blood pressure.",
      },
      {
        element: "Potassium:",
        quantity: 162,
        measurementUnits: "mg",
        description:
          "– Good source of potassium, important for muscle function and heart health.",
      },
      {
        element: "Carbohydrates:",
        quantity: 9.6,
        measurementUnits: "g",
        description: "– Contains carbohydrates primarily from natural sugars.",
      },
      {
        element: "Fiber:",
        quantity: 5.3,
        measurementUnits: "g",
        description: "– High in dietary fiber, promoting healthy digestion.",
      },
      {
        element: "Sugar:",
        quantity: 4.9,
        measurementUnits: "g",
        description: "– Contains natural sugars, providing a sweet flavor.",
      },
      {
        element: "Proteins:",
        quantity: 1.4,
        measurementUnits: "g",
        description:
          "– Contains small amounts of protein, contributing to overall intake.",
      },
      {
        element: "Vitamin C:",
        quantity: 21,
        measurementUnits: "mg",
        description:
          "– A good source of vitamin C, important for immune function.",
      },
      {
        element: "Calcium:",
        quantity: 29,
        measurementUnits: "mg",
        description:
          "– Provides a small amount of calcium, supporting bone health.",
      },
      {
        element: "Iron:",
        quantity: 0.6,
        measurementUnits: "mg",
        description:
          "– Contains small amounts of iron, essential for blood health.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description:
          "– No vitamin D present, typically obtained from sunlight.",
      },
      {
        element: "Vitamin B6:",
        quantity: 0.1,
        measurementUnits: "mg",
        description: "– Supports metabolism and brain function.",
      },
      {
        element: "Vitamin B12:",
        quantity: 0,
        measurementUnits: "µg",
        description: "– Lacks vitamin B12, which is found in animal products.",
      },
      {
        element: "Magnesium:",
        quantity: 20,
        measurementUnits: "mg",
        description:
          "– Contains small amounts of magnesium, important for various bodily functions.",
      },
      {
        element: "Zinc:",
        quantity: 0.2,
        measurementUnits: "mg",
        description:
          "– Contains trace amounts of zinc, supporting immune function.",
      },
      {
        element: "Vitamin E:",
        quantity: 0.9,
        measurementUnits: "mg",
        description:
          "– Contains small amounts of vitamin E, an antioxidant that protects cells.",
      },
    ],
    cultivationHeading: `Blackberries are popular fruits known for their sweet, tart flavor and are commonly grown in temperate regions. They can be cultivated on both commercial farms and in home gardens, and they are relatively easy to grow compared to other fruits. Here’s an overview of blackberry cultivation`,
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Blackberries grow well in temperate to warm climates. Ideal temperatures for blackberry production range from 15°C to 30°C (59°F to 86°F). They can tolerate mild frost but should be protected from extreme cold and late spring frosts, which can damage new growth.",
          },
          {
            id: 212,
            topic: "Sunlight",
            text: "Blackberries require full sun (at least 6 hours of direct sunlight per day) to produce high yields and ensure good fruit quality. Partial shade can reduce fruit size and sweetness.",
          },
        ],
      },
      {
        id: 22,
        topic: "Soil",
        children: [
          {
            id: 221,
            topic: "pH",
            text: "Blackberries prefer slightly acidic to neutral soils, with a pH level between 5.5 and 7.0. Soil tests should be conducted to adjust pH levels if necessary.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "Well-drained, loamy soils are ideal for blackberries. They can tolerate sandy or clay soils, provided they are amended with organic matter to improve drainage and fertility.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Before planting, incorporate compost or other organic matter into the soil to enhance fertility and improve moisture retention. Raised beds or mounded rows can be used in areas prone to poor drainage.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: `Popular blackberry varieties include:
                              - 'Chester', 'Navaho', and 'Apache' (thornless varieties for home gardens).
                              - 'Marion' and 'Black Diamond' (known for their commercial use and high-quality fruit).`,
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "The best time to plant blackberries is in early spring, after the last frost. Fall planting can also be done in warmer climates.",
          },
          {
            id: 242,
            topic: "Spacing",
            text: "Blackberries should be planted 1.2 to 1.8 meters (4 to 6 feet) apart in rows spaced about 2.4 meters (8 feet) apart. Adequate spacing ensures proper airflow and reduces disease risks.",
          },
          {
            id: 243,
            topic: "Propagation",
            text: "Blackberries can be propagated from root cuttings, tip layering, or tissue culture. Thornless varieties are easier to manage and are commonly preferred for home gardens.",
          },
        ],
      },
      {
        id: 25,
        topic: "Watering",
        children: [
          {
            id: 251,
            topic: "Establishment Phase",
            text: "Young blackberry plants need consistent moisture during the first growing season to establish a strong root system. Water deeply, ensuring the soil remains moist but not waterlogged.",
          },
          {
            id: 252,
            topic: "Mature Plants",
            text: "Once established, water blackberries regularly, especially during dry periods. Mature plants require around 25 to 50 mm (1 to 2 inches) of water per week during the growing season.",
          },
          {
            id: 253,
            topic: "Avoid Overwatering",
            text: "Overwatering can lead to root rot and fungal diseases, so maintain good drainage and avoid waterlogged conditions.",
          },
        ],
      },
      {
        id: 26,
        topic: "Pruning",
        children: [
          {
            id: 261,
            topic: "Floricanes and Primocanes",
            text: "Blackberries produce fruit on second-year canes (floricanes). After harvesting, prune out the spent floricanes to encourage new growth (primocanes), which will bear fruit the following year.",
          },
          {
            id: 262,
            topic: "Timing",
            text: "Prune blackberries in late winter or early spring before new growth starts. Summer pruning may also be necessary to remove dead or damaged canes.",
          },
        ],
      },
      {
        id: 27,
        topic: "Fertilization",
        children: [
          {
            id: 271,
            topic: "Nutrients",
            text: "Blackberries benefit from regular applications of balanced fertilizer, such as 10-10-10 NPK, or organic compost. Fertilization helps promote vigorous growth and fruit production.",
          },
          {
            id: 272,
            topic: "Timing",
            text: "Apply fertilizer in early spring and again after fruiting to support both cane growth and fruit development. Avoid over-fertilization, which can lead to excessive vegetative growth at the expense of fruit production.",
          },
        ],
      },
      {
        id: 28,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 281,
            topic: "Pests",
            text: "Common pests affecting blackberries include aphids, spider mites, and cane borers. Use integrated pest management (IPM) strategies such as introducing beneficial insects and using organic pesticides.",
          },
          {
            id: 282,
            topic: "Diseases",
            text: "Blackberries are susceptible to diseases like anthracnose, rust, and cane blight. Proper pruning, good air circulation, and fungicides when necessary can help prevent these issues.",
          },
        ],
      },
      {
        id: 29,
        topic: "Harvesting",
        children: [
          {
            id: 291,
            topic: "Time",
            text: "Blackberries are typically harvested in mid to late summer. The exact timing depends on the variety and climate. Blackberries do not ripen after being picked, so they should be harvested when fully ripe.",
          },
          {
            id: 292,
            topic: "Signs of Ripeness",
            text: "Ripe blackberries are plump, dark in color, and easily detach from the plant. They should be sweet and slightly soft when squeezed.",
          },
          {
            id: 293,
            topic: "Handling",
            text: "Blackberries are delicate and bruise easily. Handle them gently during harvest and storage to avoid damage.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Fresh blackberries can be stored in the refrigerator for up to 3-5 days. To extend their shelf life, they can be frozen, dried, or made into jams, jellies, or preserves.",
        children: [
          {
            id: 30.21,
            topic: `Preservation`,
            text: "For freezing, arrange blackberries in a single layer on a baking sheet and freeze before transferring them to airtight containers or freezer bags.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Thinning blackberries involves removing some of the canes to reduce overcrowding and promote better fruit quality and airflow. This should be done in early spring before new growth begins.",
      },
    ],
  },
  {
    id: 5,
    name: "Blueberry",
    img: fruitsImages.blueberry,
    inGeneralHeading: "A Nutritional Powerhouse",
    inGeneral: `Blueberries, small and vibrant, are a staple in many diets due to their impressive nutritional profile and myriad health benefits. Known scientifically as Vaccinium corymbosum, these berries are rich in antioxidants, particularly anthocyanins, which give them their deep blue color. Antioxidants help combat oxidative stress, reducing the risk of chronic diseases and promoting overall health.
                One of the most significant benefits of blueberries is their role in heart health. Studies suggest that regular consumption may lower blood pressure and cholesterol levels, contributing to cardiovascular well-being. Additionally, blueberries are low in calories yet high in dietary fiber, making them an excellent choice for weight management. The fiber content aids digestion and promotes a feeling of fullness.
                Blueberries are also linked to brain health. Research indicates that the antioxidants in blueberries may enhance cognitive function, potentially delaying age-related decline. They are rich in vitamins C and K, which support immune function and bone health, respectively.
                Incorporating blueberries into your diet is simple. They can be enjoyed fresh, frozen, or dried and can be added to smoothies, yogurt, salads, and baked goods. As a versatile ingredient, they can enhance both sweet and savory dishes.
                In summary, blueberries are not just a delicious treat; they are a nutritional powerhouse packed with health benefits. Regularly including them in your diet can contribute to improved health and well-being, making them a smart addition to any meal plan.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 57,
        measurementUnits: "kcal",
        description:
          "– Low in calories, making them a great snack for weight management.",
      },
      {
        element: "Fats:",
        quantity: 0.3,
        measurementUnits: "g",
        description: "– Very low in fat, contributing to a healthy diet.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 0.1,
        measurementUnits: "g",
        description:
          "– Contains minimal saturated fats, supporting heart health.",
      },
      {
        element: "Cholesterol:",
        quantity: 0,
        measurementUnits: "mg",
        description:
          "– Cholesterol-free, beneficial for cardiovascular health.",
      },
      {
        element: "Sodium:",
        quantity: 1,
        measurementUnits: "mg",
        description:
          "– Very low in sodium, aiding in blood pressure management.",
      },
      {
        element: "Potassium:",
        quantity: 77,
        measurementUnits: "mg",
        description:
          "– Contains potassium, essential for fluid balance and muscle function.",
      },
      {
        element: "Carbohydrates:",
        quantity: 14.5,
        measurementUnits: "g",
        description: "– A good source of carbohydrates, providing energy.",
      },
      {
        element: "Fiber:",
        quantity: 2.4,
        measurementUnits: "g",
        description: "– High in dietary fiber, promoting healthy digestion.",
      },
      {
        element: "Sugar:",
        quantity: 10,
        measurementUnits: "g",
        description:
          "– Contains natural sugars, contributing to their sweetness.",
      },
      {
        element: "Proteins:",
        quantity: 0.7,
        measurementUnits: "g",
        description:
          "– Provides a small amount of protein, beneficial for muscle repair.",
      },
      {
        element: "Vitamin C:",
        quantity: 9.7,
        measurementUnits: "mg",
        description:
          "– Good source of vitamin C, supporting the immune system.",
      },
      {
        element: "Calcium:",
        quantity: 6,
        measurementUnits: "mg",
        description:
          "– Contains a small amount of calcium, contributing to bone health.",
      },
      {
        element: "Iron:",
        quantity: 0.2,
        measurementUnits: "mg",
        description:
          "– Provides a small amount of iron, essential for blood health.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description:
          "– Does not contain vitamin D, which is typically obtained from sunlight.",
      },
      {
        element: "Vitamin B6:",
        quantity: 0.1,
        measurementUnits: "mg",
        description: "– Supports metabolism and brain health.",
      },
      {
        element: "Vitamin B12:",
        quantity: 0,
        measurementUnits: "µg",
        description: "– Lacks vitamin B12, which is found in animal products.",
      },
      {
        element: "Magnesium:",
        quantity: 6,
        measurementUnits: "mg",
        description:
          "– Contains magnesium, important for various bodily functions.",
      },
      {
        element: "Zinc:",
        quantity: 0.2,
        measurementUnits: "mg",
        description:
          "– Provides a small amount of zinc, supporting immune function.",
      },
      {
        element: "Vitamin E:",
        quantity: 0.6,
        measurementUnits: "mg",
        description:
          "– Contains vitamin E, an antioxidant that protects cells.",
      },
    ],
    cultivationHeading: `Blueberries are popular berries known for their sweet-tart flavor and numerous health benefits. They are primarily grown in cooler regions and can be cultivated in both commercial farms and home gardens. Blueberry cultivation requires specific soil and environmental conditions for successful growth. Here’s an overview of blueberry cultivation`,
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Blueberries thrive in cooler climates, though some varieties can adapt to warmer conditions. Ideal temperatures for growth range between 18°C to 24°C (65°F to 75°F). Blueberries require winter chill (around 200 to 1,000 chill hours, depending on the variety) to set fruit, making them more suited to temperate regions.",
          },
          {
            id: 212,
            topic: "Sunlight",
            text: "Blueberries require full sun (6 to 8 hours of direct sunlight per day) for optimal growth and fruit production. Inadequate sunlight can lead to reduced yields and poor fruit quality.",
          },
        ],
      },
      {
        id: 22,
        topic: "Soil",
        children: [
          {
            id: 221,
            topic: "pH",
            text: "Blueberries prefer highly acidic soil with a pH level between 4.5 and 5.5. It's crucial to test soil pH regularly and amend it with sulfur or other acidifying agents if necessary.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "Blueberries require well-drained, sandy or loamy soil that retains moisture but doesn't become waterlogged. Poorly drained or heavy clay soils can lead to root rot.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Before planting, mix organic matter, such as peat moss or pine needles, into the soil to increase acidity and improve structure. Raised beds can be beneficial in areas with poor drainage.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: `Popular blueberry varieties include:
                            - 'Highbush' (e.g., Bluecrop, Duke, and Jersey), commonly grown in temperate climates.
                            - 'Rabbiteye' (e.g., Brightwell, Tifblue), suited to warmer climates.
                            - 'Lowbush' (e.g., Wild blueberries), typically found in colder regions.`,
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "The best time to plant blueberries is in early spring, once the soil has thawed but before new growth begins. In warmer climates, fall planting is also an option.",
          },
          {
            id: 242,
            topic: "Spacing",
            text: "Blueberries should be spaced 1.2 to 1.8 meters (4 to 6 feet) apart, with rows spaced 2.4 to 3 meters (8 to 10 feet) apart, depending on the variety. Proper spacing ensures airflow and reduces disease risk.",
          },
          {
            id: 243,
            topic: "Cross-Pollination",
            text: "Although many blueberry varieties are self-pollinating, planting more than one variety can increase yield and improve fruit size and quality due to better cross-pollination.",
          },
        ],
      },
      {
        id: 25,
        topic: "Watering",
        children: [
          {
            id: 251,
            topic: "Establishment Phase",
            text: "During the first year after planting, blueberries need consistent moisture to establish their root systems. Water deeply and regularly to keep the soil evenly moist but not waterlogged.",
          },
          {
            id: 252,
            topic: "Mature Plants",
            text: "Mature blueberry plants require about 25 to 50 mm (1 to 2 inches) of water per week during the growing season, particularly in dry periods. Mulching can help retain soil moisture.",
          },
          {
            id: 253,
            topic: "Avoid Overwatering",
            text: "Overwatering can lead to root rot, especially in poorly drained soils. Ensure proper drainage and avoid waterlogging the roots.",
          },
        ],
      },
      {
        id: 26,
        topic: "Pruning",
        children: [
          {
            id: 261,
            topic: "Shaping",
            text: "Prune blueberries to encourage an open structure, allowing sunlight and airflow into the center of the plant. This promotes better fruit production and reduces the risk of diseases.",
          },
          {
            id: 262,
            topic: "Timing",
            text: "Pruning should be done during the dormant season, typically in late winter or early spring. Remove weak, dead, or old canes to stimulate new growth.",
          },
        ],
      },
      {
        id: 27,
        topic: "Fertilization",
        children: [
          {
            id: 271,
            topic: "Nutrients",
            text: "Blueberries benefit from fertilizers that are specifically formulated for acid-loving plants. A balanced fertilizer like 10-10-10 or a fertilizer high in ammonium sulfate can help provide necessary nutrients.",
          },
          {
            id: 272,
            topic: "Timing",
            text: "Apply fertilizer in early spring, just as new growth begins. Avoid over-fertilization, as blueberries are sensitive to excess nutrients, especially nitrogen.",
          },
        ],
      },
      {
        id: 28,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 281,
            topic: "Pests",
            text: "Common pests affecting blueberries include aphids, spider mites, and fruit worms. Integrated pest management (IPM) strategies, such as the use of beneficial insects and organic pesticides, can help control infestations.",
          },
          {
            id: 282,
            topic: "Diseases",
            text: "Blueberries are susceptible to diseases like mummy berry, powdery mildew, and root rot. Preventive measures include proper pruning, maintaining soil acidity, and applying fungicides if necessary.",
          },
        ],
      },
      {
        id: 29,
        topic: "Harvesting",
        children: [
          {
            id: 291,
            topic: "Time",
            text: "Blueberries are typically harvested in mid to late summer, depending on the variety and climate. It's important to harvest when the berries are fully ripe, as they do not ripen further after being picked.",
          },
          {
            id: 292,
            topic: "Signs of Ripeness",
            text: "Ripe blueberries are uniformly blue in color, plump, and sweet. Berries that are green or reddish are not yet ripe and should be left to ripen on the bush.",
          },
          {
            id: 293,
            topic: "Handling",
            text: "Blueberries should be harvested gently to avoid damaging the fruit. They bruise easily, so handle them with care during harvesting and storage.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Fresh blueberries can be stored in the refrigerator for up to 7 to 10 days. To extend their shelf life, they can be frozen, dried, or made into jams, jellies, or preserves.",
        children: [
          {
            id: 30.21,
            topic: `Preservation`,
            text: "For freezing, lay blueberries in a single layer on a baking sheet and freeze them before transferring them to airtight containers or freezer bags.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Thinning is not typically necessary for blueberries, but periodic pruning of older canes helps maintain plant health and encourages the growth of more productive young canes.",
      },
    ],
  },
  {
    id: 6,
    name: "Cherry",
    img: fruitsImages.cherry,
    inGeneralHeading: `Nature's Sweet Gems`,
    inGeneral: `Cherries, small, round fruits belonging to the genus Prunus, are cherished for their delightful sweetness and vibrant color. They come in two primary varieties: sweet cherries, typically enjoyed fresh, and tart cherries, often used in cooking and baking.
                Sweet cherries, such as Bing and Rainier, are juicy and rich in antioxidants, including anthocyanins, which give them their deep red hue. These antioxidants help combat oxidative stress and inflammation in the body, contributing to overall health. Sweet cherries are also a good source of vitamins C and A, which support the immune system and promote healthy skin.
                Tart cherries, such as Montmorency, are known for their bold flavor and are often used in pies, jams, and juices. They are particularly noted for their high concentration of melatonin, a hormone that regulates sleep patterns. Consuming tart cherries may improve sleep quality and aid recovery after exercise, making them a favorite among athletes.
                Cherries are not only delicious but also versatile in culinary uses. They can be eaten fresh, added to salads, blended into smoothies, or cooked down into sauces. Their natural sweetness makes them a fantastic ingredient in desserts, while their tartness adds a refreshing contrast to savory dishes.
                In summary, cherries are a nutrient-rich fruit that offers a multitude of health benefits and culinary possibilities. Their sweet and tart flavors make them a delightful addition to any diet, providing both taste and nutrition in every bite.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 63,
        measurementUnits: "kcal",
        description:
          "– Low in calories, making cherries a delicious and guilt-free snack.",
      },
      {
        element: "Fats:",
        quantity: 0.2,
        measurementUnits: "g",
        description: "– Very low in fat, promoting heart health.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 0.0,
        measurementUnits: "g",
        description: "– Contains negligible saturated fats.",
      },
      {
        element: "Cholesterol:",
        quantity: 0,
        measurementUnits: "mg",
        description:
          "– Cholesterol-free, beneficial for cardiovascular health.",
      },
      {
        element: "Sodium:",
        quantity: 1,
        measurementUnits: "mg",
        description:
          "– Very low in sodium, helping maintain healthy blood pressure.",
      },
      {
        element: "Potassium:",
        quantity: 222,
        measurementUnits: "mg",
        description:
          "– A good source of potassium, important for muscle function and heart health.",
      },
      {
        element: "Carbohydrates:",
        quantity: 16,
        measurementUnits: "g",
        description: "– Contains carbohydrates primarily from natural sugars.",
      },
      {
        element: "Fiber:",
        quantity: 1.6,
        measurementUnits: "g",
        description: "– Provides dietary fiber, aiding in digestion.",
      },
      {
        element: "Sugar:",
        quantity: 12.8,
        measurementUnits: "g",
        description:
          "– Contains natural sugars that contribute to its sweetness.",
      },
      {
        element: "Proteins:",
        quantity: 1.1,
        measurementUnits: "g",
        description: "– Contains small amounts of protein.",
      },
      {
        element: "Vitamin C:",
        quantity: 7,
        measurementUnits: "mg",
        description:
          "– A good source of vitamin C, supporting immune function.",
      },
      {
        element: "Calcium:",
        quantity: 18,
        measurementUnits: "mg",
        description: "– Provides small amounts of calcium for bone health.",
      },
      {
        element: "Iron:",
        quantity: 0.4,
        measurementUnits: "mg",
        description:
          "– Contains trace amounts of iron, important for blood health.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description:
          "– No vitamin D present, typically obtained from sunlight.",
      },
      {
        element: "Vitamin B6:",
        quantity: 0.1,
        measurementUnits: "mg",
        description: "– Supports metabolism and brain health.",
      },
      {
        element: "Vitamin B12:",
        quantity: 0,
        measurementUnits: "µg",
        description:
          "– Lacks vitamin B12, which is primarily found in animal products.",
      },
      {
        element: "Magnesium:",
        quantity: 11,
        measurementUnits: "mg",
        description:
          "– Contains small amounts of magnesium, important for various bodily functions.",
      },
      {
        element: "Zinc:",
        quantity: 0.1,
        measurementUnits: "mg",
        description:
          "– Contains trace amounts of zinc, supporting immune function.",
      },
      {
        element: "Vitamin E:",
        quantity: 0.2,
        measurementUnits: "mg",
        description: "– Contains small amounts of vitamin E, an antioxidant.",
      },
    ],
    cultivationHeading: `Cherries are delicious fruits that are popular for their sweet flavor and are commonly used in desserts, jams, and beverages. They can be grown in both commercial orchards and home gardens. Here’s an overview of cherry cultivation`,
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Cherries thrive in temperate climates, with cold winters and warm summers. They require a period of winter chill (between 700 and 1,200 chill hours) for proper bud development. The ideal temperature for cherry trees during the growing season is between 18°C and 24°C (65°F to 75°F).",
          },
          {
            id: 212,
            topic: "Sunlight",
            text: "Cherries require full sun for optimal growth and fruiting. A minimum of 6 to 8 hours of direct sunlight per day is necessary to produce high-quality fruit.",
          },
        ],
      },
      {
        id: 22,
        topic: "Soil",
        children: [
          {
            id: 221,
            topic: "pH",
            text: "Cherry trees prefer well-drained, slightly acidic soils with a pH range between 6.0 and 7.0. Soil pH should be tested and adjusted with lime or sulfur as needed.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "Sandy loam or loamy soils are ideal for cherry trees, as they provide good drainage. Cherries are susceptible to root rot in poorly drained or waterlogged soils.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Before planting, organic matter such as compost or well-rotted manure should be incorporated into the soil to improve fertility and structure. Raised beds can be beneficial in areas with heavy soils.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: `Popular cherry varieties include:
                            - 'Sweet Cherries' (e.g., Bing, Rainier, and Stella) are best for eating fresh.
                            - 'Sour Cherries' (e.g., Montmorency and Morello) are often used for cooking, baking, and preserves.`,
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "The best time to plant cherry trees is in early spring, after the last frost, or in late fall when the tree is dormant. Spring planting allows trees to establish roots before winter.",
          },
          {
            id: 242,
            topic: "Spacing",
            text: "Cherry trees should be spaced 5 to 7 meters (16 to 23 feet) apart, depending on the variety. Proper spacing allows for airflow and sunlight penetration, reducing the risk of diseases.",
          },
          {
            id: 243,
            topic: "Pollination",
            text: "Many sweet cherry varieties are not self-pollinating and require a compatible pollinator nearby for fruit set. Sour cherries are typically self-pollinating but can benefit from cross-pollination for better yields.",
          },
        ],
      },
      {
        id: 25,
        topic: "Watering",
        children: [
          {
            id: 251,
            topic: "Establishment Phase",
            text: "Cherry trees need consistent moisture during the first few years after planting to establish their root systems. Water deeply and regularly, especially during dry spells.",
          },
          {
            id: 252,
            topic: "Mature Trees",
            text: "Once established, cherry trees require about 25 to 50 mm (1 to 2 inches) of water per week during the growing season. Mulching helps retain soil moisture and regulate temperature.",
          },
          {
            id: 253,
            topic: "Avoid Overwatering",
            text: "Cherries are sensitive to overwatering and waterlogged soil, which can lead to root diseases. Ensure proper drainage to prevent these issues.",
          },
        ],
      },
      {
        id: 26,
        topic: "Pruning",
        children: [
          {
            id: 261,
            topic: "Shaping",
            text: "Prune cherry trees to develop a strong, open structure that allows sunlight to reach the inner branches. This improves fruit quality and reduces disease risks.",
          },
          {
            id: 262,
            topic: "Timing",
            text: "Prune cherry trees during the dormant season, usually in late winter or early spring. Remove any dead, diseased, or crossing branches to maintain healthy growth.",
          },
        ],
      },
      {
        id: 27,
        topic: "Fertilization",
        children: [
          {
            id: 271,
            topic: "Nutrients",
            text: "Cherry trees benefit from balanced fertilizers (e.g., 10-10-10 NPK) or organic compost. A soil test can determine if specific nutrients like nitrogen or potassium are deficient.",
          },
          {
            id: 272,
            topic: "Timing",
            text: "Apply fertilizer in early spring before new growth begins. Avoid late-season fertilization, which can encourage soft growth vulnerable to winter injury.",
          },
        ],
      },
      {
        id: 28,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 281,
            topic: "Pests",
            text: "Common pests affecting cherries include cherry fruit fly, aphids, and caterpillars. Integrated pest management (IPM) strategies, including the use of traps, beneficial insects, and organic sprays, help control pests.",
          },
          {
            id: 282,
            topic: "Diseases",
            text: "Cherries are prone to diseases like brown rot, bacterial canker, and powdery mildew. Proper pruning, good air circulation, and fungicidal sprays can help manage these diseases.",
          },
        ],
      },
      {
        id: 29,
        topic: "Harvesting",
        children: [
          {
            id: 291,
            topic: "Time",
            text: "Sweet cherries are typically harvested in late spring to early summer, while sour cherries ripen a little later. Timing depends on the variety and local climate.",
          },
          {
            id: 292,
            topic: "Signs of Ripeness",
            text: "Ripe cherries are firm, sweet (for sweet varieties), and fully colored. Sour cherries are picked when they reach their full color, even though they may still be tart.",
          },
          {
            id: 293,
            topic: "Handling",
            text: "Cherries bruise easily and should be harvested gently. They do not continue to ripen after being picked, so only harvest fully ripe fruit.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Fresh cherries can be stored in the refrigerator for up to 10 days. To extend their shelf life, they can be frozen, dried, or processed into jams, jellies, or preserves.",
        children: [
          {
            id: 30.21,
            topic: `Preservation`,
            text: "To freeze cherries, wash and pit them, lay them in a single layer on a baking sheet to freeze, and then transfer them to airtight containers or freezer bags.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Cherry trees naturally thin themselves, but if there is an excessive number of small fruits, thinning by hand in early spring can improve the size and quality of the remaining cherries.",
      },
    ],
  },
  {
    id: 7,
    name: "Cranberry",
    img: fruitsImages.cranberry,
    inGeneralHeading: `Tiny Superfoods`,
    inGeneral: `Cranberries, small, tart berries belonging to the Vaccinium genus, are renowned for their health benefits and distinctive flavor. Often found in North America, these bright red fruits are commonly associated with the holiday season but are a nutritious addition to diets year-round.
                  One of the most notable attributes of cranberries is their high antioxidant content, particularly proanthocyanidins, which help prevent urinary tract infections (UTIs) by inhibiting harmful bacteria from adhering to the bladder walls. This makes cranberries a popular choice for those seeking natural remedies for UTI prevention.
                  Cranberries are also rich in vitamins C, E, and K, along with essential minerals like manganese. Vitamin C is crucial for immune support and skin health, while vitamin E acts as an antioxidant that helps protect cells from damage. Additionally, cranberries contain dietary fiber, promoting digestive health and aiding in weight management.
                  These berries can be enjoyed in various forms, from fresh and dried to juice and sauce. While fresh cranberries can be too tart for some, they are perfect in salads, baked goods, and sauces, enhancing both flavor and nutrition. Dried cranberries, often sweetened, make for a convenient snack or addition to granola and trail mixes.
                  In summary, cranberries are not just a seasonal treat but a powerhouse of nutrients that contribute to overall health. Their unique flavor and impressive health benefits make them a valuable addition to any diet.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 46,
        measurementUnits: "kcal",
        description:
          "– Low in calories, making them a healthy addition to various dishes.",
      },
      {
        element: "Fats:",
        quantity: 0.1,
        measurementUnits: "g",
        description:
          "– Very low in fat, contributing to their healthy profile.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 0.0,
        measurementUnits: "g",
        description:
          "– Contains negligible amounts of saturated fats, supporting heart health.",
      },
      {
        element: "Cholesterol:",
        quantity: 0,
        measurementUnits: "mg",
        description:
          "– Cholesterol-free, beneficial for cardiovascular health.",
      },
      {
        element: "Sodium:",
        quantity: 1,
        measurementUnits: "mg",
        description:
          "– Very low in sodium, aiding in blood pressure management.",
      },
      {
        element: "Potassium:",
        quantity: 83,
        measurementUnits: "mg",
        description:
          "– Contains potassium, essential for fluid balance and muscle function.",
      },
      {
        element: "Carbohydrates:",
        quantity: 12.2,
        measurementUnits: "g",
        description:
          "– Provides carbohydrates, primarily from natural sugars and fiber.",
      },
      {
        element: "Fiber:",
        quantity: 4.6,
        measurementUnits: "g",
        description: "– High in dietary fiber, promoting healthy digestion.",
      },
      {
        element: "Sugar:",
        quantity: 4.3,
        measurementUnits: "g",
        description: "– Contains natural sugars, adding a slight sweetness.",
      },
      {
        element: "Proteins:",
        quantity: 0.4,
        measurementUnits: "g",
        description:
          "– Provides a small amount of protein, beneficial for muscle repair.",
      },
      {
        element: "Vitamin C:",
        quantity: 14.0,
        measurementUnits: "mg",
        description:
          "– Good source of vitamin C, supporting the immune system.",
      },
      {
        element: "Calcium:",
        quantity: 18,
        measurementUnits: "mg",
        description:
          "– Contains a small amount of calcium, contributing to bone health.",
      },
      {
        element: "Iron:",
        quantity: 0.2,
        measurementUnits: "mg",
        description:
          "– Provides a small amount of iron, essential for blood health.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description:
          "– Does not contain vitamin D, which is typically obtained from sunlight.",
      },
      {
        element: "Vitamin B6:",
        quantity: 0.1,
        measurementUnits: "mg",
        description: "– Supports metabolism and brain health.",
      },
      {
        element: "Vitamin B12:",
        quantity: 0,
        measurementUnits: "µg",
        description: "– Lacks vitamin B12, which is found in animal products.",
      },
      {
        element: "Magnesium:",
        quantity: 6,
        measurementUnits: "mg",
        description:
          "– Contains magnesium, important for various bodily functions.",
      },
      {
        element: "Zinc:",
        quantity: 0.1,
        measurementUnits: "mg",
        description:
          "– Provides a small amount of zinc, supporting immune function.",
      },
      {
        element: "Vitamin E:",
        quantity: 0.2,
        measurementUnits: "mg",
        description:
          "– Contains vitamin E, an antioxidant that protects cells.",
      },
    ],
    cultivationHeading: `Cranberries are tart, red berries that are well-known for their use in juices, sauces, and various culinary applications. They are primarily grown in specific regions of North America and require particular growing conditions. Here’s an overview of cranberry cultivation`,
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Cranberries thrive in cool climates, preferring temperatures between 16°C and 22°C (60°F to 72°F). They require cold winters for dormancy but are sensitive to late frosts that can damage blossoms.",
          },
          {
            id: 212,
            topic: "Sunlight",
            text: "Cranberries need full sun for optimal growth and fruit production. They should receive at least 6 to 8 hours of direct sunlight each day during the growing season.",
          },
        ],
      },
      {
        id: 22,
        topic: "Soil",
        children: [
          {
            id: 221,
            topic: "pH",
            text: "Cranberries prefer acidic soils with a pH between 4.5 and 5.5. Soil testing is recommended to ensure proper acidity levels.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "They grow best in sandy, well-drained soils that retain moisture but do not become waterlogged. Heavy clay soils can be detrimental to cranberry growth.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Before planting, amend the soil with organic matter, such as peat moss or compost, to improve moisture retention and nutrient availability.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: `Popular cranberry varieties include:
                            - 'Early Black' (known for its high yield and resilience)
                            - 'Howes' (sweet and tart flavor, great for fresh consumption and processing)
                            - 'Ben Lear' (produces large berries and is resistant to disease).`,
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "The best time to plant cranberries is in the spring after the last frost or in early fall when the weather is cool, allowing the plants to establish before winter.",
          },
          {
            id: 242,
            topic: "Spacing",
            text: "Plant cranberry vines about 1 meter (3 feet) apart in rows spaced 1.5 to 2 meters (5 to 6 feet) apart to allow for proper airflow and growth.",
          },
          {
            id: 243,
            topic: "Pollination",
            text: "Cranberries are self-pollinating but benefit from cross-pollination. Planting multiple varieties can enhance fruit set and yield.",
          },
        ],
      },
      {
        id: 25,
        topic: "Watering",
        children: [
          {
            id: 251,
            topic: "Establishment Phase",
            text: "During the first year after planting, cranberries require regular watering to establish roots. Maintain consistent moisture, especially during dry spells.",
          },
          {
            id: 252,
            topic: "Mature Plants",
            text: "Once established, cranberries need about 25 to 50 mm (1 to 2 inches) of water per week. They thrive in moist conditions, but avoid waterlogging, which can lead to root rot.",
          },
          {
            id: 253,
            topic: "Flooding",
            text: "Cranberries are often grown in flooded conditions during harvest, but standing water should be avoided during the growing season to prevent disease.",
          },
        ],
      },
      {
        id: 26,
        topic: "Pruning",
        children: [
          {
            id: 261,
            topic: "Maintenance",
            text: "Pruning is essential for maintaining plant health and promoting fruit production. Trim back old growth and remove any dead or diseased branches in late winter or early spring.",
          },
          {
            id: 262,
            topic: "Timing",
            text: "Prune cranberries before new growth begins, usually in late winter, to encourage strong, healthy growth during the growing season.",
          },
        ],
      },
      {
        id: 27,
        topic: "Fertilization",
        children: [
          {
            id: 271,
            topic: "Nutrients",
            text: "Cranberries benefit from organic fertilizers, such as compost or well-rotted manure, as well as balanced fertilizers that are low in nitrogen and high in potassium and phosphorus.",
          },
          {
            id: 272,
            topic: "Timing",
            text: "Apply fertilizer in early spring before new growth begins and again in late summer to support fruit development.",
          },
        ],
      },
      {
        id: 28,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 281,
            topic: "Pests",
            text: "Common pests include cranberry weevils, aphids, and fruit worms. Integrated pest management (IPM) strategies can help manage these pests through the use of beneficial insects and organic insecticides.",
          },
          {
            id: 282,
            topic: "Diseases",
            text: "Cranberries are susceptible to diseases such as fruit rot, botrytis blight, and root rot. Proper drainage, good air circulation, and the use of fungicides when necessary can help manage these issues.",
          },
        ],
      },
      {
        id: 29,
        topic: "Harvesting",
        children: [
          {
            id: 291,
            topic: "Time",
            text: "Cranberries are typically harvested in the fall, around late September to early November, depending on the variety and local climate.",
          },
          {
            id: 292,
            topic: "Signs of Ripeness",
            text: "Ripe cranberries are firm, plump, and have a deep red color. They can be harvested when they reach full color and flavor.",
          },
          {
            id: 293,
            topic: "Handling",
            text: "Handle cranberries gently during harvesting to avoid bruising. They are often harvested using specialized equipment that floods the fields to float the berries for easier collection.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Fresh cranberries can be stored in the refrigerator for up to 4 weeks. To extend their shelf life, they can be frozen for up to a year.",
        children: [
          {
            id: 30.21,
            topic: `Preservation`,
            text: "To freeze cranberries, rinse and dry them before placing them in airtight containers or freezer bags. They can be used directly from the freezer in cooking and baking.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Thinning is not typically required for cranberries, but removing excess fruit during the growing season can help improve the size and quality of the remaining berries.",
      },
    ],
  },
  {
    id: 8,
    name: "Currants",
    img: fruitsImages.currants,
    inGeneralHeading: `Small Berries, Big Nutrition`,
    inGeneral: `Currants, small and vibrant berries from the Ribes genus, are packed with nutrition and a tangy flavor. They come in various types, including black, red, and white currants, each offering distinct flavors and health benefits. These berries are often used in both sweet and savory dishes, prized for their tartness and versatility.
                  One of the standout features of currants, particularly black currants, is their high vitamin C content. In fact, black currants contain several times more vitamin C than oranges, making them excellent for boosting the immune system, promoting healthy skin, and aiding in the absorption of iron. Additionally, currants are rich in antioxidants, including anthocyanins and flavonoids, which help reduce inflammation and protect cells from damage caused by free radicals.
                  Currants are also a good source of dietary fiber, which supports digestive health and helps regulate blood sugar levels. This makes them a smart choice for those looking to maintain a healthy weight or manage conditions like diabetes. Moreover, black currants are known for their high levels of gamma-linolenic acid (GLA), an omega-6 fatty acid that supports heart health.
                  Culinary-wise, currants can be used in a variety of ways. They are often enjoyed in jams, jellies, sauces, or baked goods like scones and muffins. Fresh currants can be added to salads or desserts for a burst of tartness.
                  In summary, currants are a nutrient-dense fruit that offers numerous health benefits. Their bright flavor and versatility make them a great addition to any diet, enhancing both taste and nutrition.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 70,
        measurementUnits: "kcal",
        description:
          "– Low in calories, currants are a sweet and nutritious snack.",
      },
      {
        element: "Fats:",
        quantity: 0.2,
        measurementUnits: "g",
        description:
          "– Very low in fat, making them a healthy addition to your diet.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 0.0,
        measurementUnits: "g",
        description: "– Contains negligible saturated fats.",
      },
      {
        element: "Cholesterol:",
        quantity: 0,
        measurementUnits: "mg",
        description: "– Cholesterol-free, beneficial for heart health.",
      },
      {
        element: "Sodium:",
        quantity: 1,
        measurementUnits: "mg",
        description: "– Very low in sodium, supporting healthy blood pressure.",
      },
      {
        element: "Potassium:",
        quantity: 332,
        measurementUnits: "mg",
        description:
          "– A good source of potassium, important for muscle function and overall health.",
      },
      {
        element: "Carbohydrates:",
        quantity: 15.5,
        measurementUnits: "g",
        description: "– Contains carbohydrates primarily from natural sugars.",
      },
      {
        element: "Fiber:",
        quantity: 4.3,
        measurementUnits: "g",
        description: "– High in dietary fiber, promoting healthy digestion.",
      },
      {
        element: "Sugar:",
        quantity: 8.0,
        measurementUnits: "g",
        description:
          "– Contains natural sugars that contribute to their sweetness.",
      },
      {
        element: "Proteins:",
        quantity: 1.0,
        measurementUnits: "g",
        description: "– Contains small amounts of protein.",
      },
      {
        element: "Vitamin C:",
        quantity: 41,
        measurementUnits: "mg",
        description:
          "– A rich source of vitamin C, supporting immune function and skin health.",
      },
      {
        element: "Calcium:",
        quantity: 55,
        measurementUnits: "mg",
        description: "– Provides a moderate amount of calcium for bone health.",
      },
      {
        element: "Iron:",
        quantity: 1.0,
        measurementUnits: "mg",
        description:
          "– Contains iron, essential for blood health and preventing anemia.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description:
          "– No vitamin D present, typically obtained from sunlight.",
      },
      {
        element: "Vitamin B6:",
        quantity: 0.1,
        measurementUnits: "mg",
        description: "– Supports metabolism and brain health.",
      },
      {
        element: "Vitamin B12:",
        quantity: 0,
        measurementUnits: "µg",
        description:
          "– Lacks vitamin B12, which is primarily found in animal products.",
      },
      {
        element: "Magnesium:",
        quantity: 17,
        measurementUnits: "mg",
        description:
          "– Contains small amounts of magnesium, essential for various bodily functions.",
      },
      {
        element: "Zinc:",
        quantity: 0.2,
        measurementUnits: "mg",
        description:
          "– Contains trace amounts of zinc, supporting immune function.",
      },
      {
        element: "Vitamin E:",
        quantity: 0.2,
        measurementUnits: "mg",
        description: "– Contains small amounts of vitamin E, an antioxidant.",
      },
    ],
    cultivationHeading: `Currants are small, tart berries that come in various colors, including red, black, and white. They are widely used in jams, jellies, desserts, and beverages. Currants are hardy plants that can thrive in various conditions, making them suitable for both commercial production and home gardens. Here’s an overview of currant cultivation`,
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Currants prefer temperate climates, thriving in regions with cool summers and cold winters. They grow best with daytime temperatures between 15°C and 25°C (59°F to 77°F) and require a chilling period for proper bud development.",
          },
          {
            id: 212,
            topic: "Sunlight",
            text: "Currants need full sun to produce high-quality fruit, but they can tolerate partial shade. Ideally, they should receive at least 6 hours of sunlight daily.",
          },
        ],
      },
      {
        id: 22,
        topic: "Soil",
        children: [
          {
            id: 221,
            topic: "pH",
            text: "Currants thrive in well-drained, fertile soils with a pH between 6.0 and 7.0. Slightly acidic soils can also support healthy growth.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "Loamy or sandy loam soils are ideal, as they retain moisture while providing good drainage. Heavy clay soils can lead to root rot and other issues.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Before planting, enrich the soil with organic matter, such as compost or well-rotted manure, to improve fertility and structure.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: `Popular currant varieties include:
                            - Red Currant (known for its tart flavor and bright red color)
                            - Black Currant (rich in antioxidants and commonly used for jams and juices)
                            - White Currant (a sweeter variety, often enjoyed fresh).`,
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "The best time to plant currants is in early spring or late fall while the plants are dormant.",
          },
          {
            id: 242,
            topic: "Spacing",
            text: "Currant bushes should be spaced about 1.2 to 1.5 meters (4 to 5 feet) apart to allow adequate airflow and growth.",
          },
          {
            id: 243,
            topic: "Pollination",
            text: "Most currant varieties are self-pollinating, but planting multiple varieties can improve fruit set and yield.",
          },
        ],
      },
      {
        id: 25,
        topic: "Watering",
        children: [
          {
            id: 251,
            topic: "Establishment Phase",
            text: "During the first year after planting, currants require regular watering to establish strong roots. Keep the soil consistently moist but not waterlogged.",
          },
          {
            id: 252,
            topic: "Mature Plants",
            text: "Once established, currants typically need about 25 to 50 mm (1 to 2 inches) of water per week, especially during dry spells.",
          },
          {
            id: 253,
            topic: "Avoid Overwatering",
            text: "Excessive moisture can lead to root rot and other fungal diseases, so ensure proper drainage.",
          },
        ],
      },
      {
        id: 26,
        topic: "Pruning",
        children: [
          {
            id: 261,
            topic: "Maintenance",
            text: "Pruning is essential for maintaining plant health and maximizing fruit production. Remove dead or diseased branches and thin out crowded areas to improve airflow.",
          },
          {
            id: 262,
            topic: "Timing",
            text: "Prune currants in late winter or early spring before new growth begins. This encourages stronger growth and higher yields.",
          },
        ],
      },
      {
        id: 27,
        topic: "Fertilization",
        children: [
          {
            id: 271,
            topic: "Nutrients",
            text: "Currants benefit from balanced fertilizers that provide essential nutrients. Organic compost can also improve soil fertility.",
          },
          {
            id: 272,
            topic: "Timing",
            text: "Apply fertilizer in early spring, just before new growth begins. Avoid over-fertilization, which can lead to excessive vegetative growth and lower fruit yields.",
          },
        ],
      },
      {
        id: 28,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 281,
            topic: "Pests",
            text: "Common pests affecting currants include aphids, spider mites, and currant borer. Integrated pest management (IPM) strategies, such as beneficial insects and organic pesticides, can help control these pests.",
          },
          {
            id: 282,
            topic: "Diseases",
            text: "Currants can be susceptible to diseases like powdery mildew, rust, and leaf spot. Good air circulation, proper spacing, and the use of disease-resistant varieties can help prevent these issues.",
          },
        ],
      },
      {
        id: 29,
        topic: "Harvesting",
        children: [
          {
            id: 291,
            topic: "Time",
            text: "Currants are typically ready for harvest in mid to late summer, depending on the variety and climate.",
          },
          {
            id: 292,
            topic: "Signs of Ripeness",
            text: "Ripe currants are plump, firm, and have reached their full color (red, black, or white). They should be harvested when fully ripe for the best flavor.",
          },
          {
            id: 293,
            topic: "Handling",
            text: "Currants are delicate and should be handled gently to avoid bruising. Use clippers or scissors to cut clusters from the bush, ensuring minimal damage.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Fresh currants can be stored in the refrigerator for up to 1 week. To extend their shelf life, they can be frozen for up to a year.",
        children: [
          {
            id: 30.21,
            topic: `Preservation`,
            text: "To freeze currants, rinse and dry them before placing them in airtight containers or freezer bags. They can be used directly from the freezer in cooking, baking, or smoothies.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Thinning is not usually necessary for currants, but removing excess fruit clusters during the growing season can help improve the size and quality of the remaining berries.",
      },
    ],
  },
  {
    id: 9,
    name: "Figs",
    img: fruitsImages.figs,
    inGeneralHeading: `Nature's Sweet Treat`,
    inGeneral: `Figs, from the Ficus carica tree, are an ancient fruit enjoyed for their unique sweetness, soft texture, and remarkable nutritional benefits. Often recognized for their distinct teardrop shape and chewy flesh filled with tiny seeds, figs are as nutritious as they are delicious.
                  One of the most notable features of figs is their high fiber content, which aids in digestion, promotes regularity, and supports gut health. This makes figs a great choice for those looking to improve their digestive system. The combination of soluble and insoluble fiber in figs also helps regulate blood sugar levels, contributing to better weight management and overall metabolic health.
                  Figs are a good source of essential minerals like potassium, calcium, and magnesium. Potassium helps balance the effects of sodium and supports heart health by regulating blood pressure, while calcium and magnesium are vital for maintaining strong bones and muscle function. Figs also contain a variety of antioxidants, such as polyphenols, which protect cells from oxidative stress and inflammation.
                  Figs can be enjoyed both fresh and dried. Fresh figs are juicy and delicate, making them perfect for salads, desserts, or even paired with savory dishes like cheese and prosciutto. Dried figs, on the other hand, offer a concentrated sweetness and make a convenient snack or ingredient in baked goods, energy bars, and cereals.
                  In summary, figs are a nutrient-rich fruit that not only satisfies sweet cravings but also provides significant health benefits. Their unique flavor, combined with their versatility, makes them a valuable addition to any diet.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 46,
        measurementUnits: "kcal",
        description:
          "– Low in calories, making them a healthy addition to various dishes.",
      },
      {
        element: "Fats:",
        quantity: 0.1,
        measurementUnits: "g",
        description:
          "– Very low in fat, contributing to their healthy profile.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 0.0,
        measurementUnits: "g",
        description:
          "– Contains negligible amounts of saturated fats, supporting heart health.",
      },
      {
        element: "Cholesterol:",
        quantity: 0,
        measurementUnits: "mg",
        description:
          "– Cholesterol-free, beneficial for cardiovascular health.",
      },
      {
        element: "Sodium:",
        quantity: 1,
        measurementUnits: "mg",
        description:
          "– Very low in sodium, aiding in blood pressure management.",
      },
      {
        element: "Potassium:",
        quantity: 83,
        measurementUnits: "mg",
        description:
          "– Contains potassium, essential for fluid balance and muscle function.",
      },
      {
        element: "Carbohydrates:",
        quantity: 12.2,
        measurementUnits: "g",
        description:
          "– Provides carbohydrates, primarily from natural sugars and fiber.",
      },
      {
        element: "Fiber:",
        quantity: 4.6,
        measurementUnits: "g",
        description: "– High in dietary fiber, promoting healthy digestion.",
      },
      {
        element: "Sugar:",
        quantity: 4.3,
        measurementUnits: "g",
        description: "– Contains natural sugars, adding a slight sweetness.",
      },
      {
        element: "Proteins:",
        quantity: 0.4,
        measurementUnits: "g",
        description:
          "– Provides a small amount of protein, beneficial for muscle repair.",
      },
      {
        element: "Vitamin C:",
        quantity: 14.0,
        measurementUnits: "mg",
        description:
          "– Good source of vitamin C, supporting the immune system.",
      },
      {
        element: "Calcium:",
        quantity: 18,
        measurementUnits: "mg",
        description:
          "– Contains a small amount of calcium, contributing to bone health.",
      },
      {
        element: "Iron:",
        quantity: 0.2,
        measurementUnits: "mg",
        description:
          "– Provides a small amount of iron, essential for blood health.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description:
          "– Does not contain vitamin D, which is typically obtained from sunlight.",
      },
      {
        element: "Vitamin B6:",
        quantity: 0.1,
        measurementUnits: "mg",
        description: "– Supports metabolism and brain health.",
      },
      {
        element: "Vitamin B12:",
        quantity: 0,
        measurementUnits: "µg",
        description: "– Lacks vitamin B12, which is found in animal products.",
      },
      {
        element: "Magnesium:",
        quantity: 6,
        measurementUnits: "mg",
        description:
          "– Contains magnesium, important for various bodily functions.",
      },
      {
        element: "Zinc:",
        quantity: 0.1,
        measurementUnits: "mg",
        description:
          "– Provides a small amount of zinc, supporting immune function.",
      },
      {
        element: "Vitamin E:",
        quantity: 0.2,
        measurementUnits: "mg",
        description:
          "– Contains vitamin E, an antioxidant that protects cells.",
      },
    ],
    cultivationHeading: `Figs are sweet, succulent fruits known for their unique flavor and nutritional benefits. They are primarily grown in warm, temperate regions and can be cultivated in both commercial orchards and home gardens. Here’s an overview of fig cultivation`,
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Figs thrive in warm, temperate climates with long, hot summers. They prefer temperatures between 20°C and 30°C (68°F to 86°F) during the growing season and are sensitive to frost.",
          },
          {
            id: 212,
            topic: "Sunlight",
            text: "Figs require full sun to produce high-quality fruit, needing at least 6 to 8 hours of direct sunlight per day.",
          },
        ],
      },
      {
        id: 22,
        topic: "Soil",
        children: [
          {
            id: 221,
            topic: "pH",
            text: "Figs prefer well-drained soils with a pH between 6.0 and 7.0. They can tolerate slightly alkaline conditions but may struggle in highly acidic soils.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "Loamy or sandy soils with good drainage are ideal for fig trees. Heavy clay soils can lead to root rot and other issues.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Incorporating organic matter, such as compost or well-rotted manure, into the soil before planting will improve fertility and drainage.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: `Popular fig varieties include:
                            - Black Mission (known for its sweet flavor and dark purple skin)
                            - Kadota (green-skinned and mildly sweet, great for preserves)
                            - Brown Turkey (large, sweet fruit with a reddish-brown skin).`,
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "The best time to plant figs is in early spring or fall when the trees are dormant.",
          },
          {
            id: 242,
            topic: "Spacing",
            text: "Figs should be spaced about 3 to 4 meters (10 to 13 feet) apart to allow ample room for growth and airflow.",
          },
          {
            id: 243,
            topic: "Pollination",
            text: "Most fig varieties are self-pollinating, but some may require pollination from a specific wasp species to produce fruit, particularly in the case of Smyrna figs.",
          },
        ],
      },
      {
        id: 25,
        topic: "Watering",
        children: [
          {
            id: 251,
            topic: "Establishment Phase",
            text: "Newly planted fig trees need regular watering to establish strong roots. Keep the soil consistently moist but not waterlogged.",
          },
          {
            id: 252,
            topic: "Mature Trees",
            text: "Once established, figs are drought-tolerant but will produce better fruit with consistent moisture. They typically require about 500 to 800 mm (20 to 31 inches) of water annually.",
          },
          {
            id: 253,
            topic: "Avoid Overwatering",
            text: "Overwatering can lead to root rot and fungal diseases, so ensure good drainage.",
          },
        ],
      },
      {
        id: 26,
        topic: "Pruning",
        children: [
          {
            id: 261,
            topic: "Shape",
            text: "Pruning helps maintain the shape of the tree and encourages healthy fruit production. Figs are often pruned to a vase shape for better air circulation.",
          },
          {
            id: 262,
            topic: "Timing",
            text: "Prune fig trees in late winter or early spring before new growth begins to remove dead or overcrowded branches.",
          },
        ],
      },
      {
        id: 27,
        topic: "Fertilization",
        children: [
          {
            id: 271,
            topic: "Nutrients",
            text: "Figs benefit from balanced fertilizers that provide essential nutrients, particularly nitrogen, phosphorus, and potassium. Organic compost can also enhance soil fertility.",
          },
          {
            id: 272,
            topic: "Timing",
            text: "Apply fertilizer in early spring, just before new growth begins. Avoid heavy fertilization late in the growing season.",
          },
        ],
      },
      {
        id: 28,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 281,
            topic: "Pests",
            text: "Common pests affecting figs include aphids, fig beetles, and fruit flies. Integrated pest management (IPM) strategies, such as beneficial insects and organic pesticides, can help control these pests.",
          },
          {
            id: 282,
            topic: "Diseases",
            text: "Figs can be susceptible to diseases like root rot, powdery mildew, and fig rust. Good air circulation, proper watering practices, and the use of resistant varieties can help prevent these issues.",
          },
        ],
      },
      {
        id: 29,
        topic: "Harvesting",
        children: [
          {
            id: 291,
            topic: "Time",
            text: "Figs are typically ready for harvest in late summer to early fall, depending on the variety and climate.",
          },
          {
            id: 292,
            topic: "Signs of Ripeness",
            text: "Ripe figs are soft to the touch, fully colored, and may begin to droop slightly on the branch. They should be harvested when fully ripe for the best flavor.",
          },
          {
            id: 293,
            topic: "Handling",
            text: "Figs are delicate and should be handled gently to avoid bruising. Cut the fruit from the stem rather than pulling it off.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Fresh figs have a short shelf life and are best consumed immediately after harvesting. They can be stored in the refrigerator for up to 3 days.",
        children: [
          {
            id: 30.21,
            topic: `Preservation`,
            text: "Figs can also be dried or made into jams and preserves to extend their shelf life.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Thinning is often not necessary for fig trees, but removing some immature fruit can help improve the size and quality of the remaining figs.",
      },
    ],
  },
  {
    id: 10,
    name: "Grapes",
    img: fruitsImages.grapes,
    inGeneralHeading: `Tiny Fruits, Big Benefits`,
    inGeneral: `Grapes, from the Vitis genus, are small, juicy fruits enjoyed worldwide for their sweet, tart flavors and impressive nutritional profile. Available in green, red, black, and purple varieties, grapes are consumed fresh, dried (as raisins), or used to make wine, juice, and jams.
                  One of the key health benefits of grapes is their high content of antioxidants, particularly resveratrol, which is most abundant in red and purple grapes. Resveratrol has been linked to heart health, helping to lower blood pressure, reduce cholesterol, and prevent blood clots. It may also play a role in protecting against certain cancers and slowing the progression of neurodegenerative diseases like Alzheimer’s.
                  Grapes are also rich in vitamins C and K. Vitamin C supports the immune system, promotes skin health, and aids in wound healing, while vitamin K is essential for bone health and proper blood clotting. Grapes are a hydrating fruit due to their high water content, making them an excellent choice for staying refreshed.
                  In addition to their antioxidants and vitamins, grapes contain fiber, which supports digestion and helps regulate blood sugar levels. They are low in calories, making them a great snack for weight management.
                  Grapes are incredibly versatile in the kitchen. They can be eaten fresh, tossed into salads, or used in desserts and savory dishes. Dried grapes (raisins) are a popular ingredient in cereals, baked goods, and snacks.
                  In summary, grapes are a delicious and nutrient-rich fruit offering a wide range of health benefits. Their versatility and refreshing taste make them a staple in many diets worldwide.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 69,
        measurementUnits: "kcal",
        description:
          "– Low in calories, grapes are a sweet and refreshing snack.",
      },
      {
        element: "Fats:",
        quantity: 0.2,
        measurementUnits: "g",
        description: "– Very low in fat, making them a healthy choice.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 0.0,
        measurementUnits: "g",
        description: "– Contains negligible saturated fats.",
      },
      {
        element: "Cholesterol:",
        quantity: 0,
        measurementUnits: "mg",
        description: "– Cholesterol-free, promoting heart health.",
      },
      {
        element: "Sodium:",
        quantity: 1,
        measurementUnits: "mg",
        description: "– Very low in sodium, supporting healthy blood pressure.",
      },
      {
        element: "Potassium:",
        quantity: 191,
        measurementUnits: "mg",
        description:
          "– A good source of potassium, essential for muscle and nerve function.",
      },
      {
        element: "Carbohydrates:",
        quantity: 18.1,
        measurementUnits: "g",
        description:
          "– A rich source of carbohydrates primarily from natural sugars.",
      },
      {
        element: "Fiber:",
        quantity: 0.9,
        measurementUnits: "g",
        description: "– Contains dietary fiber, promoting digestive health.",
      },
      {
        element: "Sugar:",
        quantity: 15.5,
        measurementUnits: "g",
        description:
          "– Contains natural sugars that contribute to their sweetness.",
      },
      {
        element: "Proteins:",
        quantity: 0.7,
        measurementUnits: "g",
        description: "– Contains small amounts of protein.",
      },
      {
        element: "Vitamin C:",
        quantity: 10.8,
        measurementUnits: "mg",
        description:
          "– A source of vitamin C, supporting immune function and skin health.",
      },
      {
        element: "Calcium:",
        quantity: 18,
        measurementUnits: "mg",
        description: "– Provides a small amount of calcium for bone health.",
      },
      {
        element: "Iron:",
        quantity: 0.5,
        measurementUnits: "mg",
        description:
          "– Contains trace amounts of iron, important for blood health.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description:
          "– No vitamin D present, typically obtained from sunlight.",
      },
      {
        element: "Vitamin B6:",
        quantity: 0.1,
        measurementUnits: "mg",
        description: "– Supports metabolism and brain health.",
      },
      {
        element: "Vitamin B12:",
        quantity: 0,
        measurementUnits: "µg",
        description:
          "– Lacks vitamin B12, which is primarily found in animal products.",
      },
      {
        element: "Magnesium:",
        quantity: 18,
        measurementUnits: "mg",
        description:
          "– Contains small amounts of magnesium, essential for various bodily functions.",
      },
      {
        element: "Zinc:",
        quantity: 0.1,
        measurementUnits: "mg",
        description:
          "– Contains trace amounts of zinc, supporting immune function.",
      },
      {
        element: "Vitamin E:",
        quantity: 0.2,
        measurementUnits: "mg",
        description: "– Contains small amounts of vitamin E, an antioxidant.",
      },
    ],
    cultivationHeading: `Grapes are one of the most widely cultivated fruits in the world, prized for their sweet flavor and versatility in making wine, juice, and fresh consumption. Here’s an overview of grape cultivation`,
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Grapes thrive in warm, temperate climates. Ideal growing temperatures range from 20°C to 30°C (68°F to 86°F) during the growing season, with a requirement for a cold winter to ensure dormancy.",
          },
          {
            id: 212,
            topic: "Sunlight",
            text: "Grapevines require full sun for optimal fruit production, needing at least 6 to 8 hours of direct sunlight per day.",
          },
        ],
      },
      {
        id: 22,
        topic: "Soil",
        children: [
          {
            id: 221,
            topic: "pH",
            text: "Grapes prefer well-drained soils with a pH level between 5.5 and 7.0. Slightly acidic to neutral soils are ideal for grape cultivation.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "Loamy or sandy soils with good drainage are best for grapes. Heavy clay soils can lead to root rot and other issues.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Incorporating organic matter such as compost into the soil before planting can enhance soil structure and fertility.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: `Popular grape varieties include:
                            - Cabernet Sauvignon (known for its robust flavor and aging potential)
                            - Chardonnay (a versatile white grape used for both still and sparkling wines)
                            - Concord (a sweet table grape popular for eating and making juices).`,
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "The best time to plant grapes is in early spring after the last frost or in the fall before the ground freezes.",
          },
          {
            id: 242,
            topic: "Spacing",
            text: "Grapevines should be spaced about 1.5 to 2 meters (5 to 6 feet) apart in rows that are 2 to 3 meters (6 to 10 feet) apart to allow for good airflow and sunlight exposure.",
          },
          {
            id: 243,
            topic: "Pollination",
            text: "Most grape varieties are self-pollinating, so no additional pollinators are typically required for fruit set.",
          },
        ],
      },
      {
        id: 25,
        topic: "Watering",
        children: [
          {
            id: 251,
            topic: "Establishment Phase",
            text: "Newly planted grapevines need regular watering to establish strong roots, keeping the soil consistently moist but not waterlogged.",
          },
          {
            id: 252,
            topic: "Mature Vines",
            text: "Once established, grapes are drought-tolerant but require about 500 to 800 mm (20 to 31 inches) of water annually for optimal fruit production.",
          },
          {
            id: 253,
            topic: "Avoid Overwatering",
            text: "Waterlogging can lead to root rot, so it’s important to ensure proper drainage in the soil.",
          },
        ],
      },
      {
        id: 26,
        topic: "Pruning",
        children: [
          {
            id: 261,
            topic: "Shape",
            text: "Pruning is essential for maintaining the shape of the vine and encouraging healthy fruit production. Grapes are often pruned to a balanced structure, allowing for good air circulation.",
          },
          {
            id: 262,
            topic: "Timing",
            text: "Pruning should be done in late winter or early spring before new growth begins to remove dead, diseased, or overcrowded canes.",
          },
        ],
      },
      {
        id: 27,
        topic: "Fertilization",
        children: [
          {
            id: 271,
            topic: "Nutrients",
            text: "Grapes benefit from balanced fertilizers that provide essential nutrients, particularly nitrogen, phosphorus, and potassium. Soil tests can help determine specific nutrient needs.",
          },
          {
            id: 272,
            topic: "Timing",
            text: "Fertilizer should be applied in early spring before new growth begins. Avoid heavy fertilization late in the growing season to prevent excessive vegetative growth.",
          },
        ],
      },
      {
        id: 28,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 281,
            topic: "Pests",
            text: "Common pests affecting grapes include aphids, spider mites, and grape berry moths. Integrated pest management (IPM) strategies, such as beneficial insects and organic insecticides, can help control these pests.",
          },
          {
            id: 282,
            topic: "Diseases",
            text: "Grapes can be susceptible to diseases like powdery mildew, downy mildew, and botrytis bunch rot. Preventive measures include proper pruning, good air circulation, and the use of resistant varieties.",
          },
        ],
      },
      {
        id: 29,
        topic: "Harvesting",
        children: [
          {
            id: 291,
            topic: "Time",
            text: "Grapes are typically ready for harvest in late summer to early fall, depending on the variety and climate.",
          },
          {
            id: 292,
            topic: "Signs of Ripeness",
            text: "Ripe grapes are plump, fully colored, and sweet to taste. They should be harvested when fully ripe for the best flavor.",
          },
          {
            id: 293,
            topic: "Handling",
            text: "Grapes should be handled gently to avoid bruising. Cut clusters from the vine carefully to minimize damage.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Fresh grapes can be stored in the refrigerator for about a week. They are best consumed fresh but can also be frozen for longer storage.",
        children: [
          {
            id: 30.21,
            topic: `Preservation`,
            text: "Grapes can also be dried to produce raisins, which can be stored for extended periods.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Thinning grape clusters in early summer can improve fruit size and quality by reducing competition for nutrients and sunlight.",
      },
    ],
  },
  {
    id: 11,
    name: "Grapefruit",
    img: fruitsImages.grapefruit,
    inGeneralHeading: `A Citrus Powerhouse`,
    inGeneral: `Grapefruit, a large, tangy fruit from the Citrus × paradisi species, is widely known for its tart flavor and numerous health benefits. Available in varieties ranging from white to pink and ruby red, grapefruit is packed with nutrients that make it a great addition to a healthy diet.
One of the standout benefits of grapefruit is its high vitamin C content, which boosts the immune system, promotes skin health, and acts as a powerful antioxidant that helps protect cells from damage caused by free radicals. Grapefruit is also rich in fiber, which supports digestion, helps regulate blood sugar levels, and promotes a feeling of fullness, aiding in weight management.
Grapefruit is also notable for its low calorie content and high water percentage, making it a hydrating, refreshing fruit that fits well into weight-loss diets. Additionally, it contains potassium, which is essential for heart health and maintaining proper blood pressure.
The fruit also contains powerful plant compounds like lycopene (especially in the pink and red varieties), which is linked to reduced risk of certain cancers, and flavonoids, which have anti-inflammatory properties.
Culinary-wise, grapefruit can be enjoyed in a variety of ways. It can be eaten on its own, juiced, added to salads, or used in smoothies. Its tartness also pairs well with both sweet and savory dishes.
In summary, grapefruit is a nutrient-rich citrus fruit that provides numerous health benefits, including boosting the immune system, supporting heart health, and aiding in weight management. Its refreshing taste and versatility make it a great addition to any diet.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 42,
        measurementUnits: "kcal",
        description:
          "– Low in calories, making it a refreshing and healthy fruit choice.",
      },
      {
        element: "Fats:",
        quantity: 0.1,
        measurementUnits: "g",
        description: "– Very low in fat, contributing to its healthy profile.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 0.0,
        measurementUnits: "g",
        description:
          "– Contains negligible amounts of saturated fats, supporting heart health.",
      },
      {
        element: "Cholesterol:",
        quantity: 0,
        measurementUnits: "mg",
        description:
          "– Cholesterol-free, beneficial for cardiovascular health.",
      },
      {
        element: "Sodium:",
        quantity: 1,
        measurementUnits: "mg",
        description:
          "– Very low in sodium, aiding in blood pressure management.",
      },
      {
        element: "Potassium:",
        quantity: 135,
        measurementUnits: "mg",
        description:
          "– Good source of potassium, essential for fluid balance and muscle function.",
      },
      {
        element: "Carbohydrates:",
        quantity: 10.7,
        measurementUnits: "g",
        description: "– Provides carbohydrates, primarily from natural sugars.",
      },
      {
        element: "Fiber:",
        quantity: 1.4,
        measurementUnits: "g",
        description: "– Contains dietary fiber, promoting healthy digestion.",
      },
      {
        element: "Sugar:",
        quantity: 7.0,
        measurementUnits: "g",
        description:
          "– Contains natural sugars, contributing to its sweet flavor.",
      },
      {
        element: "Proteins:",
        quantity: 0.8,
        measurementUnits: "g",
        description:
          "– Provides a small amount of protein, beneficial for muscle repair.",
      },
      {
        element: "Vitamin C:",
        quantity: 31.2,
        measurementUnits: "mg",
        description:
          "– Excellent source of vitamin C, supporting the immune system.",
      },
      {
        element: "Calcium:",
        quantity: 22,
        measurementUnits: "mg",
        description:
          "– Contains a small amount of calcium, contributing to bone health.",
      },
      {
        element: "Iron:",
        quantity: 0.1,
        measurementUnits: "mg",
        description:
          "– Provides a small amount of iron, essential for blood health.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description:
          "– Does not contain vitamin D, which is typically obtained from sunlight.",
      },
      {
        element: "Vitamin B6:",
        quantity: 0.1,
        measurementUnits: "mg",
        description: "– Supports metabolism and brain health.",
      },
      {
        element: "Vitamin B12:",
        quantity: 0,
        measurementUnits: "µg",
        description: "– Lacks vitamin B12, which is found in animal products.",
      },
      {
        element: "Magnesium:",
        quantity: 8,
        measurementUnits: "mg",
        description:
          "– Contains magnesium, important for various bodily functions.",
      },
      {
        element: "Zinc:",
        quantity: 0.1,
        measurementUnits: "mg",
        description:
          "– Provides a small amount of zinc, supporting immune function.",
      },
      {
        element: "Vitamin E:",
        quantity: 0.2,
        measurementUnits: "mg",
        description:
          "– Contains vitamin E, an antioxidant that protects cells.",
      },
    ],
    cultivationHeading: `Grapefruit is a citrus fruit known for its tangy flavor and juicy texture. It is often consumed fresh, juiced, or used in various culinary dishes. Grapefruit thrives in warm climates and can be grown commercially or in home gardens. Here’s an overview of grapefruit cultivation`,
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Grapefruit thrives in subtropical to tropical climates, requiring warm temperatures. Ideal growing temperatures range from 20°C to 30°C (68°F to 86°F), with sensitivity to frost.",
          },
          {
            id: 212,
            topic: "Sunlight",
            text: "Grapefruit trees require full sun for optimal growth and fruit production, needing at least 6 to 8 hours of direct sunlight daily.",
          },
        ],
      },
      {
        id: 22,
        topic: "Soil",
        children: [
          {
            id: 221,
            topic: "pH",
            text: "Grapefruit prefers well-drained, sandy or loamy soils with a pH level between 5.5 and 6.5 for optimal growth.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "Sandy soils are ideal as they provide good drainage and are less prone to waterlogging, which grapefruit trees cannot tolerate.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Prior to planting, incorporate organic matter like compost to improve soil structure and fertility.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: `Popular grapefruit varieties include:
                            - Ruby Red (known for its sweet flavor and vibrant red color)
                            - Pink (offering a balance of sweetness and tartness)
                            - White (crisper with a more acidic flavor).`,
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "The best time to plant grapefruit trees is in the spring after the last frost, allowing the trees to establish before the hot summer.",
          },
          {
            id: 242,
            topic: "Spacing",
            text: "Grapefruit trees should be spaced about 5 to 6 meters (16 to 20 feet) apart to allow for adequate air circulation and sunlight.",
          },
          {
            id: 243,
            topic: "Pollination",
            text: "Grapefruit trees are typically self-pollinating, but planting multiple varieties can enhance fruit set and quality.",
          },
        ],
      },
      {
        id: 25,
        topic: "Watering",
        children: [
          {
            id: 251,
            topic: "Establishment Phase",
            text: "Newly planted grapefruit trees require regular watering to help establish their roots, keeping the soil consistently moist but not soggy.",
          },
          {
            id: 252,
            topic: "Mature Trees",
            text: "Once established, grapefruit trees need about 600 to 800 mm (24 to 31 inches) of water annually. Deep watering is preferred to encourage deep root growth.",
          },
          {
            id: 253,
            topic: "Avoid Overwatering",
            text: "Excess moisture can lead to root rot; therefore, ensure good drainage in the planting area.",
          },
        ],
      },
      {
        id: 26,
        topic: "Pruning",
        children: [
          {
            id: 261,
            topic: "Shape",
            text: "Pruning helps maintain a desirable shape and encourages air circulation within the canopy, reducing disease risk.",
          },
          {
            id: 262,
            topic: "Timing",
            text: "Pruning should be done in late winter or early spring before new growth begins to remove any dead, diseased, or overcrowded branches.",
          },
        ],
      },
      {
        id: 27,
        topic: "Fertilization",
        children: [
          {
            id: 271,
            topic: "Nutrients",
            text: "Grapefruit trees benefit from regular fertilization with a balanced fertilizer (e.g., 8-8-8 NPK) to support healthy growth and fruiting.",
          },
          {
            id: 272,
            topic: "Timing",
            text: "Fertilizer should be applied in early spring and again in late summer to ensure adequate nutrient availability during the growing season.",
          },
        ],
      },
      {
        id: 28,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 281,
            topic: "Pests",
            text: "Common pests include aphids, scale insects, and citrus leaf miners. Implementing integrated pest management (IPM) strategies can help control these pests effectively.",
          },
          {
            id: 282,
            topic: "Diseases",
            text: "Grapefruit trees can be affected by diseases such as citrus greening, root rot, and sooty mold. Proper care and monitoring can help prevent these issues.",
          },
        ],
      },
      {
        id: 29,
        topic: "Harvesting",
        children: [
          {
            id: 291,
            topic: "Time",
            text: "Grapefruit is typically ready for harvest in winter to early spring, depending on the variety and climate.",
          },
          {
            id: 292,
            topic: "Signs of Ripeness",
            text: "Ripe grapefruit is firm to the touch, has a bright color, and emits a pleasant citrus aroma. They should be harvested when fully ripe for the best flavor.",
          },
          {
            id: 293,
            topic: "Handling",
            text: "Grapefruit should be handled with care to avoid bruising, and should be stored in a cool, dry place after harvest.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Grapefruit can be stored at room temperature for a week or in the refrigerator for up to 2 weeks. Proper storage helps maintain freshness.",
        children: [
          {
            id: 30.21,
            topic: `Preservation`,
            text: "Grapefruit can also be juiced or used in cooking to extend its use beyond fresh consumption.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Thinning excess fruit during the growing season can improve fruit size and quality by reducing competition for nutrients.",
      },
    ],
  },
  {
    id: 12,
    name: "Kiwi",
    img: fruitsImages.kiwi,
    inGeneralHeading: `A Nutritional Powerhouse in a Small Package`,
    inGeneral: `Kiwi, also known as Actinidia deliciosa, is a small, brown, fuzzy fruit with vibrant green or yellow flesh and tiny black seeds. Known for its sweet-tart flavor, kiwi is packed with essential nutrients and offers numerous health benefits.
                One of the standout features of kiwi is its high vitamin C content. In fact, a single kiwi provides more than the daily recommended intake of vitamin C, which helps boost the immune system, promotes skin health, and acts as a powerful antioxidant to protect the body from oxidative stress. Kiwi is also rich in dietary fiber, which aids digestion, promotes gut health, and helps regulate blood sugar levels.
                In addition to vitamin C, kiwi contains other important nutrients like vitamin K, which supports bone health and proper blood clotting, and potassium, which helps regulate blood pressure and support heart health. Kiwi also contains antioxidants such as lutein and zeaxanthin, which are beneficial for eye health, helping to protect against age-related macular degeneration.
                Kiwi is a low-calorie fruit that can be easily incorporated into any diet. It can be eaten on its own, added to fruit salads, blended into smoothies, or used as a topping for yogurt and cereal. The tangy flavor of kiwi also complements both sweet and savory dishes.
                In summary, kiwi is a nutrient-dense fruit that offers a range of health benefits, from boosting immunity to supporting heart and digestive health. Its unique taste and versatility make it a delicious addition to a healthy diet.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 61,
        measurementUnits: "kcal",
        description: "– Low in calories, making it a nutritious snack option.",
      },
      {
        element: "Fats:",
        quantity: 0.5,
        measurementUnits: "g",
        description: "– Very low in fat, contributing to its health benefits.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 0.1,
        measurementUnits: "g",
        description: "– Contains minimal saturated fats.",
      },
      {
        element: "Cholesterol:",
        quantity: 0,
        measurementUnits: "mg",
        description: "– Cholesterol-free, promoting heart health.",
      },
      {
        element: "Sodium:",
        quantity: 3,
        measurementUnits: "mg",
        description:
          "– Extremely low in sodium, beneficial for blood pressure management.",
      },
      {
        element: "Potassium:",
        quantity: 312,
        measurementUnits: "mg",
        description:
          "– A good source of potassium, essential for heart and muscle function.",
      },
      {
        element: "Carbohydrates:",
        quantity: 14.7,
        measurementUnits: "g",
        description: "– Rich in carbohydrates, primarily from natural sugars.",
      },
      {
        element: "Fiber:",
        quantity: 3,
        measurementUnits: "g",
        description: "– High in dietary fiber, promoting digestive health.",
      },
      {
        element: "Sugar:",
        quantity: 8.99,
        measurementUnits: "g",
        description: "– Contains natural sugars that add to its sweetness.",
      },
      {
        element: "Proteins:",
        quantity: 1.1,
        measurementUnits: "g",
        description: "– Provides a small amount of protein.",
      },
      {
        element: "Vitamin C:",
        quantity: 92.7,
        measurementUnits: "mg",
        description:
          "– An excellent source of vitamin C, supporting immune function and skin health.",
      },
      {
        element: "Calcium:",
        quantity: 18,
        measurementUnits: "mg",
        description:
          "– Contains small amounts of calcium, contributing to bone health.",
      },
      {
        element: "Iron:",
        quantity: 0.3,
        measurementUnits: "mg",
        description:
          "– Provides trace amounts of iron, essential for blood health.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description:
          "– No vitamin D present, typically obtained from sunlight.",
      },
      {
        element: "Vitamin B6:",
        quantity: 0.1,
        measurementUnits: "mg",
        description: "– Supports metabolism and brain health.",
      },
      {
        element: "Vitamin B12:",
        quantity: 0,
        measurementUnits: "µg",
        description:
          "– Lacks vitamin B12, which is primarily found in animal products.",
      },
      {
        element: "Magnesium:",
        quantity: 17,
        measurementUnits: "mg",
        description:
          "– Contains small amounts of magnesium, essential for various bodily functions.",
      },
      {
        element: "Zinc:",
        quantity: 0.1,
        measurementUnits: "mg",
        description:
          "– Provides trace amounts of zinc, supporting immune function.",
      },
      {
        element: "Vitamin E:",
        quantity: 0.1,
        measurementUnits: "mg",
        description: "– Contains small amounts of vitamin E, an antioxidant.",
      },
    ],
    cultivationHeading: `Kiwi, also known as kiwifruit, is a small, nutrient-rich fruit with a unique flavor and fuzzy skin. It is primarily grown in temperate regions and requires specific conditions for successful cultivation. Here’s an overview of kiwi cultivation`,
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Kiwi thrives in temperate climates and requires a balance of warm summers and cool winters. Ideal growing temperatures range from 15°C to 25°C (59°F to 77°F) during the growing season.",
          },
          {
            id: 212,
            topic: "Frost Sensitivity",
            text: "Kiwi is sensitive to frost, especially during flowering and fruit development. A frost-free period of about 200 days is ideal for successful cultivation.",
          },
        ],
      },
      {
        id: 22,
        topic: "Soil",
        children: [
          {
            id: 221,
            topic: "pH",
            text: "Kiwi prefers well-drained, fertile soil with a pH level between 6.0 and 7.0.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "Loamy or sandy soils are ideal, as they provide good drainage and aeration. Kiwi plants do not tolerate waterlogged conditions.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Incorporating organic matter, such as compost or well-rotted manure, into the soil prior to planting enhances fertility and soil structure.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: `Popular kiwi varieties include:
                            - Hayward (the most commonly grown, known for its sweet flavor and green flesh)
                            - Arctic Kiwi (a hardier variety that can tolerate colder climates)
                            - Hardy Kiwi (produces smaller, smooth-skinned fruit with a unique taste).`,
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "The best time to plant kiwi is in the spring after the last frost or in the fall before the first frost, allowing the roots to establish before the growing season.",
          },
          {
            id: 242,
            topic: "Spacing",
            text: "Kiwi vines should be spaced about 3 to 4 meters (10 to 13 feet) apart to allow for adequate growth and airflow.",
          },
          {
            id: 243,
            topic: "Pollination",
            text: "Most kiwi varieties are dioecious, meaning male and female flowers are on separate plants. Planting both male and female varieties is necessary for fruit set.",
          },
        ],
      },
      {
        id: 25,
        topic: "Watering",
        children: [
          {
            id: 251,
            topic: "Establishment Phase",
            text: "Newly planted kiwi vines require consistent watering to establish roots, keeping the soil consistently moist but not waterlogged.",
          },
          {
            id: 252,
            topic: "Mature Vines",
            text: "Once established, kiwi vines require about 500 to 800 mm (20 to 31 inches) of water annually. Deep watering is preferred to promote deep root growth.",
          },
          {
            id: 253,
            topic: "Avoid Overwatering",
            text: "Kiwi vines are susceptible to root rot, so avoid overwatering and ensure proper drainage.",
          },
        ],
      },
      {
        id: 26,
        topic: "Pruning",
        children: [
          {
            id: 261,
            topic: "Shape",
            text: "Pruning helps maintain the desired shape and size of kiwi vines while encouraging air circulation and light penetration.",
          },
          {
            id: 262,
            topic: "Timing",
            text: "Pruning should be done in late winter or early spring before new growth begins, removing any dead or damaged wood.",
          },
        ],
      },
      {
        id: 27,
        topic: "Fertilization",
        children: [
          {
            id: 271,
            topic: "Nutrients",
            text: "Kiwi vines benefit from regular fertilization with a balanced fertilizer (e.g., 10-10-10 NPK) to support healthy growth and fruiting.",
          },
          {
            id: 272,
            topic: "Timing",
            text: "Fertilizer should be applied in early spring before new growth starts and again in mid-summer to promote fruit development.",
          },
        ],
      },
      {
        id: 28,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 281,
            topic: "Pests",
            text: "Common pests affecting kiwi include aphids, spider mites, and scale insects. Implementing integrated pest management (IPM) strategies can help control these pests effectively.",
          },
          {
            id: 282,
            topic: "Diseases",
            text: "Kiwi vines can be affected by diseases such as root rot, bacterial canker, and powdery mildew. Preventive measures include proper irrigation practices and monitoring for symptoms.",
          },
        ],
      },
      {
        id: 29,
        topic: "Harvesting",
        children: [
          {
            id: 291,
            topic: "Time",
            text: "Kiwi is typically ready for harvest in late fall to early winter, depending on the variety and climate.",
          },
          {
            id: 292,
            topic: "Signs of Ripeness",
            text: "Ripe kiwi is slightly soft to the touch and has a fragrant aroma. It should be harvested when fully ripe for the best flavor.",
          },
          {
            id: 293,
            topic: "Handling",
            text: "Kiwi should be handled with care to avoid bruising, and should be stored in a cool, dry place after harvest.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Kiwi can be stored at room temperature for a few days to ripen further or in the refrigerator for up to 2 to 3 weeks. Proper storage helps maintain freshness.",
        children: [
          {
            id: 30.21,
            topic: "Preservation",
            text: "Kiwi can also be used in smoothies, desserts, or salads to extend its use beyond fresh consumption.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Thinning excess fruit during the growing season can improve fruit size and quality by reducing competition for nutrients.",
      },
    ],
  },
  {
    id: 13,
    name: "Lemon",
    img: fruitsImages.lemon,
    inGeneralHeading: `The Zesty Citrus Superstar`,
    inGeneral: `Lemons, scientifically known as Citrus limon, are vibrant yellow fruits that are cherished for their refreshing flavor and numerous health benefits. Known for their tangy taste, lemons are a staple in kitchens around the world, used in everything from beverages to desserts and savory dishes.
                  One of the most notable benefits of lemons is their high vitamin C content. A single lemon can provide a significant portion of the daily recommended intake of vitamin C, which is essential for immune function, skin health, and the production of collagen. This powerful antioxidant helps protect cells from damage caused by free radicals, supporting overall health and wellness.
                  Lemons also contain various beneficial plant compounds, including flavonoids, which have anti-inflammatory and antioxidant properties. These compounds can contribute to reducing the risk of chronic diseases, such as heart disease and cancer. Additionally, lemons are a good source of potassium, which plays a vital role in regulating blood pressure and supporting heart health.
                  Incorporating lemons into your diet is easy. Fresh lemon juice can enhance the flavor of water, salad dressings, marinades, and baked goods. Lemon zest adds a fragrant note to various dishes, and lemons can also be used in beverages like lemonade or cocktails.
                  In summary, lemons are a versatile fruit that offers numerous health benefits, including boosting immunity and supporting heart health. Their bright flavor and culinary versatility make them an essential ingredient in many dishes, enhancing both taste and nutrition.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 29,
        measurementUnits: "kcal",
        description:
          "– Low in calories, making it a refreshing addition to beverages and dishes.",
      },
      {
        element: "Fats:",
        quantity: 0.3,
        measurementUnits: "g",
        description: "– Very low in fat, contributing to its healthy profile.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 0.0,
        measurementUnits: "g",
        description: "– Contains negligible amounts of saturated fats.",
      },
      {
        element: "Cholesterol:",
        quantity: 0,
        measurementUnits: "mg",
        description: "– Cholesterol-free, beneficial for heart health.",
      },
      {
        element: "Sodium:",
        quantity: 1,
        measurementUnits: "mg",
        description:
          "– Very low in sodium, helpful for blood pressure management.",
      },
      {
        element: "Potassium:",
        quantity: 138,
        measurementUnits: "mg",
        description:
          "– Good source of potassium, essential for fluid balance and muscle function.",
      },
      {
        element: "Carbohydrates:",
        quantity: 9.3,
        measurementUnits: "g",
        description: "– Provides carbohydrates, primarily from natural sugars.",
      },
      {
        element: "Fiber:",
        quantity: 2.8,
        measurementUnits: "g",
        description: "– Contains dietary fiber, promoting healthy digestion.",
      },
      {
        element: "Sugar:",
        quantity: 2.5,
        measurementUnits: "g",
        description: "– Contains small amounts of natural sugars.",
      },
      {
        element: "Proteins:",
        quantity: 1.1,
        measurementUnits: "g",
        description: "– Provides a small amount of protein.",
      },
      {
        element: "Vitamin C:",
        quantity: 53,
        measurementUnits: "mg",
        description:
          "– Excellent source of vitamin C, supporting the immune system.",
      },
      {
        element: "Calcium:",
        quantity: 26,
        measurementUnits: "mg",
        description: "– Contains a small amount of calcium for bone health.",
      },
      {
        element: "Iron:",
        quantity: 0.6,
        measurementUnits: "mg",
        description:
          "– Provides trace amounts of iron, important for blood health.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description:
          "– Does not contain vitamin D, typically obtained from sunlight.",
      },
      {
        element: "Vitamin B6:",
        quantity: 0.1,
        measurementUnits: "mg",
        description: "– Supports metabolism and brain health.",
      },
      {
        element: "Vitamin B12:",
        quantity: 0,
        measurementUnits: "µg",
        description: "– Lacks vitamin B12, primarily found in animal products.",
      },
      {
        element: "Magnesium:",
        quantity: 8,
        measurementUnits: "mg",
        description:
          "– Contains magnesium, important for various bodily functions.",
      },
      {
        element: "Zinc:",
        quantity: 0.1,
        measurementUnits: "mg",
        description:
          "– Provides a small amount of zinc, supporting immune function.",
      },
      {
        element: "Vitamin E:",
        quantity: 0.2,
        measurementUnits: "mg",
        description: "– Contains small amounts of vitamin E, an antioxidant.",
      },
    ],
    cultivationHeading: `Lemons are highly valued for their tangy flavor and are widely used in culinary applications, beverages, and as a natural preservative. They thrive in warm climates and can be cultivated in both commercial orchards and home gardens. Here’s an overview of lemon cultivation`,
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Lemon trees thrive in warm, subtropical to tropical climates. The ideal temperature range for optimal growth is between 20°C and 30°C (68°F to 86°F).",
          },
          {
            id: 212,
            topic: "Frost Sensitivity",
            text: "Lemon trees are sensitive to frost and can suffer damage when temperatures drop below -2°C (28°F). Protecting trees during cold snaps is essential in cooler climates.",
          },
        ],
      },
      {
        id: 22,
        topic: "Soil",
        children: [
          {
            id: 221,
            topic: "pH",
            text: "Lemon trees prefer well-drained, sandy or loamy soil with a pH level between 5.5 and 6.5.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "Soils with good drainage are essential, as lemon trees do not tolerate waterlogged conditions. Raised beds or mounds can help improve drainage.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Incorporating organic matter, such as compost, into the soil before planting enhances fertility and drainage.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: `Popular lemon varieties include:
                            - Eureka (common for commercial production, known for its juicy fruit).
                            - Lisbon (similar to Eureka but with fewer thorns).
                            - Meyer (a hybrid with a sweeter flavor and thinner skin).`,
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "The best time to plant lemon trees is in spring or early summer when the risk of frost has passed.",
          },
          {
            id: 242,
            topic: "Spacing",
            text: "Lemon trees should be spaced about 4 to 6 meters (13 to 20 feet) apart to allow for adequate growth and airflow.",
          },
          {
            id: 243,
            topic: "Pollination",
            text: "Most lemon varieties are self-pollinating, but planting multiple trees can increase fruit yield.",
          },
        ],
      },
      {
        id: 25,
        topic: "Watering",
        children: [
          {
            id: 251,
            topic: "Establishment Phase",
            text: "Newly planted lemon trees require regular watering to establish roots, keeping the soil consistently moist but not soggy.",
          },
          {
            id: 252,
            topic: "Mature Trees",
            text: "Once established, lemon trees need about 50 to 100 mm (2 to 4 inches) of water per month during the growing season. Deep watering is preferred to encourage deep root growth.",
          },
          {
            id: 253,
            topic: "Avoid Overwatering",
            text: "Overwatering can lead to root rot, so ensure good drainage and adjust watering frequency based on rainfall.",
          },
        ],
      },
      {
        id: 26,
        topic: "Pruning",
        children: [
          {
            id: 261,
            topic: "Shape",
            text: "Pruning helps maintain a balanced shape, removing any dead or diseased branches and encouraging air circulation.",
          },
          {
            id: 262,
            topic: "Timing",
            text: "Prune lemon trees in late winter or early spring before new growth begins to promote healthy development.",
          },
        ],
      },
      {
        id: 27,
        topic: "Fertilization",
        children: [
          {
            id: 271,
            topic: "Nutrients",
            text: "Lemon trees benefit from regular feeding with a balanced fertilizer (e.g., 10-10-10 NPK) or one specifically formulated for citrus trees.",
          },
          {
            id: 272,
            topic: "Timing",
            text: "Fertilizer should be applied in early spring, with a second application in late summer to support fruit development.",
          },
        ],
      },
      {
        id: 28,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 281,
            topic: "Pests",
            text: "Common pests include aphids, spider mites, and citrus leaf miners. Implementing integrated pest management (IPM) practices can help control these pests effectively.",
          },
          {
            id: 282,
            topic: "Diseases",
            text: "Lemon trees are susceptible to diseases such as root rot, lemon scab, and greening disease. Good cultural practices and monitoring for symptoms can help prevent these issues.",
          },
        ],
      },
      {
        id: 29,
        topic: "Harvesting",
        children: [
          {
            id: 291,
            topic: "Time",
            text: "Lemons typically reach maturity 6 to 9 months after flowering, depending on the variety and growing conditions.",
          },
          {
            id: 292,
            topic: "Signs of Ripeness",
            text: "Ripe lemons are bright yellow, firm, and slightly soft to the touch. They should be harvested when fully ripe for the best flavor.",
          },
          {
            id: 293,
            topic: "Handling",
            text: "Lemons should be handled carefully to avoid bruising and stored in a cool, dry place after harvest.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Lemons can be stored at room temperature for about a week or in the refrigerator for 2 to 3 weeks. Proper storage helps maintain freshness.",
        children: [
          {
            id: 30.21,
            topic: "Preservation",
            text: "Lemons can also be juiced, zested, or used in various culinary applications to extend their use beyond fresh consumption.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Thinning excess fruit during the growing season can improve fruit size and quality by reducing competition for nutrients.",
      },
    ],
  },
  {
    id: 14,
    name: "Mango",
    img: fruitsImages.mango,
    inGeneralHeading: `The King of Fruits`,
    inGeneral: `Mango, scientifically known as Mangifera indica, is often celebrated as the "king of fruits" due to its delightful sweetness and rich flavor. This tropical fruit, which comes in a variety of shapes, sizes, and colors, is enjoyed worldwide for its delicious taste and numerous health benefits.
                  One of the most significant attributes of mangoes is their high vitamin C content. A single mango can provide more than 100% of the daily recommended intake of this essential vitamin, which is crucial for boosting the immune system, promoting skin health, and aiding in wound healing. Additionally, mangoes are rich in vitamin A, which supports eye health and plays a vital role in maintaining healthy skin.
                  Mangoes are also packed with antioxidants, including beta-carotene and polyphenols, which help combat oxidative stress and reduce inflammation in the body. These antioxidants may contribute to a lower risk of chronic diseases, such as heart disease and certain cancers. Furthermore, mangoes contain dietary fiber, which aids digestion and promotes a feeling of fullness, making them a great addition to weight management diets.
                  Culinary-wise, mangoes are incredibly versatile. They can be enjoyed fresh, blended into smoothies, added to salads, or used in desserts. Their sweet flavor also pairs well with spicy dishes, making them a popular ingredient in salsas and marinades.
                  In summary, mangoes are a nutrient-rich fruit that offers a delightful taste and numerous health benefits, making them a favorite among fruit lovers everywhere.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 60,
        measurementUnits: "kcal",
        description:
          "– Low in calories, making it a delicious and nutritious fruit option.",
      },
      {
        element: "Fats:",
        quantity: 0.4,
        measurementUnits: "g",
        description: "– Very low in fat, contributing to its health benefits.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 0.1,
        measurementUnits: "g",
        description: "– Contains minimal saturated fats.",
      },
      {
        element: "Cholesterol:",
        quantity: 0,
        measurementUnits: "mg",
        description: "– Cholesterol-free, promoting heart health.",
      },
      {
        element: "Sodium:",
        quantity: 1,
        measurementUnits: "mg",
        description:
          "– Extremely low in sodium, beneficial for blood pressure management.",
      },
      {
        element: "Potassium:",
        quantity: 168,
        measurementUnits: "mg",
        description:
          "– A good source of potassium, essential for heart and muscle function.",
      },
      {
        element: "Carbohydrates:",
        quantity: 15,
        measurementUnits: "g",
        description: "– Rich in carbohydrates, primarily from natural sugars.",
      },
      {
        element: "Fiber:",
        quantity: 1.6,
        measurementUnits: "g",
        description: "– Contains dietary fiber, which aids in digestion.",
      },
      {
        element: "Sugar:",
        quantity: 13.7,
        measurementUnits: "g",
        description:
          "– Contains natural sugars that contribute to its sweetness.",
      },
      {
        element: "Proteins:",
        quantity: 0.8,
        measurementUnits: "g",
        description: "– Provides a small amount of protein.",
      },
      {
        element: "Vitamin C:",
        quantity: 36.4,
        measurementUnits: "mg",
        description:
          "– A good source of vitamin C, supporting immune function and skin health.",
      },
      {
        element: "Calcium:",
        quantity: 18,
        measurementUnits: "mg",
        description:
          "– Contains small amounts of calcium, contributing to bone health.",
      },
      {
        element: "Iron:",
        quantity: 0.2,
        measurementUnits: "mg",
        description:
          "– Provides trace amounts of iron, essential for blood health.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description:
          "– No vitamin D present, typically obtained from sunlight.",
      },
      {
        element: "Vitamin B6:",
        quantity: 0.2,
        measurementUnits: "mg",
        description: "– Supports metabolism and brain health.",
      },
      {
        element: "Vitamin B12:",
        quantity: 0,
        measurementUnits: "µg",
        description:
          "– Lacks vitamin B12, which is primarily found in animal products.",
      },
      {
        element: "Magnesium:",
        quantity: 10,
        measurementUnits: "mg",
        description:
          "– Contains small amounts of magnesium, essential for various bodily functions.",
      },
      {
        element: "Zinc:",
        quantity: 0.1,
        measurementUnits: "mg",
        description:
          "– Provides trace amounts of zinc, supporting immune function.",
      },
      {
        element: "Vitamin E:",
        quantity: 0.2,
        measurementUnits: "mg",
        description: "– Contains small amounts of vitamin E, an antioxidant.",
      },
    ],
    cultivationHeading: `Mangoes are one of the most popular and widely consumed fruits in the world, known for their sweet, juicy flesh and vibrant flavor. They are primarily grown in tropical and subtropical regions. Here’s an overview of mango cultivation`,
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Mango trees thrive in warm tropical and subtropical climates. The ideal temperature for mango growth is between 24°C and 30°C (75°F to 86°F).",
          },
          {
            id: 212,
            topic: "Frost Sensitivity",
            text: "Mango trees are sensitive to frost and can suffer damage when temperatures drop below 0°C (32°F). Protecting young trees from frost is essential in cooler regions.",
          },
        ],
      },
      {
        id: 22,
        topic: "Soil",
        children: [
          {
            id: 221,
            topic: "pH",
            text: "Mango trees prefer well-drained, sandy or loamy soil with a pH level between 5.5 and 7.5.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "Good drainage is crucial for mango trees, as they do not tolerate waterlogged conditions. Raised beds can help improve drainage.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Incorporating organic matter, such as compost, into the soil before planting enhances fertility and moisture retention.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: `Popular mango varieties include:
                            - Alphonso (known for its rich flavor and sweetness).
                            - Haden (tropical flavor, good for eating fresh).
                            - Tommy Atkins (common for commercial production, with good shelf life).`,
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "The best time to plant mango trees is in spring, after the last frost has passed.",
          },
          {
            id: 242,
            topic: "Spacing",
            text: "Mango trees should be spaced about 8 to 10 meters (26 to 33 feet) apart to allow for their large canopy.",
          },
          {
            id: 243,
            topic: "Pollination",
            text: "Mango trees are mostly self-pollinating, but planting multiple varieties can improve fruit set and yield.",
          },
        ],
      },
      {
        id: 25,
        topic: "Watering",
        children: [
          {
            id: 251,
            topic: "Establishment Phase",
            text: "Young mango trees require regular watering to establish roots, keeping the soil consistently moist but not soggy.",
          },
          {
            id: 252,
            topic: "Mature Trees",
            text: "Once established, mango trees require deep watering every 2 to 4 weeks, depending on rainfall, to encourage deep root growth.",
          },
          {
            id: 253,
            topic: "Avoid Overwatering",
            text: "Overwatering can lead to root rot and other diseases. Ensure good drainage and adjust watering based on weather conditions.",
          },
        ],
      },
      {
        id: 26,
        topic: "Pruning",
        children: [
          {
            id: 261,
            topic: "Shape",
            text: "Pruning helps maintain a balanced shape, encourages healthy growth, and improves air circulation within the tree.",
          },
          {
            id: 262,
            topic: "Timing",
            text: "Prune mango trees after harvesting or in late winter before new growth begins to remove dead or diseased branches.",
          },
        ],
      },
      {
        id: 27,
        topic: "Fertilization",
        children: [
          {
            id: 271,
            topic: "Nutrients",
            text: "Mango trees benefit from regular feeding with a balanced fertilizer (e.g., 10-10-10 NPK) or one specifically formulated for fruit trees.",
          },
          {
            id: 272,
            topic: "Timing",
            text: "Fertilizer should be applied in early spring and again in late summer to support growth and fruit development.",
          },
        ],
      },
      {
        id: 28,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 281,
            topic: "Pests",
            text: "Common pests include mango weevils, fruit flies, and aphids. Implementing integrated pest management (IPM) practices can help control these pests effectively.",
          },
          {
            id: 282,
            topic: "Diseases",
            text: "Mango trees are susceptible to diseases such as anthracnose, powdery mildew, and bacterial canker. Good cultural practices and monitoring for symptoms can help prevent these issues.",
          },
        ],
      },
      {
        id: 29,
        topic: "Harvesting",
        children: [
          {
            id: 291,
            topic: "Time",
            text: "Mangoes typically take 3 to 6 months to mature after flowering, depending on the variety and growing conditions.",
          },
          {
            id: 292,
            topic: "Signs of Ripeness",
            text: "Ripe mangoes are aromatic, have a slight give when gently squeezed, and exhibit a color change (yellow/orange, depending on the variety).",
          },
          {
            id: 293,
            topic: "Handling",
            text: "Mangoes should be handled carefully to avoid bruising and stored in a cool, dry place after harvest.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Mangoes can be stored at room temperature until ripe, then refrigerated for up to a week. Proper storage helps maintain freshness.",
        children: [
          {
            id: 30.21,
            topic: "Preservation",
            text: "Mangoes can also be dried, canned, or made into smoothies and desserts to extend their use beyond fresh consumption.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Thinning excess fruit during the growing season can improve fruit size and quality by reducing competition for nutrients.",
      },
    ],
  },
  {
    id: 15,
    name: "Melon",
    img: fruitsImages.melon,
    inGeneralHeading: "A Refreshing Delight",
    inGeneral: `Melon, a family of fruits belonging to the Cucurbitaceae family, is celebrated for its refreshing taste and high water content, making it a perfect summer treat. The most common varieties include watermelon, cantaloupe, and honeydew, each offering unique flavors and textures.
                Watermelon, with its striking red or pink flesh, is known for being over 90% water, making it incredibly hydrating. It’s a great source of vitamins A and C, as well as antioxidants like lycopene, which is linked to heart health and may reduce the risk of certain cancers. Eating watermelon can also help in replenishing electrolytes after exercise, making it a favorite among athletes.
                Cantaloupe, with its sweet orange flesh, is rich in vitamins A and C, promoting healthy skin and immune function. It’s also an excellent source of potassium, which aids in maintaining healthy blood pressure levels. Honeydew, characterized by its pale green flesh, is sweet and juicy, providing a good amount of vitamin C and dietary fiber.
                Melons are incredibly versatile in culinary applications. They can be enjoyed fresh, blended into smoothies, or incorporated into salads and salsas. Their natural sweetness also pairs well with savory dishes, enhancing flavors and adding a refreshing contrast.
                In summary, melons are not just delicious; they are also packed with essential nutrients and health benefits. Their hydrating qualities and versatility make them an ideal choice for a healthy diet, especially during warmer months.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 34,
        measurementUnits: "kcal",
        description:
          "– Low in calories, making it a hydrating and refreshing fruit.",
      },
      {
        element: "Fats:",
        quantity: 0.2,
        measurementUnits: "g",
        description: "– Very low in fat, contributing to its healthy profile.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 0.0,
        measurementUnits: "g",
        description: "– Contains negligible amounts of saturated fats.",
      },
      {
        element: "Cholesterol:",
        quantity: 0,
        measurementUnits: "mg",
        description: "– Cholesterol-free, promoting heart health.",
      },
      {
        element: "Sodium:",
        quantity: 1,
        measurementUnits: "mg",
        description:
          "– Very low in sodium, helpful for blood pressure management.",
      },
      {
        element: "Potassium:",
        quantity: 267,
        measurementUnits: "mg",
        description:
          "– Good source of potassium, which helps regulate fluid balance.",
      },
      {
        element: "Carbohydrates:",
        quantity: 8.0,
        measurementUnits: "g",
        description: "– Provides carbohydrates primarily from natural sugars.",
      },
      {
        element: "Fiber:",
        quantity: 0.9,
        measurementUnits: "g",
        description: "– Contains dietary fiber, supporting healthy digestion.",
      },
      {
        element: "Sugar:",
        quantity: 8.0,
        measurementUnits: "g",
        description:
          "– Contains natural sugars, contributing to its sweet flavor.",
      },
      {
        element: "Proteins:",
        quantity: 0.5,
        measurementUnits: "g",
        description: "– Provides a small amount of protein.",
      },
      {
        element: "Vitamin C:",
        quantity: 36.0,
        measurementUnits: "mg",
        description:
          "– Good source of vitamin C, supporting the immune system.",
      },
      {
        element: "Calcium:",
        quantity: 18,
        measurementUnits: "mg",
        description:
          "– Contains a small amount of calcium, contributing to bone health.",
      },
      {
        element: "Iron:",
        quantity: 0.2,
        measurementUnits: "mg",
        description:
          "– Provides trace amounts of iron, important for blood health.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description:
          "– Does not contain vitamin D, typically obtained from sunlight.",
      },
      {
        element: "Vitamin B6:",
        quantity: 0.1,
        measurementUnits: "mg",
        description: "– Supports metabolism and brain health.",
      },
      {
        element: "Vitamin B12:",
        quantity: 0,
        measurementUnits: "µg",
        description: "– Lacks vitamin B12, primarily found in animal products.",
      },
      {
        element: "Magnesium:",
        quantity: 10,
        measurementUnits: "mg",
        description:
          "– Contains magnesium, important for various bodily functions.",
      },
      {
        element: "Zinc:",
        quantity: 0.2,
        measurementUnits: "mg",
        description:
          "– Provides a small amount of zinc, supporting immune function.",
      },
      {
        element: "Vitamin E:",
        quantity: 0.1,
        measurementUnits: "mg",
        description: "– Contains small amounts of vitamin E, an antioxidant.",
      },
    ],
    cultivationHeading: `Melons are sweet, juicy fruits that are popular during warm seasons and come in various types, including cantaloupe, honeydew, and watermelon. They are primarily grown in warm climates and can be cultivated in both commercial fields and home gardens. Here’s an overview of melon cultivation`,
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Melons thrive in warm climates, preferring temperatures between 21°C and 35°C (70°F to 95°F) during the growing season. They require full sun to produce sweet fruits.",
          },
          {
            id: 212,
            topic: "Frost Sensitivity",
            text: "Melon plants are sensitive to frost and should be planted after the last frost date in spring. Protecting young plants from cold temperatures is essential for a successful harvest.",
          },
        ],
      },
      {
        id: 22,
        topic: "Soil",
        children: [
          {
            id: 221,
            topic: "pH",
            text: "Melons prefer well-drained, sandy loam soils with a pH level between 6.0 and 7.5.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "Good drainage is crucial for melon plants, as they are susceptible to root rot in waterlogged conditions. Raised beds can enhance drainage.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Incorporating organic matter, such as compost or well-rotted manure, into the soil before planting improves fertility and moisture retention.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: `Popular melon varieties include:
                            - Cantaloupe (sweet, orange flesh).
                            - Honeydew (green flesh with a sweet taste).
                            - Watermelon (large, refreshing, and hydrating).`,
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "The best time to plant melons is in late spring, after the soil has warmed to at least 18°C (65°F).",
          },
          {
            id: 242,
            topic: "Spacing",
            text: "Melon plants should be spaced about 90 to 120 cm (3 to 4 feet) apart in rows, allowing for ample growth and airflow.",
          },
          {
            id: 243,
            topic: "Pollination",
            text: "Melons are mostly self-pollinating, but planting flowers nearby can attract pollinators, improving fruit set.",
          },
        ],
      },
      {
        id: 25,
        topic: "Watering",
        children: [
          {
            id: 251,
            topic: "Establishment Phase",
            text: "Young melon plants require consistent moisture to establish strong roots, especially during dry spells.",
          },
          {
            id: 252,
            topic: "Mature Plants",
            text: "Once established, melons need deep watering about once a week, ensuring that the soil remains moist but not saturated.",
          },
          {
            id: 253,
            topic: "Avoid Overwatering",
            text: "Waterlogged soil can lead to root rot. Mulching can help retain soil moisture and regulate temperature.",
          },
        ],
      },
      {
        id: 26,
        topic: "Pruning",
        children: [
          {
            id: 261,
            topic: "Shape",
            text: "Melons are typically grown as sprawling vines. Pruning excess growth can help improve airflow and fruit quality.",
          },
          {
            id: 262,
            topic: "Timing",
            text: "Pruning should be done early in the growing season to encourage healthy growth and fruit development.",
          },
        ],
      },
      {
        id: 27,
        topic: "Fertilization",
        children: [
          {
            id: 271,
            topic: "Nutrients",
            text: "Melons benefit from a balanced fertilizer, high in potassium and phosphorus to support fruit development.",
          },
          {
            id: 272,
            topic: "Timing",
            text: "Fertilize at planting time and again when plants begin to flower, ensuring nutrients are available for fruiting.",
          },
        ],
      },
      {
        id: 28,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 281,
            topic: "Pests",
            text: "Common pests include aphids, cucumber beetles, and spider mites. Implementing integrated pest management (IPM) strategies can effectively control these pests.",
          },
          {
            id: 282,
            topic: "Diseases",
            text: "Melons can be affected by diseases such as powdery mildew, downy mildew, and fusarium wilt. Preventive measures include proper spacing, good air circulation, and using disease-resistant varieties.",
          },
        ],
      },
      {
        id: 29,
        topic: "Harvesting",
        children: [
          {
            id: 291,
            topic: "Time",
            text: "Melons typically take 70 to 90 days to mature after planting, depending on the variety.",
          },
          {
            id: 292,
            topic: "Signs of Ripeness",
            text: "Ripe melons will exhibit a sweet aroma, and the skin will change color or develop a slight give when gently squeezed.",
          },
          {
            id: 293,
            topic: "Handling",
            text: "Handle melons gently to avoid bruising, and store them in a cool, dry place after harvest.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Melons can be stored at room temperature until ripe. Once ripe, they can be refrigerated for up to a week to maintain freshness.",
        children: [
          {
            id: 30.21,
            topic: `Preservation`,
            text: "Melons can also be juiced, blended, or made into salads and desserts to extend their use beyond fresh consumption.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Thinning excess fruit in the early stages can improve overall fruit size and quality by reducing competition for nutrients.",
      },
    ],
  },
  {
    id: 16,
    name: "Nectarine",
    img: fruitsImages.nectarine,
    inGeneralHeading: `The Juicy Stone Fruit`,
    inGeneral: `Nectarines, scientifically classified as Prunus persica, are smooth-skinned fruits that closely resemble peaches but are distinguished by their lack of fuzz. With a sweet and tangy flavor, nectarines are a favorite summer fruit that can be enjoyed fresh, cooked, or baked.
                  One of the key health benefits of nectarines is their rich nutrient profile. They are low in calories and high in essential vitamins, particularly vitamin C, which plays a vital role in boosting the immune system, promoting healthy skin, and aiding in collagen production. A medium nectarine can provide about 10% of the daily recommended intake of vitamin C.
                  Nectarines are also a good source of dietary fiber, which supports digestive health and helps regulate blood sugar levels. Fiber contributes to a feeling of fullness, making nectarines a satisfying snack for those looking to maintain a healthy weight. Additionally, nectarines contain potassium, which is important for heart health and helps regulate blood pressure.
                  The antioxidants found in nectarines, such as beta-carotene and flavonoids, help protect the body from oxidative stress and inflammation, potentially reducing the risk of chronic diseases like heart disease and certain cancers.
                  Culinary-wise, nectarines are incredibly versatile. They can be eaten fresh, added to fruit salads, blended into smoothies, or used in desserts like pies and crumbles. Their sweet flavor also pairs well with savory dishes, making them a delightful addition to salads and salsas.
                  In summary, nectarines are a delicious and nutritious fruit that offers a range of health benefits and culinary possibilities, making them a beloved choice for many.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 44,
        measurementUnits: "kcal",
        description: "– Low in calories, making it a refreshing fruit choice.",
      },
      {
        element: "Fats:",
        quantity: 0.3,
        measurementUnits: "g",
        description: "– Very low in fat, contributing to its health benefits.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 0.1,
        measurementUnits: "g",
        description: "– Contains minimal saturated fats.",
      },
      {
        element: "Cholesterol:",
        quantity: 0,
        measurementUnits: "mg",
        description: "– Cholesterol-free, promoting heart health.",
      },
      {
        element: "Sodium:",
        quantity: 0,
        measurementUnits: "mg",
        description:
          "– Extremely low in sodium, beneficial for blood pressure management.",
      },
      {
        element: "Potassium:",
        quantity: 190,
        measurementUnits: "mg",
        description:
          "– A good source of potassium, essential for heart and muscle function.",
      },
      {
        element: "Carbohydrates:",
        quantity: 10.6,
        measurementUnits: "g",
        description: "– Rich in carbohydrates, primarily from natural sugars.",
      },
      {
        element: "Fiber:",
        quantity: 1.5,
        measurementUnits: "g",
        description: "– Contains dietary fiber, which aids in digestion.",
      },
      {
        element: "Sugar:",
        quantity: 8.4,
        measurementUnits: "g",
        description:
          "– Contains natural sugars that contribute to its sweetness.",
      },
      {
        element: "Proteins:",
        quantity: 0.9,
        measurementUnits: "g",
        description: "– Provides a small amount of protein.",
      },
      {
        element: "Vitamin C:",
        quantity: 5.4,
        measurementUnits: "mg",
        description:
          "– A source of vitamin C, supporting immune function and skin health.",
      },
      {
        element: "Calcium:",
        quantity: 4,
        measurementUnits: "mg",
        description:
          "– Contains trace amounts of calcium, contributing to bone health.",
      },
      {
        element: "Iron:",
        quantity: 0.2,
        measurementUnits: "mg",
        description:
          "– Provides trace amounts of iron, essential for blood health.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description:
          "– No vitamin D present, typically obtained from sunlight.",
      },
      {
        element: "Vitamin B6:",
        quantity: 0.1,
        measurementUnits: "mg",
        description: "– Supports metabolism and brain health.",
      },
      {
        element: "Vitamin B12:",
        quantity: 0,
        measurementUnits: "µg",
        description:
          "– Lacks vitamin B12, which is primarily found in animal products.",
      },
      {
        element: "Magnesium:",
        quantity: 10,
        measurementUnits: "mg",
        description:
          "– Contains small amounts of magnesium, essential for various bodily functions.",
      },
      {
        element: "Zinc:",
        quantity: 0.1,
        measurementUnits: "mg",
        description:
          "– Provides trace amounts of zinc, supporting immune function.",
      },
      {
        element: "Vitamin E:",
        quantity: 0.2,
        measurementUnits: "mg",
        description: "– Contains small amounts of vitamin E, an antioxidant.",
      },
    ],
    cultivationHeading: `Nectarines are smooth-skinned fruits similar to peaches, known for their sweet flavor and juicy texture. They are cultivated in temperate regions and can be grown in both commercial orchards and home gardens. Here’s an overview of nectarine cultivation`,
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Nectarines thrive in warm climates with a temperate growing season. Ideal temperatures during the growing season range between 20°C and 30°C (68°F to 86°F).",
          },
          {
            id: 212,
            topic: "Frost Sensitivity",
            text: "Nectarines are sensitive to frost, particularly during bloom. Protecting blossoms from late spring frosts is crucial for a successful harvest.",
          },
        ],
      },
      {
        id: 22,
        topic: "Soil",
        children: [
          {
            id: 221,
            topic: "pH",
            text: "Nectarines prefer well-drained, loamy soils with a pH level between 6.0 and 7.0.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "Loamy or sandy loam soils provide the best drainage and aeration, as nectarines are susceptible to root rot in heavy, clay soils.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Prior to planting, amend the soil with organic matter such as compost to enhance fertility and structure.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: `Popular nectarine varieties include:
                            - Fantasia (known for its sweet flavor and large size).
                            - Arctic Star (freestone variety with excellent flavor).
                            - Sunred (early season variety with bright red skin).`,
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "The best time to plant nectarines is during the dormant season, typically in late winter to early spring, before new growth begins.",
          },
          {
            id: 242,
            topic: "Spacing",
            text: "Nectarine trees should be spaced about 4 to 5 meters (13 to 16 feet) apart to allow for sufficient growth and air circulation.",
          },
          {
            id: 243,
            topic: "Pollination",
            text: "Most nectarines are self-pollinating, but planting different varieties nearby can enhance fruit set and quality.",
          },
        ],
      },
      {
        id: 25,
        topic: "Watering",
        children: [
          {
            id: 251,
            topic: "Establishment Phase",
            text: "Nectarine trees need regular watering during the first few years after planting to establish a strong root system.",
          },
          {
            id: 252,
            topic: "Mature Trees",
            text: "Once established, they require deep watering, about 25 to 50 mm (1 to 2 inches) per week during the growing season, depending on weather conditions.",
          },
          {
            id: 253,
            topic: "Avoid Overwatering",
            text: "Excess moisture can lead to root rot. Mulching helps retain soil moisture while preventing weed growth.",
          },
        ],
      },
      {
        id: 26,
        topic: "Pruning",
        children: [
          {
            id: 261,
            topic: "Shape",
            text: "Nectarine trees are typically pruned to develop an open-center or vase shape, which improves sunlight penetration and air circulation.",
          },
          {
            id: 262,
            topic: "Timing",
            text: "Prune during the dormant season (late winter) to remove dead or diseased wood and to shape the tree for optimal growth.",
          },
        ],
      },
      {
        id: 27,
        topic: "Fertilization",
        children: [
          {
            id: 271,
            topic: "Nutrients",
            text: "Nectarines benefit from balanced fertilizers that are high in potassium and phosphorus to support fruit development.",
          },
          {
            id: 272,
            topic: "Timing",
            text: "Fertilization should occur in early spring before new growth begins, with an additional feeding during the growing season if necessary.",
          },
        ],
      },
      {
        id: 28,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 281,
            topic: "Pests",
            text: "Common pests include peach tree borers, aphids, and spider mites. Implementing integrated pest management (IPM) practices can help control these pests.",
          },
          {
            id: 282,
            topic: "Diseases",
            text: "Nectarines are susceptible to diseases such as brown rot, bacterial canker, and powdery mildew. Proper spacing and good air circulation help prevent disease outbreaks.",
          },
        ],
      },
      {
        id: 29,
        topic: "Harvesting",
        children: [
          {
            id: 291,
            topic: "Time",
            text: "Nectarines typically reach maturity and are ready for harvest in mid to late summer, depending on the variety.",
          },
          {
            id: 292,
            topic: "Signs of Ripeness",
            text: "Ripe nectarines should be fragrant, slightly soft to the touch, and have a rich color, typically yellow or red, depending on the variety.",
          },
          {
            id: 293,
            topic: "Handling",
            text: "Handle nectarines gently to avoid bruising, and store them in a cool, dry place after harvest.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Nectarines can be stored at room temperature until fully ripe. Once ripe, they should be refrigerated to prolong freshness for up to one week.",
        children: [
          {
            id: 30.21,
            topic: `Preservation`,
            text: "Nectarines can also be used in desserts, salads, or preserved through canning or freezing to enjoy beyond the fresh season.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Thinning excess fruit in early spring can improve fruit size and quality by reducing competition for nutrients among developing fruits.",
      },
    ],
  },
  {
    id: 17,
    name: "Orange",
    img: fruitsImages.orange,
    inGeneralHeading: `The Zesty Citrus Favorite`,
    inGeneral: `Oranges, scientifically known as Citrus sinensis, are one of the most popular and widely consumed fruits around the world. Known for their vibrant color and refreshing flavor, oranges are not only delicious but also packed with essential nutrients and health benefits.
                  One of the standout features of oranges is their exceptionally high vitamin C content. A medium-sized orange provides more than 100% of the daily recommended intake of this vital nutrient, which is crucial for supporting the immune system, promoting healthy skin, and aiding in collagen synthesis. Vitamin C also acts as a powerful antioxidant, protecting cells from oxidative damage.
                  Oranges are also a great source of dietary fiber, which aids digestion and helps regulate blood sugar levels. The fiber in oranges contributes to a feeling of fullness, making them a satisfying and nutritious snack. Additionally, oranges contain potassium, which is essential for maintaining heart health and regulating blood pressure.
                  The antioxidants found in oranges, such as flavonoids and carotenoids, may also play a role in reducing inflammation and lowering the risk of chronic diseases, including heart disease and certain types of cancer.
                  Culinary-wise, oranges are incredibly versatile. They can be enjoyed fresh, juiced, or added to salads, desserts, and savory dishes. Orange zest can also enhance flavors in baked goods and marinades.
                  In summary, oranges are a nutrient-rich fruit that offers numerous health benefits. Their delicious taste and versatility make them a favorite choice for snacking and cooking, providing a refreshing burst of flavor and nutrition.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 47,
        measurementUnits: "kcal",
        description:
          "– Low in calories, making it a great snack for energy without guilt.",
      },
      {
        element: "Fats:",
        quantity: 0.1,
        measurementUnits: "g",
        description: "– Very low in fat, contributing to its health benefits.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 0.0,
        measurementUnits: "g",
        description: "– Contains negligible amounts of saturated fats.",
      },
      {
        element: "Cholesterol:",
        quantity: 0,
        measurementUnits: "mg",
        description: "– Cholesterol-free, promoting heart health.",
      },
      {
        element: "Sodium:",
        quantity: 1,
        measurementUnits: "mg",
        description:
          "– Very low in sodium, beneficial for blood pressure management.",
      },
      {
        element: "Potassium:",
        quantity: 181,
        measurementUnits: "mg",
        description:
          "– Good source of potassium, which helps regulate fluid balance.",
      },
      {
        element: "Carbohydrates:",
        quantity: 11.8,
        measurementUnits: "g",
        description:
          "– Provides carbohydrates primarily from natural sugars and fiber.",
      },
      {
        element: "Fiber:",
        quantity: 2.4,
        measurementUnits: "g",
        description: "– Contains dietary fiber, supporting healthy digestion.",
      },
      {
        element: "Sugar:",
        quantity: 9.4,
        measurementUnits: "g",
        description:
          "– Contains natural sugars, giving it a sweet and refreshing taste.",
      },
      {
        element: "Proteins:",
        quantity: 0.9,
        measurementUnits: "g",
        description: "– Provides a small amount of protein.",
      },
      {
        element: "Vitamin C:",
        quantity: 53.2,
        measurementUnits: "mg",
        description:
          "– Excellent source of vitamin C, supporting the immune system and skin health.",
      },
      {
        element: "Calcium:",
        quantity: 40,
        measurementUnits: "mg",
        description:
          "– Contains a small amount of calcium, contributing to bone health.",
      },
      {
        element: "Iron:",
        quantity: 0.1,
        measurementUnits: "mg",
        description:
          "– Provides trace amounts of iron, important for blood health.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description:
          "– Does not contain vitamin D, typically obtained from sunlight.",
      },
      {
        element: "Vitamin B6:",
        quantity: 0.1,
        measurementUnits: "mg",
        description: "– Supports metabolism and brain health.",
      },
      {
        element: "Vitamin B12:",
        quantity: 0,
        measurementUnits: "µg",
        description: "– Lacks vitamin B12, primarily found in animal products.",
      },
      {
        element: "Magnesium:",
        quantity: 10,
        measurementUnits: "mg",
        description:
          "– Contains magnesium, important for various bodily functions.",
      },
      {
        element: "Zinc:",
        quantity: 0.1,
        measurementUnits: "mg",
        description:
          "– Provides a small amount of zinc, supporting immune function.",
      },
      {
        element: "Vitamin E:",
        quantity: 0.2,
        measurementUnits: "mg",
        description: "– Contains small amounts of vitamin E, an antioxidant.",
      },
    ],
    cultivationHeading: `Oranges are one of the most popular and widely consumed fruits globally, known for their sweet, tangy flavor and high vitamin C content. They are primarily grown in warm, subtropical, and tropical climates. Here’s an overview of orange cultivation`,
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Oranges thrive in warm, subtropical to tropical climates. The ideal temperature range for optimal growth is between 20°C and 30°C (68°F to 86°F).",
          },
          {
            id: 212,
            topic: "Frost Sensitivity",
            text: "Oranges are sensitive to frost, especially during flowering and fruit development. Protecting trees from late spring frosts is essential to prevent damage to blooms and fruit.",
          },
        ],
      },
      {
        id: 22,
        topic: "Soil",
        children: [
          {
            id: 221,
            topic: "pH",
            text: "Oranges prefer well-drained soils with a pH level between 5.5 and 6.5, which supports healthy root development.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "Sandy loam or loamy soils are ideal for orange trees, as they provide good drainage and aeration. Heavy clay soils should be avoided due to poor drainage.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Before planting, incorporate organic matter such as compost to enhance soil fertility and structure.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: `Popular orange varieties include:
                            - Valencia (known for its juiciness and sweetness, ideal for juicing).
                            - Navel (seedless and sweet, great for eating fresh).
                            - Blood orange (distinctive color and flavor, often used in salads and desserts).`,
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "The best time to plant orange trees is in the spring, after the danger of frost has passed.",
          },
          {
            id: 242,
            topic: "Spacing",
            text: "Oranges should be planted about 5 to 7 meters (16 to 23 feet) apart to allow for sufficient growth and air circulation.",
          },
          {
            id: 243,
            topic: "Pollination",
            text: "Most orange varieties are self-pollinating, but planting multiple trees can enhance fruit yield and quality.",
          },
        ],
      },
      {
        id: 25,
        topic: "Watering",
        children: [
          {
            id: 251,
            topic: "Establishment Phase",
            text: "Orange trees require regular watering during the first few years after planting to establish strong roots.",
          },
          {
            id: 252,
            topic: "Mature Trees",
            text: "Once established, they should be watered deeply but infrequently, requiring about 25 to 50 mm (1 to 2 inches) of water per week during the growing season.",
          },
          {
            id: 253,
            topic: "Avoid Overwatering",
            text: "Waterlogging can lead to root rot. Mulching helps retain soil moisture while preventing weed growth.",
          },
        ],
      },
      {
        id: 26,
        topic: "Pruning",
        children: [
          {
            id: 261,
            topic: "Shape",
            text: "Orange trees are typically pruned to maintain an open canopy, which allows light to penetrate and improves air circulation.",
          },
          {
            id: 262,
            topic: "Timing",
            text: "Pruning should be done during the dormant season (late winter) to remove dead or diseased wood and to shape the tree for optimal growth.",
          },
        ],
      },
      {
        id: 27,
        topic: "Fertilization",
        children: [
          {
            id: 271,
            topic: "Nutrients",
            text: "Oranges benefit from balanced fertilizers high in nitrogen, phosphorus, and potassium to support healthy growth and fruit production.",
          },
          {
            id: 272,
            topic: "Timing",
            text: "Fertilization should occur in early spring before new growth begins, with additional feedings during the growing season as necessary.",
          },
        ],
      },
      {
        id: 28,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 281,
            topic: "Pests",
            text: "Common pests affecting orange trees include aphids, citrus leaf miners, and scale insects. Integrated pest management (IPM) practices can help control these pests.",
          },
          {
            id: 282,
            topic: "Diseases",
            text: "Oranges are susceptible to diseases such as citrus greening, powdery mildew, and root rot. Good cultural practices and timely fungicide applications help manage these issues.",
          },
        ],
      },
      {
        id: 29,
        topic: "Harvesting",
        children: [
          {
            id: 291,
            topic: "Time",
            text: "Oranges are typically ready for harvest in winter to early spring, depending on the variety and climate.",
          },
          {
            id: 292,
            topic: "Signs of Ripeness",
            text: "Ripe oranges should be bright in color, feel heavy for their size, and have a slightly soft texture when gently squeezed.",
          },
          {
            id: 293,
            topic: "Handling",
            text: "Handle oranges carefully to avoid bruising, and store them in a cool, dry place after harvest.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Oranges can be stored at room temperature for a short period. For longer storage, refrigerate them to maintain freshness for up to two weeks.",
        children: [
          {
            id: 30.21,
            topic: `Preservation`,
            text: "Oranges can also be juiced or used in various dishes, jams, and preserves to enjoy their flavor beyond the fresh season.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Thinning excess fruit in early spring can improve fruit size and quality by reducing competition for nutrients among developing fruits.",
      },
    ],
  },
  {
    id: 18,
    name: "Peach",
    img: fruitsImages.peach,
    inGeneralHeading: `The Juicy Stone Fruit`,
    inGeneral: `Peaches, scientifically known as Prunus persica, are beloved summer fruits known for their sweet, juicy flesh and fragrant aroma. With their soft, fuzzy skin and vibrant colors ranging from yellow to red, peaches are not only visually appealing but also packed with essential nutrients and health benefits.
                  One of the key nutritional highlights of peaches is their high vitamin C content, which supports the immune system, promotes healthy skin, and aids in collagen production. A medium peach provides about 10% of the daily recommended intake of vitamin C, making it a delicious way to boost your nutrient intake.
                  Peaches are also a good source of dietary fiber, which aids digestion, helps regulate blood sugar levels, and promotes a feeling of fullness. This makes peaches a satisfying snack for those looking to manage their weight. Additionally, they contain potassium, which is essential for heart health and helps regulate blood pressure.
                  The antioxidants found in peaches, including beta-carotene and phenolic compounds, help protect the body from oxidative stress and inflammation. These antioxidants may also contribute to a reduced risk of chronic diseases, such as heart disease and certain cancers.
                  Culinary-wise, peaches are incredibly versatile. They can be enjoyed fresh, grilled, baked into desserts, or added to salads and smoothies. Their natural sweetness pairs well with both savory and sweet dishes.
                  In summary, peaches are a delicious and nutritious fruit that offers a variety of health benefits. Their juicy flavor and versatility make them a favorite choice for summer enjoyment and healthy snacking.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 39,
        measurementUnits: "kcal",
        description: "– Low in calories, making it a refreshing fruit choice.",
      },
      {
        element: "Fats:",
        quantity: 0.3,
        measurementUnits: "g",
        description: "– Very low in fat, contributing to its health benefits.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 0.1,
        measurementUnits: "g",
        description: "– Contains minimal saturated fats.",
      },
      {
        element: "Cholesterol:",
        quantity: 0,
        measurementUnits: "mg",
        description: "– Cholesterol-free, promoting heart health.",
      },
      {
        element: "Sodium:",
        quantity: 0,
        measurementUnits: "mg",
        description:
          "– Extremely low in sodium, beneficial for blood pressure management.",
      },
      {
        element: "Potassium:",
        quantity: 190,
        measurementUnits: "mg",
        description:
          "– A good source of potassium, essential for heart and muscle function.",
      },
      {
        element: "Carbohydrates:",
        quantity: 9.5,
        measurementUnits: "g",
        description: "– Rich in carbohydrates, primarily from natural sugars.",
      },
      {
        element: "Fiber:",
        quantity: 1.5,
        measurementUnits: "g",
        description: "– Contains dietary fiber, which aids in digestion.",
      },
      {
        element: "Sugar:",
        quantity: 8.4,
        measurementUnits: "g",
        description:
          "– Contains natural sugars that contribute to its sweetness.",
      },
      {
        element: "Proteins:",
        quantity: 0.9,
        measurementUnits: "g",
        description: "– Provides a small amount of protein.",
      },
      {
        element: "Vitamin C:",
        quantity: 6.6,
        measurementUnits: "mg",
        description:
          "– A source of vitamin C, supporting immune function and skin health.",
      },
      {
        element: "Calcium:",
        quantity: 4,
        measurementUnits: "mg",
        description:
          "– Contains trace amounts of calcium, contributing to bone health.",
      },
      {
        element: "Iron:",
        quantity: 0.3,
        measurementUnits: "mg",
        description:
          "– Provides trace amounts of iron, essential for blood health.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description:
          "– No vitamin D present, typically obtained from sunlight.",
      },
      {
        element: "Vitamin B6:",
        quantity: 0.1,
        measurementUnits: "mg",
        description: "– Supports metabolism and brain health.",
      },
      {
        element: "Vitamin B12:",
        quantity: 0,
        measurementUnits: "µg",
        description:
          "– Lacks vitamin B12, which is primarily found in animal products.",
      },
      {
        element: "Magnesium:",
        quantity: 10,
        measurementUnits: "mg",
        description:
          "– Contains small amounts of magnesium, essential for various bodily functions.",
      },
      {
        element: "Zinc:",
        quantity: 0.2,
        measurementUnits: "mg",
        description:
          "– Provides trace amounts of zinc, supporting immune function.",
      },
      {
        element: "Vitamin E:",
        quantity: 0.8,
        measurementUnits: "mg",
        description: "– Contains small amounts of vitamin E, an antioxidant.",
      },
    ],
    cultivationHeading: `Peaches are a beloved stone fruit known for their sweet flavor and juicy texture. They are grown in many temperate regions worldwide and can be cultivated in both commercial orchards and home gardens. Here’s an overview of peach cultivation`,
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Peaches thrive in warm, temperate climates. They require a cold winter for dormancy, with the ideal temperature range during the growing season being between 20°C and 30°C (68°F to 86°F).",
          },
          {
            id: 212,
            topic: "Frost Sensitivity",
            text: "Peach trees are susceptible to late spring frosts, especially during flowering and fruit set, which can damage blossoms and reduce fruit yield.",
          },
        ],
      },
      {
        id: 22,
        topic: "Soil",
        children: [
          {
            id: 221,
            topic: "pH",
            text: "Peaches prefer well-drained, sandy loam or loamy soils with a pH level between 6.0 and 7.0.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "Well-drained soils are essential, as peach trees do not tolerate waterlogged conditions. Heavy clay soils should be avoided.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Incorporating organic matter, such as compost or well-rotted manure, into the soil before planting can improve fertility and soil structure.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: `Popular peach varieties include:
                            - Clingstone (ideal for canning and cooking).
                            - Freestone (great for fresh eating).
                            - Donut peaches (flat-shaped and sweet, often enjoyed fresh).`,
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "The best time to plant peach trees is during the dormant season, typically in late winter to early spring, before new growth begins.",
          },
          {
            id: 242,
            topic: "Spacing",
            text: "Peach trees should be spaced about 4.5 to 5.5 meters (15 to 18 feet) apart to allow for adequate growth and airflow.",
          },
          {
            id: 243,
            topic: "Pollination",
            text: "Most peach varieties are self-pollinating, but planting multiple varieties can enhance fruit yield and quality.",
          },
        ],
      },
      {
        id: 25,
        topic: "Watering",
        children: [
          {
            id: 251,
            topic: "Establishment Phase",
            text: "Regular watering is crucial during the first few years after planting to establish strong roots.",
          },
          {
            id: 252,
            topic: "Mature Trees",
            text: "Once established, peach trees should be watered deeply but infrequently, requiring around 25 to 50 mm (1 to 2 inches) of water per week during the growing season.",
          },
          {
            id: 253,
            topic: "Avoid Overwatering",
            text: "Overwatering can lead to root rot and other diseases, so proper drainage is essential.",
          },
        ],
      },
      {
        id: 26,
        topic: "Pruning",
        children: [
          {
            id: 261,
            topic: "Shape",
            text: "Peach trees are usually pruned to maintain an open center shape, allowing sunlight to penetrate and improve air circulation.",
          },
          {
            id: 262,
            topic: "Timing",
            text: "Pruning should be done during the dormant season (late winter) to remove dead or diseased wood and to shape the tree.",
          },
        ],
      },
      {
        id: 27,
        topic: "Fertilization",
        children: [
          {
            id: 271,
            topic: "Nutrients",
            text: "Peaches benefit from balanced fertilizers high in nitrogen, phosphorus, and potassium to support healthy growth and fruit production.",
          },
          {
            id: 272,
            topic: "Timing",
            text: "Fertilization should occur in early spring, just before new growth begins, and can be supplemented throughout the growing season as needed.",
          },
        ],
      },
      {
        id: 28,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 281,
            topic: "Pests",
            text: "Common pests affecting peach trees include aphids, spider mites, and peach twig borers. Integrated pest management (IPM) strategies can help control these pests.",
          },
          {
            id: 282,
            topic: "Diseases",
            text: "Peaches are susceptible to diseases such as brown rot, peach leaf curl, and bacterial spot. Good cultural practices, such as pruning and fungicide applications, can help manage these issues.",
          },
        ],
      },
      {
        id: 29,
        topic: "Harvesting",
        children: [
          {
            id: 291,
            topic: "Time",
            text: "Peaches are typically ready for harvest in mid to late summer, depending on the variety and climate.",
          },
          {
            id: 292,
            topic: "Signs of Ripeness",
            text: "Ripe peaches should have a vibrant color, a slightly soft texture when gently squeezed, and a fragrant aroma.",
          },
          {
            id: 293,
            topic: "Handling",
            text: "Handle peaches with care to avoid bruising, as they are delicate fruits. Store them in a cool place after harvest.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Peaches can be stored at room temperature for a few days to allow them to ripen. For longer storage, refrigerate them to maintain freshness for up to a week.",
        children: [
          {
            id: 30.21,
            topic: `Preservation`,
            text: "Peaches can also be canned, frozen, or made into jams and preserves to extend their use beyond the fresh season.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Thinning excess fruit in early spring can improve fruit size and quality by reducing competition for nutrients among developing fruits.",
      },
    ],
  },
  {
    id: 19,
    name: "Plum",
    img: fruitsImages.plum,
    inGeneralHeading: `The Sweet and Juicy Delight`,
    inGeneral: `Plums, belonging to the Prunus domestica species, are small, round fruits that come in various colors, including purple, red, yellow, and green. Known for their sweet and slightly tart flavor, plums are not only delicious but also packed with essential nutrients and health benefits.
                  One of the standout features of plums is their high vitamin C content, which supports the immune system, promotes healthy skin, and aids in collagen production. A medium plum provides about 10% of the daily recommended intake of vitamin C, making it a refreshing choice for boosting your nutrient intake.
                  Plums are also an excellent source of dietary fiber, which aids digestion and helps regulate blood sugar levels. This fiber content contributes to a feeling of fullness, making plums a satisfying snack for those looking to maintain a healthy weight. Additionally, plums contain potassium, which is vital for heart health and helps regulate blood pressure.
                  The antioxidants found in plums, such as phenolic compounds and carotenoids, help combat oxidative stress and inflammation in the body. These antioxidants may contribute to a reduced risk of chronic diseases, including heart disease and certain types of cancer.
                  Culinary-wise, plums are incredibly versatile. They can be enjoyed fresh, dried (as prunes), or used in jams, jellies, and desserts. Their sweet-tart flavor pairs well with savory dishes as well.
                  In summary, plums are a tasty and nutritious fruit that offers numerous health benefits. Their delightful flavor and versatility make them a popular choice for snacking and cooking, providing both enjoyment and nourishment.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 46,
        measurementUnits: "kcal",
        description:
          "– Low in calories, making it a healthy and delicious snack.",
      },
      {
        element: "Fats:",
        quantity: 0.3,
        measurementUnits: "g",
        description: "– Very low in fat, contributing to a healthy diet.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 0.0,
        measurementUnits: "g",
        description: "– Contains negligible amounts of saturated fats.",
      },
      {
        element: "Cholesterol:",
        quantity: 0,
        measurementUnits: "mg",
        description: "– Cholesterol-free, supporting cardiovascular health.",
      },
      {
        element: "Sodium:",
        quantity: 0,
        measurementUnits: "mg",
        description:
          "– Very low in sodium, beneficial for blood pressure management.",
      },
      {
        element: "Potassium:",
        quantity: 157,
        measurementUnits: "mg",
        description:
          "– Good source of potassium, which helps maintain proper fluid balance.",
      },
      {
        element: "Carbohydrates:",
        quantity: 11.4,
        measurementUnits: "g",
        description:
          "– Provides carbohydrates, mainly from natural sugars and fiber.",
      },
      {
        element: "Fiber:",
        quantity: 1.4,
        measurementUnits: "g",
        description: "– Contains dietary fiber, promoting digestive health.",
      },
      {
        element: "Sugar:",
        quantity: 9.9,
        measurementUnits: "g",
        description:
          "– Contains natural sugars, contributing to its sweet taste.",
      },
      {
        element: "Proteins:",
        quantity: 0.7,
        measurementUnits: "g",
        description: "– Provides a small amount of protein.",
      },
      {
        element: "Vitamin C:",
        quantity: 9.5,
        measurementUnits: "mg",
        description:
          "– Contains vitamin C, supporting the immune system and skin health.",
      },
      {
        element: "Calcium:",
        quantity: 18,
        measurementUnits: "mg",
        description:
          "– Provides trace amounts of calcium, contributing to bone health.",
      },
      {
        element: "Iron:",
        quantity: 0.2,
        measurementUnits: "mg",
        description:
          "– Contains small amounts of iron, important for blood health.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description:
          "– Does not contain vitamin D, typically obtained from sunlight.",
      },
      {
        element: "Vitamin B6:",
        quantity: 0.1,
        measurementUnits: "mg",
        description: "– Supports metabolism and brain function.",
      },
      {
        element: "Vitamin B12:",
        quantity: 0,
        measurementUnits: "µg",
        description: "– Lacks vitamin B12, primarily found in animal products.",
      },
      {
        element: "Magnesium:",
        quantity: 10,
        measurementUnits: "mg",
        description:
          "– Contains magnesium, essential for muscle and nerve function.",
      },
      {
        element: "Zinc:",
        quantity: 0.1,
        measurementUnits: "mg",
        description:
          "– Provides a small amount of zinc, supporting immune health.",
      },
      {
        element: "Vitamin E:",
        quantity: 0.2,
        measurementUnits: "mg",
        description: "– Contains small amounts of vitamin E, an antioxidant.",
      },
    ],
    cultivationHeading: `Plums are juicy, sweet fruits that belong to the Prunus genus, which also includes cherries and peaches. They are popular for their versatility in fresh consumption, cooking, and preserving. Plums are grown in various climates around the world. Here’s an overview of plum cultivation`,
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Plums thrive in temperate climates with distinct seasons. They require a cold winter for dormancy, and the ideal temperature during the growing season is between 20°C and 25°C (68°F to 77°F).",
          },
          {
            id: 212,
            topic: "Frost Sensitivity",
            text: "Plum trees are sensitive to late spring frosts, particularly during flowering and fruit set, which can harm blossoms and reduce fruit yield.",
          },
        ],
      },
      {
        id: 22,
        topic: "Soil",
        children: [
          {
            id: 221,
            topic: "pH",
            text: "Plums prefer well-drained, fertile soils with a pH level between 6.0 and 7.0.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "Sandy loam or loamy soils are ideal, as they provide good drainage. Avoid heavy clay soils that can retain too much moisture.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Incorporating organic matter, such as compost or well-rotted manure, into the soil before planting helps improve fertility and soil structure.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: `Popular plum varieties include:
                            - European plums (such as Stanley and Damson) known for their sweetness and good for fresh eating.
                            - Japanese plums (such as Santa Rosa and Shiro) which are juicy and excellent for fresh consumption.`,
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "The best time to plant plum trees is during the dormant season (late winter to early spring) before new growth begins.",
          },
          {
            id: 242,
            topic: "Spacing",
            text: "Plum trees should be spaced about 4 to 5 meters (13 to 16 feet) apart to allow adequate room for growth and air circulation.",
          },
          {
            id: 243,
            topic: "Pollination",
            text: "While some plum varieties are self-pollinating, planting multiple varieties can improve fruit set and yield.",
          },
        ],
      },
      {
        id: 25,
        topic: "Watering",
        children: [
          {
            id: 251,
            topic: "Establishment Phase",
            text: "Regular watering is crucial during the first few years after planting to establish a strong root system.",
          },
          {
            id: 252,
            topic: "Mature Trees",
            text: "Once established, plum trees should be watered deeply but infrequently, requiring approximately 25 to 50 mm (1 to 2 inches) of water per week during the growing season.",
          },
          {
            id: 253,
            topic: "Avoid Overwatering",
            text: "Overwatering can lead to root rot and other diseases, so ensure proper drainage.",
          },
        ],
      },
      {
        id: 26,
        topic: "Pruning",
        children: [
          {
            id: 261,
            topic: "Shape",
            text: "Plum trees are often pruned to maintain an open center shape, which allows sunlight to penetrate and improves air circulation.",
          },
          {
            id: 262,
            topic: "Timing",
            text: "Pruning should be done during the dormant season (late winter) to remove dead or diseased wood and to shape the tree.",
          },
        ],
      },
      {
        id: 27,
        topic: "Fertilization",
        children: [
          {
            id: 271,
            topic: "Nutrients",
            text: "Plum trees benefit from balanced fertilizers high in nitrogen, phosphorus, and potassium to support healthy growth and fruit production.",
          },
          {
            id: 272,
            topic: "Timing",
            text: "Fertilization should occur in early spring, just before new growth begins, and can be supplemented throughout the growing season as needed.",
          },
        ],
      },
      {
        id: 28,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 281,
            topic: "Pests",
            text: "Common pests affecting plum trees include aphids, spider mites, and plum curculio. Integrated pest management (IPM) strategies can help control these pests.",
          },
          {
            id: 282,
            topic: "Diseases",
            text: "Plum trees are susceptible to diseases such as black knot, brown rot, and bacterial canker. Good cultural practices, such as proper spacing and pruning, along with fungicide applications, can help manage these issues.",
          },
        ],
      },
      {
        id: 29,
        topic: "Harvesting",
        children: [
          {
            id: 291,
            topic: "Time",
            text: "Plums are typically ready for harvest in mid to late summer, depending on the variety and climate.",
          },
          {
            id: 292,
            topic: "Signs of Ripeness",
            text: "Ripe plums should have vibrant color, a slight softness when gently squeezed, and a fragrant aroma.",
          },
          {
            id: 293,
            topic: "Handling",
            text: "Handle plums gently to avoid bruising, as they are delicate fruits. Store them in a cool place after harvest.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Plums can be stored at room temperature for a few days to allow them to ripen. For longer storage, refrigerate them to maintain freshness for up to a week.",
        children: [
          {
            id: 30.21,
            topic: `Preservation`,
            text: "Plums can also be canned, frozen, or made into jams and preserves to extend their use beyond the fresh season.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Thinning excess fruit in early spring can improve fruit size and quality by reducing competition for nutrients among developing fruits.",
      },
    ],
  },
  {
    id: 20,
    name: "Raspberries",
    img: fruitsImages.raspberries,
    inGeneralHeading: `The Tangy Superfruit`,
    inGeneral: `Raspberries, scientifically known as Rubus idaeus, are small, vibrant berries celebrated for their juicy, sweet-tart flavor and impressive nutritional profile. These delicate fruits come in various colors, with red being the most common, and are popular worldwide for their versatility in both sweet and savory dishes.
                  One of the most significant health benefits of raspberries is their high antioxidant content. They are rich in vitamins C and E, which help combat oxidative stress and support a healthy immune system. A single cup of raspberries provides a substantial amount of vitamin C, promoting skin health and aiding in collagen production.
                  Raspberries are also an excellent source of dietary fiber. With around 8 grams of fiber per cup, they aid digestion, help regulate blood sugar levels, and promote a feeling of fullness, making them an ideal choice for weight management. Their low calorie count further enhances their appeal as a healthy snack option.
                  In addition to vitamins and fiber, raspberries contain phytonutrients and flavonoids, such as quercetin and ellagic acid, which have anti-inflammatory properties and may help reduce the risk of chronic diseases like heart disease and certain cancers.
                  Culinary-wise, raspberries are incredibly versatile. They can be enjoyed fresh, blended into smoothies, used in desserts, or incorporated into salads and sauces, adding a delightful burst of flavor.
                  In summary, raspberries are a nutritious superfruit that offers a multitude of health benefits. Their delicious taste and culinary flexibility make them a favorite choice among health-conscious eaters.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 52,
        measurementUnits: "kcal",
        description: "– Low in calories, making them a healthy snack option.",
      },
      {
        element: "Fats:",
        quantity: 0.7,
        measurementUnits: "g",
        description:
          "– Very low in fat, contributing to their health benefits.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 0.0,
        measurementUnits: "g",
        description: "– Contains negligible amounts of saturated fats.",
      },
      {
        element: "Cholesterol:",
        quantity: 0,
        measurementUnits: "mg",
        description: "– Cholesterol-free, promoting heart health.",
      },
      {
        element: "Sodium:",
        quantity: 1,
        measurementUnits: "mg",
        description:
          "– Very low in sodium, beneficial for blood pressure management.",
      },
      {
        element: "Potassium:",
        quantity: 151,
        measurementUnits: "mg",
        description:
          "– A good source of potassium, essential for heart and muscle function.",
      },
      {
        element: "Carbohydrates:",
        quantity: 11.9,
        measurementUnits: "g",
        description:
          "– Rich in carbohydrates, primarily from natural sugars and fiber.",
      },
      {
        element: "Fiber:",
        quantity: 6.5,
        measurementUnits: "g",
        description: "– High in dietary fiber, promoting healthy digestion.",
      },
      {
        element: "Sugar:",
        quantity: 4.4,
        measurementUnits: "g",
        description:
          "– Contains natural sugars, contributing to their sweetness.",
      },
      {
        element: "Proteins:",
        quantity: 1.2,
        measurementUnits: "g",
        description: "– Provides a small amount of protein.",
      },
      {
        element: "Vitamin C:",
        quantity: 26.2,
        measurementUnits: "mg",
        description:
          "– A good source of vitamin C, supporting immune function and skin health.",
      },
      {
        element: "Calcium:",
        quantity: 33,
        measurementUnits: "mg",
        description:
          "– Contains trace amounts of calcium, contributing to bone health.",
      },
      {
        element: "Iron:",
        quantity: 0.7,
        measurementUnits: "mg",
        description:
          "– Provides small amounts of iron, essential for blood health.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description:
          "– No vitamin D present, typically obtained from sunlight.",
      },
      {
        element: "Vitamin B6:",
        quantity: 0.1,
        measurementUnits: "mg",
        description: "– Supports metabolism and brain health.",
      },
      {
        element: "Vitamin B12:",
        quantity: 0,
        measurementUnits: "µg",
        description:
          "– Lacks vitamin B12, which is primarily found in animal products.",
      },
      {
        element: "Magnesium:",
        quantity: 22,
        measurementUnits: "mg",
        description:
          "– Contains small amounts of magnesium, essential for various bodily functions.",
      },
      {
        element: "Zinc:",
        quantity: 0.4,
        measurementUnits: "mg",
        description:
          "– Provides trace amounts of zinc, supporting immune function.",
      },
      {
        element: "Vitamin E:",
        quantity: 0.87,
        measurementUnits: "mg",
        description: "– Contains small amounts of vitamin E, an antioxidant.",
      },
    ],
    cultivationHeading: `Raspberries are delicious, juicy berries that are popular for their sweet-tart flavor and versatility in culinary applications. They can be cultivated in a variety of climates and are commonly grown in both commercial farms and home gardens. Here’s an overview of raspberry cultivation`,
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Raspberries thrive in temperate climates with well-defined seasons. The ideal temperature range for raspberry growth is between 15°C and 25°C (59°F to 77°F).",
          },
          {
            id: 212,
            topic: "Frost Sensitivity",
            text: "Raspberries are sensitive to frost, especially during flowering and fruit development. Protecting plants from late spring frosts is crucial for a successful harvest.",
          },
        ],
      },
      {
        id: 22,
        topic: "Soil",
        children: [
          {
            id: 221,
            topic: "pH",
            text: "Raspberries prefer well-drained, fertile soils with a pH level between 5.5 and 6.5.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "Sandy loam or loamy soils are ideal as they provide good drainage and aeration. Heavy clay soils should be avoided.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Before planting, incorporate organic matter like compost or well-rotted manure into the soil to enhance fertility and structure.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: `Popular raspberry varieties include:
                            - Red raspberries (such as Heritage and Willamette) known for their sweet flavor.
                            - Black raspberries (like Black Hawk and Jewel) which have a unique taste and are great for preserves.`,
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "The best time to plant raspberries is in early spring or late fall when the plants are dormant.",
          },
          {
            id: 242,
            topic: "Spacing",
            text: "Raspberry plants should be spaced about 0.6 to 1 meter (2 to 3 feet) apart within rows, and rows should be 1.5 to 2 meters (5 to 6 feet) apart.",
          },
          {
            id: 243,
            topic: "Pollination",
            text: "Most raspberry varieties are self-pollinating, but planting multiple varieties can improve yields.",
          },
        ],
      },
      {
        id: 25,
        topic: "Watering",
        children: [
          {
            id: 251,
            topic: "Establishment Phase",
            text: "Raspberry plants require regular watering during their first growing season to establish strong roots.",
          },
          {
            id: 252,
            topic: "Mature Plants",
            text: "Once established, raspberries need about 25 to 50 mm (1 to 2 inches) of water per week, especially during fruiting. Deep watering is preferred.",
          },
          {
            id: 253,
            topic: "Avoid Overwatering",
            text: "Overwatering can lead to root rot, so ensure the soil drains well and avoids waterlogging.",
          },
        ],
      },
      {
        id: 26,
        topic: "Pruning",
        children: [
          {
            id: 261,
            topic: "Type of Pruning",
            text: "Raspberries benefit from summer and winter pruning. Summer pruning involves removing spent floricanes (two-year-old canes) after harvest, while winter pruning includes thinning out new primocanes (one-year-old canes) to encourage airflow and fruit production.",
          },
          {
            id: 262,
            topic: "Timing",
            text: "Pruning should be done in late winter or early spring before new growth starts to ensure healthy and productive canes.",
          },
        ],
      },
      {
        id: 27,
        topic: "Fertilization",
        children: [
          {
            id: 271,
            topic: "Nutrients",
            text: "Raspberries require balanced fertilizers that are high in potassium and phosphorus to promote fruiting and overall plant health.",
          },
          {
            id: 272,
            topic: "Timing",
            text: "Fertilization should occur in early spring, just before new growth begins, and again after harvest for optimal results.",
          },
        ],
      },
      {
        id: 28,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 281,
            topic: "Pests",
            text: "Common raspberry pests include aphids, spider mites, and raspberry cane borers. Implementing integrated pest management (IPM) practices, such as beneficial insects and insecticidal soaps, can help control these pests.",
          },
          {
            id: 282,
            topic: "Diseases",
            text: "Raspberries are susceptible to diseases like anthracnose, powdery mildew, and root rot. Good cultural practices, including proper pruning and spacing, along with fungicide applications when necessary, can help manage these diseases.",
          },
        ],
      },
      {
        id: 29,
        topic: "Harvesting",
        children: [
          {
            id: 291,
            topic: "Time",
            text: "Raspberries are usually ready for harvest from mid-summer to early fall, depending on the variety.",
          },
          {
            id: 292,
            topic: "Signs of Ripeness",
            text: "Ripe raspberries are bright in color, easily pull off the stem, and should be plump and fragrant.",
          },
          {
            id: 293,
            topic: "Handling",
            text: "Handle raspberries gently to avoid bruising, as they are delicate fruits. Store them in a cool place after harvest.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Raspberries have a short shelf life and are best consumed fresh. They can be stored in the refrigerator for up to two days.",
        children: [
          {
            id: 30.21,
            topic: `Preservation`,
            text: "Raspberries can also be frozen for long-term storage, canned, or made into jams and preserves.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Thinning can help maintain good air circulation and reduce competition among canes, improving fruit size and quality.",
      },
    ],
  },
  {
    id: 21,
    name: "Strawberry",
    img: fruitsImages.strawberry,
    inGeneralHeading: `The Sweet and Nutritious Delight`,
    inGeneral: `Strawberries, scientifically known as Fragaria × ananassa, are one of the most popular and beloved fruits worldwide, renowned for their vibrant red color, sweet flavor, and juicy texture. These delicious berries are not only a favorite for snacking but also offer numerous health benefits and culinary versatility.
                  One of the standout features of strawberries is their exceptionally high vitamin C content. A single serving of strawberries can provide over 100% of the daily recommended intake of vitamin C, which is essential for immune function, collagen production, and skin health. Additionally, strawberries contain antioxidants, such as anthocyanins, which give them their rich color and help protect the body from oxidative stress.
                  Strawberries are also a good source of dietary fiber, which aids in digestion and helps regulate blood sugar levels. Their high fiber content contributes to a feeling of fullness, making them a satisfying and healthy snack. Furthermore, strawberries are low in calories, making them a great choice for weight management.
                  In addition to vitamins and fiber, strawberries provide essential minerals like potassium and folate, which support heart health and overall wellness.
                  Culinary-wise, strawberries are incredibly versatile. They can be enjoyed fresh, added to smoothies, used in desserts, or incorporated into salads and salsas, enhancing both flavor and nutrition.
                  In summary, strawberries are a delicious and nutritious fruit that offers a wide range of health benefits. Their sweet flavor and versatility make them a favorite choice for both snacking and cooking, providing enjoyment and nourishment in every bite.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 32,
        measurementUnits: "kcal",
        description:
          "– Low in calories, making them a great choice for weight management.",
      },
      {
        element: "Fats:",
        quantity: 0.3,
        measurementUnits: "g",
        description: "– Very low in fat, promoting heart health.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 0.0,
        measurementUnits: "g",
        description: "– Contains negligible amounts of saturated fats.",
      },
      {
        element: "Cholesterol:",
        quantity: 0,
        measurementUnits: "mg",
        description:
          "– Cholesterol-free, contributing to cardiovascular health.",
      },
      {
        element: "Sodium:",
        quantity: 1,
        measurementUnits: "mg",
        description:
          "– Very low in sodium, beneficial for managing blood pressure.",
      },
      {
        element: "Potassium:",
        quantity: 153,
        measurementUnits: "mg",
        description:
          "– Good source of potassium, which helps regulate fluid balance and muscle contractions.",
      },
      {
        element: "Carbohydrates:",
        quantity: 7.7,
        measurementUnits: "g",
        description:
          "– Provides carbohydrates, mainly from natural sugars and dietary fiber.",
      },
      {
        element: "Fiber:",
        quantity: 2.0,
        measurementUnits: "g",
        description: "– High in dietary fiber, promoting healthy digestion.",
      },
      {
        element: "Sugar:",
        quantity: 4.9,
        measurementUnits: "g",
        description:
          "– Contains natural sugars, contributing to its sweet flavor.",
      },
      {
        element: "Proteins:",
        quantity: 0.7,
        measurementUnits: "g",
        description: "– Provides a small amount of protein.",
      },
      {
        element: "Vitamin C:",
        quantity: 58.8,
        measurementUnits: "mg",
        description:
          "– Excellent source of vitamin C, supporting the immune system and skin health.",
      },
      {
        element: "Calcium:",
        quantity: 18,
        measurementUnits: "mg",
        description:
          "– Provides trace amounts of calcium, contributing to bone health.",
      },
      {
        element: "Iron:",
        quantity: 0.4,
        measurementUnits: "mg",
        description:
          "– Contains small amounts of iron, essential for blood health.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description:
          "– Does not contain vitamin D, typically obtained from sunlight.",
      },
      {
        element: "Vitamin B6:",
        quantity: 0.1,
        measurementUnits: "mg",
        description: "– Supports metabolism and brain function.",
      },
      {
        element: "Vitamin B12:",
        quantity: 0,
        measurementUnits: "µg",
        description: "– Lacks vitamin B12, primarily found in animal products.",
      },
      {
        element: "Magnesium:",
        quantity: 12,
        measurementUnits: "mg",
        description:
          "– Contains magnesium, essential for muscle and nerve function.",
      },
      {
        element: "Zinc:",
        quantity: 0.1,
        measurementUnits: "mg",
        description:
          "– Provides a small amount of zinc, supporting immune health.",
      },
      {
        element: "Vitamin E:",
        quantity: 0.3,
        measurementUnits: "mg",
        description: "– Contains small amounts of vitamin E, an antioxidant.",
      },
    ],
    cultivationHeading: `Strawberries are one of the most popular and widely consumed berries globally, known for their sweet flavor and vibrant red color. They can be grown in various climates and are cultivated both commercially and in home gardens. Here’s an overview of strawberry cultivation`,
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Strawberries thrive in temperate climates with well-defined seasons. The ideal temperature for strawberry growth is between 15°C and 25°C (59°F to 77°F).",
          },
          {
            id: 212,
            topic: "Frost Sensitivity",
            text: "Strawberries are sensitive to frost, especially during flowering and fruit development. Protecting plants from late spring frosts is crucial for a successful harvest.",
          },
        ],
      },
      {
        id: 22,
        topic: "Soil",
        children: [
          {
            id: 221,
            topic: "pH",
            text: "Strawberries prefer well-drained, sandy loam soils with a pH level between 5.5 and 6.8.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "Well-drained soils are essential as strawberries do not tolerate waterlogged conditions. Raised beds can enhance drainage.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Before planting, incorporate organic matter like compost or well-rotted manure to improve soil fertility and structure.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: `Popular strawberry varieties include:
                            - June-bearing varieties (such as Earliglow and Jewel) that produce fruit in early summer.
                            - Ever-bearing varieties (like Quinault and Seascape) that provide multiple harvests throughout the growing season.`,
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "The best time to plant strawberries is in early spring or late fall when the plants are dormant.",
          },
          {
            id: 242,
            topic: "Spacing",
            text: "Strawberries should be planted about 30 to 45 cm (12 to 18 inches) apart, with rows spaced 1 meter (3 feet) apart to allow for growth and air circulation.",
          },
          {
            id: 243,
            topic: "Pollination",
            text: "Most strawberry varieties are self-pollinating, but planting multiple varieties can increase yields and improve fruit quality.",
          },
        ],
      },
      {
        id: 25,
        topic: "Watering",
        children: [
          {
            id: 251,
            topic: "Establishment Phase",
            text: "Strawberries require consistent moisture during the first growing season to establish a healthy root system.",
          },
          {
            id: 252,
            topic: "Mature Plants",
            text: "Once established, strawberries need about 25 to 50 mm (1 to 2 inches) of water per week, especially during fruiting. Deep watering is recommended.",
          },
          {
            id: 253,
            topic: "Avoid Overwatering",
            text: "Waterlogging can lead to root rot, so ensure good drainage and avoid overwatering.",
          },
        ],
      },
      {
        id: 26,
        topic: "Pruning",
        children: [
          {
            id: 261,
            topic: "Runner Management",
            text: "Strawberry plants produce runners (stolons) that can root and form new plants. Pruning excess runners can help the main plant focus energy on fruit production.",
          },
          {
            id: 262,
            topic: "Timing",
            text: "Prune any dead or diseased leaves in early spring before new growth begins to promote plant health.",
          },
        ],
      },
      {
        id: 27,
        topic: "Fertilization",
        children: [
          {
            id: 271,
            topic: "Nutrients",
            text: "Strawberries benefit from balanced fertilizers that are high in potassium and phosphorus to encourage flowering and fruiting.",
          },
          {
            id: 272,
            topic: "Timing",
            text: "Fertilization should occur in early spring, just before new growth starts, and again after the harvest to support ongoing plant health.",
          },
        ],
      },
      {
        id: 28,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 281,
            topic: "Pests",
            text: "Common pests affecting strawberries include aphids, spider mites, and slugs. Implementing integrated pest management (IPM) practices can help control these pests.",
          },
          {
            id: 282,
            topic: "Diseases",
            text: "Strawberries are susceptible to diseases like powdery mildew, gray mold, and root rot. Good cultural practices, including proper spacing and watering, can help manage these diseases.",
          },
        ],
      },
      {
        id: 29,
        topic: "Harvesting",
        children: [
          {
            id: 291,
            topic: "Time",
            text: "Strawberries are typically ready for harvest from late spring to early summer, depending on the variety.",
          },
          {
            id: 292,
            topic: "Signs of Ripeness",
            text: "Ripe strawberries are bright red, firm, and fragrant. They should be harvested when fully ripe for the best flavor.",
          },
          {
            id: 293,
            topic: "Handling",
            text: "Handle strawberries gently to avoid bruising. Store them in a cool place after harvest.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Strawberries have a short shelf life and are best consumed fresh. They can be stored in the refrigerator for up to three days.",
        children: [
          {
            id: 30.21,
            topic: `Preservation`,
            text: "Strawberries can also be frozen for long-term storage, canned, or made into jams and preserves.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Thinning can help improve air circulation and reduce competition among plants, resulting in better fruit quality and size.",
      },
    ],
  },
  {
    id: 22,
    name: "Watermelon",
    img: fruitsImages.watermelon,
    inGeneralHeading: `The Refreshing Summer Fruit`,
    inGeneral: `Watermelon, scientifically known as Citrullus lanatus, is a popular and refreshing fruit, especially during the hot summer months. Known for its juicy texture and sweet, crisp flavor, watermelon is not only a delightful treat but also packed with essential nutrients and health benefits.
                  One of the most notable features of watermelon is its high water content, comprising about 92%. This makes it an excellent choice for hydration, helping to keep you cool and refreshed in the heat. In addition to water, watermelon is low in calories, making it a guilt-free snack that can aid in weight management.
                  Watermelon is a good source of vitamins A and C. Vitamin A, derived from beta-carotene found in the fruit, supports eye health and immune function, while vitamin C is essential for skin health and boosts the immune system. Watermelon also contains antioxidants, including lycopene, which gives it its vibrant red color and has been linked to reduced risk of certain cancers and heart disease.
                  Another benefit of watermelon is its potassium content, which helps regulate blood pressure and supports heart health. The presence of citrulline, an amino acid in watermelon, may also help improve blood flow and reduce muscle soreness after exercise.
                  Culinary-wise, watermelon is incredibly versatile. It can be enjoyed fresh, blended into smoothies, added to fruit salads, or even grilled for a unique flavor.
                  In summary, watermelon is a hydrating, nutritious fruit that offers a variety of health benefits. Its delicious taste and versatility make it a favorite choice for summer enjoyment.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 30,
        measurementUnits: "kcal",
        description:
          "– Very low in calories, making it a refreshing and hydrating snack.",
      },
      {
        element: "Fats:",
        quantity: 0.2,
        measurementUnits: "g",
        description:
          "– Extremely low in fat, contributing to its health benefits.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 0.0,
        measurementUnits: "g",
        description: "– Contains negligible amounts of saturated fats.",
      },
      {
        element: "Cholesterol:",
        quantity: 0,
        measurementUnits: "mg",
        description: "– Cholesterol-free, promoting heart health.",
      },
      {
        element: "Sodium:",
        quantity: 1,
        measurementUnits: "mg",
        description:
          "– Very low in sodium, beneficial for blood pressure management.",
      },
      {
        element: "Potassium:",
        quantity: 112,
        measurementUnits: "mg",
        description:
          "– A good source of potassium, essential for heart and muscle function.",
      },
      {
        element: "Carbohydrates:",
        quantity: 7.6,
        measurementUnits: "g",
        description: "– Contains carbohydrates mainly from natural sugars.",
      },
      {
        element: "Fiber:",
        quantity: 0.4,
        measurementUnits: "g",
        description:
          "– Provides a small amount of dietary fiber, promoting digestion.",
      },
      {
        element: "Sugar:",
        quantity: 6.2,
        measurementUnits: "g",
        description:
          "– Contains natural sugars, contributing to its sweet flavor.",
      },
      {
        element: "Proteins:",
        quantity: 0.6,
        measurementUnits: "g",
        description: "– Provides minimal protein content.",
      },
      {
        element: "Vitamin C:",
        quantity: 8.1,
        measurementUnits: "mg",
        description:
          "– Contains vitamin C, supporting immune function and skin health.",
      },
      {
        element: "Calcium:",
        quantity: 18,
        measurementUnits: "mg",
        description:
          "– Contains trace amounts of calcium, contributing to bone health.",
      },
      {
        element: "Iron:",
        quantity: 0.2,
        measurementUnits: "mg",
        description:
          "– Provides small amounts of iron, essential for blood health.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description:
          "– No vitamin D present, typically obtained from sunlight.",
      },
      {
        element: "Vitamin B6:",
        quantity: 0.1,
        measurementUnits: "mg",
        description: "– Supports metabolism and brain health.",
      },
      {
        element: "Vitamin B12:",
        quantity: 0,
        measurementUnits: "µg",
        description:
          "– Lacks vitamin B12, which is primarily found in animal products.",
      },
      {
        element: "Magnesium:",
        quantity: 10,
        measurementUnits: "mg",
        description:
          "– Contains small amounts of magnesium, essential for various bodily functions.",
      },
      {
        element: "Zinc:",
        quantity: 0.1,
        measurementUnits: "mg",
        description:
          "– Provides trace amounts of zinc, supporting immune function.",
      },
      {
        element: "Vitamin E:",
        quantity: 0.1,
        measurementUnits: "mg",
        description: "– Contains minimal amounts of vitamin E, an antioxidant.",
      },
    ],
    cultivationHeading: `Watermelons are refreshing, sweet fruits that are a favorite during warm seasons. They are primarily grown in warm climates and are popular for their high water content and nutritional benefits. Here’s an overview of watermelon cultivation`,
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Watermelons thrive in warm climates with full sun exposure. The ideal temperature for growth is between 24°C and 30°C (75°F to 86°F).",
          },
          {
            id: 212,
            topic: "Frost Sensitivity",
            text: "Watermelons are sensitive to frost and should be planted only after the danger of frost has passed. Frost can damage young plants and reduce yield.",
          },
        ],
      },
      {
        id: 22,
        topic: "Soil",
        children: [
          {
            id: 221,
            topic: "pH",
            text: "Watermelons prefer well-drained, sandy loam soils with a pH level between 6.0 and 7.5.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "Loamy soils that retain some moisture while allowing good drainage are ideal for watermelon cultivation. Avoid heavy clay soils that can hold excess water.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Before planting, enrich the soil with organic matter like compost to improve fertility and drainage.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: `Popular watermelon varieties include:
                            - Seedless varieties (such as Crimson Sweet and Seedless Sugar Baby) for easy consumption.
                            - Picnic varieties (like Charleston Gray) that are larger and perfect for summer gatherings.`,
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "The best time to plant watermelon is in late spring, once the soil temperature reaches at least 18°C (65°F).",
          },
          {
            id: 242,
            topic: "Spacing",
            text: "Plant watermelon seeds or seedlings about 90 to 120 cm (3 to 4 feet) apart, with rows spaced at least 1.5 meters (5 feet) apart to allow for vine spread.",
          },
          {
            id: 243,
            topic: "Pollination",
            text: "Watermelons are typically pollinated by bees. Having a healthy pollinator population nearby can improve fruit set and quality.",
          },
        ],
      },
      {
        id: 25,
        topic: "Watering",
        children: [
          {
            id: 251,
            topic: "Establishment Phase",
            text: "Watermelons require consistent moisture during the germination and establishment phases. Keep the soil consistently moist but not waterlogged.",
          },
          {
            id: 252,
            topic: "Mature Plants",
            text: "Once established, watermelons need about 25 to 50 mm (1 to 2 inches) of water per week. Deep watering is essential during fruit development.",
          },
          {
            id: 253,
            topic: "Avoid Overwatering",
            text: "Overwatering can lead to root rot and other fungal diseases. Ensure good drainage to prevent standing water.",
          },
        ],
      },
      {
        id: 26,
        topic: "Pruning",
        children: [
          {
            id: 261,
            topic: "Vine Management",
            text: "Watermelon vines can be pruned to control growth and improve air circulation. Remove excess vines and leaves to direct energy towards fruit development.",
          },
          {
            id: 262,
            topic: "Timing",
            text: "Pruning should be done carefully during the growing season, taking care not to remove too many leaves that are essential for photosynthesis.",
          },
        ],
      },
      {
        id: 27,
        topic: "Fertilization",
        children: [
          {
            id: 271,
            topic: "Nutrients",
            text: "Watermelons benefit from a balanced fertilizer high in potassium and phosphorus to support flowering and fruit development.",
          },
          {
            id: 272,
            topic: "Timing",
            text: "Fertilize at planting time and again during the growing season as fruits begin to set, following package instructions for application rates.",
          },
        ],
      },
      {
        id: 28,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 281,
            topic: "Pests",
            text: "Common pests include aphids, cucumber beetles, and spider mites. Integrated pest management (IPM) techniques can help manage these pests effectively.",
          },
          {
            id: 282,
            topic: "Diseases",
            text: "Watermelons can be affected by diseases like powdery mildew, downy mildew, and fusarium wilt. Good cultural practices, such as crop rotation and proper spacing, can help prevent disease outbreaks.",
          },
        ],
      },
      {
        id: 29,
        topic: "Harvesting",
        children: [
          {
            id: 291,
            topic: "Time",
            text: "Watermelons are typically ready for harvest 70 to 90 days after planting, depending on the variety.",
          },
          {
            id: 292,
            topic: "Signs of Ripeness",
            text: "Signs that watermelons are ripe include a dull skin surface, a yellow spot on the bottom, and a hollow sound when tapped.",
          },
          {
            id: 293,
            topic: "Handling",
            text: "Handle watermelons carefully to avoid bruising. Use sharp tools to cut the fruit from the vine.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Watermelons can be stored at room temperature for a few days or in the refrigerator for up to two weeks. Cut watermelon should be wrapped and stored in the fridge to prevent spoilage.",
        children: [
          {
            id: 30.21,
            topic: "Preservation",
            text: "Watermelons can also be made into juice, pickled, or used in salads to extend their use beyond fresh consumption.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Thinning seedlings may be necessary to ensure proper spacing and airflow, promoting healthier plants and better fruit size.",
      },
    ],
  },
];

export default fruits;
