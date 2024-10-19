import { cerealsImages } from "./cerealsImages";

const cereals = [
  {
    id: 1,
    name: "Buckwheat",
    img: cerealsImages.buckwheat,
    inGeneralHeading: `The Nutrient-Packed Gluten-Free Grain`,
    inGeneral: `Buckwheat, scientifically known as Fagopyrum esculentum, is a highly nutritious pseudo-grain that has been cultivated for centuries. Despite its name, buckwheat is not related to wheat and is naturally gluten-free, making it a popular choice for people with celiac disease or gluten sensitivity. Known for its nutty flavor and earthy undertones, buckwheat can be enjoyed in various forms, such as groats, flour, or noodles, and is a staple in traditional cuisines around the world.
                        One of the most notable nutritional benefits of buckwheat is its rich protein content. Buckwheat contains all nine essential amino acids, including lysine, making it a complete protein source, which is rare for plant-based foods. This makes it an excellent choice for vegetarians and vegans looking to diversify their protein intake. It is also a good source of dietary fiber, which aids in digestion, promotes satiety, and helps regulate blood sugar levels.
                        Buckwheat is packed with essential vitamins and minerals, including magnesium, manganese, copper, and B vitamins, such as niacin, folate, and riboflavin. These nutrients play crucial roles in energy metabolism, brain function, and heart health. Buckwheat also contains antioxidants like rutin and quercetin, which help reduce inflammation, improve circulation, and protect against oxidative stress, potentially lowering the risk of chronic diseases.
                        Culinary-wise, buckwheat is incredibly versatile. It can be cooked like rice, used in porridge, added to soups and salads, or ground into flour for making pancakes, bread, and noodles, such as soba in Japanese cuisine.
                        In summary, buckwheat is a nutrient-dense, gluten-free grain that offers a wide range of health benefits. Its high protein content, fiber, and array of vitamins and minerals make it a valuable addition to any balanced diet.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 343,
        measurementUnits: "kcal",
        description:
          "– Moderate in calories, making it a good source of energy without being too high in calories.",
      },
      {
        element: "Fats:",
        quantity: 3.4,
        measurementUnits: "g",
        description:
          "– Low in fat, with healthy fats including polyunsaturated and monounsaturated fats.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 0.7,
        measurementUnits: "g",
        description: "– Very low in saturated fats, supporting heart health.",
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
          "– Very low in sodium, beneficial for managing blood pressure.",
      },
      {
        element: "Potassium:",
        quantity: 460,
        measurementUnits: "mg",
        description:
          "– Good source of potassium, which helps regulate fluid balance and muscle contractions.",
      },
      {
        element: "Carbohydrates:",
        quantity: 71.5,
        measurementUnits: "g",
        description:
          "– A rich source of carbohydrates, providing sustained energy.",
      },
      {
        element: "Fiber:",
        quantity: 10,
        measurementUnits: "g",
        description:
          "– High in dietary fiber, promoting healthy digestion and gut health.",
      },
      {
        element: "Sugar:",
        quantity: 0.9,
        measurementUnits: "g",
        description: "– Contains minimal amounts of natural sugars.",
      },
      {
        element: "Proteins:",
        quantity: 13.3,
        measurementUnits: "g",
        description:
          "– A good source of plant-based protein, beneficial for muscle repair and growth.",
      },
      {
        element: "Vitamin C:",
        quantity: 0,
        measurementUnits: "mg",
        description:
          "– Lacks vitamin C, which is typically obtained from fruits and vegetables.",
      },
      {
        element: "Calcium:",
        quantity: 18,
        measurementUnits: "mg",
        description:
          "– Provides a small amount of calcium, contributing to bone health.",
      },
      {
        element: "Iron:",
        quantity: 2.2,
        measurementUnits: "mg",
        description:
          "– Contains iron, essential for blood health and preventing anemia.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description:
          "– No vitamin D present, typically obtained from sunlight or fortified foods.",
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
        description:
          "– Lacks vitamin B12, which is primarily found in animal products.",
      },
      {
        element: "Magnesium:",
        quantity: 231,
        measurementUnits: "mg",
        description:
          "– High in magnesium, essential for muscle function, energy production, and nerve health.",
      },
      {
        element: "Zinc:",
        quantity: 2.4,
        measurementUnits: "mg",
        description:
          "– Contains zinc, which is beneficial for immune system support and cell repair.",
      },
      {
        element: "Vitamin E:",
        quantity: 0.8,
        measurementUnits: "mg",
        description: "– Low in vitamin E, though present in small amounts.",
      },
    ],
    cultivationHeading:
      "Buckwheat cultivation involves growing a hardy, fast-maturing crop that is tolerant of poor soil conditions. Below are key aspects of buckwheat cultivation:",
    cultivation: [
      {
        id: 21,
        topic: "Climate",
        children: [
          {
            id: 211,
            topic: "Temperature",
            text: "Buckwheat thrives in temperate climates with cool, moist growing conditions. Optimal temperatures range from 15°C to 25°C (59°F to 77°F). It does not tolerate frost well, so late planting is often necessary to avoid cold temperatures.",
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
            text: "Buckwheat prefers slightly acidic soil with a pH range of 5.0 to 7.0. It is tolerant of poor soil quality and does not require high fertility.",
          },
          {
            id: 222,
            topic: "Fertility",
            text: "Minimal fertilizer is needed for buckwheat, as it grows well in nutrient-poor soils. However, adding some organic matter or compost can improve yields. Too much nitrogen can cause the plant to grow excessively tall and lodge (fall over).",
          },
          {
            id: 223,
            topic: "Drainage",
            text: "Buckwheat grows best in well-drained soils. It does not tolerate waterlogging and will perform poorly in soggy conditions.",
          },
        ],
      },
      {
        id: 23,
        topic: "Varieties",
        text: "Some common varieties of buckwheat include:\n- Common buckwheat (Fagopyrum esculentum)\n- Tartary buckwheat (Fagopyrum tataricum), known for its higher tolerance to cold and poor soils.",
      },
      {
        id: 24,
        topic: "Planting",
        children: [
          {
            id: 241,
            topic: "Time",
            text: "Buckwheat is typically planted in late spring or early summer after the risk of frost has passed. Planting too early may expose the crop to frost damage.",
          },
          {
            id: 242,
            topic: "Spacing",
            text: "Buckwheat should be broadcasted or drilled at a seed rate of 50–75 kg per hectare (44–67 pounds per acre). Plant spacing can be closer together compared to other crops due to its compact growth habit.",
          },
        ],
      },
      {
        id: 25,
        topic: "Watering",
        children: [
          {
            id: 251,
            topic: "Minimal Watering",
            text: "Buckwheat is drought-tolerant and requires minimal watering once established. Excessive moisture can hinder its growth.",
          },
        ],
      },
      {
        id: 26,
        topic: "Pruning",
        text: "Pruning is not required for buckwheat. It has a simple growth habit and does not require much maintenance once established.",
      },
      {
        id: 27,
        topic: "Fertilization",
        children: [
          {
            id: 271,
            topic: "Nutrients",
            text: "Apply light organic fertilizers or compost before planting if necessary, as buckwheat is typically grown in low-fertility soils. High nutrient levels can reduce yields.",
          },
        ],
      },
      {
        id: 28,
        topic: "Pest and Disease Control",
        text: "Buckwheat is generally resistant to pests and diseases due to its fast growth and ability to outcompete weeds. However, common pests such as aphids and flea beetles can affect the crop. Pest control is rarely needed, as buckwheat's short growing season helps avoid major issues.",
      },
      {
        id: 29,
        topic: "Harvesting",
        children: [
          {
            id: 291,
            topic: "Signs of Maturity",
            text: "Buckwheat matures in about 10–12 weeks. The seeds are ready for harvesting when they turn dark brown, and the lower leaves of the plant start to dry out. Harvesting should be timed carefully to prevent shattering of seeds on the ground.",
          },
        ],
      },
      {
        id: 30.1,
        topic: "Storage",
        text: "After harvesting, buckwheat seeds can be stored in a dry, cool place. Buckwheat flour is best used fresh, as it has a shorter shelf life than wheat flour due to its higher oil content.",
      },
    ],
  },
  {
    id: 2,
    name: "Barley",
    img: cerealsImages.barley,
    inGeneralHeading: `The Ancient and Resilient Grain`,
    inGeneral: `Barley, scientifically known as Hordeum vulgare, is one of the oldest cultivated grains in the world, dating back over 10,000 years. It has long been valued for its versatility in cooking and its impressive nutritional profile. With its chewy texture and mild, nutty flavor, barley can be enjoyed in a variety of forms, from whole grain to flour, and is used in soups, stews, salads, breads, and even beverages like beer and whiskey.
                        One of barley’s standout features is its high fiber content, particularly beta-glucan, a soluble fiber known for its cholesterol-lowering properties. Consuming barley regularly can help improve heart health by reducing LDL (bad) cholesterol levels, regulating blood pressure, and improving overall cardiovascular function. The fiber in barley also aids digestion by promoting regular bowel movements and feeding beneficial gut bacteria, contributing to better gut health.
                        Barley is a good source of essential vitamins and minerals, including B vitamins like niacin, thiamine, and riboflavin, which are important for energy metabolism and brain function. It also provides minerals such as magnesium, manganese, selenium, and iron, which support bone health, antioxidant defense, and oxygen transport in the body.
                        In addition to its health benefits, barley has a low glycemic index, which means it causes a slower, more gradual rise in blood sugar levels. This makes it an excellent grain for individuals managing diabetes or those looking to maintain stable energy levels throughout the day.
                        Culinary-wise, barley is incredibly versatile. It can be used in soups and stews to add bulk and nutrition, served as a side dish similar to rice or quinoa, or even incorporated into baked goods for added texture and nutrients.
                        In summary, barley is an ancient grain with a wide array of health benefits. Its high fiber content, essential nutrients, and versatility in the kitchen make it a nutritious and delicious addition to any diet.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 354,
        measurementUnits: "kcal",
        description:
          "– Moderate in calories, providing a good amount of energy.",
      },
      {
        element: "Fats:",
        quantity: 2.3,
        measurementUnits: "g",
        description:
          "– Low in fat, primarily consisting of healthy unsaturated fats.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 0.5,
        measurementUnits: "g",
        description:
          "– Very low in saturated fats, which is beneficial for heart health.",
      },
      {
        element: "Cholesterol:",
        quantity: 0,
        measurementUnits: "mg",
        description:
          "– Completely cholesterol-free, supporting cardiovascular health.",
      },
      {
        element: "Sodium:",
        quantity: 12,
        measurementUnits: "mg",
        description:
          "– Contains a small amount of sodium, contributing to blood pressure management.",
      },
      {
        element: "Potassium:",
        quantity: 452,
        measurementUnits: "mg",
        description:
          "– A good source of potassium, important for muscle function and fluid balance.",
      },
      {
        element: "Carbohydrates:",
        quantity: 73.5,
        measurementUnits: "g",
        description: "– Rich in carbohydrates, providing long-lasting energy.",
      },
      {
        element: "Fiber:",
        quantity: 17.3,
        measurementUnits: "g",
        description:
          "– High in dietary fiber, aiding in digestion and promoting gut health.",
      },
      {
        element: "Sugar:",
        quantity: 0.8,
        measurementUnits: "g",
        description: "– Contains very small amounts of natural sugars.",
      },
      {
        element: "Proteins:",
        quantity: 12.5,
        measurementUnits: "g",
        description:
          "– A good source of plant-based protein, supporting muscle repair and growth.",
      },
      {
        element: "Vitamin C:",
        quantity: 0,
        measurementUnits: "mg",
        description:
          "– Lacks vitamin C, which is often found in fruits and vegetables.",
      },
      {
        element: "Calcium:",
        quantity: 29,
        measurementUnits: "mg",
        description:
          "– Provides a small amount of calcium, contributing to bone strength.",
      },
      {
        element: "Iron:",
        quantity: 3.6,
        measurementUnits: "mg",
        description:
          "– A good source of iron, important for maintaining healthy blood.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description:
          "– No vitamin D, which is typically obtained from sunlight exposure.",
      },
      {
        element: "Vitamin B6:",
        quantity: 0.3,
        measurementUnits: "mg",
        description: "– Supports metabolism and helps brain function.",
      },
      {
        element: "Vitamin B12:",
        quantity: 0,
        measurementUnits: "µg",
        description:
          "– Does not contain vitamin B12, commonly found in animal products.",
      },
      {
        element: "Magnesium:",
        quantity: 133,
        measurementUnits: "mg",
        description:
          "– A good source of magnesium, important for muscle and nerve function.",
      },
      {
        element: "Zinc:",
        quantity: 2.1,
        measurementUnits: "mg",
        description:
          "– Contains zinc, beneficial for the immune system and cell repair.",
      },
      {
        element: "Vitamin E:",
        quantity: 0.5,
        measurementUnits: "mg",
        description:
          "– Contains a small amount of vitamin E, an antioxidant that supports cell protection.",
      },
    ],
    cultivationHeading:
      "Barley cultivation requires specific conditions to achieve optimal growth and yield. Below is an overview of the key factors involved in growing barley:",
    cultivation: [
      {
        id: 41,
        topic: "Climate",
        children: [
          {
            id: 411,
            topic: "Temperature",
            text: "Barley thrives in cool, temperate climates. It can tolerate a wide range of temperatures but performs best between 12°C and 24°C (54°F to 75°F). Barley is also more tolerant of cold than other cereal crops like wheat.",
          },
          {
            id: 412,
            topic: "Rainfall",
            text: "Barley requires moderate rainfall, ideally between 300 mm and 400 mm (12 to 16 inches) during the growing season. Excessive moisture can lead to disease, while drought can reduce yield.",
          },
        ],
      },
      {
        id: 42,
        topic: "Soil",
        children: [
          {
            id: 421,
            topic: "pH",
            text: "Barley prefers well-drained soil with a pH range between 6.0 and 7.5. It is fairly tolerant of both slightly acidic and slightly alkaline soils.",
          },
          {
            id: 422,
            topic: "Soil Type",
            text: "The best soil for barley is fertile, loamy soil. It can also grow in sandy loam and clay soils, provided they have good drainage. Waterlogged soil should be avoided to prevent root rot.",
          },
          {
            id: 423,
            topic: "Soil Preparation",
            text: "Before planting, the soil should be plowed or tilled to break up compaction and improve root penetration. Adding organic matter like compost or manure enhances fertility and structure.",
          },
        ],
      },
      {
        id: 43,
        topic: "Varieties",
        text: "Popular barley varieties include: -Two-row Barley-: Often used for malting and brewing. -Six-row Barley-: More commonly used for animal feed and food production.",
      },
      {
        id: 44,
        topic: "Planting",
        children: [
          {
            id: 441,
            topic: "Time",
            text: "Barley can be planted in either the spring or fall, depending on the variety. Spring barley is planted as soon as the soil can be worked, while winter barley is planted in the fall before the first frost.",
          },
          {
            id: 442,
            topic: "Spacing",
            text: "Seeds should be planted about 2 to 5 cm (1 to 2 inches) deep, with row spacing of 15 to 20 cm (6 to 8 inches). Proper spacing helps ensure good airflow and reduces disease risk.",
          },
          {
            id: 443,
            topic: "Seed Rate",
            text: "Barley typically requires a seeding rate of 80 to 100 kg per hectare (71 to 89 pounds per acre) for optimal yield.",
          },
        ],
      },
      {
        id: 45,
        topic: "Watering",
        children: [
          {
            id: 451,
            topic: "Establishment Phase",
            text: "Barley needs regular watering during the first few weeks of growth to ensure germination and root establishment.",
          },
          {
            id: 452,
            topic: "Mature Plants",
            text: "Once established, barley is relatively drought-tolerant but still requires about 25-50 mm (1-2 inches) of water per week during critical growth stages, such as tillering and grain filling.",
          },
        ],
      },
      {
        id: 46,
        topic: "Pruning",
        text: "Barley does not require pruning. However, managing crop density and thinning overly crowded plants can improve air circulation and reduce the risk of fungal diseases.",
      },
      {
        id: 47,
        topic: "Fertilization",
        children: [
          {
            id: 471,
            topic: "Nutrients",
            text: "Barley benefits from balanced fertilizers, especially nitrogen, phosphorus, and potassium. A typical application rate for nitrogen is 80-100 kg per hectare, depending on the soil’s natural fertility.",
          },
          {
            id: 472,
            topic: "Timing",
            text: "Apply fertilizer before planting or at the early growth stages. In some cases, a side-dressing of nitrogen may be required during tillering for optimal yield.",
          },
        ],
      },
      {
        id: 48,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 481,
            topic: "Pests",
            text: "Common pests include aphids, armyworms, and wireworms. Integrated pest management (IPM), such as the use of biological controls or targeted insecticides, can be effective.",
          },
          {
            id: 482,
            topic: "Diseases",
            text: "Barley is susceptible to diseases such as powdery mildew, leaf rust, and scald. Preventive measures include crop rotation, proper spacing, and the use of fungicides if needed.",
          },
        ],
      },
      {
        id: 49,
        topic: "Harvesting",
        children: [
          {
            id: 491,
            topic: "Time",
            text: "Barley is typically ready for harvest 60 to 70 days after planting for spring varieties, and 180 days for winter varieties. The grain should be harvested when the plant has turned golden brown and the seeds are hard.",
          },
          {
            id: 492,
            topic: "Method",
            text: "Barley can be harvested mechanically using a combine harvester. The crop should be cut when the grain moisture content is about 14% to prevent mold.",
          },
        ],
      },
      {
        id: 50.2,
        topic: "Storage",
        text: "Barley should be dried to a moisture content of 12-13% before storage to prevent spoilage. Once dried, it can be stored in cool, dry conditions for several months.",
      },
      {
        id: 51.2,
        topic: "Thinning",
        text: "Barley does not require thinning, but reducing overcrowded plants can promote healthy growth and reduce competition for nutrients.",
      },
    ],
  },
  {
    id: 3,
    name: "Corn",
    img: cerealsImages.corn,
    inGeneralHeading: `The Versatile and Staple Crop`,
    inGeneral: `Corn, also known as maize (Zea mays), is one of the world’s most widely grown crops and a dietary staple for millions of people across the globe. Native to the Americas, corn has been cultivated for thousands of years and is valued for its versatility in both culinary uses and industrial applications. Whether eaten on the cob, popped, ground into flour, or processed into corn syrup, this grain is found in a wide array of foods and products.
                    Corn is a rich source of carbohydrates, providing energy for the body. It is particularly high in starch, making it a key source of calories in many diets. However, it also offers significant nutritional value. Corn contains several essential vitamins and minerals, including B vitamins like thiamine and folate, which are important for energy production and cell function. It is also a good source of magnesium and phosphorus, which are crucial for bone health, as well as small amounts of potassium, which supports heart function.
                    Corn, especially yellow varieties, is rich in antioxidants like carotenoids, particularly lutein and zeaxanthin, which are known to support eye health by helping to reduce the risk of cataracts and age-related macular degeneration. Whole corn is also a good source of fiber, which aids digestion, supports gut health, and helps maintain stable blood sugar levels.
                    Culinary-wise, corn is incredibly versatile. It can be boiled or grilled on the cob, popped for snacks, or ground into cornmeal for baking breads, tortillas, and other foods. Corn is also used to make polenta, grits, and even beverages like atole and chicha.
                    In summary, corn is a highly versatile and nutritious crop that provides energy, essential vitamins, minerals, and antioxidants. Its adaptability in the kitchen and wide-ranging health benefits make it a valuable component of diets around the world.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 365,
        measurementUnits: "kcal",
        description:
          "– Moderate in calories, providing a good source of energy.",
      },
      {
        element: "Fats:",
        quantity: 4.7,
        measurementUnits: "g",
        description:
          "– Low in fat, with a mix of healthy fats including unsaturated fats.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 0.7,
        measurementUnits: "g",
        description:
          "– Contains a small amount of saturated fats, supporting heart health.",
      },
      {
        element: "Cholesterol:",
        quantity: 0,
        measurementUnits: "mg",
        description: "– Cholesterol-free, which is good for heart health.",
      },
      {
        element: "Sodium:",
        quantity: 35,
        measurementUnits: "mg",
        description:
          "– Low in sodium, which helps maintain healthy blood pressure.",
      },
      {
        element: "Potassium:",
        quantity: 287,
        measurementUnits: "mg",
        description:
          "– Provides potassium, important for fluid balance and muscle function.",
      },
      {
        element: "Carbohydrates:",
        quantity: 74,
        measurementUnits: "g",
        description:
          "– High in carbohydrates, making it a good source of sustained energy.",
      },
      {
        element: "Fiber:",
        quantity: 7.3,
        measurementUnits: "g",
        description:
          "– A decent source of dietary fiber, aiding digestion and gut health.",
      },
      {
        element: "Sugar:",
        quantity: 0.6,
        measurementUnits: "g",
        description: "– Contains a small amount of natural sugars.",
      },
      {
        element: "Proteins:",
        quantity: 9.4,
        measurementUnits: "g",
        description:
          "– A good plant-based source of protein, essential for muscle growth and repair.",
      },
      {
        element: "Vitamin C:",
        quantity: 6.8,
        measurementUnits: "mg",
        description:
          "– Contains vitamin C, which supports the immune system and skin health.",
      },
      {
        element: "Calcium:",
        quantity: 7,
        measurementUnits: "mg",
        description:
          "– Contains a small amount of calcium, contributing to bone health.",
      },
      {
        element: "Iron:",
        quantity: 2.7,
        measurementUnits: "mg",
        description:
          "– A good source of iron, essential for blood health and preventing anemia.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description:
          "– Does not contain vitamin D, which is typically obtained from sunlight or fortified foods.",
      },
      {
        element: "Vitamin B6:",
        quantity: 0.6,
        measurementUnits: "mg",
        description: "– Supports brain function and metabolism.",
      },
      {
        element: "Vitamin B12:",
        quantity: 0,
        measurementUnits: "µg",
        description:
          "– Lacks vitamin B12, which is generally found in animal products.",
      },
      {
        element: "Magnesium:",
        quantity: 127,
        measurementUnits: "mg",
        description:
          "– Contains magnesium, important for muscle and nerve function.",
      },
      {
        element: "Zinc:",
        quantity: 2.2,
        measurementUnits: "mg",
        description:
          "– Provides zinc, supporting the immune system and wound healing.",
      },
      {
        element: "Vitamin E:",
        quantity: 0.5,
        measurementUnits: "mg",
        description:
          "– Contains a small amount of vitamin E, an antioxidant that protects cells.",
      },
    ],
    cultivationHeading:
      "Corn (maize) cultivation requires specific conditions to ensure optimal growth and high yields. Below is an overview of the key factors involved in growing corn:",
    cultivation: [
      {
        id: 61,
        topic: "Climate",
        children: [
          {
            id: 611,
            topic: "Temperature",
            text: "Corn thrives in warm, sunny climates. The optimal temperature for growth ranges between 18°C and 24°C (64°F to 75°F), though it can tolerate temperatures up to 32°C (90°F). Corn is highly sensitive to frost.",
          },
          {
            id: 612,
            topic: "Rainfall",
            text: "Corn requires moderate to high rainfall, ideally between 500 mm and 800 mm (20 to 32 inches) during the growing season. Drought conditions can significantly reduce yields, especially during the flowering stage.",
          },
        ],
      },
      {
        id: 62,
        topic: "Soil",
        children: [
          {
            id: 621,
            topic: "pH",
            text: "Corn prefers well-drained soil with a pH range between 5.8 and 7.0. It can tolerate slightly acidic soils but performs best in neutral to slightly alkaline conditions.",
          },
          {
            id: 622,
            topic: "Soil Type",
            text: "Loamy soils rich in organic matter are ideal for corn, as they provide good drainage and nutrient availability. Corn can also be grown in sandy or clay soils, as long as proper irrigation and drainage are maintained.",
          },
          {
            id: 623,
            topic: "Soil Preparation",
            text: "Before planting, the soil should be tilled and amended with organic matter, such as compost or well-rotted manure, to improve fertility and structure. A soil test is recommended to determine nutrient needs.",
          },
        ],
      },
      {
        id: 63,
        topic: "Varieties",
        text: "Popular corn varieties include: -Sweet Corn-: Grown for fresh consumption. -Field Corn-: Used for animal feed, starch, or ethanol production. -Popcorn-: A special variety with hard kernels that pop when heated.",
      },
      {
        id: 64,
        topic: "Planting",
        children: [
          {
            id: 641,
            topic: "Time",
            text: "Corn is best planted in the spring, after the danger of frost has passed and the soil temperature has reached at least 10°C (50°F) for optimal germination.",
          },
          {
            id: 642,
            topic: "Spacing",
            text: "Corn seeds should be planted about 2.5 to 5 cm (1 to 2 inches) deep, with rows spaced 75 cm (30 inches) apart. Plants within each row should be spaced 20 to 30 cm (8 to 12 inches) apart.",
          },
          {
            id: 643,
            topic: "Seed Rate",
            text: "A seeding rate of 25,000 to 35,000 plants per hectare (10,000 to 14,000 per acre) is recommended, depending on the variety and growing conditions.",
          },
        ],
      },
      {
        id: 65,
        topic: "Watering",
        children: [
          {
            id: 651,
            topic: "Establishment Phase",
            text: "Corn requires consistent moisture during the early stages of growth. Regular watering is needed to ensure germination and seedling establishment.",
          },
          {
            id: 652,
            topic: "Mature Plants",
            text: "Corn requires about 25-50 mm (1-2 inches) of water per week during the growing season. Adequate watering during the tasseling and silking stages is critical to maximize grain yield.",
          },
        ],
      },
      {
        id: 66,
        topic: "Pruning",
        text: "Corn does not require pruning. However, controlling weeds around the base of the plants is important to reduce competition for nutrients and water.",
      },
      {
        id: 67,
        topic: "Fertilization",
        children: [
          {
            id: 671,
            topic: "Nutrients",
            text: "Corn is a heavy feeder and requires nitrogen-rich fertilizers for optimal growth. A balanced NPK fertilizer (e.g., 10-10-10) or targeted nitrogen application (e.g., urea) can be used.",
          },
          {
            id: 672,
            topic: "Timing",
            text: "Apply fertilizers at the time of planting and during the vegetative growth stages. A side-dressing of nitrogen during the 4 to 6 leaf stage (V4-V6) is beneficial for achieving high yields.",
          },
        ],
      },
      {
        id: 68,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 681,
            topic: "Pests",
            text: "Common pests that affect corn include corn earworm, European corn borer, and armyworms. Integrated pest management (IPM), such as crop rotation, pest-resistant varieties, and biological controls, can help manage these pests.",
          },
          {
            id: 682,
            topic: "Diseases",
            text: "Corn is susceptible to diseases such as leaf blight, rust, and stalk rot. Disease-resistant varieties and proper crop management practices, including adequate spacing and proper irrigation, can help prevent infections.",
          },
        ],
      },
      {
        id: 69,
        topic: "Harvesting",
        children: [
          {
            id: 691,
            topic: "Time",
            text: "Corn is typically harvested 60 to 100 days after planting, depending on the variety. Sweet corn is ready when the kernels are full and milky, while field corn is harvested after the kernels have fully dried.",
          },
          {
            id: 692,
            topic: "Method",
            text: "Corn can be harvested manually or using mechanical harvesters, especially for large-scale production. For sweet corn, harvest when the silk has turned brown, and the kernels are plump.",
          },
        ],
      },
      {
        id: 70.2,
        topic: "Storage",
        text: "Sweet corn is best consumed fresh but can be refrigerated for up to a week. For field corn, the grains should be dried to a moisture content of around 15% and stored in a cool, dry place for long-term storage.",
      },
      {
        id: 71.2,
        topic: "Thinning",
        text: "Thinning is important in corn cultivation, especially if seeds were planted too closely together. Thin seedlings when they are 10 to 15 cm (4 to 6 inches) tall to ensure proper spacing and healthy growth.",
      },
    ],
  },
  {
    id: 4,
    name: "Millet",
    img: cerealsImages.millet,
    inGeneralHeading: `The Ancient and Nutritious Grain`,
    inGeneral: `Millet, a group of small-seeded grasses belonging to the Poaceae family, is an ancient grain that has been cultivated for thousands of years, particularly in Asia and Africa. It is highly regarded for its drought resistance, making it an essential staple in regions with arid climates. Millet comes in several varieties, including pearl, foxtail, proso, and finger millet, each with a slightly different taste and texture. It is valued not only for its versatility in cooking but also for its impressive nutritional profile.
                    Millet is naturally gluten-free, making it a popular choice for individuals with celiac disease or gluten sensitivity. It is rich in complex carbohydrates, which provide sustained energy, and offers a good amount of dietary fiber. Fiber aids in digestion, promotes a feeling of fullness, and helps regulate blood sugar levels, making millet beneficial for those managing diabetes or looking to maintain stable energy levels.
                    Millet is also a rich source of essential vitamins and minerals. It contains B vitamins, such as niacin, thiamine, and riboflavin, which play critical roles in metabolism, brain function, and energy production. Additionally, millet is a good source of magnesium, phosphorus, iron, and manganese, which support bone health, cardiovascular health, and overall cellular function.
                    In addition to these nutrients, millet contains antioxidants, including phenolic compounds and flavonoids, which help reduce inflammation and protect the body from oxidative stress. This contributes to a lower risk of chronic diseases, such as heart disease and cancer.
                    Culinary-wise, millet is extremely versatile. It can be cooked like rice and used as a base for salads, pilafs, or porridges. Its mild flavor makes it suitable for both savory and sweet dishes. Millet flour can also be used in baking, especially in gluten-free recipes.
                    In summary, millet is a nutritious, gluten-free grain with a wealth of health benefits. Its versatility in cooking and ability to thrive in harsh climates make it an important and valuable grain in diets around the world.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 378,
        measurementUnits: "kcal",
        description:
          "– Relatively high in calories, providing substantial energy for the body.",
      },
      {
        element: "Fats:",
        quantity: 4.2,
        measurementUnits: "g",
        description:
          "– Contains healthy fats, including polyunsaturated fats beneficial for heart health.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 0.7,
        measurementUnits: "g",
        description:
          "– Low in saturated fats, supporting cardiovascular health.",
      },
      {
        element: "Cholesterol:",
        quantity: 0,
        measurementUnits: "mg",
        description:
          "– Cholesterol-free, which is good for maintaining heart health.",
      },
      {
        element: "Sodium:",
        quantity: 5,
        measurementUnits: "mg",
        description: "– Very low in sodium, making it a heart-healthy option.",
      },
      {
        element: "Potassium:",
        quantity: 195,
        measurementUnits: "mg",
        description:
          "– Provides potassium, essential for fluid balance and muscle function.",
      },
      {
        element: "Carbohydrates:",
        quantity: 72.8,
        measurementUnits: "g",
        description: "– High in carbohydrates, providing long-lasting energy.",
      },
      {
        element: "Fiber:",
        quantity: 8.5,
        measurementUnits: "g",
        description:
          "– A good source of dietary fiber, promoting digestion and gut health.",
      },
      {
        element: "Sugar:",
        quantity: 0.2,
        measurementUnits: "g",
        description:
          "– Very low in sugar, a good option for maintaining balanced blood sugar levels.",
      },
      {
        element: "Proteins:",
        quantity: 11.0,
        measurementUnits: "g",
        description:
          "– A decent source of plant-based protein, useful for muscle growth and repair.",
      },
      {
        element: "Vitamin C:",
        quantity: 0,
        measurementUnits: "mg",
        description:
          "– Lacks vitamin C, which must be obtained from other sources like fruits and vegetables.",
      },
      {
        element: "Calcium:",
        quantity: 8,
        measurementUnits: "mg",
        description:
          "– Contains a small amount of calcium, which helps in bone maintenance.",
      },
      {
        element: "Iron:",
        quantity: 3.0,
        measurementUnits: "mg",
        description:
          "– A good source of iron, supporting blood health and oxygen transport.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description:
          "– No vitamin D present, commonly obtained from sunlight or fortified foods.",
      },
      {
        element: "Vitamin B6:",
        quantity: 0.4,
        measurementUnits: "mg",
        description:
          "– Supports metabolism, brain health, and immune function.",
      },
      {
        element: "Vitamin B12:",
        quantity: 0,
        measurementUnits: "µg",
        description:
          "– Does not contain vitamin B12, which is found in animal products.",
      },
      {
        element: "Magnesium:",
        quantity: 114,
        measurementUnits: "mg",
        description:
          "– Contains magnesium, essential for muscle and nerve function.",
      },
      {
        element: "Zinc:",
        quantity: 1.7,
        measurementUnits: "mg",
        description:
          "– Contains zinc, which is important for immune function and cell repair.",
      },
      {
        element: "Vitamin E:",
        quantity: 0.1,
        measurementUnits: "mg",
        description:
          "– Low in vitamin E, an antioxidant that protects cells from damage.",
      },
    ],
    cultivationHeading:
      "Millet cultivation is suitable for dry regions and requires specific conditions for optimal growth and yield. Here is an overview of the key factors involved in growing millet:",
    cultivation: [
      {
        id: 81,
        topic: "Climate",
        children: [
          {
            id: 811,
            topic: "Temperature",
            text: "Millet grows best in warm climates, with ideal temperatures ranging between 24°C and 29°C (75°F to 85°F). It is drought-tolerant and can thrive in regions with low rainfall.",
          },
          {
            id: 812,
            topic: "Rainfall",
            text: "Millets are highly drought-resistant but still require 300 mm to 500 mm (12 to 20 inches) of rainfall during the growing season for optimal production. They can tolerate low to moderate rainfall conditions.",
          },
        ],
      },
      {
        id: 82,
        topic: "Soil",
        children: [
          {
            id: 821,
            topic: "pH",
            text: "Millet grows well in a range of soil types, with a pH level between 5.5 and 7.0. It prefers slightly acidic to neutral soils.",
          },
          {
            id: 822,
            topic: "Soil Type",
            text: "Sandy loam or loamy soils are ideal for millet due to their good drainage. Millet can also grow in poor and infertile soils, making it a good option for marginal lands.",
          },
          {
            id: 823,
            topic: "Soil Preparation",
            text: "Before planting, the soil should be tilled and enriched with organic matter, such as compost or farmyard manure, to improve fertility and soil structure.",
          },
        ],
      },
      {
        id: 83,
        topic: "Varieties",
        text: "Popular millet varieties include: -Pearl Millet (Bajra)-: Grown for grain and fodder. -Foxtail Millet-: Grown for grain production. -Finger Millet (Ragi)-: Rich in calcium and used for human consumption.",
      },
      {
        id: 84,
        topic: "Planting",
        children: [
          {
            id: 841,
            topic: "Time",
            text: "Millet is typically planted during the rainy season (monsoon), or it can be grown in spring and summer in some regions. Ensure the soil is warm before planting.",
          },
          {
            id: 842,
            topic: "Spacing",
            text: "Seeds should be planted about 2.5 to 3.5 cm (1 to 1.5 inches) deep, with rows spaced 30 to 45 cm (12 to 18 inches) apart. Thin the seedlings to about 10 to 15 cm (4 to 6 inches) apart.",
          },
          {
            id: 843,
            topic: "Seed Rate",
            text: "The recommended seeding rate for millet is 4 to 5 kg per hectare (3.5 to 4.5 pounds per acre), depending on the variety and soil conditions.",
          },
        ],
      },
      {
        id: 85,
        topic: "Watering",
        children: [
          {
            id: 851,
            topic: "Establishment Phase",
            text: "Millet requires light irrigation or rainfall during the germination and seedling phases. Avoid overwatering as millet is drought-resistant and sensitive to waterlogged conditions.",
          },
          {
            id: 852,
            topic: "Mature Plants",
            text: "Millet requires minimal water after establishment. It can survive on 25-50 mm (1-2 inches) of water per week, making it suitable for regions with limited water supply.",
          },
        ],
      },
      {
        id: 86,
        topic: "Pruning",
        text: "Millet does not require pruning, but weeds should be controlled regularly to prevent competition for water and nutrients.",
      },
      {
        id: 87,
        topic: "Fertilization",
        children: [
          {
            id: 871,
            topic: "Nutrients",
            text: "Millet requires moderate amounts of nitrogen and phosphorus for growth. Organic fertilizers, such as compost, or balanced fertilizers like NPK (e.g., 10-10-10) can be used.",
          },
          {
            id: 872,
            topic: "Timing",
            text: "Fertilizer should be applied at planting and again during the early growth stages to promote healthy development. Side-dress with additional nitrogen if needed during the growing season.",
          },
        ],
      },
      {
        id: 88,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 881,
            topic: "Pests",
            text: "Common pests affecting millet include stem borers, aphids, and grasshoppers. Implementing integrated pest management (IPM) techniques, such as crop rotation, can help control pest populations.",
          },
          {
            id: 882,
            topic: "Diseases",
            text: "Millet is susceptible to diseases like downy mildew and rust. Proper crop rotation, disease-resistant varieties, and fungicides can help mitigate these issues.",
          },
        ],
      },
      {
        id: 89,
        topic: "Harvesting",
        children: [
          {
            id: 891,
            topic: "Time",
            text: "Millet is usually ready for harvest 60 to 90 days after planting, depending on the variety. Harvest when the grains turn hard and mature, and the plants start to dry.",
          },
          {
            id: 892,
            topic: "Method",
            text: "Millet can be harvested manually or mechanically. For manual harvesting, cut the stalks and thresh the grains using traditional or mechanical methods.",
          },
        ],
      },
      {
        id: 90.2,
        topic: "Storage",
        text: "Millet grains can be stored for several months if kept in cool, dry conditions. Proper drying of the grains after harvest is essential to prevent mold and spoilage during storage.",
      },
      {
        id: 91.2,
        topic: "Thinning",
        text: "Millet seedlings should be thinned after they reach a height of 10 cm (4 inches) to ensure proper spacing and reduce competition between plants.",
      },
    ],
  },
  {
    id: 5,
    name: "Wheat",
    img: cerealsImages.wheat,
    inGeneralHeading: `The Staple Grain of Global Agriculture`,
    inGeneral: `Wheat (Triticum) is one of the world’s most important cereal grains, serving as a dietary staple for billions of people. Cultivated for over 10,000 years, wheat is the foundation of many foods, including bread, pasta, cereals, and pastries, making it a cornerstone of global cuisine. Its adaptability to various climates and its rich nutritional content have made wheat a key crop in human civilization.
                    Wheat is primarily composed of carbohydrates, providing a significant source of energy. Whole wheat, which includes all parts of the grain—the bran, germ, and endosperm—is far more nutritious than refined wheat. Whole wheat contains essential vitamins and minerals such as iron, magnesium, phosphorus, and B vitamins like niacin and folate. Additionally, it is a good source of dietary fiber, which supports digestive health, regulates blood sugar levels, and promotes satiety.
                    The bran and germ in whole wheat also contain antioxidants like selenium and phenolic acids, which help protect against oxidative stress and inflammation, reducing the risk of chronic diseases such as heart disease and certain cancers. Wheat also provides a moderate amount of protein, particularly in varieties like durum wheat, which is used for making pasta.
                    Culinary-wise, wheat is versatile. It can be ground into flour for baking, cracked for use in salads and cereals, or made into bulgur and couscous for various dishes. Despite its benefits, wheat contains gluten, which can cause adverse reactions in people with celiac disease or gluten sensitivity.
                    In summary, wheat is a globally essential grain, offering energy, fiber, and vital nutrients. Its versatility and role as a dietary staple make it an integral part of diets worldwide.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 340,
        measurementUnits: "kcal",
        description:
          "– Provides a moderate amount of calories, making it a good source of energy.",
      },
      {
        element: "Fats:",
        quantity: 2.5,
        measurementUnits: "g",
        description:
          "– Low in fat, with healthy fats including polyunsaturated fats.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 0.4,
        measurementUnits: "g",
        description:
          "– Very low in saturated fats, beneficial for heart health.",
      },
      {
        element: "Cholesterol:",
        quantity: 0,
        measurementUnits: "mg",
        description: "– Cholesterol-free, supporting cardiovascular health.",
      },
      {
        element: "Sodium:",
        quantity: 2,
        measurementUnits: "mg",
        description:
          "– Extremely low in sodium, aiding in blood pressure regulation.",
      },
      {
        element: "Potassium:",
        quantity: 405,
        measurementUnits: "mg",
        description:
          "– Contains a good amount of potassium, important for maintaining fluid balance and proper muscle function.",
      },
      {
        element: "Carbohydrates:",
        quantity: 72,
        measurementUnits: "g",
        description: "– High in carbohydrates, providing long-lasting energy.",
      },
      {
        element: "Fiber:",
        quantity: 12.2,
        measurementUnits: "g",
        description:
          "– Rich in dietary fiber, promoting healthy digestion and aiding in weight management.",
      },
      {
        element: "Sugar:",
        quantity: 0.4,
        measurementUnits: "g",
        description: "– Contains only small amounts of natural sugars.",
      },
      {
        element: "Proteins:",
        quantity: 13.2,
        measurementUnits: "g",
        description:
          "– A great source of plant-based protein, essential for muscle repair and growth.",
      },
      {
        element: "Vitamin C:",
        quantity: 0,
        measurementUnits: "mg",
        description:
          "– Lacks vitamin C, which is usually obtained from fruits and vegetables.",
      },
      {
        element: "Calcium:",
        quantity: 34,
        measurementUnits: "mg",
        description:
          "– Provides a small amount of calcium, contributing to bone strength.",
      },
      {
        element: "Iron:",
        quantity: 3.6,
        measurementUnits: "mg",
        description:
          "– A good source of iron, essential for the production of red blood cells and preventing anemia.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description:
          "– Does not contain vitamin D, which is typically obtained from sunlight or fortified foods.",
      },
      {
        element: "Vitamin B6:",
        quantity: 0.3,
        measurementUnits: "mg",
        description: "– Helps support metabolism and brain health.",
      },
      {
        element: "Vitamin B12:",
        quantity: 0,
        measurementUnits: "µg",
        description:
          "– Lacks vitamin B12, which is typically found in animal products.",
      },
      {
        element: "Magnesium:",
        quantity: 144,
        measurementUnits: "mg",
        description:
          "– High in magnesium, necessary for muscle function and energy production.",
      },
      {
        element: "Zinc:",
        quantity: 2.5,
        measurementUnits: "mg",
        description:
          "– Contains zinc, beneficial for immune health and wound healing.",
      },
      {
        element: "Vitamin E:",
        quantity: 0.6,
        measurementUnits: "mg",
        description:
          "– A small source of vitamin E, which acts as an antioxidant and protects cells from damage.",
      },
    ],
    cultivationHeading:
      "Wheat cultivation involves specific conditions for optimal growth and yield. Here is an overview of the key factors involved in growing wheat:",
    cultivation: [
      {
        id: 101,
        topic: "Climate",
        children: [
          {
            id: 1011,
            topic: "Temperature",
            text: "Wheat thrives in cool, temperate climates. Ideal temperatures for growth range from 10°C to 24°C (50°F to 75°F). Wheat requires cool weather during the vegetative phase and warmer temperatures as it approaches maturity.",
          },
          {
            id: 1012,
            topic: "Rainfall",
            text: "Wheat requires moderate rainfall of 300 to 900 mm (12 to 35 inches) during the growing season. Rain during the grain-filling stage can negatively impact grain quality, so a dry climate during this period is preferred.",
          },
        ],
      },
      {
        id: 102,
        topic: "Soil",
        children: [
          {
            id: 1021,
            topic: "pH",
            text: "Wheat grows best in soil with a pH level between 6.0 and 7.0. Slightly acidic to neutral soils are optimal for wheat cultivation.",
          },
          {
            id: 1022,
            topic: "Soil Type",
            text: "Loamy, well-drained soils are ideal for wheat. The crop can also grow in clay loam or sandy loam soils as long as they have good water retention and drainage.",
          },
          {
            id: 1023,
            topic: "Soil Preparation",
            text: "Before planting, the soil should be tilled to a fine texture and enriched with organic matter or balanced fertilizers to ensure adequate nutrient availability.",
          },
        ],
      },
      {
        id: 103,
        topic: "Varieties",
        text: "Popular wheat varieties include: -Hard Red Wheat-: Used for bread-making due to its high gluten content. -Soft Red Wheat-: Used for pastries and cakes. -Durum Wheat-: Used for pasta production.",
      },
      {
        id: 104,
        topic: "Planting",
        children: [
          {
            id: 1041,
            topic: "Time",
            text: "Wheat is generally planted in the fall (winter wheat) or early spring (spring wheat), depending on the variety and local climate. Winter wheat is planted from September to November, while spring wheat is planted from March to May.",
          },
          {
            id: 1042,
            topic: "Spacing",
            text: "Wheat seeds should be sown about 2.5 to 4 cm (1 to 1.5 inches) deep, with rows spaced 15 to 25 cm (6 to 10 inches) apart to allow for proper growth and air circulation.",
          },
          {
            id: 1043,
            topic: "Seed Rate",
            text: "The recommended seed rate for wheat is 100 to 150 kg per hectare (90 to 135 pounds per acre), depending on the variety and soil fertility.",
          },
        ],
      },
      {
        id: 105,
        topic: "Watering",
        children: [
          {
            id: 1051,
            topic: "Establishment Phase",
            text: "Wheat requires adequate moisture during the germination and early growth phases. Irrigate the field during dry spells to maintain consistent soil moisture.",
          },
          {
            id: 1052,
            topic: "Critical Stages",
            text: "Wheat requires the most water during tillering, flowering, and grain-filling stages. Insufficient water during these stages can reduce yields.",
          },
          {
            id: 1053,
            topic: "Avoid Waterlogging",
            text: "Wheat is sensitive to waterlogged conditions, which can cause root rot and stunted growth. Ensure proper drainage in the field.",
          },
        ],
      },
      {
        id: 106,
        topic: "Pruning",
        text: "Wheat does not require pruning, but controlling weeds through manual or chemical means is essential to reduce competition for water, light, and nutrients.",
      },
      {
        id: 107,
        topic: "Fertilization",
        children: [
          {
            id: 1071,
            topic: "Nutrients",
            text: "Wheat requires nitrogen, phosphorus, and potassium for optimal growth. Balanced fertilizers, such as NPK (e.g., 20-20-0), can be applied based on soil tests.",
          },
          {
            id: 1072,
            topic: "Timing",
            text: "Fertilizer should be applied at planting and during the tillering stage to promote healthy root and shoot growth. Top-dressing with nitrogen during the growing season can improve grain yield and quality.",
          },
        ],
      },
      {
        id: 108,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 1081,
            topic: "Pests",
            text: "Common wheat pests include aphids, wheat stem sawfly, and armyworms. Integrated pest management (IPM) practices, such as biological control and crop rotation, can help reduce pest pressure.",
          },
          {
            id: 1082,
            topic: "Diseases",
            text: "Wheat is susceptible to diseases such as rust, powdery mildew, and Fusarium head blight. Disease-resistant varieties and timely application of fungicides can help prevent these diseases.",
          },
        ],
      },
      {
        id: 109,
        topic: "Harvesting",
        children: [
          {
            id: 1091,
            topic: "Time",
            text: "Wheat is typically ready for harvest 100 to 120 days after planting. Harvest when the grains are hard, and the plants have turned golden brown.",
          },
          {
            id: 1092,
            topic: "Method",
            text: "Wheat can be harvested manually or using combine harvesters. Proper drying is essential to reduce moisture content and ensure safe storage.",
          },
        ],
      },
      {
        id: 110,
        topic: "Storage",
        text: "After harvest, wheat grains should be thoroughly dried to reduce moisture content to around 12% to prevent spoilage. Grains can be stored in cool, dry conditions for several months.",
      },
      {
        id: 111,
        topic: "Thinning",
        text: "Wheat does not typically require thinning. However, maintaining appropriate planting density is important for healthy plant growth and optimal yields.",
      },
    ],
  },
  {
    id: 6,
    name: "Rye",
    img: cerealsImages.rye,
    inGeneralHeading: `The Nutritious and Flavorful Grain`,
    inGeneral: `Rye (Secale cereale) is a hardy cereal grain that has been cultivated for centuries, primarily in Europe and parts of Asia. Known for its distinctive, earthy flavor and rich nutritional profile, rye is commonly used to make bread, crackers, and even whiskey. It thrives in cooler climates and is often grown as a rotation crop, helping to improve soil health and reduce erosion.
                    One of rye's standout features is its high fiber content, particularly soluble fiber, which can help lower cholesterol levels and regulate blood sugar. The fiber in rye contributes to feelings of fullness, making it a beneficial choice for weight management. Whole rye grains are also rich in essential nutrients, including B vitamins (such as niacin and folate), iron, magnesium, and manganese, which support various bodily functions, including metabolism and energy production.
                    Rye is particularly noted for its potential health benefits, including its antioxidant properties, which help combat oxidative stress and inflammation in the body. Some studies suggest that incorporating rye into the diet may reduce the risk of certain chronic diseases, such as heart disease and type 2 diabetes.
                    Culinary-wise, rye flour is commonly used to make dense, hearty breads, including traditional rye bread and pumpernickel. Rye can also be cooked as a whole grain, used in salads, or added to soups and stews for added texture and flavor.
                    In summary, rye is a nutritious grain that offers various health benefits. Its unique flavor, high fiber content, and versatility in cooking make it a valuable addition to a balanced diet.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 335,
        measurementUnits: "kcal",
        description:
          "– Provides a moderate amount of calories, offering sustained energy.",
      },
      {
        element: "Fats:",
        quantity: 2.2,
        measurementUnits: "g",
        description: "– Low in fat, containing healthy unsaturated fats.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 0.3,
        measurementUnits: "g",
        description:
          "– Very low in saturated fats, beneficial for heart health.",
      },
      {
        element: "Cholesterol:",
        quantity: 0,
        measurementUnits: "mg",
        description: "– Cholesterol-free, supporting cardiovascular health.",
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
        quantity: 510,
        measurementUnits: "mg",
        description:
          "– Rich in potassium, important for muscle contractions and nerve function.",
      },
      {
        element: "Carbohydrates:",
        quantity: 74.5,
        measurementUnits: "g",
        description: "– High in carbohydrates, providing long-lasting energy.",
      },
      {
        element: "Fiber:",
        quantity: 15.1,
        measurementUnits: "g",
        description:
          "– An excellent source of dietary fiber, supporting digestive health.",
      },
      {
        element: "Sugar:",
        quantity: 0.9,
        measurementUnits: "g",
        description: "– Contains small amounts of natural sugars.",
      },
      {
        element: "Proteins:",
        quantity: 10.6,
        measurementUnits: "g",
        description:
          "– A good source of plant-based protein, promoting muscle growth and repair.",
      },
      {
        element: "Vitamin C:",
        quantity: 0,
        measurementUnits: "mg",
        description:
          "– Lacks vitamin C, typically obtained from fruits and vegetables.",
      },
      {
        element: "Calcium:",
        quantity: 24,
        measurementUnits: "mg",
        description:
          "– Provides a small amount of calcium, contributing to bone health.",
      },
      {
        element: "Iron:",
        quantity: 2.7,
        measurementUnits: "mg",
        description:
          "– Contains iron, essential for blood health and oxygen transport.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description:
          "– No vitamin D present, typically obtained from sunlight or fortified foods.",
      },
      {
        element: "Vitamin B6:",
        quantity: 0.3,
        measurementUnits: "mg",
        description: "– Supports metabolism and brain health.",
      },
      {
        element: "Vitamin B12:",
        quantity: 0,
        measurementUnits: "µg",
        description:
          "– Lacks vitamin B12, which is found in animal-based products.",
      },
      {
        element: "Magnesium:",
        quantity: 121,
        measurementUnits: "mg",
        description:
          "– Contains magnesium, important for muscle function and energy production.",
      },
      {
        element: "Zinc:",
        quantity: 2.6,
        measurementUnits: "mg",
        description:
          "– A source of zinc, which helps with immune function and cell repair.",
      },
      {
        element: "Vitamin E:",
        quantity: 0.4,
        measurementUnits: "mg",
        description:
          "– A small source of vitamin E, acting as an antioxidant to protect cells from damage.",
      },
    ],
    cultivationHeading:
      "Rye cultivation involves specific conditions to ensure optimal growth and yield. Here is an overview of the key factors involved in growing rye:",
    cultivation: [
      {
        id: 201,
        topic: "Climate",
        children: [
          {
            id: 2011,
            topic: "Temperature",
            text: "Rye is a hardy crop and can tolerate cold temperatures. It grows best in regions with cool climates, with ideal temperatures ranging from 10°C to 20°C (50°F to 68°F). It can withstand frost and is more cold-resistant than other cereals, making it suitable for late autumn or early winter planting.",
          },
          {
            id: 2012,
            topic: "Rainfall",
            text: "Rye can thrive in areas with low to moderate rainfall, around 300 to 600 mm (12 to 24 inches) annually. It is drought-tolerant and can survive in drier climates compared to other cereals, but yields improve with moderate rainfall during the growing season.",
          },
        ],
      },
      {
        id: 202,
        topic: "Soil",
        children: [
          {
            id: 2021,
            topic: "pH",
            text: "Rye prefers slightly acidic to neutral soils, with an optimal pH level between 5.5 and 7.0.",
          },
          {
            id: 2022,
            topic: "Soil Type",
            text: "Rye is adaptable to poor soils and performs well in sandy, loamy, or light clay soils. Its deep root system allows it to grow in well-drained soils with low fertility, making it suitable for marginal land.",
          },
          {
            id: 2023,
            topic: "Soil Preparation",
            text: "Before planting, the soil should be tilled to a fine texture. Rye can be sown without intensive soil preparation, but enriching the soil with organic matter or fertilizers will improve yields.",
          },
        ],
      },
      {
        id: 203,
        topic: "Varieties",
        text: "Popular rye varieties include: -Winter Rye-: Planted in autumn, grows through the winter, and harvested in summer. -Spring Rye-: Planted in early spring and harvested in late summer.",
      },
      {
        id: 204,
        topic: "Planting",
        children: [
          {
            id: 2041,
            topic: "Time",
            text: "Rye can be planted in either the fall (winter rye) or spring (spring rye). Winter rye is usually sown from late September to November, while spring rye is sown in March or April.",
          },
          {
            id: 2042,
            topic: "Spacing",
            text: "Rye seeds should be planted at a depth of 2.5 to 4 cm (1 to 1.5 inches), with rows spaced 15 to 20 cm (6 to 8 inches) apart to allow for proper growth and air circulation.",
          },
          {
            id: 2043,
            topic: "Seed Rate",
            text: "The recommended seed rate for rye is 100 to 150 kg per hectare (90 to 135 pounds per acre) depending on soil conditions and expected yield.",
          },
        ],
      },
      {
        id: 205,
        topic: "Watering",
        children: [
          {
            id: 2051,
            topic: "Establishment Phase",
            text: "Rye needs moisture during the germination and early growth stages. While it is drought-tolerant, ensuring sufficient soil moisture during the initial phase is critical for establishing a strong root system.",
          },
          {
            id: 2052,
            topic: "Mature Plants",
            text: "Once established, rye can tolerate dry conditions. It generally requires less water than other cereals like wheat or barley but benefits from moderate moisture during the growing season.",
          },
          {
            id: 2053,
            topic: "Avoid Waterlogging",
            text: "Rye is sensitive to waterlogged soils. Ensure good drainage to avoid issues like root rot and stunted growth.",
          },
        ],
      },
      {
        id: 206,
        topic: "Fertilization",
        children: [
          {
            id: 2061,
            topic: "Nutrients",
            text: "Rye is efficient at utilizing nutrients from the soil, even in poor conditions. However, applying nitrogen-based fertilizers in early spring can boost yields. Phosphorus and potassium are also important for strong root and shoot development.",
          },
          {
            id: 2062,
            topic: "Timing",
            text: "Fertilize rye at planting time and during the early stages of growth, particularly before the tillering stage, for optimal results.",
          },
        ],
      },
      {
        id: 207,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 2071,
            topic: "Pests",
            text: "Common pests include aphids, wireworms, and cereal leaf beetles. Integrated pest management (IPM), crop rotation, and biological controls can help manage these pests.",
          },
          {
            id: 2072,
            topic: "Diseases",
            text: "Rye is resistant to many diseases but can be affected by ergot, powdery mildew, and rust. Proper field hygiene, disease-resistant varieties, and fungicide applications can help control these diseases.",
          },
        ],
      },
      {
        id: 208,
        topic: "Harvesting",
        children: [
          {
            id: 2081,
            topic: "Time",
            text: "Winter rye is typically harvested in early summer, around 10 months after planting, while spring rye is harvested in late summer. Harvest when the grains are hard and the plants have turned golden.",
          },
          {
            id: 2082,
            topic: "Method",
            text: "Rye can be harvested manually or using mechanical harvesters. Ensure proper drying before storage to prevent spoilage.",
          },
        ],
      },
      {
        id: 209,
        topic: "Storage",
        text: "After harvest, rye grains should be dried to a moisture content of around 12% to ensure safe storage. Store in cool, dry conditions to prevent mold or insect infestation.",
      },
      {
        id: 210,
        topic: "Thinning",
        text: "Rye does not require thinning, but proper seed spacing during planting is essential to avoid overcrowding and ensure healthy plant development.",
      },
    ],
  },
  {
    id: 7,
    name: "Rice",
    img: cerealsImages.rice,
    inGeneralHeading: `The Global Staple Grain`,
    inGeneral: `Rice, a cereal grain from the species Oryza sativa, is one of the most important staple foods worldwide, serving as a primary source of calories for more than half of the global population. It is cultivated in a variety of environments, from flooded fields to terraced hillsides, and comes in many varieties, including long-grain, medium-grain, and short-grain, each with unique textures and flavors.
                    Nutritionally, rice is primarily composed of carbohydrates, providing a significant source of energy. While white rice is widely consumed, it undergoes processing that removes the bran and germ, stripping it of many nutrients. In contrast, brown rice is a whole grain that retains its bran and germ, making it richer in fiber, vitamins, and minerals. Brown rice provides essential nutrients such as B vitamins, magnesium, phosphorus, and selenium, which support energy metabolism, bone health, and immune function.
                    Rice is also gluten-free, making it an excellent choice for individuals with celiac disease or gluten sensitivity. Its mild flavor and versatility allow it to be used in a multitude of dishes, from stir-fries and sushi to soups and desserts. Rice can be served as a side dish, incorporated into salads, or used as a base for curries and stews.
                    In addition to its culinary uses, rice holds cultural significance in many societies, often symbolizing prosperity and fertility. It plays a central role in traditional ceremonies and celebrations.
                    In summary, rice is a vital staple grain that provides energy, essential nutrients, and culinary versatility. Its importance in global diets and cultures makes it an invaluable food source around the world.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 130,
        measurementUnits: "kcal",
        description:
          "– Provides a moderate amount of calories, serving as a good energy source.",
      },
      {
        element: "Fats:",
        quantity: 0.3,
        measurementUnits: "g",
        description: "– Very low in fats, making it a lean energy option.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 0.1,
        measurementUnits: "g",
        description: "– Contains a negligible amount of saturated fats.",
      },
      {
        element: "Cholesterol:",
        quantity: 0,
        measurementUnits: "mg",
        description: "– Cholesterol-free, which supports heart health.",
      },
      {
        element: "Sodium:",
        quantity: 1,
        measurementUnits: "mg",
        description:
          "– Almost sodium-free, good for maintaining low blood pressure.",
      },
      {
        element: "Potassium:",
        quantity: 35,
        measurementUnits: "mg",
        description:
          "– Provides a small amount of potassium, necessary for fluid balance.",
      },
      {
        element: "Carbohydrates:",
        quantity: 28.2,
        measurementUnits: "g",
        description:
          "– High in carbohydrates, providing quick and sustained energy.",
      },
      {
        element: "Fiber:",
        quantity: 0.4,
        measurementUnits: "g",
        description:
          "– Low in dietary fiber, with most fiber found in whole-grain varieties.",
      },
      {
        element: "Sugar:",
        quantity: 0,
        measurementUnits: "g",
        description:
          "– Contains no sugar, which helps maintain stable blood sugar levels.",
      },
      {
        element: "Proteins:",
        quantity: 2.7,
        measurementUnits: "g",
        description: "– A small source of plant-based protein.",
      },
      {
        element: "Vitamin C:",
        quantity: 0,
        measurementUnits: "mg",
        description:
          "– Lacks vitamin C, which must be sourced from fruits and vegetables.",
      },
      {
        element: "Calcium:",
        quantity: 10,
        measurementUnits: "mg",
        description:
          "– Contains a small amount of calcium, beneficial for bone health.",
      },
      {
        element: "Iron:",
        quantity: 0.2,
        measurementUnits: "mg",
        description:
          "– Contains a small amount of iron, necessary for blood health.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description: "– Does not contain vitamin D.",
      },
      {
        element: "Vitamin B6:",
        quantity: 0.1,
        measurementUnits: "mg",
        description: "– Supports metabolic function and brain health.",
      },
      {
        element: "Vitamin B12:",
        quantity: 0,
        measurementUnits: "µg",
        description:
          "– Does not contain vitamin B12, found in animal-based foods.",
      },
      {
        element: "Magnesium:",
        quantity: 12,
        measurementUnits: "mg",
        description:
          "– Provides a small amount of magnesium, vital for muscle and nerve function.",
      },
      {
        element: "Zinc:",
        quantity: 0.4,
        measurementUnits: "mg",
        description:
          "– Contains a small amount of zinc, supporting immune function.",
      },
      {
        element: "Vitamin E:",
        quantity: 0,
        measurementUnits: "mg",
        description:
          "– Does not contain vitamin E, an antioxidant found in other foods.",
      },
    ],
    cultivationHeading:
      "Rice cultivation requires specific conditions for optimal growth and yield. Here is an overview of the key factors involved in growing rice:",
    cultivation: [
      {
        id: 301,
        topic: "Climate",
        children: [
          {
            id: 3011,
            topic: "Temperature",
            text: "Rice grows best in tropical and subtropical climates. It requires warm temperatures, with an ideal range between 20°C and 35°C (68°F to 95°F). Rice is highly sensitive to frost and cold temperatures, making it unsuitable for cooler regions.",
          },
          {
            id: 3012,
            topic: "Rainfall",
            text: "Rice requires abundant water throughout its growth cycle. An annual rainfall of 1000 to 1500 mm (39 to 59 inches) is ideal. In areas with less rainfall, irrigation is essential for successful rice cultivation.",
          },
        ],
      },
      {
        id: 302,
        topic: "Soil",
        children: [
          {
            id: 3021,
            topic: "pH",
            text: "Rice prefers slightly acidic soils, with an optimal pH range of 5.5 to 6.5.",
          },
          {
            id: 3022,
            topic: "Soil Type",
            text: "Rice grows best in clayey or loamy soils that can retain water. Paddy fields are often submerged in water, so soils with good water-holding capacity are preferred.",
          },
          {
            id: 3023,
            topic: "Soil Preparation",
            text: "Before planting, the soil should be plowed and leveled. Fields are typically flooded before transplanting rice seedlings to ensure a water-saturated environment for growth.",
          },
        ],
      },
      {
        id: 303,
        topic: "Varieties",
        text: "Popular rice varieties include: -Indica- (long-grain, grown in tropical regions) -Japonica- (short-grain, grown in temperate regions) -Aromatic Varieties- like Basmati and Jasmine (valued for their fragrance).",
      },
      {
        id: 304,
        topic: "Planting",
        children: [
          {
            id: 3041,
            topic: "Time",
            text: "Rice is typically planted at the beginning of the rainy season. In tropical regions, this can range from May to August, while in subtropical regions, rice is planted from April to June.",
          },
          {
            id: 3042,
            topic: "Methods",
            text: "Rice can be grown using various methods: -Transplanting-: Seedlings are raised in nurseries and transplanted into flooded fields. -Direct Seeding-: Seeds are directly sown in the field.",
          },
          {
            id: 3043,
            topic: "Spacing",
            text: "In the transplanting method, seedlings should be spaced 15 to 20 cm (6 to 8 inches) apart to ensure adequate air circulation and reduce competition for nutrients.",
          },
        ],
      },
      {
        id: 305,
        topic: "Watering",
        children: [
          {
            id: 3051,
            topic: "Flooding",
            text: "Rice fields are traditionally flooded with a layer of water (5 to 10 cm) during most of the growth cycle. This method, called 'paddy farming,' helps control weeds and pests.",
          },
          {
            id: 3052,
            topic: "Irrigation",
            text: "In areas with insufficient rainfall, controlled irrigation systems are used to maintain water levels. Dry periods or improper watering can severely affect yields.",
          },
          {
            id: 3053,
            topic: "Drainage",
            text: "Towards the end of the growing season, water is drained from the fields to allow the rice to mature and prepare for harvest.",
          },
        ],
      },
      {
        id: 306,
        topic: "Fertilization",
        children: [
          {
            id: 3061,
            topic: "Nutrients",
            text: "Rice benefits from a balanced fertilizer regimen, with nitrogen being the most important nutrient. Phosphorus and potassium are also essential for root development and grain formation.",
          },
          {
            id: 3062,
            topic: "Timing",
            text: "Fertilizers should be applied at key growth stages, such as before transplanting, at tillering (when the plant starts producing additional shoots), and at the flowering stage.",
          },
        ],
      },
      {
        id: 307,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 3071,
            topic: "Pests",
            text: "Common rice pests include brown planthoppers, rice stem borers, and leafhoppers. Integrated pest management (IPM) techniques, including the use of natural predators, crop rotation, and organic pesticides, can help manage these pests.",
          },
          {
            id: 3072,
            topic: "Diseases",
            text: "Rice is susceptible to diseases such as rice blast, sheath blight, and bacterial leaf blight. These can be controlled by using disease-resistant varieties, proper water management, and the application of fungicides.",
          },
        ],
      },
      {
        id: 308,
        topic: "Harvesting",
        children: [
          {
            id: 3081,
            topic: "Time",
            text: "Rice is typically ready for harvest 3 to 6 months after planting, depending on the variety and climate. The grains should be firm and golden in color when harvested.",
          },
          {
            id: 3082,
            topic: "Method",
            text: "Rice can be harvested manually or mechanically. After cutting, the grains are threshed to remove them from the stalks, then dried to reduce moisture content.",
          },
        ],
      },
      {
        id: 309,
        topic: "Storage",
        text: "After harvesting, rice grains should be dried to a moisture content of around 14% to ensure safe storage. Store in dry, cool conditions to prevent mold, insect infestation, and spoilage.",
      },
      {
        id: 310,
        topic: "Thinning",
        text: "Rice does not typically require thinning, but maintaining proper plant spacing during transplanting or direct seeding ensures healthy plant development.",
      },
    ],
  },
  {
    id: 8,
    name: "Oat",
    img: cerealsImages.oat,
    inGeneralHeading: `The Nutritious and Versatile Grain`,
    inGeneral: `Oats (Avena sativa) are a whole grain that has been consumed for thousands of years, primarily in the form of oatmeal and granola. Renowned for their numerous health benefits and versatility, oats are a staple food in many diets worldwide. They are often praised for their unique nutritional profile, making them a popular choice for breakfast and snacks.
                    One of the key benefits of oats is their high fiber content, particularly beta-glucan, a soluble fiber that has been shown to lower cholesterol levels and improve heart health. This fiber helps regulate blood sugar levels by slowing down digestion, which can aid in weight management and provide sustained energy throughout the day. Oats are also rich in antioxidants, including avenanthramides, which possess anti-inflammatory properties and may help reduce the risk of chronic diseases.
                    Nutritionally, oats are packed with essential vitamins and minerals, including B vitamins (such as thiamine and folate), iron, magnesium, and zinc. These nutrients support various bodily functions, including metabolism, immune function, and bone health. Oats are also a good source of protein compared to other grains, making them an excellent option for those looking to increase their protein intake.
                    Culinary-wise, oats are incredibly versatile. They can be prepared as a warm bowl of oatmeal, used in baking for cookies, muffins, and bread, or blended into smoothies for added nutrition. Rolled oats and steel-cut oats can also be used in savory dishes, such as oat-based risottos or grain bowls.
                    In summary, oats are a nutritious and versatile grain that offers numerous health benefits. Their high fiber content, essential nutrients, and culinary adaptability make them a valuable addition to a balanced diet.`,
    topic1: "Nutrition and Health",
    nutritionText: [
      {
        element: "Energy value:",
        quantity: 389,
        measurementUnits: "kcal",
        description:
          "– A good source of energy, providing a higher calorie content.",
      },
      {
        element: "Fats:",
        quantity: 6.9,
        measurementUnits: "g",
        description:
          "– Contains a moderate amount of fats, mainly healthy unsaturated fats.",
      },
      {
        element: "Saturated fatty acids:",
        quantity: 1.2,
        measurementUnits: "g",
        description:
          "– Low in saturated fats, which is beneficial for heart health.",
      },
      {
        element: "Cholesterol:",
        quantity: 0,
        measurementUnits: "mg",
        description: "– Cholesterol-free, making it heart-friendly.",
      },
      {
        element: "Sodium:",
        quantity: 2,
        measurementUnits: "mg",
        description:
          "– Very low in sodium, aiding in healthy blood pressure regulation.",
      },
      {
        element: "Potassium:",
        quantity: 429,
        measurementUnits: "mg",
        description:
          "– A good source of potassium, important for muscle and nerve function.",
      },
      {
        element: "Carbohydrates:",
        quantity: 66.3,
        measurementUnits: "g",
        description: "– High in carbohydrates, providing sustained energy.",
      },
      {
        element: "Fiber:",
        quantity: 10.6,
        measurementUnits: "g",
        description:
          "– Rich in dietary fiber, supporting digestion and gut health.",
      },
      {
        element: "Sugar:",
        quantity: 0.9,
        measurementUnits: "g",
        description: "– Contains very little natural sugar.",
      },
      {
        element: "Proteins:",
        quantity: 16.9,
        measurementUnits: "g",
        description:
          "– High in plant-based protein, promoting muscle repair and growth.",
      },
      {
        element: "Vitamin C:",
        quantity: 0,
        measurementUnits: "mg",
        description:
          "– Lacks vitamin C, which is typically found in fruits and vegetables.",
      },
      {
        element: "Calcium:",
        quantity: 54,
        measurementUnits: "mg",
        description:
          "– Contains a small amount of calcium, contributing to bone health.",
      },
      {
        element: "Iron:",
        quantity: 4.7,
        measurementUnits: "mg",
        description:
          "– A good source of iron, important for blood health and preventing anemia.",
      },
      {
        element: "Vitamin D:",
        quantity: 0,
        measurementUnits: "IU",
        description:
          "– No vitamin D present, usually obtained from sunlight or fortified foods.",
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
        description: "– Lacks vitamin B12, typically found in animal products.",
      },
      {
        element: "Magnesium:",
        quantity: 177,
        measurementUnits: "mg",
        description:
          "– High in magnesium, essential for muscle function and energy production.",
      },
      {
        element: "Zinc:",
        quantity: 3.9,
        measurementUnits: "mg",
        description:
          "– A good source of zinc, supporting immune health and wound healing.",
      },
      {
        element: "Vitamin E:",
        quantity: 0.4,
        measurementUnits: "mg",
        description:
          "– Contains small amounts of vitamin E, an antioxidant that protects cells.",
      },
    ],
    cultivationHeading:
      "Oat cultivation requires specific conditions to ensure a good yield and quality grains. Here is an overview of the key factors involved in growing oats:",
    cultivation: [
      {
        id: 401,
        topic: "Climate",
        children: [
          {
            id: 4011,
            topic: "Temperature",
            text: "Oats grow best in cool, temperate climates. Ideal temperatures range between 15°C and 25°C (59°F to 77°F). They are relatively frost-resistant and can tolerate cold better than other cereals like corn or wheat.",
          },
          {
            id: 4012,
            topic: "Rainfall",
            text: "Oats require moderate rainfall, typically between 400 and 800 mm (15 to 31 inches) annually. In regions with less rainfall, supplemental irrigation may be needed to maintain healthy growth.",
          },
        ],
      },
      {
        id: 402,
        topic: "Soil",
        children: [
          {
            id: 4021,
            topic: "pH",
            text: "Oats prefer slightly acidic to neutral soil with a pH range of 6.0 to 7.0.",
          },
          {
            id: 4022,
            topic: "Soil Type",
            text: "Oats grow well in well-drained, loamy soils, though they can tolerate a variety of soil types. Avoid heavy clay soils, which retain too much water, and sandy soils, which drain too quickly.",
          },
          {
            id: 4023,
            topic: "Soil Preparation",
            text: "Before planting, the soil should be plowed and leveled to ensure a good seedbed. Adding organic matter like compost or well-rotted manure can improve soil fertility.",
          },
        ],
      },
      {
        id: 403,
        topic: "Varieties",
        text: "Popular oat varieties include: -Avena sativa- (commonly grown for human consumption). -Avena byzantina- (used in warmer climates and for animal feed). -Hull-less oats- (a variety with a loose husk, easier to process).",
      },
      {
        id: 404,
        topic: "Planting",
        children: [
          {
            id: 4041,
            topic: "Time",
            text: "Oats are usually planted in early spring, as they can tolerate cold and frost. In some regions, they are also grown as a winter crop and planted in the fall.",
          },
          {
            id: 4042,
            topic: "Depth and Spacing",
            text: "Oat seeds should be sown at a depth of 2 to 4 cm (0.8 to 1.6 inches). The seeds are typically spaced about 10 to 15 cm (4 to 6 inches) apart in rows, with row spacing of 25 cm (10 inches).",
          },
          {
            id: 4043,
            topic: "Seeding Rate",
            text: "For optimal growth, a seeding rate of 90 to 120 kg per hectare (80 to 110 pounds per acre) is recommended.",
          },
        ],
      },
      {
        id: 405,
        topic: "Watering",
        children: [
          {
            id: 4051,
            topic: "Rain-Fed Crops",
            text: "In regions with adequate rainfall, oats can be grown as a rain-fed crop without supplemental irrigation.",
          },
          {
            id: 4052,
            topic: "Irrigated Crops",
            text: "In drier regions, oats may need supplemental irrigation, especially during critical stages like flowering and grain filling.",
          },
          {
            id: 4053,
            topic: "Waterlogging",
            text: "Oats do not tolerate waterlogged conditions. Ensure that fields are well-drained to prevent root diseases and poor crop development.",
          },
        ],
      },
      {
        id: 406,
        topic: "Fertilization",
        children: [
          {
            id: 4061,
            topic: "Nutrients",
            text: "Oats require nitrogen, phosphorus, and potassium for healthy growth. Nitrogen is particularly important for good yield and grain quality.",
          },
          {
            id: 4062,
            topic: "Timing",
            text: "Fertilizers should be applied before planting, or nitrogen may be split-applied (once before planting and again during early growth). Over-fertilization, especially with nitrogen, can lead to lodging (where plants fall over).",
          },
        ],
      },
      {
        id: 407,
        topic: "Pest and Disease Control",
        children: [
          {
            id: 4071,
            topic: "Pests",
            text: "Common pests affecting oats include aphids, armyworms, and oat leaf beetles. Integrated pest management (IPM) practices, including crop rotation and the use of natural predators, can help control pest populations.",
          },
          {
            id: 4072,
            topic: "Diseases",
            text: "Oats are susceptible to diseases such as crown rust, powdery mildew, and smut. Using disease-resistant varieties and proper field sanitation can help manage these issues.",
          },
        ],
      },
      {
        id: 408,
        topic: "Harvesting",
        children: [
          {
            id: 4081,
            topic: "Time",
            text: "Oats are usually harvested in late summer, about 100 to 120 days after planting. The grains should be fully mature and dry, with a moisture content below 14%, before harvesting.",
          },
          {
            id: 4082,
            topic: "Method",
            text: "Oats can be harvested using a combine harvester. After harvesting, the grains should be dried if necessary to prevent spoilage during storage.",
          },
        ],
      },
      {
        id: 409,
        topic: "Storage",
        text: "Oats should be stored in a dry, cool place with a moisture content of around 12% or less. Proper storage helps prevent mold, pests, and grain deterioration.",
      },
      {
        id: 410,
        topic: "Thinning",
        text: "Oats do not typically require thinning, as they grow best when seeded at the appropriate density. Maintaining proper seeding rates ensures optimal plant development and yield.",
      },
    ],
  },
];

export default cereals;
