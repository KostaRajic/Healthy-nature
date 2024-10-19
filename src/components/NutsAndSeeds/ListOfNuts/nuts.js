import { nutsImages } from "./nutsImages";

const nuts = [
  {
    id: 1,
    name: "Almonds",
    img: nutsImages.almonds,
    inGeneralHeading: `The Quintessential Fruit`,
    inGeneral: `Almonds (Prunus dulcis) are a popular tree nut renowned for their rich flavor and impressive nutritional profile. Native to the Middle East and South Asia, almonds are now cultivated in various regions worldwide, with California being one of the largest producers. These nutrient-dense nuts can be enjoyed raw, roasted, or as almond butter and milk, making them a versatile addition to numerous dishes.
                    One of the standout features of almonds is their high content of healthy fats, primarily monounsaturated fat, which is beneficial for heart health. Regular consumption of almonds has been linked to lower cholesterol levels and a reduced risk of heart disease. Additionally, almonds are a great source of protein, making them an excellent snack for those looking to increase their protein intake.
                    Almonds are rich in essential vitamins and minerals, including vitamin E, magnesium, and calcium. Vitamin E acts as a powerful antioxidant, helping to protect cells from oxidative stress and inflammation. Magnesium plays a crucial role in numerous biochemical processes in the body, including muscle and nerve function, blood sugar control, and bone health.
                    The fiber content in almonds contributes to digestive health by promoting regular bowel movements and aiding in weight management. Eating almonds can help keep you feeling full, making them an ideal snack for those looking to control their appetite.
                    Culinary-wise, almonds are incredibly versatile. They can be used in a variety of dishes, from salads and stir-fries to desserts and baked goods. Almond milk, a popular dairy alternative, can also be used in smoothies, cereals, and coffee.
                    In summary, almonds are a nutrient-dense nut that offers numerous health benefits. Their healthy fats, protein, vitamins, and minerals make them a valuable addition to a balanced diet, while their versatility in the kitchen allows for endless culinary possibilities.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
          element: "Energy value:",
          quantity: 576,
          measurementUnits: "kcal",
          description: "– High in calories, providing substantial energy."
      },
      {
          element: "Fats:",
          quantity: 49.9,
          measurementUnits: "g",
          description: "– Rich in healthy fats, predominantly monounsaturated fats beneficial for heart health."
      },
      {
          element: "Saturated fatty acids:",
          quantity: 3.7,
          measurementUnits: "g",
          description: "– Contains a small amount of saturated fats."
      },
      {
          element: "Cholesterol:",
          quantity: 0,
          measurementUnits: "mg",
          description: "– Cholesterol-free, promoting cardiovascular health."
      },
      {
          element: "Sodium:",
          quantity: 1,
          measurementUnits: "mg",
          description: "– Very low in sodium, helpful for maintaining healthy blood pressure."
      },
      {
          element: "Potassium:",
          quantity: 705,
          measurementUnits: "g",
          description: "– A good source of potassium, vital for muscle and nerve function."
      },
      {
          element: "Carbohydrates:",
          quantity: 21.6,
          measurementUnits: "g",
          description: "– Provides carbohydrates, primarily from fiber and healthy sugars."
      },
      {
          element: "Fiber:",
          quantity: 12.5,
          measurementUnits: "g",
          description: "– High in dietary fiber, supporting digestion and gut health."
      },
      {
          element: "Sugar:",
          quantity: 4.4,
          measurementUnits: "g",
          description: "– Contains natural sugars in small amounts."
      },
      {
          element: "Proteins:",
          quantity: 21.2,
          measurementUnits: "g",
          description: "– A significant source of plant-based protein, aiding muscle growth and repair."
      },
      {
          element: "Vitamin C:",
          quantity: 0,
          measurementUnits: "mg",
          description: "– Does not contain vitamin C."
      },
      {
          element: "Calcium:",
          quantity: 264,
          measurementUnits: "mg",
          description: "– A rich source of calcium, contributing to bone health."
      },
      {
          element: "Iron:",
          quantity: 3.7,
          measurementUnits: "mg",
          description: "– Important for hemoglobin production and preventing anemia."
      },
      {
          element: "Vitamin D:",
          quantity: 0,
          measurementUnits: "IU",
          description: "– No vitamin D present, typically obtained from sunlight."
      },
      {
          element: "Vitamin B6:",
          quantity: 0.1,
          measurementUnits: "mg",
          description: "– Supports metabolism and brain function."
      },
      {
          element: "Vitamin B12:",
          quantity: 0,
          measurementUnits: "µg",
          description: "– Lacks vitamin B12, which is found in animal products."
      },
      {
          element: "Magnesium:",
          quantity: 268,
          measurementUnits: "mg",
          description: "– High in magnesium, essential for many bodily functions including energy production."
      },
      {
          element: "Zinc:",
          quantity: 3.1,
          measurementUnits: "mg",
          description: "– Contains zinc, which supports immune function and healing."
      },
      {
          element: "Vitamin E:",
          quantity: 25.6,
          measurementUnits: "mg",
          description: "– Excellent source of vitamin E, an antioxidant that protects cells from oxidative damage."
      },
  ],
    cultivationHeading:
      "Almond cultivation requires specific conditions for optimal growth and fruit production. Here is an overview of the key factors involved in growing almonds:",
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Almonds thrive in warm, temperate climates. They require a cold winter for dormancy but are sensitive to frost during flowering. The ideal temperature during the growing season is between 15°C and 30°C (59°F to 86°F).",
          },
          {
            id: 212,
            topic: "Chill Hours",
            text: "Most almond varieties need about 300 to 1,000 chill hours (hours below 7°C or 45°F) during winter to ensure proper bud break and fruit set.",
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
            text: "Almonds prefer well-drained, sandy loam to loamy soils with a pH level between 6.0 and 7.5.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "Well-drained soils are essential for almond trees, as they are sensitive to waterlogging. Avoid heavy clay soils that retain moisture.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Incorporating organic matter like compost or well-rotted manure can enhance soil fertility and drainage before planting.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: "Popular almond varieties include: -Nonpareil- (known for its high-quality nuts). -Carmel and Tuono- (great for commercial production). -Sonora and Butte- (noted for their flavor and yield).",
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "The best time to plant almonds is during the dormant season (late winter to early spring) before new growth begins.",
          },
          {
            id: 242,
            topic: "Spacing",
            text: "Almond trees should be spaced about 4 to 6 meters (13 to 20 feet) apart to allow for proper growth and air circulation.",
          },
          {
            id: 243,
            topic: "Pollination",
            text: "Most almond varieties are not self-pollinating, so planting at least two different varieties is essential for improved yield.",
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
            text: "Almond trees need regular watering during the first few years after planting to establish strong roots.",
          },
          {
            id: 252,
            topic: "Mature Trees",
            text: "Once established, almond trees should be watered deeply but infrequently to promote deep root growth. They require around 600 to 800 mm (24 to 31 inches) of water annually.",
          },
          {
            id: 253,
            topic: "Avoid Overwatering",
            text: "Waterlogging can lead to root rot and other diseases, so proper drainage is crucial.",
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
            text: "Almond trees are typically pruned into an open-center shape, which allows sunlight to penetrate the tree and promotes good air circulation.",
          },
          {
            id: 262,
            topic: "Timing",
            text: "Pruning should be done during the dormant season (late winter) to remove dead, diseased, or overcrowded branches.",
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
            text: "Almonds benefit from regular fertilization with a balanced fertilizer (e.g., 10-10-10 NPK) or organic compost.",
          },
          {
            id: 272,
            topic: "Timing",
            text: "Fertilizer should be applied in early spring before new growth begins. Avoid fertilizing late in the season to prevent excessive vegetative growth.",
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
            text: "Common pests affecting almonds include aphids, spider mites, and navel orangeworm. Integrated pest management (IPM) strategies can help manage these pests.",
          },
          {
            id: 282,
            topic: "Diseases",
            text: "Almonds are susceptible to diseases such as brown rot, bacterial blast, and powdery mildew. Preventive measures include proper pruning and using disease-resistant varieties.",
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
            text: "Almonds are typically ready for harvest in late summer to early fall, depending on the variety and climate.",
          },
          {
            id: 292,
            topic: "Signs of Ripeness",
            text: "Ripe almonds have hard shells that split open, exposing the nut. They should be harvested once the hulls begin to separate from the shell.",
          },
          {
            id: 293,
            topic: "Handling",
            text: "Almonds should be handled gently to avoid damaging the nuts, and they should be dried properly after harvest to prevent spoilage.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Almonds have a relatively long shelf life if stored properly. They should be kept in a cool, dry place, preferably in an airtight container to maintain freshness.",
        children: [
          {
            id: 30.21,
            topic: "Preservation",
            text: "Almonds can be blanched, roasted, or ground into almond flour for preservation and culinary uses.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Thinning almond fruit in early spring can help improve the size and quality of the nuts by reducing competition for nutrients.",
      },
    ],
  },
  {
    id: 2,
    name: "Brazil Nuts",
    img: nutsImages.brazilNuts,
    inGeneralHeading: `The Selenium-Rich Super Nut`,
    inGeneral: `Brazil nuts (Bertholletia excelsa) are large, nutrient-packed nuts native to the Amazon rainforest, particularly in Brazil, Bolivia, and Peru. These nuts are known for their rich, creamy texture and mild, buttery flavor, making them a favorite for both snacking and culinary uses. However, what truly sets Brazil nuts apart is their remarkable nutritional profile, particularly their exceptionally high selenium content.
                  Selenium is a powerful antioxidant that plays a crucial role in numerous bodily functions, including boosting immune function, supporting thyroid health, and protecting cells from oxidative damage. Just one or two Brazil nuts can provide more than the daily recommended intake of selenium, making them one of the richest dietary sources of this essential mineral. Consuming selenium-rich foods like Brazil nuts can help reduce inflammation, improve brain function, and lower the risk of heart disease and certain cancers.
                  In addition to selenium, Brazil nuts are a great source of healthy fats, primarily monounsaturated and polyunsaturated fats, which are beneficial for heart health. These healthy fats can help lower LDL (bad) cholesterol levels and increase HDL (good) cholesterol levels, contributing to improved cardiovascular health. Brazil nuts also provide a moderate amount of protein, along with essential vitamins and minerals such as magnesium, phosphorus, copper, and vitamin E.
                  Culinary-wise, Brazil nuts can be enjoyed on their own as a snack, chopped and added to salads, used in baking, or blended into nut butters. Due to their high fat content, they also lend a creamy richness to desserts and can be used as a base for plant-based milk.
                  In summary, Brazil nuts are a nutrient-dense food with exceptional health benefits, particularly due to their selenium content. Consumed in moderation, they can support immune function, heart health, and overall wellness, making them a valuable addition to a balanced diet.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: `Energy value:`,
        quantity: 659,
        measurementUnits: `kcal`,
        description: `– High in calories, providing substantial energy`,
      },
      {
        element: `Fats:`,
        quantity: 67.1,
        measurementUnits: `g`,
        description: `– Rich in healthy fats, providing a concentrated source of energy`,
      },
      {
        element: `Saturated fatty acids:`,
        quantity: 16.1,
        measurementUnits: `g`,
        description: `– Contains saturated fats`,
      },
      {
        element: `Cholesterol:`,
        quantity: 0,
        measurementUnits: `mg`,
        description: `– Cholesterol-free`,
      },
      {
        element: `Sodium:`,
        quantity: 3,
        measurementUnits: `mg`,
        description: `– Very low sodium content`,
      },
      {
        element: `Potassium:`,
        quantity: 659,
        measurementUnits: `mg`,
        description: `– High in potassium, supports muscle function`,
      },
      {
        element: `Carbohydrates:`,
        quantity: 12.3,
        measurementUnits: `g`,
        description: `– Provides a moderate amount of carbohydrates`,
      },
      {
        element: `Fiber:`,
        quantity: 7.5,
        measurementUnits: `g`,
        description: `– Good source of dietary fiber, aids digestion`,
      },
      {
        element: `Sugar:`,
        quantity: 2.3,
        measurementUnits: `g`,
        description: `– Contains a small amount of natural sugars`,
      },
      {
        element: `Proteins:`,
        quantity: 14.3,
        measurementUnits: `g`,
        description: `– Good source of plant-based protein`,
      },
      {
        element: `Vitamin C:`,
        quantity: 0.7,
        measurementUnits: `mg`,
        description: `– Contains a small amount of vitamin C`,
      },
      {
        element: `Calcium:`,
        quantity: 160,
        measurementUnits: `mg`,
        description: `– Source of calcium, important for bone health`,
      },
      {
        element: `Iron:`,
        quantity: 2.4,
        measurementUnits: `mg`,
        description: `– Contributes to iron intake, supporting red blood cell production`,
      },
      {
        element: `Vitamin D:`,
        quantity: 0,
        measurementUnits: `IU`,
        description: `– Vitamin D not present`,
      },
      {
        element: `Vitamin B6:`,
        quantity: 0.1,
        measurementUnits: `mg`,
        description: `– Contains a small amount of vitamin B6`,
      },
      {
        element: `Vitamin B12:`,
        quantity: 0,
        measurementUnits: `µg`,
        description: `– No vitamin B12 content`,
      },
      {
        element: `Magnesium:`,
        quantity: 376,
        measurementUnits: `mg`,
        description: `– High in magnesium, supports muscle and nerve function`,
      },
      {
        element: `Zinc:`,
        quantity: 4.0,
        measurementUnits: `mg`,
        description: `– Provides a good amount of zinc, supports immune function`,
      },
      {
        element: `Vitamin E:`,
        quantity: 5.7,
        measurementUnits: `mg`,
        description: `– Rich in vitamin E, an antioxidant`,
      },
      {
        element: `Selenium:`,
        quantity: 1917,
        measurementUnits: `µg`,
        description: `– Exceptionally high in selenium, supports thyroid health`,
      },
    ],
    cultivationHeading:
      "Brazil nut cultivation requires specific conditions for optimal growth and nut production. Here is an overview of the key factors involved in growing Brazil nuts:",
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Brazil nuts thrive in warm, tropical climates with temperatures ranging from 24°C to 30°C (75°F to 86°F). They require a humid environment to flourish.",
          },
          {
            id: 212,
            topic: "Rainfall",
            text: "Brazil nuts require abundant rainfall, typically between 1,500 and 2,500 mm (59 to 98 inches) annually, with a distinct wet season.",
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
            text: "Brazil nuts prefer well-drained, sandy loam to clay loam soils with a pH level between 5.5 and 7.0.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "They thrive in deep, fertile soils that retain moisture but do not become waterlogged. Well-drained soils are crucial for healthy root development.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Before planting, it's beneficial to incorporate organic matter such as compost to enhance soil fertility and structure.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: "The Brazil nut tree (Bertholletia excelsa) is the main species cultivated for nut production. There are no distinct cultivars, but genetic variation exists in wild populations.",
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "The best time to plant Brazil nut trees is at the beginning of the rainy season to ensure sufficient moisture for germination.",
          },
          {
            id: 242,
            topic: "Spacing",
            text: "Trees should be spaced about 10 to 15 meters (33 to 50 feet) apart to allow for ample growth and airflow.",
          },
          {
            id: 243,
            topic: "Pollination",
            text: "Brazil nuts are pollinated primarily by specific bees, including the orchid bee. Planting in proximity to other flowering plants can help improve pollination.",
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
            text: "Young Brazil nut trees require regular watering during their first few years to establish strong roots.",
          },
          {
            id: 252,
            topic: "Mature Trees",
            text: "Once established, Brazil nuts are relatively drought-tolerant but benefit from consistent moisture, especially during dry periods.",
          },
          {
            id: 253,
            topic: "Avoid Overwatering",
            text: "Prevent waterlogging by ensuring good drainage, as excess moisture can lead to root rot.",
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
            text: "Pruning is typically done to maintain tree health, shape, and facilitate harvesting. It helps promote an open canopy for better light penetration.",
          },
          {
            id: 262,
            topic: "Timing",
            text: "Pruning should be performed during the dry season to reduce the risk of disease and to facilitate easier maintenance.",
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
            text: "Brazil nuts benefit from regular applications of organic fertilizers, including compost, to maintain soil fertility.",
          },
          {
            id: 272,
            topic: "Timing",
            text: "Fertilizers should be applied during the growing season to support healthy growth and nut development.",
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
            text: "Common pests include caterpillars, beetles, and aphids. Integrated pest management (IPM) strategies can help manage these issues.",
          },
          {
            id: 282,
            topic: "Diseases",
            text: "Brazil nut trees can be affected by root rot and leaf spot diseases. Proper site selection and management practices can help prevent these problems.",
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
            text: "Brazil nuts are typically harvested between January and March, depending on the climate and location.",
          },
          {
            id: 292,
            topic: "Signs of Ripeness",
            text: "The nuts are ready to harvest when the outer shells crack open. This usually occurs 14 months after flowering.",
          },
          {
            id: 293,
            topic: "Handling",
            text: "Harvested nuts should be handled carefully to avoid damage. They are typically collected from the ground after falling.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Brazil nuts can be stored in a cool, dry place, ideally in an airtight container. They should be consumed within a few months for the best flavor.",
        children: [
          {
            id: 30.21,
            topic: "Preservation",
            text: "Brazil nuts can also be roasted or processed into oils and butter to extend their shelf life.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Thinning of immature nuts may be necessary to improve the size and quality of the remaining nuts, though this practice is less common.",
      },
    ],
  },
  {
    id: 3,
    name: "Pumpkin seeds",
    img: nutsImages.pumpkinSeeds,
    inGeneralHeading: `Small but Nutrient-Dense`,
    inGeneral: `Pumpkin seeds, or pepitas, are the edible seeds of pumpkins (Cucurbita pepo), known for their impressive nutritional value despite their small size. Available in a variety of forms—raw, roasted, salted, or unsalted—pumpkin seeds have earned their place as a popular snack and ingredient due to their health benefits and versatility in cooking.
                  One of the primary benefits of pumpkin seeds is their rich content of healthy fats, particularly unsaturated fats, which are beneficial for heart health. These fats can help reduce bad cholesterol (LDL) levels and promote overall cardiovascular well-being. Pumpkin seeds are also a significant source of plant-based protein, making them an excellent snack for vegetarians, vegans, and those looking to boost their protein intake.
                  Pumpkin seeds are packed with essential vitamins and minerals, especially magnesium, zinc, and iron. Magnesium is vital for muscle and nerve function, regulating blood pressure, and maintaining bone health. Zinc supports immune function, cell growth, and wound healing, while iron plays a crucial role in oxygen transport throughout the body. These nutrients contribute to the seeds' reputation as a nutrient-dense superfood.
                  In addition to these minerals, pumpkin seeds contain powerful antioxidants like vitamin E and carotenoids, which protect the body from oxidative stress and inflammation. The seeds' high fiber content supports digestion and helps regulate blood sugar levels, contributing to overall metabolic health.
                  Culinary-wise, pumpkin seeds can be eaten alone as a snack, or used as a topping for salads, oatmeal, yogurt, and soups. They can be incorporated into baked goods, granolas, or blended into pesto and other spreads.
                  In summary, pumpkin seeds are nutrient-dense and versatile, offering significant health benefits ranging from heart and immune support to digestive health. These tiny seeds are a powerful addition to any balanced diet.`,
    topic1: "Nutrition and Health",

    nutritionText: [
      {
        element: `Energy value:`,
        quantity: 559,
        measurementUnits: `kcal`,
        description: `– High in calories, providing substantial energy`,
      },
      {
        element: `Fats:`,
        quantity: 49.1,
        measurementUnits: `g`,
        description: `– Rich in healthy fats, providing energy`,
      },
      {
        element: `Saturated fatty acids:`,
        quantity: 8.7,
        measurementUnits: `g`,
        description: `– Contains a moderate amount of saturated fats`,
      },
      {
        element: `Cholesterol:`,
        quantity: 0,
        measurementUnits: `mg`,
        description: `– Cholesterol-free`,
      },
      {
        element: `Sodium:`,
        quantity: 7,
        measurementUnits: `mg`,
        description: `– Very low in sodium`,
      },
      {
        element: `Potassium:`,
        quantity: 809,
        measurementUnits: `mg`,
        description: `– High in potassium, important for muscle function`,
      },
      {
        element: `Carbohydrates:`,
        quantity: 10.7,
        measurementUnits: `g`,
        description: `– Contains a moderate amount of carbohydrates`,
      },
      {
        element: `Fiber:`,
        quantity: 6.5,
        measurementUnits: `g`,
        description: `– Good source of dietary fiber, aids digestion`,
      },
      {
        element: `Sugar:`,
        quantity: 1.4,
        measurementUnits: `g`,
        description: `– Contains a small amount of natural sugars`,
      },
      {
        element: `Proteins:`,
        quantity: 30.2,
        measurementUnits: `g`,
        description: `– Excellent source of plant-based protein`,
      },
      {
        element: `Vitamin C:`,
        quantity: 1.9,
        measurementUnits: `mg`,
        description: `– Contains a small amount of vitamin C`,
      },
      {
        element: `Calcium:`,
        quantity: 46,
        measurementUnits: `mg`,
        description: `– Source of calcium, supports bone health`,
      },
      {
        element: `Iron:`,
        quantity: 8.8,
        measurementUnits: `mg`,
        description: `– High in iron, supports red blood cell production`,
      },
      {
        element: `Vitamin D:`,
        quantity: 0,
        measurementUnits: `IU`,
        description: `– No vitamin D content`,
      },
      {
        element: `Vitamin B6:`,
        quantity: 0.1,
        measurementUnits: `mg`,
        description: `– Contains a small amount of vitamin B6`,
      },
      {
        element: `Vitamin B12:`,
        quantity: 0,
        measurementUnits: `µg`,
        description: `– No vitamin B12 content`,
      },
      {
        element: `Magnesium:`,
        quantity: 592,
        measurementUnits: `mg`,
        description: `– Very high in magnesium, supports muscle and nerve function`,
      },
      {
        element: `Zinc:`,
        quantity: 7.6,
        measurementUnits: `mg`,
        description: `– Rich in zinc, supports immune function`,
      },
      {
        element: `Vitamin E:`,
        quantity: 2.2,
        measurementUnits: `mg`,
        description: `– Contains a moderate amount of vitamin E, an antioxidant`,
      },
      {
        element: `Selenium:`,
        quantity: 5.6,
        measurementUnits: `µg`,
        description: `– Contains a small amount of selenium, supports thyroid health`,
      },
    ],
    cultivationHeading:
      "Pumpkin seed cultivation requires specific conditions for optimal growth and seed production. Here is an overview of the key factors involved in growing pumpkin seeds:",
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Pumpkins thrive in warm climates, requiring temperatures between 18°C and 30°C (65°F to 86°F) for optimal growth. They are sensitive to frost and should be planted after the last frost date.",
          },
          {
            id: 212,
            topic: "Rainfall",
            text: "Pumpkins require consistent moisture, with an ideal rainfall of 50 to 75 cm (20 to 30 inches) during the growing season. Adequate water is crucial during flowering and seed development.",
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
            text: "Pumpkins prefer slightly acidic to neutral soil with a pH range of 6.0 to 7.5.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "Well-drained, loamy soils enriched with organic matter are ideal for pumpkin cultivation. They can also tolerate sandy soils but may require more frequent watering.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Before planting, till the soil and incorporate organic matter such as compost to enhance soil fertility and structure.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: "Popular pumpkin varieties for seed production include: -Styrian pumpkin- (known for its hull-less seeds). -Kabocha- (sweet flavor and good for roasting). -Jack-o'-lantern- (commonly grown for decoration and culinary uses).",
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "Pumpkin seeds should be planted in late spring to early summer, once the soil has warmed to at least 15°C (60°F).",
          },
          {
            id: 242,
            topic: "Spacing",
            text: "Seeds should be planted 2.5 to 5 cm (1 to 2 inches) deep, spaced about 90 cm (3 feet) apart in rows that are 1.5 to 2 meters (5 to 6 feet) apart.",
          },
          {
            id: 243,
            topic: "Pollination",
            text: "Pumpkins are typically pollinated by bees. Planting flowers nearby can attract pollinators to enhance fruit and seed set.",
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
            text: "Keep the soil consistently moist during the germination phase. Water deeply to encourage strong root development.",
          },
          {
            id: 252,
            topic: "Mature Plants",
            text: "Once established, pumpkins need about 25 to 50 mm (1 to 2 inches) of water per week, especially during flowering and seed development.",
          },
          {
            id: 253,
            topic: "Avoid Overwatering",
            text: "Prevent waterlogging, as excessive moisture can lead to root rot and other diseases.",
          },
        ],
      },
      {
        id: 26,
        topic: "Fertilization",
        children: [
          {
            id: 261,
            topic: "Nutrients",
            text: "Pumpkins benefit from a balanced fertilizer, particularly those high in phosphorus and potassium to promote flowering and seed production.",
          },
          {
            id: 262,
            topic: "Timing",
            text: "Fertilize before planting and again when plants begin to flower, following the recommended application rates.",
          },
        ],
      },
      {
        id: 27,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 271,
            topic: "Pests",
            text: "Common pests include aphids, squash bugs, and cucumber beetles. Implementing crop rotation and introducing beneficial insects can help manage these pests.",
          },
          {
            id: 272,
            topic: "Diseases",
            text: "Pumpkins are susceptible to powdery mildew, downy mildew, and root rot. Proper spacing and airflow, as well as fungicide application if necessary, can help control diseases.",
          },
        ],
      },
      {
        id: 28,
        topic: "Harvesting",
        children: [
          {
            id: 281,
            topic: "Time",
            text: "Pumpkins are typically ready for harvest in late summer to early fall, about 75 to 100 days after planting.",
          },
          {
            id: 282,
            topic: "Signs of Ripeness",
            text: "The skin should be hard, and the color should be deep and rich, with stems drying out. Harvest when the fruit is fully mature for the best seed quality.",
          },
          {
            id: 283,
            topic: "Handling",
            text: "Handle harvested pumpkins carefully to avoid bruising. Store them in a cool, dry place until ready for seed extraction.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Pumpkin seeds should be stored in a cool, dry place. For longer storage, keep them in an airtight container in the refrigerator or freezer to maintain freshness.",
        children: [
          {
            id: 30.21,
            topic: "Preservation",
            text: "Pumpkin seeds can also be roasted or flavored before storage, providing a nutritious snack option.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Thinning is not usually required, but if plants are overcrowded, removing a few seedlings can help improve airflow and reduce competition for resources.",
      },
    ],
  },
  {
    id: 4,
    name: "Hazelnut",
    img: nutsImages.hazelnut,
    inGeneralHeading: `Nutrient-Dense Delights`,
    inGeneral: `Hazelnuts (Corylus avellana), also known as filberts, are small, round nuts with a rich, sweet flavor and a crunchy texture. They are native to Europe and Asia but are now grown in many parts of the world, with Turkey being the largest producer. Hazelnuts are not only delicious but also packed with essential nutrients, making them a popular choice for a healthy diet.
                  One of the key nutritional benefits of hazelnuts is their high content of healthy fats, particularly monounsaturated fats. These fats are known to promote heart health by lowering bad cholesterol (LDL) levels while raising good cholesterol (HDL) levels. Additionally, hazelnuts are an excellent source of vitamin E, a powerful antioxidant that helps protect cells from oxidative stress and supports skin health.
                  Hazelnuts are also rich in magnesium, a mineral essential for muscle function, energy production, and bone health. They provide a good amount of dietary fiber, which aids digestion, helps regulate blood sugar levels, and promotes feelings of fullness, making them a satisfying snack option.
                  Culinary-wise, hazelnuts can be enjoyed raw or roasted and are often used in a variety of dishes, including salads, granola, and baked goods. They are also popular in confections, such as chocolate spreads and pralines.
                  In summary, hazelnuts are a nutritious and versatile nut that offers numerous health benefits, including heart health support and antioxidant properties. Their rich flavor and adaptability in cooking make them a valuable addition to a balanced diet.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: `Energy value:`,
        quantity: 628,
        measurementUnits: `kcal`,
        description: `– High in calories, providing substantial energy`,
      },
      {
        element: `Fats:`,
        quantity: 60.8,
        measurementUnits: `g`,
        description: `– Rich in healthy fats, providing energy`,
      },
      {
        element: `Saturated fatty acids:`,
        quantity: 4.5,
        measurementUnits: `g`,
        description: `– Contains some saturated fats`,
      },
      {
        element: `Cholesterol:`,
        quantity: 0,
        measurementUnits: `mg`,
        description: `– Cholesterol-free`,
      },
      { element: `Sodium:`, quantity: 0,  measurementUnits: `mg`,description: `– Sodium-free` },
      {
        element: `Potassium:`,
        quantity: 680,
        measurementUnits: `mg`,
        description: `– High in potassium, supports muscle and nerve function`,
      },
      {
        element: `Carbohydrates:`,
        quantity: 16.7,
        measurementUnits: `g`,
        description: `– Contains a moderate amount of carbohydrates`,
      },
      {
        element: `Fiber:`,
        quantity: 9.7,
        measurementUnits: `g`,
        description: `– Excellent source of dietary fiber, promotes digestion`,
      },
      {
        element: `Sugar:`,
        quantity: 4.3,
        measurementUnits: `g`,
        description: `– Contains a small amount of natural sugars`,
      },
      {
        element: `Proteins:`,
        quantity: 14.9,
        measurementUnits: `g`,
        description: `– Good source of plant-based protein`,
      },
      {
        element: `Vitamin C:`,
        quantity: 6.3,
        measurementUnits: `mg`,
        description: `– Contains vitamin C, supports immune function`,
      },
      {
        element: `Calcium:`,
        quantity: 114,
        measurementUnits: `mg`,
        description: `– Source of calcium, important for bone health`,
      },
      {
        element: `Iron:`,
        quantity: 4.7,
        measurementUnits: `mg`,
        description: `– Good source of iron, supports red blood cell production`,
      },
      {
        element: `Vitamin D:`,
        quantity: 0,
        measurementUnits: `IU`,
        description: `– Vitamin D not present`,
      },
      {
        element: `Vitamin B6:`,
        quantity: 0.6,
        measurementUnits: `mg`,
        description: `– Contains vitamin B6, supports brain health`,
      },
      {
        element: `Vitamin B12:`,
        quantity: 0,
        measurementUnits: `µg`,
        description: `– No vitamin B12 content`,
      },
      {
        element: `Magnesium:`,
        quantity: 163,
        measurementUnits: `mg`,
        description: `– Good source of magnesium, supports muscle and nerve function`,
      },
      {
        element: `Zinc:`,
        quantity: 2.5,
        measurementUnits: `mg`,
        description: `– Provides zinc, supports immune function`,
      },
      {
        element: `Vitamin E:`,
        quantity: 15.0,
        measurementUnits: `mg`,
        description: `– Rich in vitamin E, an antioxidant`,
      },
      {
        element: `Selenium:`,
        quantity: 2.4,
        measurementUnits: `µg`,
        description: `– Contains a small amount of selenium, supports thyroid health`,
      },
    ],
    cultivationHeading:
      "Hazelnut cultivation requires specific conditions for optimal growth and nut production. Here is an overview of the key factors involved in growing hazelnuts:",
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Hazelnuts thrive in temperate climates with cool winters and warm summers. The ideal temperature range for growth is between 15°C and 25°C (59°F to 77°F). They require chilling hours (between 0°C and 7°C or 32°F and 45°F) in winter for proper bud development.",
          },
          {
            id: 212,
            topic: "Rainfall",
            text: "Hazelnuts prefer moderate rainfall, requiring about 600 to 1,200 mm (24 to 47 inches) annually. Irrigation may be necessary during dry periods, especially during flowering and nut development.",
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
            text: "Hazelnuts grow best in slightly acidic to neutral soil, with a pH range of 6.0 to 7.5.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "Well-drained, loamy soils rich in organic matter are ideal for hazelnuts. They can tolerate a range of soil types but are sensitive to waterlogging.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Prior to planting, the soil should be tilled and enriched with organic matter, such as compost or well-rotted manure, to improve fertility and drainage.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: "Popular hazelnut varieties include: -Barcelona- (known for high yield and good quality nuts). -Tonda di Giffoni- (noted for its round shape and flavor). -Corylus avellana- (the common hazelnut species).",
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "The best time to plant hazelnuts is in the fall or early spring when the soil is workable.",
          },
          {
            id: 242,
            topic: "Spacing",
            text: "Hazelnut trees should be planted 4 to 6 meters (13 to 20 feet) apart to allow for proper growth and air circulation.",
          },
          {
            id: 243,
            topic: "Pollination",
            text: "Hazelnuts are typically self-pollinating but benefit from cross-pollination. Planting multiple varieties can increase yield and nut quality.",
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
            text: "Young hazelnut trees require regular watering during their first few years to establish a strong root system.",
          },
          {
            id: 252,
            topic: "Mature Trees",
            text: "Once established, hazelnuts need about 600 to 800 mm (24 to 31 inches) of water annually, especially during flowering and nut formation.",
          },
          {
            id: 253,
            topic: "Avoid Overwatering",
            text: "Ensure proper drainage to prevent waterlogging, which can lead to root diseases.",
          },
        ],
      },
      {
        id: 26,
        topic: "Fertilization",
        children: [
          {
            id: 261,
            topic: "Nutrients",
            text: "Hazelnuts benefit from a balanced fertilizer containing nitrogen, phosphorus, and potassium, with a focus on organic amendments.",
          },
          {
            id: 262,
            topic: "Timing",
            text: "Fertilizer should be applied in early spring before new growth begins, and again during the growing season as needed.",
          },
        ],
      },
      {
        id: 27,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 271,
            topic: "Pests",
            text: "Common pests include aphids, weevils, and Eastern filbert blight. Implementing integrated pest management (IPM) practices can help control these pests.",
          },
          {
            id: 272,
            topic: "Diseases",
            text: "Hazelnuts are susceptible to diseases such as powdery mildew and blight. Good cultural practices, including proper spacing and sanitation, can help prevent disease outbreaks.",
          },
        ],
      },
      {
        id: 28,
        topic: "Harvesting",
        children: [
          {
            id: 281,
            topic: "Time",
            text: "Hazelnuts are typically harvested in late summer to early fall when the husks begin to dry and turn brown.",
          },
          {
            id: 282,
            topic: "Signs of Ripeness",
            text: "Ripe hazelnuts will fall from the tree or can be shaken from the branches. The shells should be hard, and the nuts should be plump.",
          },
          {
            id: 283,
            topic: "Handling",
            text: "Handle harvested nuts carefully to avoid damage. Dry them promptly to prevent mold and spoilage.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Hazelnuts should be stored in a cool, dry place. For longer storage, keep them in an airtight container in the refrigerator or freezer to maintain freshness.",
        children: [
          {
            id: 30.21,
            topic: "Preservation",
            text: "Hazelnuts can also be roasted or used in various recipes to enhance their flavor and texture.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Thinning may not be necessary, but if trees are overcrowded, selective pruning can help improve airflow and reduce competition for nutrients.",
      },
    ],
  },
  {
    id: 5,
    name: "Sesame Seeds",
    img: nutsImages.sesameSeed,
    inGeneralHeading: `Tiny Nutrient Powerhouses`,
    inGeneral: `Sesame seeds (Sesamum indicum) are small, oval-shaped seeds that come in a variety of colors, including white, black, and brown. Despite their small size, they are packed with nutrients and have been cultivated for thousands of years, particularly in regions of Asia and Africa. These seeds are widely used in cooking, offering both a distinct nutty flavor and impressive health benefits.
                  One of the key nutrients found in sesame seeds is healthy fats, particularly polyunsaturated and monounsaturated fats, which are beneficial for heart health. They also contain plant lignans, such as sesamin and sesamol, which have antioxidant properties and help reduce inflammation and protect against cell damage.
                  Sesame seeds are an excellent source of plant-based protein, making them a great addition to vegetarian and vegan diets. They are also rich in essential vitamins and minerals, such as calcium, magnesium, phosphorus, and zinc, which support bone health, immune function, and overall well-being. The seeds also provide a good amount of B vitamins, including thiamine, niacin, and folate, which are important for energy production and brain function.
                  In addition to their nutritional benefits, sesame seeds are high in dietary fiber, which promotes healthy digestion and helps regulate blood sugar levels. Their fiber content, combined with healthy fats and protein, makes them a satisfying snack or ingredient in various dishes.
                  Culinary-wise, sesame seeds are incredibly versatile. They are used in both sweet and savory recipes, from topping breads and salads to being ground into tahini—a creamy paste commonly used in Middle Eastern cuisine. Sesame oil, extracted from the seeds, is another popular cooking ingredient known for its rich flavor.
                  In summary, sesame seeds may be small, but they are nutrient-dense, offering a range of health benefits from heart health and bone support to digestive health. Their versatility in cooking makes them a valuable addition to any diet.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: `Energy value:`,
        quantity: 573,
        measurementUnits: `kcal`,
        description: `– High in calories, providing substantial energy`,
      },
      {
        element: `Fats:`,
        quantity: 49.7,
        measurementUnits: `g`,
        description: `– Rich in healthy fats, providing a concentrated source of energy`,
      },
      {
        element: `Saturated fatty acids:`,
        quantity: 7,
        measurementUnits: `g`,
        description: `– Contains saturated fats`,
      },
      {
        element: `Cholesterol:`,
        quantity: 0,
        measurementUnits: `mg`,
        description: `– Cholesterol-free`,
      },
      {
        element: `Sodium:`,
        quantity: 11,
        measurementUnits: `mg`,
        description: `– Very low in sodium`,
      },
      {
        element: `Potassium:`,
        quantity: 475,
        measurementUnits: `mg`,
        description: `– Good source of potassium, supports muscle function`,
      },
      {
        element: `Carbohydrates:`,
        quantity: 23.4,
        measurementUnits: `g`,
        description: `– Contains a moderate amount of carbohydrates`,
      },
      {
        element: `Fiber:`,
        quantity: 11.8,
        measurementUnits: `g`,
        description: `– Excellent source of dietary fiber, aids digestion`,
      },
      {
        element: `Sugar:`,
        quantity: 0.3,
        measurementUnits: `g`,
        description: `– Very low sugar content`,
      },
      {
        element: `Proteins:`,
        quantity: 17.7,
        measurementUnits: `g`,
        description: `– Good source of plant-based protein`,
      },
      {
        element: `Vitamin C:`,
        quantity: 0,
        measurementUnits: `mg`,
        description: `– No vitamin C content`,
      },
      {
        element: `Calcium:`,
        quantity: 975,
        measurementUnits: `mg`,
        description: `– Extremely high in calcium, supports bone health`,
      },
      {
        element: `Iron:`,
        quantity: 14.6,
        measurementUnits: `mg`,
        description: `– High in iron, supports red blood cell production`,
      },
      {
        element: `Vitamin D:`,
        quantity: 0,
        measurementUnits: `IU`,
        description: `– No vitamin D content`,
      },
      {
        element: `Vitamin B6:`,
        quantity: 0.8,
        measurementUnits: `mg`,
        description: `– Contains a moderate amount of vitamin B6`,
      },
      {
        element: `Vitamin B12:`,
        quantity: 0,
        measurementUnits: `µg`,
        description: `– No vitamin B12 content`,
      },
      {
        element: `Magnesium:`,
        quantity: 351,
        measurementUnits: `mg`,
        description: `– High in magnesium, supports muscle and nerve function`,
      },
      {
        element: `Zinc:`,
        quantity: 7.8,
        measurementUnits: `mg`,
        description: `– Rich in zinc, supports immune function`,
      },
      {
        element: `Vitamin E:`,
        quantity: 0.3,
        measurementUnits: `mg`,
        description: `– Contains a small amount of vitamin E, an antioxidant`,
      },
      {
        element: `Selenium:`,
        quantity: 34.4,
        measurementUnits: `µg`,
        description: `– Contains selenium, supports thyroid health`,
      },
    ],
    cultivationHeading:
      "Sesame seed cultivation requires specific conditions for optimal growth and seed production. Here is an overview of the key factors involved in growing sesame seeds:",
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Sesame seeds thrive in warm climates and require a temperature range of 20°C to 30°C (68°F to 86°F) for optimal growth. They are sensitive to frost and should be planted after the last frost date.",
          },
          {
            id: 212,
            topic: "Rainfall",
            text: "Sesame is a drought-resistant crop but requires about 300 to 600 mm (12 to 24 inches) of rainfall during the growing season. Adequate moisture is crucial during flowering and seed filling.",
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
            text: "Sesame prefers slightly acidic to neutral soil with a pH range of 6.0 to 7.5.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "Well-drained, sandy loam or loamy soils are ideal for sesame cultivation. They can tolerate a range of soil types but do not perform well in heavy clay soils that retain water.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Prior to planting, the soil should be prepared by tilling and incorporating organic matter, such as compost, to enhance fertility and drainage.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: "Popular sesame seed varieties include: -Giza 32- (high yield and disease-resistant). -Sikhi- (known for its oil content and drought tolerance). -Tian Ma- (high-quality seeds with good taste).",
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "Sesame seeds should be planted in late spring or early summer when the soil temperature reaches at least 20°C (68°F).",
          },
          {
            id: 242,
            topic: "Spacing",
            text: "Seeds should be sown at a depth of 1 to 2 cm (0.4 to 0.8 inches) with row spacing of 30 to 45 cm (12 to 18 inches) and seed spacing of 5 to 10 cm (2 to 4 inches) within the row.",
          },
          {
            id: 243,
            topic: "Seeding Rate",
            text: "For optimal growth, a seeding rate of about 4 to 6 kg per hectare (3 to 5 pounds per acre) is recommended.",
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
            text: "Sesame seeds need consistent moisture during germination and establishment, especially in the first few weeks after planting.",
          },
          {
            id: 252,
            topic: "Mature Plants",
            text: "Once established, sesame plants require minimal irrigation. However, supplemental watering may be needed during flowering and seed development in dry conditions.",
          },
          {
            id: 253,
            topic: "Avoid Overwatering",
            text: "Excessive moisture can lead to root rot and other fungal diseases. Proper drainage is essential.",
          },
        ],
      },
      {
        id: 26,
        topic: "Fertilization",
        children: [
          {
            id: 261,
            topic: "Nutrients",
            text: "Sesame seeds benefit from balanced fertilization with nitrogen, phosphorus, and potassium. A soil test can help determine specific nutrient needs.",
          },
          {
            id: 262,
            topic: "Timing",
            text: "Fertilizers should be applied before planting and may be side-dressed during the growing season, especially at flowering.",
          },
        ],
      },
      {
        id: 27,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 271,
            topic: "Pests",
            text: "Common pests include aphids, whiteflies, and sesame stem borers. Integrated pest management (IPM) strategies, including crop rotation and natural predators, can help control these pests.",
          },
          {
            id: 272,
            topic: "Diseases",
            text: "Sesame is susceptible to diseases such as downy mildew, leaf spot, and root rot. Preventive measures include crop rotation, proper spacing, and the use of disease-resistant varieties.",
          },
        ],
      },
      {
        id: 28,
        topic: "Harvesting",
        children: [
          {
            id: 281,
            topic: "Time",
            text: "Sesame seeds are typically ready for harvest 90 to 130 days after planting, depending on the variety and growing conditions.",
          },
          {
            id: 282,
            topic: "Signs of Ripeness",
            text: "The seed pods will turn brown and begin to crack open when the seeds are ripe. Harvesting should be done when pods are dry to prevent seed loss.",
          },
          {
            id: 283,
            topic: "Method",
            text: "Sesame can be harvested manually or mechanically. If using machinery, ensure it is set correctly to avoid seed damage.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Sesame seeds should be stored in a cool, dry place, preferably in airtight containers to prevent moisture and rancidity. Proper storage extends their shelf life significantly.",
        children: [
          {
            id: 30.21,
            topic: "Preservation",
            text: "Sesame seeds can also be processed into tahini or used in various recipes to enhance flavor and nutrition.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Thinning is generally not required for sesame, as plants should be spaced adequately to ensure good airflow and reduce competition.",
      },
    ],
  },
  {
    id: 6,
    name: "Pistachios",
    img: nutsImages.pistachios,
    inGeneralHeading: `Tiny Nutrient Powerhouses`,
    inGeneral: `Pistachios are not only delicious but also packed with numerous health benefits, making them a popular choice for snacks and culinary uses. These small, oval-shaped nuts come from the Pistacia vera tree and are native to the Middle East and Central Asia, though they are now cultivated in various parts of the world, including the United States.
                  One of the key advantages of pistachios is their impressive nutritional profile. They are rich in healthy fats, particularly monounsaturated fats, which are beneficial for heart health. Additionally, pistachios provide a good source of protein, fiber, and essential vitamins and minerals, including vitamin B6, thiamine, and copper. These nutrients support various bodily functions, from energy metabolism to immune function.
                  Pistachios also contain antioxidants, such as lutein and zeaxanthin, which are vital for eye health. Regular consumption of these nuts may help reduce the risk of chronic diseases, including heart disease and diabetes. Their high fiber content aids digestion and promotes a feeling of fullness, making them an excellent choice for weight management.
                  In culinary applications, pistachios can be enjoyed on their own, added to salads, or used as a topping for desserts. They can also be ground into pistachio paste for use in pastries or ice creams.
                  Overall, pistachios are a nutritious and versatile nut that can be enjoyed in various ways while contributing to a balanced diet.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: `Energy value:`,
        quantity: 562,
        measurementUnits: `kcal`,
        description: `– High in calories, providing substantial energy`,
      },
      {
        element: `Fats:`,
        quantity: 45.3,
        measurementUnits: `g`,
        description: `– Rich in healthy fats, providing energy`,
      },
      {
        element: `Saturated fatty acids:`,
        quantity: 5.6,
        measurementUnits: `g`,
        description: `– Contains a moderate amount of saturated fats`,
      },
      {
        element: `Cholesterol:`,
        quantity: 0,
        measurementUnits: `g`,
        description: `– Cholesterol-free`,
      },
      {
        element: `Sodium:`,
        quantity: 1,
        measurementUnits: `mg`,
        description: `– Very low in sodium`,
      },
      {
        element: `Potassium:`,
        quantity: 1025,
        measurementUnits: `mg`,
        description: `– Very high in potassium, supports muscle function`,
      },
      {
        element: `Carbohydrates:`,
        quantity: 27.2,
        measurementUnits: `g`,
        description: `– Contains a moderate amount of carbohydrates`,
      },
      {
        element: `Fiber:`,
        quantity: 10.3,
        measurementUnits: `g`,
        description: `– Good source of dietary fiber, aids digestion`,
      },
      {
        element: `Sugar:`,
        quantity: 7.7,
        measurementUnits: `g`,
        description: `– Contains a moderate amount of natural sugars`,
      },
      {
        element: `Proteins:`,
        quantity: 20.2,
        measurementUnits: `g`,
        description: `– Excellent source of plant-based protein`,
      },
      {
        element: `Vitamin C:`,
        quantity: 5.6,
        measurementUnits: `mg`,
        description: `– Contains a small amount of vitamin C`,
      },
      {
        element: `Calcium:`,
        quantity: 105,
        measurementUnits: `mg`,
        description: `– Source of calcium, supports bone health`,
      },
      {
        element: `Iron:`,
        quantity: 3.9,
        measurementUnits: `mg`,
        description: `– Contributes to iron intake, supporting red blood cell production`,
      },
      {
        element: `Vitamin D:`,
        quantity: 0,
        measurementUnits: `IU`,
        description: `– No vitamin D content`,
      },
      {
        element: `Vitamin B6:`,
        quantity: 1.7,
        measurementUnits: `mg`,
        description: `– High in vitamin B6, supports brain health`,
      },
      {
        element: `Vitamin B12:`,
        quantity: 0,
        measurementUnits: `µg`,
        description: `– No vitamin B12 content`,
      },
      {
        element: `Magnesium:`,
        quantity: 121,
        measurementUnits: `mg`,
        description: `– Source of magnesium, supports muscle and nerve function`,
      },
      {
        element: `Zinc:`,
        quantity: 2.2,
        measurementUnits: `mg`,
        description: `– Provides zinc, supports immune function`,
      },
      {
        element: `Vitamin E:`,
        quantity: 2.9,
        measurementUnits: `mg`,
        description: `– Contains vitamin E, an antioxidant`,
      },
      {
        element: `Selenium:`,
        quantity: 7.0,
        measurementUnits: `µg`,
        description: `– Contains a small amount of selenium, supports thyroid health`,
      },
    ],
    cultivationHeading:
      "Pistachio cultivation requires specific conditions for optimal growth and nut production. Here is an overview of the key factors involved in growing pistachios:",
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Pistachios thrive in warm, dry climates. They require a temperature range of 20°C to 30°C (68°F to 86°F) for optimal growth, with hot summers and cool winters necessary for dormancy.",
          },
          {
            id: 212,
            topic: "Chill Hours",
            text: "Pistachio trees need about 600 to 1,000 chill hours (hours below 7°C or 45°F) during winter to ensure proper bud development and fruit set.",
          },
          {
            id: 213,
            topic: "Rainfall",
            text: "Pistachios require well-distributed rainfall of 300 to 500 mm (12 to 20 inches) annually, primarily during the growing season. They are drought-resistant but perform better with adequate moisture.",
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
            text: "Pistachios prefer slightly alkaline soil with a pH range of 7.0 to 8.0.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "Well-drained sandy loam or loamy soils are ideal for pistachio cultivation. Poorly drained soils can lead to root rot, so good drainage is crucial.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Before planting, the soil should be plowed and mixed with organic matter to improve fertility and drainage.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: "Popular pistachio varieties include: -Kerman- (the most widely grown and known for high quality). -Peters- (high yield and good quality). -Early Badami- (known for its early ripening).",
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "The best time to plant pistachio trees is in early spring, after the danger of frost has passed.",
          },
          {
            id: 242,
            topic: "Spacing",
            text: "Trees should be spaced about 6 to 8 meters (20 to 26 feet) apart to allow for adequate sunlight and airflow.",
          },
          {
            id: 243,
            topic: "Pollination",
            text: "Pistachios are dioecious, meaning they have separate male and female trees. At least one male tree should be planted for every 8 to 10 female trees to ensure proper pollination.",
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
            text: "Pistachio trees need regular watering during the first few years after planting to establish strong roots.",
          },
          {
            id: 252,
            topic: "Mature Trees",
            text: "Once established, they should be watered deeply but infrequently. Pistachios require around 500 to 700 mm (20 to 28 inches) of water annually.",
          },
          {
            id: 253,
            topic: "Avoid Overwatering",
            text: "Waterlogging can lead to root diseases, so it's essential to ensure good drainage.",
          },
        ],
      },
      {
        id: 26,
        topic: "Fertilization",
        children: [
          {
            id: 261,
            topic: "Nutrients",
            text: "Pistachios benefit from regular fertilization, particularly with nitrogen, phosphorus, and potassium. Soil tests can help determine specific nutrient requirements.",
          },
          {
            id: 262,
            topic: "Timing",
            text: "Fertilizers should be applied in early spring before new growth begins and may be split-applied during the growing season.",
          },
        ],
      },
      {
        id: 27,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 271,
            topic: "Pests",
            text: "Common pests affecting pistachios include aphids, spider mites, and nut weevils. Integrated pest management (IPM) practices, such as using beneficial insects and insecticides, can help control these pests.",
          },
          {
            id: 272,
            topic: "Diseases",
            text: "Pistachios can be susceptible to diseases like botrytis and root rot. Proper cultural practices, such as maintaining good airflow and soil drainage, can help manage these issues.",
          },
        ],
      },
      {
        id: 28,
        topic: "Harvesting",
        children: [
          {
            id: 281,
            topic: "Time",
            text: "Pistachios are typically harvested in late summer to early fall, about 7 to 8 months after flowering.",
          },
          {
            id: 282,
            topic: "Signs of Ripeness",
            text: "Ripe pistachio nuts will crack open slightly and can be harvested once they start changing color from green to tan.",
          },
          {
            id: 283,
            topic: "Method",
            text: "Nuts can be harvested mechanically or by hand. If using machinery, ensure it is set correctly to prevent damage to the nuts.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Pistachio nuts should be stored in a cool, dry place to maintain freshness. They can be kept in airtight containers to prevent moisture and rancidity.",
        children: [
          {
            id: 30.21,
            topic: "Preservation",
            text: "Pistachios can also be roasted or salted for enhanced flavor and longer shelf life.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Thinning may be necessary in young trees to ensure proper fruit development. Reducing the number of nuts per cluster can help improve overall quality.",
      },
    ],
  },
  {
    id: 7,
    name: "Sunflower Seeds",
    img: nutsImages.sunflowerSeeds,
    inGeneralHeading: `Nutrient-Dense Seeds with a Nutty Flavor`,
    inGeneral: `Sunflower seeds, derived from the sunflower plant (Helianthus annuus), are small, grayish-black seeds with a mildly nutty flavor and crunchy texture. These seeds have gained popularity for their impressive nutritional profile and their versatility as both a snack and an ingredient in various culinary applications.
                  A notable feature of sunflower seeds is their high content of healthy fats, primarily polyunsaturated and monounsaturated fats. These fats help reduce bad cholesterol (LDL) levels, promoting heart health. Sunflower seeds are also an excellent source of plant-based protein, with about 5.5 grams of protein per 1-ounce serving, making them a great option for vegetarians, vegans, and those seeking to add more protein to their diet.
                  One of the key vitamins found in sunflower seeds is vitamin E, a potent antioxidant that helps protect cells from damage caused by free radicals and supports skin health. In fact, a single ounce of sunflower seeds provides over 80% of the daily recommended intake of vitamin E. The seeds also contain B vitamins, particularly folate and niacin, which are important for energy metabolism and DNA synthesis.
                  In addition to vitamins, sunflower seeds are packed with essential minerals like magnesium, selenium, and copper. Magnesium is vital for muscle and nerve function, while selenium acts as an antioxidant, supporting the immune system. Copper helps in the production of red blood cells and maintaining healthy connective tissue.
                  Sunflower seeds are also a good source of dietary fiber, aiding digestion and helping regulate blood sugar levels. They can be consumed raw, roasted, or used as a crunchy topping for salads, cereals, and yogurt. Sunflower seed butter is a popular alternative to traditional nut butters, offering a creamy, nutritious spread.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: `Energy value:`,
        quantity: 584,
        measurementUnits: `kcal`,
        description: `– High in calories, providing substantial energy`,
      },
      {
        element: `Fats:`,
        quantity: 51.5,
        measurementUnits: `g`,
        description: `– Rich in healthy fats, providing energy`,
      },
      {
        element: `Saturated fatty acids:`,
        quantity: 4.5,
        measurementUnits: `g`,
        description: `– Contains a moderate amount of saturated fats`,
      },
      {
        element: `Cholesterol:`,
        quantity: 0,
        measurementUnits: `mg`,
        description: `– Cholesterol-free`,
      },
      {
        element: `Sodium:`,
        quantity: 3,
        measurementUnits: `mg`,
        description: `– Very low sodium content`,
      },
      {
        element: `Potassium:`,
        quantity: 645,
        measurementUnits: `mg`,
        description: `– Good source of potassium, important for muscle function`,
      },
      {
        element: `Carbohydrates:`,
        quantity: 20,
        measurementUnits: `g`,
        description: `– Contains a moderate amount of carbohydrates`,
      },
      {
        element: `Fiber:`,
        quantity: 8.6,
        measurementUnits: `g`,
        description: `– Excellent source of dietary fiber, supports digestion`,
      },
      {
        element: `Sugar:`,
        quantity: 2.6,
        measurementUnits: `g`,
        description: `– Contains a small amount of natural sugars`,
      },
      {
        element: `Proteins:`,
        quantity: 20.8,
        measurementUnits: `g`,
        description: `– Good source of plant-based protein`,
      },
      {
        element: `Vitamin C:`,
        quantity: 1.4,
        measurementUnits: `mg`,
        description: `– Contains a small amount of vitamin C`,
      },
      {
        element: `Calcium:`,
        quantity: 78,
        measurementUnits: `mg`,
        description: `– Source of calcium, supports bone health`,
      },
      {
        element: `Iron:`,
        quantity: 5.3,
        measurementUnits: `mg`,
        description: `– Good source of iron, supports red blood cell production`,
      },
      {
        element: `Vitamin D:`,
        quantity: 0,
        measurementUnits: `IU`,
        description: `– No vitamin D content`,
      },
      {
        element: `Vitamin B6:`,
        quantity: 1.3,
        measurementUnits: `mg`,
        description: `– Rich in vitamin B6, supports brain function`,
      },
      {
        element: `Vitamin B12:`,
        quantity: 0,
        measurementUnits: `µg`,
        description: `– No vitamin B12 content`,
      },
      {
        element: `Magnesium:`,
        quantity: 325,
        measurementUnits: `mg`,
        description: `– High in magnesium, supports muscle and nerve function`,
      },
      {
        element: `Zinc:`,
        quantity: 5.0,
        measurementUnits: `mg`,
        description: `– Good source of zinc, supports immune function`,
      },
      {
        element: `Vitamin E:`,
        quantity: 35.2,
        measurementUnits: `mg`,
        description: `– Exceptionally high in vitamin E, an antioxidant`,
      },
      {
        element: `Selenium:`,
        quantity: 53.0,
        measurementUnits: `µg`,
        description: `– Rich in selenium, supports thyroid health`,
      },
    ],
    cultivationHeading:
      "Sunflower seed cultivation requires specific conditions for optimal growth and seed production. Here is an overview of the key factors involved in growing sunflowers:",
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Sunflowers thrive in warm climates and require a temperature range of 20°C to 30°C (68°F to 86°F) for optimal growth. They are sensitive to frost and should be planted after the last frost date.",
          },
          {
            id: 212,
            topic: "Sunlight",
            text: "Sunflowers need full sun to grow well, requiring at least 6 to 8 hours of direct sunlight per day for optimal flowering and seed development.",
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
            text: "Sunflowers prefer slightly acidic to neutral soil with a pH range of 6.0 to 7.5.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "Well-drained, loamy or sandy soils are ideal for sunflower cultivation. They do not perform well in heavy clay soils that retain moisture.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Prior to planting, the soil should be tilled and amended with organic matter to improve fertility and drainage.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: "Popular sunflower varieties include: -High Oleic- (for oil production). -Confectionery- (for snack seeds). -Hybrid Varieties- (bred for higher yields and disease resistance).",
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "Sunflowers are typically planted in spring, once soil temperatures reach at least 10°C (50°F).",
          },
          {
            id: 242,
            topic: "Depth and Spacing",
            text: "Seeds should be sown at a depth of 2 to 5 cm (0.8 to 2 inches). For optimal growth, plant seeds 30 to 45 cm (12 to 18 inches) apart in rows spaced 75 to 100 cm (30 to 40 inches) apart.",
          },
          {
            id: 243,
            topic: "Seeding Rate",
            text: "A seeding rate of 40,000 to 60,000 seeds per hectare (16,000 to 24,000 seeds per acre) is recommended for optimal yield.",
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
            text: "Sunflower seeds require adequate moisture during germination and establishment. Regular watering is important in the first few weeks after planting.",
          },
          {
            id: 252,
            topic: "Mature Plants",
            text: "Once established, sunflowers are drought-tolerant but benefit from about 25 to 50 mm (1 to 2 inches) of water per week during the growing season, especially during flowering.",
          },
          {
            id: 253,
            topic: "Avoid Waterlogging",
            text: "Sunflowers do not tolerate waterlogged conditions. Ensure good drainage to prevent root rot.",
          },
        ],
      },
      {
        id: 26,
        topic: "Fertilization",
        children: [
          {
            id: 261,
            topic: "Nutrients",
            text: "Sunflowers require nitrogen, phosphorus, and potassium for healthy growth. A balanced fertilizer can be applied to meet these nutrient needs.",
          },
          {
            id: 262,
            topic: "Timing",
            text: "Fertilizers should be applied at planting and during the early growth stages to support vigorous development.",
          },
        ],
      },
      {
        id: 27,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 271,
            topic: "Pests",
            text: "Common pests affecting sunflowers include aphids, sunflower beetles, and stem weevils. Integrated pest management (IPM) practices can help control pest populations.",
          },
          {
            id: 272,
            topic: "Diseases",
            text: "Sunflowers are susceptible to diseases such as downy mildew, sclerotinia, and rust. Crop rotation, resistant varieties, and proper field management can help manage these diseases.",
          },
        ],
      },
      {
        id: 28,
        topic: "Harvesting",
        children: [
          {
            id: 281,
            topic: "Time",
            text: "Sunflowers are typically ready for harvest in late summer to early fall, about 70 to 100 days after planting, when the back of the heads turn yellow.",
          },
          {
            id: 282,
            topic: "Signs of Ripeness",
            text: "Seeds should be hard and the hull should have a dark color. The moisture content of seeds should be around 10 to 12% at harvest.",
          },
          {
            id: 283,
            topic: "Method",
            text: "Harvesting can be done using a combine harvester. Care should be taken to avoid damaging the seeds during the process.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Sunflower seeds should be stored in a cool, dry place to prevent spoilage. Proper storage conditions can extend shelf life significantly.",
        children: [
          {
            id: 30.21,
            topic: "Preservation",
            text: "Sunflower seeds can also be roasted or salted for enhanced flavor and longer shelf life.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Thinning is generally not required, but if seedlings are overcrowded, they can be thinned to promote better growth and seed development.",
      },
    ],
  },
  {
    id: 8,
    name: "Chia Seeds",
    img: nutsImages.chiaSeeds,
    inGeneralHeading: `Tiny Seeds with Immense Nutritional Benefits`,
    inGeneral: `Chia seeds (Salvia hispanica) are tiny, oval-shaped seeds that come in black, white, or gray hues. Despite their small size, they are a powerhouse of nutrition, earning a reputation as a "superfood" due to their impressive nutrient profile. Originally cultivated by the Aztecs and Mayans in ancient times, chia seeds have gained widespread popularity in modern diets for their health benefits and versatility.
                  One of the most notable features of chia seeds is their high omega-3 fatty acid content. These essential fatty acids are crucial for heart health, reducing inflammation, and supporting brain function. In fact, chia seeds are one of the richest plant-based sources of omega-3s, particularly alpha-linolenic acid (ALA).
                  Chia seeds are also an excellent source of dietary fiber, with about 10 grams of fiber per 1-ounce (28 grams) serving. This high fiber content supports digestion, promotes a feeling of fullness, and helps regulate blood sugar levels, making chia seeds beneficial for weight management and metabolic health.
                  In addition to fiber and omega-3s, chia seeds are rich in plant-based protein, providing about 4 grams of protein per ounce. This makes them a great addition to vegetarian and vegan diets. Chia seeds are also packed with essential minerals such as calcium, magnesium, and phosphorus, which are important for bone health and overall bodily function.
                  Another unique property of chia seeds is their ability to absorb liquid and form a gel-like consistency, which makes them useful in recipes like puddings, smoothies, and baked goods. This gelatinous texture also helps to slow digestion, resulting in a more gradual release of energy.
                  In summary, chia seeds are a small but mighty food, offering a wide range of health benefits, from heart and digestive support to bone health and sustained energy. Their versatility in the kitchen and nutrient density make them a valuable addition to any diet.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: `Energy value:`,
        quantity: 486,
        measurementUnits: `kcal`,
        description: `– High in calories, providing substantial energy`,
      },
      {
        element: `Fats:`,
        quantity: 30.7,
        measurementUnits: `g`,
        description: `– Rich in healthy fats, providing a concentrated source of energy`,
      },
      {
        element: `Saturated fatty acids:`,
        quantity: 3.3,
        measurementUnits: `g`,
        description: `– Contains a small amount of saturated fats`,
      },
      {
        element: `Cholesterol:`,
        quantity: 0,
        measurementUnits: `mg`,
        description: `– Cholesterol-free`,
      },
      {
        element: `Sodium:`,
        quantity: 16,
        measurementUnits: `mg`,
        description: `– Very low in sodium`,
      },
      {
        element: `Potassium:`,
        quantity: 407,
        measurementUnits: `mg`,
        description: `– Source of potassium, supports muscle function`,
      },
      {
        element: `Carbohydrates:`,
        quantity: 42.1,
        measurementUnits: `g`,
        description: `– Contains a moderate amount of carbohydrates`,
      },
      {
        element: `Fiber:`,
        quantity: 34.4,
        measurementUnits: `g`,
        description: `– Excellent source of dietary fiber, aids digestion`,
      },
      {
        element: `Sugar:`,
        quantity: 0,
        measurementUnits: `g`,
        description: `– Sugar-free`,
      },
      {
        element: `Proteins:`,
        quantity: 16.5,
        measurementUnits: `g`,
        description: `– Good source of plant-based protein`,
      },
      {
        element: `Vitamin C:`,
        quantity: 1.6,
        measurementUnits: `mg`,
        description: `– Contains a small amount of vitamin C`,
      },
      {
        element: `Calcium:`,
        quantity: 631,
        measurementUnits: `mg`,
        description: `– Very high in calcium, supports bone health`,
      },
      {
        element: `Iron:`,
        quantity: 7.7,
        measurementUnits: `mg`,
        description: `– High in iron, supports red blood cell production`,
      },
      {
        element: `Vitamin D:`,
        quantity: 0,
        measurementUnits: `IU`,
        description: `– No vitamin D content`,
      },
      {
        element: `Vitamin B6:`,
        quantity: 0.1,
        measurementUnits: `mg`,
        description: `– Contains a small amount of vitamin B6`,
      },
      {
        element: `Vitamin B12:`,
        quantity: 0,
        measurementUnits: `µg`,
        description: `– No vitamin B12 content`,
      },
      {
        element: `Magnesium:`,
        quantity: 335,
        measurementUnits: `mg`,
        description: `– High in magnesium, supports muscle and nerve function`,
      },
      {
        element: `Zinc:`,
        quantity: 4.6,
        measurementUnits: `mg`,
        description: `– Good source of zinc, supports immune function`,
      },
      {
        element: `Vitamin E:`,
        quantity: 0.5,
        measurementUnits: `mg`,
        description: `– Contains a small amount of vitamin E, an antioxidant`,
      },
      {
        element: `Selenium:`,
        quantity: 37.5,
        measurementUnits: `mg`,
        description: `– Contains selenium, supports thyroid health`,
      },
    ],
    cultivationHeading:
      "Chia seed cultivation requires specific conditions for optimal growth and seed production. Here is an overview of the key factors involved in growing chia:",
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Chia plants thrive in warm climates, preferring temperatures between 20°C and 30°C (68°F to 86°F). They are sensitive to frost and should be planted after the last frost date.",
          },
          {
            id: 212,
            topic: "Sunlight",
            text: "Chia plants require full sun and need at least 6 to 8 hours of direct sunlight per day for optimal growth and seed development.",
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
            text: "Chia grows best in well-drained, fertile soil with a pH range of 6.0 to 7.5.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "Loamy or sandy soils are ideal for chia cultivation, as they provide good drainage. Heavy clay soils that retain moisture should be avoided.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Prior to planting, the soil should be tilled and amended with organic matter to enhance fertility and drainage.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: "Popular chia varieties include: -Salvia hispanica- (the most commonly grown species for chia seeds). -Black and White Chia- (differ in seed color but have similar nutritional profiles).",
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "Chia seeds are typically planted in the spring after the last frost, once soil temperatures reach at least 15°C (59°F).",
          },
          {
            id: 242,
            topic: "Depth and Spacing",
            text: "Seeds should be sown at a depth of 0.5 to 1 cm (0.2 to 0.4 inches). For optimal growth, seeds should be spaced about 15 to 20 cm (6 to 8 inches) apart in rows spaced 30 to 45 cm (12 to 18 inches) apart.",
          },
          {
            id: 243,
            topic: "Seeding Rate",
            text: "A seeding rate of approximately 5 to 10 kg per hectare (4 to 9 pounds per acre) is recommended for optimal yield.",
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
            text: "Chia plants require consistent moisture during germination and the early establishment phase. Watering should be regular but not excessive.",
          },
          {
            id: 252,
            topic: "Mature Plants",
            text: "Once established, chia plants are relatively drought-tolerant. They require about 500 to 600 mm (20 to 24 inches) of water annually, depending on climate and soil conditions.",
          },
          {
            id: 253,
            topic: "Avoid Waterlogging",
            text: "Excessive moisture can lead to root rot. Ensure proper drainage to prevent waterlogging.",
          },
        ],
      },
      {
        id: 26,
        topic: "Fertilization",
        children: [
          {
            id: 261,
            topic: "Nutrients",
            text: "Chia requires balanced fertilization with nitrogen, phosphorus, and potassium for healthy growth. Soil tests can help determine specific nutrient needs.",
          },
          {
            id: 262,
            topic: "Timing",
            text: "Fertilizers should be applied before planting and during the early growth stages to promote vigorous development.",
          },
        ],
      },
      {
        id: 27,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 271,
            topic: "Pests",
            text: "Common pests affecting chia include aphids, spider mites, and whiteflies. Integrated pest management (IPM) practices can help control these pests.",
          },
          {
            id: 272,
            topic: "Diseases",
            text: "Chia can be susceptible to diseases such as downy mildew and root rot. Crop rotation and good field sanitation can help manage these issues.",
          },
        ],
      },
      {
        id: 28,
        topic: "Harvesting",
        children: [
          {
            id: 281,
            topic: "Time",
            text: "Chia plants are typically ready for harvest 3 to 4 months after planting, once the flowers have dried and the seed heads have turned brown.",
          },
          {
            id: 282,
            topic: "Signs of Ripeness",
            text: "Ripe chia seed heads will be dry, and the seeds should rattle when shaken. Seeds should have a dark color and firm texture.",
          },
          {
            id: 283,
            topic: "Method",
            text: "Harvesting can be done by cutting the seed heads and allowing them to dry further, or using a combine harvester for larger fields.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Chia seeds should be stored in a cool, dry place away from direct sunlight to maintain their quality. Properly stored seeds can last for several years.",
        children: [
          {
            id: 30.21,
            topic: "Preservation",
            text: "Chia seeds can be ground, soaked, or added to various foods for enhanced nutritional benefits.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Thinning is generally not required, but if seedlings are overcrowded, they can be thinned to allow for better growth and seed production.",
      },
    ],
  },
  {
    id: 9,
    name: "Walnuts",
    img: nutsImages.walnuts,
    inGeneralHeading: `Tiny Seeds with Immense Nutritional Benefits`,
    inGeneral: `Walnuts (Juglans regia) are nutrient-dense nuts known for their distinctive, wrinkled appearance and rich, buttery flavor. Originating from the regions of Central Asia and the Mediterranean, walnuts have been enjoyed for thousands of years for their culinary versatility and health benefits. They are a popular choice for snacking, baking, and cooking.
                  One of the standout features of walnuts is their high content of healthy fats, particularly polyunsaturated fats, including omega-3 fatty acids. These essential fatty acids, specifically alpha-linolenic acid (ALA), are known to support heart health by reducing inflammation and lowering bad cholesterol levels (LDL). Regular consumption of walnuts has been associated with a reduced risk of cardiovascular diseases.
                  In addition to healthy fats, walnuts are an excellent source of plant-based protein, providing about 4.3 grams of protein per ounce. They are also rich in antioxidants, including vitamin E and polyphenols, which help protect the body from oxidative stress and support overall cellular health.
                  Walnuts are packed with essential vitamins and minerals, including magnesium, phosphorus, and copper, which play vital roles in bone health, energy production, and maintaining a healthy metabolism. Their high fiber content, around 2 grams per ounce, promotes digestive health and helps regulate blood sugar levels.
                  Culinary-wise, walnuts can be enjoyed raw, roasted, or as an ingredient in a variety of dishes, from salads and baked goods to pestos and desserts.
                  In summary, walnuts are a nutrient powerhouse, offering a range of health benefits that support heart health, brain function, and overall well-being. Their rich flavor and versatility make them a valuable addition to a balanced diet.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: `Energy value:`,
        quantity: 654,
        measurementUnits: `kcal`,
        description: `– High in calories, providing substantial energy`,
      },
      {
        element: `Fats:`,
        quantity: 65.2,
        measurementUnits: `g`,
        description: `– Rich in healthy fats, providing a concentrated source of energy`,
      },
      {
        element: `Saturated fatty acids:`,
        quantity: 6.1,
        measurementUnits: `g`,
        description: `– Contains some saturated fats`,
      },
      {
        element: `Cholesterol:`,
        quantity: 0,
        measurementUnits: `mg`,
        description: `– Cholesterol-free`,
      },
      {
        element: `Sodium:`,
        quantity: 2,
        measurementUnits: `mg`,
        description: `– Very low sodium content`,
      },
      {
        element: `Potassium:`,
        quantity: 441,
        measurementUnits: `mg`,
        description: `– Good source of potassium, supports muscle and nerve function`,
      },
      {
        element: `Carbohydrates:`,
        quantity: 13.7,
        measurementUnits: `g`,
        description: `– Contains a moderate amount of carbohydrates`,
      },
      {
        element: `Fiber:`,
        quantity: 6.7,
        measurementUnits: `g`,
        description: `– Good source of dietary fiber, promotes digestion`,
      },
      {
        element: `Sugar:`,
        quantity: 2.6,
        measurementUnits: `g`,
        description: `– Contains a small amount of natural sugars`,
      },
      {
        element: `Proteins:`,
        quantity: 15.2,
        measurementUnits: `g`,
        description: `– Good source of plant-based protein`,
      },
      {
        element: `Vitamin C:`,
        quantity: 1.3,
        measurementUnits: `mg`,
        description: `– Contains a small amount of vitamin C`,
      },
      {
        element: `Calcium:`,
        quantity: 98,
        measurementUnits: `mg`,
        description: `– Source of calcium, supports bone health`,
      },
      {
        element: `Iron:`,
        quantity: 2.9,
        measurementUnits: `mg`,
        description: `– Good source of iron, supports red blood cell production`,
      },
      {
        element: `Vitamin D:`,
        quantity: 0,
        measurementUnits: `IU`,
        description: `– No vitamin D content`,
      },
      {
        element: `Vitamin B6:`,
        quantity: 0.5,
        measurementUnits: `mg`,
        description: `– Contains vitamin B6, supports brain health`,
      },
      {
        element: `Vitamin B12:`,
        quantity: 0,
        measurementUnits: `µg`,
        description: `– No vitamin B12 content`,
      },
      {
        element: `Magnesium:`,
        quantity: 158,
        measurementUnits: `mg`,
        description: `– Good source of magnesium, supports muscle and nerve function`,
      },
      {
        element: `Zinc:`,
        quantity: 3.1,
        measurementUnits: `mg`,
        description: `– Contains a good amount of zinc, supports immune function`,
      },
      {
        element: `Vitamin E:`,
        quantity: 0.7,
        measurementUnits: `mg`,
        description: `– Contains a small amount of vitamin E, an antioxidant`,
      },
      {
        element: `Selenium:`,
        quantity: 4.9,
        measurementUnits: `µg`,
        description: `– Contains a small amount of selenium, supports thyroid health`,
      },
    ],
    cultivationHeading:
      "Walnut cultivation requires specific conditions for optimal growth and nut production. Here is an overview of the key factors involved in growing walnuts:",
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Walnuts thrive in temperate climates with a range of temperatures. They require a cold winter to induce dormancy and need a growing season with temperatures between 20°C and 30°C (68°F to 86°F) for optimal nut development.",
          },
          {
            id: 212,
            topic: "Frost Sensitivity",
            text: "Walnut trees are sensitive to late spring frosts, which can damage flowers and significantly reduce yield. It is essential to select frost-resistant varieties if growing in regions prone to late frosts.",
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
            text: "Walnuts prefer slightly acidic to neutral soil, with a pH range of 6.0 to 7.5.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "Well-drained loamy or sandy soils are ideal for walnut cultivation. Heavy clay soils should be avoided as they retain too much moisture, which can lead to root rot.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Prior to planting, soil should be tilled and enriched with organic matter such as compost to improve drainage and fertility.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: "Popular walnut varieties include: -English Walnut- (Juglans regia) - known for its high-quality nuts and adaptability. -Black Walnut- (Juglans nigra) - valued for its strong wood and unique flavor.",
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "The best time to plant walnut trees is in the spring or fall when the trees are dormant.",
          },
          {
            id: 242,
            topic: "Spacing",
            text: "Trees should be spaced about 6 to 10 meters (20 to 33 feet) apart to allow for adequate sunlight and airflow.",
          },
          {
            id: 243,
            topic: "Pollination",
            text: "Most walnut varieties are wind-pollinated. It is beneficial to plant multiple varieties to enhance cross-pollination and improve yield.",
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
            text: "Young walnut trees require regular watering during the first few years to establish deep roots. The soil should remain consistently moist but not waterlogged.",
          },
          {
            id: 252,
            topic: "Mature Trees",
            text: "Once established, walnut trees are relatively drought-tolerant but will benefit from deep watering during dry spells, especially during the nut development phase.",
          },
          {
            id: 253,
            topic: "Irrigation Needs",
            text: "Walnuts generally require about 700 to 1,200 mm (28 to 47 inches) of water annually, depending on the climate and soil conditions.",
          },
        ],
      },
      {
        id: 26,
        topic: "Fertilization",
        children: [
          {
            id: 261,
            topic: "Nutrients",
            text: "Walnuts require a balanced fertilization program, including nitrogen, phosphorus, and potassium, to promote healthy growth and nut production.",
          },
          {
            id: 262,
            topic: "Timing",
            text: "Fertilizers should be applied in early spring before new growth begins. Soil tests can help determine specific nutrient needs.",
          },
        ],
      },
      {
        id: 27,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 271,
            topic: "Pests",
            text: "Common pests affecting walnuts include aphids, codling moths, and walnut husk fly. Integrated pest management (IPM) strategies can help control these pests.",
          },
          {
            id: 272,
            topic: "Diseases",
            text: "Walnuts can be susceptible to diseases such as walnut blight and root rot. Proper tree spacing, pruning for good air circulation, and timely fungicide applications can help manage these issues.",
          },
        ],
      },
      {
        id: 28,
        topic: "Harvesting",
        children: [
          {
            id: 281,
            topic: "Time",
            text: "Walnuts are typically harvested in late summer to early fall, once the outer husks begin to split and the nuts fall to the ground.",
          },
          {
            id: 282,
            topic: "Method",
            text: "Harvesting can be done manually or using mechanical shakers. Care should be taken to avoid bruising the nuts during harvest.",
          },
          {
            id: 283,
            topic: "Post-Harvest Handling",
            text: "After harvesting, walnuts should be cleaned and dried to prevent spoilage. Proper drying extends shelf life and enhances flavor.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Walnuts should be stored in a cool, dry place to maintain quality. Properly stored nuts can last for several months to a year.",
        children: [
          {
            id: 30.21,
            topic: "Preservation",
            text: "Walnuts can also be processed into oils or butters, or they can be roasted for added flavor.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Thinning may be necessary in young walnut trees to ensure adequate airflow and light penetration, promoting better growth and nut quality.",
      },
    ],
  },
  {
    id: 10,
    name: "Peanuts",
    img: nutsImages.peanuts,
    inGeneralHeading: `Versatile Legumes Packed with Nutrition`,
    inGeneral: `Peanuts (Arachis hypogaea), often mistaken for nuts, are actually legumes that grow underground. Native to South America, they are now cultivated worldwide and are cherished for their rich flavor, versatility, and numerous health benefits. Peanuts are commonly consumed in various forms, including whole, roasted, or as peanut butter, making them a popular snack and ingredient in many cuisines.
                  One of the most notable features of peanuts is their high protein content, providing about 25-30 grams of protein per 100 grams. This makes them an excellent source of plant-based protein, particularly for vegetarians and vegans. Peanuts also contain healthy fats, primarily monounsaturated and polyunsaturated fats, which can help lower bad cholesterol (LDL) levels and support heart health.
                  Peanuts are rich in essential vitamins and minerals, including vitamin E, niacin, folate, and magnesium. Vitamin E acts as an antioxidant, protecting cells from oxidative damage, while niacin and folate support energy metabolism and overall health. Magnesium plays a crucial role in muscle function and bone health.
                  In addition to their nutrient density, peanuts are high in dietary fiber, which aids digestion and helps regulate blood sugar levels. Their fiber content also contributes to feelings of fullness, making them a satisfying snack option.
                  Culinary-wise, peanuts can be enjoyed raw, roasted, or ground into creamy peanut butter. They are used in various dishes, from salads and stir-fries to desserts and sauces, adding flavor and texture.
                  In summary, peanuts are a nutrient-rich legume offering numerous health benefits, including heart health support, protein, and fiber. Their versatility and delicious taste make them a valuable addition to a balanced diet.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: `Energy value:`,
        quantity: 567,
        measurementUnits: `kcal`,
        description: `– High in calories, providing substantial energy`,
      },
      {
        element: `Fats:`,
        quantity: 49.2,
        measurementUnits: `g`,
        description: `– Rich in healthy fats, providing energy`,
      },
      {
        element: `Saturated fatty acids:`,
        quantity: 6.8,
        measurementUnits: `g`,
        description: `– Contains a moderate amount of saturated fats`,
      },
      {
        element: `Cholesterol:`,
        quantity: 0,
        measurementUnits: `mg`,
        description: `– Cholesterol-free`,
      },
      {
        element: `Sodium:`,
        quantity: 18,
        measurementUnits: `mg`,
        description: `– Very low in sodium`,
      },
      {
        element: `Potassium:`,
        quantity: 705,
        measurementUnits: `mg`,
        description: `– Good source of potassium, supports muscle function`,
      },
      {
        element: `Carbohydrates:`,
        quantity: 16.1,
        measurementUnits: `g`,
        description: `– Contains a moderate amount of carbohydrates`,
      },
      {
        element: `Fiber:`,
        quantity: 8.5,
        measurementUnits: `g`,
        description: `– Good source of dietary fiber, aids digestion`,
      },
      {
        element: `Sugar:`,
        quantity: 4.7,
        measurementUnits: `g`,
        description: `– Contains a small amount of natural sugars`,
      },
      {
        element: `Proteins:`,
        quantity: 25.8,
        measurementUnits: `g`,
        description: `– Excellent source of plant-based protein`,
      },
      {
        element: `Vitamin C:`,
        quantity: 0,
        measurementUnits: `mg`,
        description: `– No vitamin C content`,
      },
      {
        element: `Calcium:`,
        quantity: 92,
        measurementUnits: `mg`,
        description: `– Contains calcium, supports bone health`,
      },
      {
        element: `Iron:`,
        quantity: 4.6,
        measurementUnits: `mg`,
        description: `– Good source of iron, supports red blood cell production`,
      },
      {
        element: `Vitamin D:`,
        quantity: 0,
        measurementUnits: `IU`,
        description: `– No vitamin D content`,
      },
      {
        element: `Vitamin B6:`,
        quantity: 0.5,
        measurementUnits: `mg`,
        description: `– Contains a small amount of vitamin B6`,
      },
      {
        element: `Vitamin B12:`,
        quantity: 0,
        measurementUnits: `µg`,
        description: `– No vitamin B12 content`,
      },
      {
        element: `Magnesium:`,
        quantity: 168,
        measurementUnits: `mg`,
        description: `– Source of magnesium, supports muscle and nerve function`,
      },
      {
        element: `Zinc:`,
        quantity: 3.3,
        measurementUnits: `mg`,
        description: `– Provides zinc, supports immune function`,
      },
      {
        element: `Vitamin E:`,
        quantity: 8.3,
        measurementUnits: `mg`,
        description: `– Contains vitamin E, an antioxidant`,
      },
      {
        element: `Selenium:`,
        quantity: 7.2,
        measurementUnits: `µg`,
        description: `– Contains selenium, supports thyroid health`,
      },
    ],
    cultivationHeading:
      "Peanut cultivation requires specific conditions for optimal growth and nut production. Here is an overview of the key factors involved in growing peanuts:",
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Peanuts thrive in warm climates, with ideal temperatures ranging from 20°C to 30°C (68°F to 86°F). They are sensitive to frost and require a frost-free growing season of at least 120 to 150 days.",
          },
          {
            id: 212,
            topic: "Rainfall",
            text: "Peanuts need consistent rainfall, ideally between 500 mm and 1,200 mm (20 to 47 inches) annually. However, they can tolerate short periods of drought during their growing season.",
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
            text: "Peanuts prefer slightly acidic to neutral soil, with a pH range of 5.8 to 7.0.",
          },
          {
            id: 222,
            topic: "Soil Type",
            text: "Well-drained sandy loam or loamy soils are ideal for peanut cultivation. Heavy clay soils should be avoided as they retain too much moisture, leading to root rot.",
          },
          {
            id: 223,
            topic: "Soil Preparation",
            text: "Before planting, the soil should be tilled and enriched with organic matter, such as compost, to improve fertility and drainage.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: "Popular peanut varieties include: -Valencia- (known for its sweet flavor and typically grown in the Southwest). -Runner- (commonly used for peanut butter). -Spanish- (smaller nuts with a higher oil content, often used in snacks).",
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "Peanuts should be planted after the last frost date in the spring, when soil temperatures reach around 18°C (65°F).",
          },
          {
            id: 242,
            topic: "Spacing",
            text: "Seeds should be planted about 2.5 to 5 cm (1 to 2 inches) deep, with spacing of about 20 to 30 cm (8 to 12 inches) between plants in rows spaced 75 to 90 cm (30 to 36 inches) apart.",
          },
          {
            id: 243,
            topic: "Seed Quality",
            text: "Use high-quality, disease-free seeds to ensure a good germination rate and healthy plants.",
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
            text: "Young peanut plants require consistent moisture during the establishment phase. Regular watering is crucial, especially during dry spells.",
          },
          {
            id: 252,
            topic: "Mature Plants",
            text: "Once established, peanuts require about 500 to 800 mm (20 to 31 inches) of water annually. Irrigation may be needed during dry periods, particularly during flowering and pod development.",
          },
          {
            id: 253,
            topic: "Avoid Waterlogging",
            text: "Peanuts do not tolerate waterlogged conditions, which can lead to root diseases. Ensure good drainage in the field.",
          },
        ],
      },
      {
        id: 26,
        topic: "Fertilization",
        children: [
          {
            id: 261,
            topic: "Nutrients",
            text: "Peanuts benefit from fertilization, especially with phosphorus and potassium. They can fix atmospheric nitrogen, reducing the need for nitrogen fertilizers.",
          },
          {
            id: 262,
            topic: "Timing",
            text: "Fertilizers should be applied at planting and again during the growing season based on soil test recommendations.",
          },
        ],
      },
      {
        id: 27,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 271,
            topic: "Pests",
            text: "Common pests affecting peanuts include aphids, leafhoppers, and root-knot nematodes. Integrated pest management (IPM) strategies can help control these pests.",
          },
          {
            id: 272,
            topic: "Diseases",
            text: "Peanuts are susceptible to diseases such as leaf spot, peanut root rot, and white mold. Crop rotation, proper spacing, and fungicide applications can help manage these issues.",
          },
        ],
      },
      {
        id: 28,
        topic: "Harvesting",
        children: [
          {
            id: 281,
            topic: "Time",
            text: "Peanuts are usually ready for harvest 120 to 150 days after planting, once the leaves turn yellow and begin to drop.",
          },
          {
            id: 282,
            topic: "Method",
            text: "Peanuts can be harvested using a mechanical digger that lifts the plants from the ground. The plants should be left in the field to dry for a few days.",
          },
          {
            id: 283,
            topic: "Post-Harvest Handling",
            text: "After harvesting, peanuts should be cleaned, dried, and stored in a cool, dry place to prevent spoilage.",
          },
        ],
      },
      {
        id: 30.2,
        topic: "Storage",
        text: "Peanuts should be stored in a cool, dry, and well-ventilated area. Properly stored peanuts can last for several months to a year without losing quality.",
        children: [
          {
            id: 30.21,
            topic: "Preservation",
            text: "Peanuts can also be roasted, salted, or processed into peanut butter for extended use.",
          },
        ],
      },
      {
        id: 31.2,
        topic: "Thinning",
        text: "Thinning may be necessary if plants are overcrowded, which can lead to poor air circulation and increased disease risk. Maintain proper spacing to promote healthy growth.",
      },
    ],
  },
];

export default nuts;
