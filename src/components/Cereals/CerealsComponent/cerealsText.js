const cerealsInfo = [
    {
        id: 1,
        topic: 'Cereal',
        text: "A cereal is a grass cultivated for its edible grain. Cereals are the world's largest crops, and are therefore staple foods. They include rice, wheat, rye, oats, barley, millet, and maize. Edible grains from other plant families, such as buckwheat and quinoa, are pseudocereals. Most cereals are annuals, producing one crop from each planting, though rice is sometimes grown as a perennial. Winter varieties are hardy enough to be planted in the autumn, becoming dormant in the winter, and harvested in spring or early summer; spring varieties are planted in spring and harvested in late summer. The term cereal is derived from the name of the Roman goddess of grain crops and fertility, Ceres." +
                "Cereals were domesticated in the Neolithic, some 8,000 years ago. Wheat and barley were domesticated in the Fertile Crescent; rice was domesticated in East Asia, and sorghum and millet were domesticated in West Africa. In the 20th century, cereal productivity was greatly increased by the Green Revolution. This increase in production has accompanied a growing international trade, with some countries producing large portions of the cereal supply for other countries." +
                "Cereals provide food eaten directly as whole grains, usually cooked, or they are ground to flour and made into bread, porridge, and other products. Cereals have a high starch content, enabling them to be fermented into alcoholic drinks such as beer. Cereal farming has a substantial environmental impact, and is often produced in high-intensity monocultures. The environmental harms can be mitigated by sustainable practices which reduce the impact on soil and improve biodiversity, such as no-till farming and intercropping."
    },
    {
        id: 2,
        topic: 'History',
        children: [
            {
                id: 201,
                topic: 'Origins',
                text: 'Wheat, barley, rye, and oats were gathered and eaten in the Fertile Crescent during the early Neolithic. Cereal grains 19,000 years old have been found at the Ohalo II site in Israel, with charred remnants of wild wheat and barley.' +
                        'During the same period, farmers in China began to farm rice and millet, using human-made floods and fires as part of their cultivation regimen. The use of soil conditioners, including manure, fish, compost, and ashes, appears to have begun early, and developed independently in areas of the world including Mesopotamia, the Nile Valley, and Eastern Asia.' +
                        'Cereals that became modern barley and wheat were domesticated some 8,000 years ago in the Fertile Crescent. Millets and rice were domesticated in East Asia, while sorghum and other millets were domesticated in sub-Saharan West Africa, primarily as feed for livestock.' +
                        'Complex civilizations arose where cereal agriculture created a surplus, allowing for part of the harvest to be appropriated from farmers, allowing power to be concentrated in cities.'
            },
            {
                id: 202,
                topic: 'Modern',
                text: 'During the second half of the 20th century, there was a significant increase in the production of high-yield cereal crops worldwide, especially wheat and rice, due to the Green Revolution, a technological change funded by development organizations. The strategies developed by the Green Revolution, including mechanized tilling, monoculture, nitrogen fertilizers, and breeding of new strains of seeds, focused on fending off starvation and increasing yield-per-plant. These strategies were successful in raising yields but paid less attention to nutritional quality. Modern high-yield cereal crops tend to have low-quality proteins, with essential amino acid deficiencies, and lack balanced essential fatty acids, vitamins, minerals, and other quality factors. Ancient grains and heirloom varieties have gained popularity in organic movements of the 21st century, though these are lower in yield-per-plant, which creates challenges in areas with limited resources as food crops are replaced with cash crops.'
            }  
        
        ]
    },
    {
        id: 4,
        topic: 'Biology',
        text: 'Cereals are grasses, in the Poaceae family, that produce edible grains. A cereal grain is botanically a caryopsis, a fruit where the seed coat is fused with the pericarp. Grasses have stems that are hollow except at the nodes and narrow alternate leaves borne in two ranks. The lower part of each leaf encloses the stem, forming a leaf-sheath. The leaf grows from the base of the blade, an adaptation that protects the growing meristem from grazing animals. The flowers are usually hermaphroditic, with the exception of maize, and mainly anemophilous or wind-pollinated, although insects occasionally play a role.' +
                'Among the best-known cereals are maize, rice, wheat, barley, sorghum, millet, oat, rye and triticale. Some other grains are colloquially called cereals, even though they are not grasses; these pseudocereals include buckwheat, quinoa, and amaranth.'
    },
    {
        id: 5,
        topic: 'Cultivation',
        text: 'All cereal crops are cultivated in a similar way. Most are annual, so after sowing they are harvested just once. An exception is rice, which although usually treated as an annual can survive as a perennial, producing a ratoon crop. Cereals adapted to a temperate climate, such as barley, oats, rye, spelt, triticale, and wheat, are called cool-season cereals. Those preferring a tropical climate, such as millet and sorghum, are called warm-season cereals. Cool-season cereals, especially rye, followed by barley, are hardy; they grow best in fairly cool weather, and stop growing, depending on variety, when the temperature goes above around 30 °C or 85 °F. Warm-season cereals, in contrast, require hot weather and cannot tolerate frost. Cool-season cereals can be grown in highlands in the tropics, where they sometimes deliver several crops in a single year.',
        children: [
            {
                id: 501,
                topic: 'Planting',
                text: 'In the tropics, warm-season cereals can be grown at any time of the year. In temperate zones, these cereals can only be grown when there is no frost. Most cereals are planted in tilled soils, which reduces weeds and breaks up the surface of a field. Most cereals need regular water in the early part of their life cycle. Rice is commonly grown in flooded fields, though some strains are grown on dry land. Other warm climate cereals, such as sorghum, are adapted to arid conditions.' +
                        'Cool-season cereals are grown mainly in temperate zones. These cereals often have both winter varieties for autumn sowing, winter dormancy, and early summer harvesting, and spring varieties planted in spring and harvested in late summer. Winter varieties have the advantage of using water when it is plentiful, and permitting a second crop after the early harvest. They flower only in spring as they require vernalization, exposure to cold for a specific period, fixed genetically. Spring crops grow when it is warmer but less rainy, so they may need irrigation.'
            },
            {
                id: 502,
                topic: 'Growth',
                text: 'Cereal strains are bred for consistency and resilience to the local environmental conditions. The greatest constraints on yield are plant diseases, especially rusts (mostly the Puccinia spp.) and powdery mildews. Fusarium head blight, caused by Fusarium graminearum, is a significant limitation on a wide variety of cereals. Other pressures include pest insects and wildlife like rodents and deer. In conventional agriculture, some farmers will apply fungicides or pesticides'
            },
            {
                id: 503,
                topic: 'Harvesting',
                text: 'Annual cereals die when they have come to seed, and dry up. Harvesting begins once the plants and seeds are dry enough. Harvesting in mechanized agricultural systems is by combine harvester, a machine which drives across the field in a single pass in which it cuts the stalks and then threshes and winnows the grain. In traditional agricultural systems, mostly in the Global South, harvesting may be by hand, using tools such as scythes and grain cradles. Leftover parts of the plant can be allowed to decompose, or collected as straw; this can be used for animal bedding, mulch, and a growing medium for mushrooms. It is used in crafts such as building with cob or straw-bale construction.'
            },
            {
                id: 504,
                topic: 'Preprocessing and storage',
                text: 'If cereals are not completely dry when harvested, such as when the weather is rainy, the stored grain will be spoilt by mould fungi such as Aspergillus and Penicillium. This can be prevented by drying it artificially. It may then be stored in a grain elevator or silo, to be sold later. Grain stores need to be constructed to protect the grain from damage by pests such as seed-eating birds and rodents.'
            },
            {
                id: 505,
                topic: 'Processing',
                text: 'When the cereal is ready to be distributed, it is sold to a manufacturing facility that first removes the outer layers of the grain for subsequent milling for flour or other processing steps, to produce foods such as flour, oatmeal, or pearl barley. In developing countries, processing may be traditional, in artisanal workshops, as with tortilla production in Central America.' +
                        'Most cereals can be processed in a variety of ways. Rice processing, for instance, can create whole-grain or polished rice, or rice flour. Removal of the germ increases the longevity of grain in storage. Some grains can be malted, a process of activating enzymes in the seed to cause sprouting that turns the complex starches into sugars before drying. These sugars can be extracted for industrial uses and further processing, such as for making industrial alcohol, beer, whisky, or rice wine, or sold directly as a sugar. In the 20th century, industrial processes developed around chemically altering the grain, to be used for other processes. In particular, maize can be altered to produce food additives, such as corn starch and high-fructose corn syrup.'
            }
        ]
    },
    {
        id: 6,
        topic: 'Effects on the environment',
        children: [
            {
                id: 601,
                topic: 'Impacts',
                text: 'Cereal production has a substantial impact on the environment. Tillage can lead to soil erosion and increased runoff. Irrigation consumes large quantities of water; its extraction from lakes, rivers, or aquifers may have multiple environmental effects, such as lowering the water table and cause salination of aquifers. Fertilizer production contributes to global warming, and its use can lead to pollution and eutrophication of waterways. Arable farming uses large amounts of fossil fuel, releasing greenhouse gases which contribute to global warming. Pesticide usage can cause harm to wildlife, such as to bees.'
            },
            {
                id: 602,
                topic: 'Mitigations',
                text: 'Some of the impacts of growing cereals can be mitigated by changing production practices. Tillage can be reduced by no-till farming, such as by direct drilling of cereal seeds, or by developing and planting perennial crop varieties so that annual tilling is not required. Rice can be grown as a ratoon crop; and other researchers are exploring perennial cool-season cereals, such as kernza, being developed in the US.' +
                        'Fertilizer and pesticide usage may be reduced in some polycultures, growing several crops in a single field at the same time. Fossil fuel-based nitrogen fertilizer usage can be reduced by intercropping cereals with legumes which fix nitrogen. Greenhouse gas emissions may be cut further by more efficient irrigation or by water harvesting methods like contour trenching that reduce the need for irrigation, and by breeding new crop varieties.'
            }
        ]
    }, 
    {
        id: 7,
        topic: 'Uses',
        children: [
            {
                id: 701,
                topic: 'Direct consumption',
                text: 'Some cereals such as rice require little preparation before human consumption. For example, to make plain cooked rice, raw milled rice is washed and boiled. Foods such as porridge and muesli may be made largely of whole cereals, especially oats, whereas commercial breakfast cereals such as granola may be highly processed and combined with sugars, oils, and other products.'
            },
            {
                id: 702,
                topic: 'Flour-based foods',
                text: 'Cereals can be ground to make flour. Wheat flour is the main ingredient of bread and pasta. Maize flour has been important in Mesoamerica since ancient times, with foods such as Mexican tortillas and tamales. Rye flour is a constituent of bread in central and northern Europe, while rice flour is common in Asia.' + 
                        'A cereal grain consists of starchy endosperm, germ, and bran. Wholemeal flour contains all of these; white flour is without some or all of the germ or bran.'
            },
            {
                id: 703,
                topic: 'Alcohol',
                text: 'Because cereals have a high starch content, they are often used to make industrial alcohol and alcoholic drinks by fermentation. For instance, beer is produced by brewing and fermenting starch, mainly from cereal grains—most commonly malted barley. Rice wines such as Japanese sake are brewed in Asia;= a fermented rice and honey wine was made in China some 9,000 years ago.'
            },
            {
                id: 704,
                topic: 'Animal feed',
                text: 'Cereals and their related byproducts such as hay are routinely fed to farm animals. Common cereals as animal food include maize, barley, wheat, and oats. Moist grains may be treated chemically or made into silage; mechanically flattened or crimped, and kept in airtight storage until used; or stored dry with a moisture content of less than 14%. Commercially, grains are often combined with other materials and formed into feed pellets.'
            }
        ]
    },
    {
        id: 8,
        topic: 'Nutrition',
        children: [
            {
                id: 801,
                topic: 'Whole-grain and processed',
                text: 'As whole grains, cereals provide carbohydrates, polyunsaturated fats, protein, vitamins, and minerals. When processed by the removal of the bran and germ, all that remains is the starchy endosperm. In some developing countries, cereals constitute a majority of daily sustenance. In developed countries, cereal consumption is moderate and varied but still substantial, primarily in the form of refined and processed grains.'
            },
            {
                id: 802,
                topic: 'Amino acid balance',
                text: 'Some cereals are deficient in the essential amino acid lysine, obliging vegetarian cultures to combine their diet of cereal grains with legumes to obtain a balanced diet. Many legumes, however, are deficient in the essential amino acid methionine, which grains contain. Thus, a combination of legumes with grains forms a well-balanced diet for vegetarians. Such combinations include dal (lentils) with rice by South Indians and Bengalis, beans with maize tortillas, tofu with rice, and peanut butter with wholegrain wheat bread (as sandwiches) in several other cultures, including the Americas. For feeding animals, the amount of crude protein measured in grains is expressed as grain crude protein concentration.'
            }
        ]
    },
    {
        id: 9,
        topic: 'Production and trade commodities',
        text: "Cereals constitute the world's largest commodities by tonnage, whether measured by production or by international trade. Several major producers of cereals dominate the market. Because of the scale of the trade, some countries have become reliant on imports, thus cereals pricing or availability can have outsized impacts on countries with a food trade imbalance and thus food security. Speculation, as well as other compounding production and supply factors leading up to the 2007–2008 financial crises, created rapid inflation of grain prices during the 2007–2008 world food price crisis. Other disruptions, such as climate change or war related changes to supply or transportation can create further food insecurity; for example the Russian invasion of Ukraine in 2022 disrupted Ukrainian and Russian wheat supplies causing a global food price crisis in 2022 that affected countries heavily dependent on wheat flour.",
        children: [
            {
                id: 901,
                topic: 'Production',
                text: "Cereals are the world's largest crops by tonnage of grain produced. Three cereals, maize, wheat, and rice, together accounted for 89% of all cereal production worldwide in 2012, and 43% of the global supply of food energy in 2009, while the production of oats and rye has drastically fallen from their 1960s levels." +
                        "Other cereals not included in the U.N.'s Food and Agriculture Organization statistics include wild rice, which is grown in small amounts in North America, and teff, an ancient grain that is a staple in Ethiopia. Teff is grown in sub-Saharan Africa as a grass primarily for feeding horses. It is high in fiber and protein. Its flour is often used to make injera. It can be eaten as a warm breakfast cereal like farina with a chocolate or nutty flavor."
            },
            {
                id: 902,
                topic: 'Trade',
                text: 'Cereals are the most traded commodities by quantity in 2021, with wheat, maize, and rice the main cereals involved. The Americas and Europe are the largest exporters, and Asia is the largest importer. The largest exporter of maize is the US, while India is the largest exporter of rice. China is the largest importer of maize and of rice. Many other countries trade cereals, both as exporters and as importers. Cereals are traded as futures on world commodity markets, helping to mitigate the risks of changes in price for example, if harvests fail.'
            }

        ]
    }

]

export default cerealsInfo;