import { fruitsImages } from "../ListOfFruits/fruitsimages"

export const apricot = {
    id: 2,
    name: "Apricot",
    img: fruitsImages.apricot,
    inGeneralHeading: `A Delightful Stone Fruit`,
    inGeneral: `Apricots are vibrant, golden-orange fruits that belong to the Prunus family, closely related to peaches, plums, and cherries. Their smooth, velvety skin encases a soft, juicy flesh with a sweet yet subtly tart flavor, making them a popular choice for both fresh consumption and culinary uses. Apricots are rich in nutrients, particularly vitamins A and C, which contribute to eye health, immune support, and skin vitality. They also provide dietary fiber, which aids digestion, and antioxidants like beta-carotene that help combat free radicals.
                Dried apricots are a popular snack, providing concentrated nutrition and a long shelf life. Apricots are used in a variety of dishes, from jams and preserves to savory sauces, salads, and desserts. Originating from regions like Central Asia and the Mediterranean, apricots have been cultivated for centuries, prized for their health benefits, refreshing taste, and versatility in cooking.
                In addition to their impressive nutritional profile, apricots have been valued for their medicinal properties in traditional practices. They are believed to support heart health, due to their potassium content, which helps regulate blood pressure and maintain proper electrolyte balance. The natural sugars in apricots provide an energy boost, making them an ideal choice for snacks, especially for athletes or those with active lifestyles.
                Apricot kernels, found inside the pit, are used in some cultures for oil extraction, offering benefits for skin care and even culinary purposes. However, the kernels should be consumed cautiously, as they contain amygdalin, a compound that can release cyanide in the body when eaten in large amounts. Apricots have a short growing season, typically available in late spring and summer, and their delicate nature requires gentle handling during harvest and transport. Despite this, their bright flavor and nutritional richness make them a cherished fruit worldwide.`,
    topic1: "Nutrition and Health",
    text: `
- At 100 g
- Energy value: 48 kcal – A low-calorie fruit, suitable for healthy snacking.
- Fats: 0.1 g – Very low in fat, making them heart-friendly.
- Saturated fatty acids: 0 g – Contains no harmful fats.
- Cholesterol: 0 mg – Cholesterol-free, supporting cardiovascular health.
- Sodium: 1 mg – Very low sodium, promoting healthy blood pressure.
- Potassium: 259 mg – Helps regulate fluid balance and supports muscle function.
- Carbohydrates: 12 g – Provides a moderate source of energy from natural sugars.
- Fiber: 2 g – Good source of fiber, aiding in digestion.
- Sugar: 9.2 g – Contains natural sugars, offering a quick energy boost.
- Proteins: 1.4 g – Provides a small amount of protein for muscle repair.
- Vitamin C: 10 mg – Supports immune function and skin health.
- Calcium: 13 mg – Contributes to bone health and strength.
- Iron: 0.5 mg – Important for red blood cell formation.
- Vitamin D: 0 IU – No vitamin D, typically sourced from sunlight or fortified foods.
- Vitamin B6: 0.1 mg – Supports metabolism and brain health.
- Vitamin B12: 0 µg – No vitamin B12, commonly found in animal products.
- Magnesium: 10 mg – Supports muscle function and energy production.`,
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
        text: `Popular apricot varieties include:
                            - Moorpark, Tilton, and Goldcot (known for their sweet flavor and adaptability).
                            - Golden Delicious and Jonathan (used for baking or cooking).
                            `,
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
  }