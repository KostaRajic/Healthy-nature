const fruitsInfo = [
    {
        id: 1,
        topic: 'Fruits',
        text: 'Fruits are the mature ovary of a flower, containing seeds and often fleshy, making them a key component of many plants\' reproductive cycles. They come in a wide range of shapes, sizes, and flavors, serving as both food for humans and animals and a mechanism for seed dispersal.'
    },
    {
        id: 2,
        topic: 'Botanical vs. culinary',
        text: 'In botany, a fruit is defined as the mature ovary of a flowering plant, often containing seeds. However, in culinary terms, fruits are usually sweet or tart plant products like apples or berries, while savory plant products like tomatoes or cucumbers are treated as vegetables.'
    },
    {
        id: 3,
        topic: 'Structure',
        text: 'The structure of a fruit typically includes the pericarp, which is divided into three layers: the exocarp (outer layer), mesocarp (middle fleshy layer), and endocarp (innermost layer that surrounds the seed). The variation in these layers determines the type of fruit.'
    },
    {
        id: 4,
        topic: 'Development',
        text: 'Fruits develop from the ovary of a flower after fertilization. The process involves the transformation of the ovary wall into the pericarp, which protects the seeds and aids in their dispersal. Hormonal changes in the plant play a critical role in fruit development.'
    },
    {
        id: 5,
        topic: 'Classification of fruits',
        text: 'Fruits can be classified based on their origin and structure into simple, aggregate, multiple, and accessory fruits.',
        children: [
            {
                id: 501,
                topic: 'Simple fruits',
                text: 'Simple fruits develop from a single ovary and are further categorized into fleshy fruits like drupes and dry fruits like legumes or nuts.'
            },
            {
                id: 502,
                topic: 'Berries',
                text: 'Berries are a type of fleshy fruit with seeds embedded in the pulp, such as grapes, tomatoes, and blueberries.'
            },
            {
                id: 503,
                topic: 'Aggregate fruits',
                text: 'Aggregate fruits form from a single flower with multiple ovaries, each producing a small fruit. Examples include raspberries and strawberries.'
            },
            {
                id: 504,
                topic: 'Multiple fruits',
                text: 'Multiple fruits develop from a cluster of flowers, or an inflorescence, where the fruits merge into a single larger structure, like pineapples or figs.'
            },
            {
                id: 505,
                topic: 'Accessory fruit forms',
                text: 'Accessory fruits incorporate parts of the flower other than the ovary into the fruit structure. Examples include apples and pears, where the fleshy part is derived from the flower\'s receptacle.'
            }
        ]
    },
    {
        id: 6,
        topic: 'Seedless fruits',
        text: 'Seedless fruits result from genetic modification, hybridization, or hormonal treatments that prevent seed formation, making them more convenient to eat. Examples include seedless grapes and bananas.'
    },
    {
        id: 7,
        topic: 'Seed dissemination',
        text: 'Fruits play a crucial role in seed dissemination, employing mechanisms like wind, water, or animal interaction to spread seeds over wide areas for germination.'
    },
    {
        id: 8,
        topic: 'Food uses',
        text: 'Fruits are essential in human diets, offering flavor, nutrition, and health benefits. They are consumed fresh, dried, or processed into juices and preserves.',
        children: [
            {
                id: 801,
                topic: 'Storage',
                text: 'Proper storage of fruits is crucial to maintain their freshness and nutritional value. Techniques include refrigeration, freezing, and controlled-atmosphere storage.'
            },
            {
                id: 802,
                topic: 'Nutritional value',
                text: 'Fruits are rich in essential nutrients like vitamins, minerals, fiber, and antioxidants, making them a cornerstone of a balanced diet.'
            },
            {
                id: 803,
                topic: 'Food safety',
                text: 'Washing fruits before consumption helps remove potential contaminants like pesticides or bacteria, ensuring they are safe to eat.'
            },
            {
                id: 804,
                topic: 'Allergies',
                text: 'Some people are allergic to specific fruits, causing reactions ranging from mild itching to severe anaphylaxis. Common culprits include kiwis and strawberries.'
            }
        ]
    },
    {
        id: 9,
        topic: 'Nonfood uses',
        text: 'Beyond consumption, fruits have various nonfood uses, such as in cosmetics, dyes, and biofuels. For example, the oil from palm fruits is used in soaps and lotions.'
    }
];


export default fruitsInfo;