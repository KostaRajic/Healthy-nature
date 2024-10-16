import { useState } from "react";
import classes from '../../../style/universalClass.module.scss'
import { fruits } from "./fruits";
import { NutritionAndHealthFr } from "./NutritionAndHealthFr";
import { FruitsCultivation } from "./fruitsCultivation";


export const ListOfFruits = ({ goBack }) => {
  const [showNutritionAndHealth, setShowNutritionAndHealth] = useState(false);
  const [showCultivation, setShowCultivation] = useState(false)
  const [selectedFruit, setSelectedFruit] = useState(null);

  const handleFruit = (fruit) => {
    setSelectedFruit(fruit);
    setShowNutritionAndHealth(true);
    setShowCultivation(false)
    }
    
  const handleCultivation = (fruit) => {
    setSelectedFruit(fruit);
    setShowCultivation(true)
    setShowNutritionAndHealth(false);
  }
  

  return (
    <div className={classes.background}>
      <div className={classes.info} style={showCultivation ? {display: 'none'} : {display: 'block'}}>
        {fruits?.map((fruit) => (
          <div key={fruit.id} className={classes.flexClass}>
            <div>
              <h2>{fruit.name}</h2>
              <img className={classes.singleProduct}
                src={fruit.img}
                alt={fruit.name}
                style={{width: '300px'}}
              />
            </div>
            <div className={classes.inGeneralClass}>
              {fruit.inGeneral}
            </div>
            <aside className={classes.asideButtonsClass}>
              <button onClick={() => handleFruit(fruit)}>Nutrition and Health</button>
              <button onClick={() => handleCultivation(fruit)}>Cultivation</button>
            </aside>
          </div>
        ))}
        <button 
        className={classes.goBackFromList}
        onClick={() => goBack(false)}
        >Go Back</button>
      </div>
      {showNutritionAndHealth && selectedFruit && (
        <NutritionAndHealthFr fruit={selectedFruit} />
      )}
      { showCultivation && <FruitsCultivation goBack={() => setShowCultivation()} fruitCultivationId={selectedFruit?.id}/>}
    </div>
  );
};
