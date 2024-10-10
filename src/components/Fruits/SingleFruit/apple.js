import { fruitsImages } from "../ListOfFruits/fruitsimages"

export const apple = {
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
    text: `
- At 100 g
- Energy value: 52 kcal – A low-calorie fruit, good for snacking.
- Fats: 0.2g – Very low in fat, contributing to heart health.
- Saturated fatty acids: 0g – Contains no harmful fats.
- Cholesterol: 0mg – Cholesterol-free, promoting cardiovascular health.
- Sodium: 1mg – Very low sodium, helping maintain healthy blood pressure.
- Potassium: 107mg – Supports muscle function and regulates fluid balance.
- Carbohydrates: 14g – A moderate source of natural sugars and energy.
- Fiber: 2.4g – A good source of fiber, aiding digestion.
- Sugar: 10g – Contains natural sugars for an energy boost.
- Proteins: 0.3g – Provides a small amount of protein.
- Vitamin C: 4.6mg – Contributes to immune function and skin health.
- Calcium: 6mg – Provides a small amount of calcium for bone health.
- Iron: 0.1mg – Trace amounts, helps with oxygen transport in blood.
- Vitamin D: 0 IU – No vitamin D, typically sourced from sunlight or fortified foods.
- Vitamin B6: 0mg – Contains small amounts of B vitamins supporting metabolism.
- Vitamin B12: 0 µg – No vitamin B12, commonly found in animal products.
- Magnesium: 5mg – Helps with muscle function and nerve signaling.`,
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
  }