/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "../../../style/universalClass.module.scss";
import { NutritionAndHealthV } from "./NutritionAndHealthV";
import { vegetables } from "./vegetables";

export const ListOfVegetables = ({ goBack }) => {
  const [showNutritionAndHealth, setShowNutritionAndHealth] = useState(false);
  const [selectedVegetable, setSelectedVegetable] = useState(null);

  const handleVegetables = (vegetable) => {
    setSelectedVegetable(vegetable);
    setShowNutritionAndHealth(true);
  };

  return (
    <div className={classes.background}>
      <div className={classes.info}>
        {vegetables?.map((vegetable) => (
          <div key={vegetable.id} className={classes.flexClass}>
            <div>
              <h2>{vegetable.name}</h2>
              <img
                className={classes.singleProduct}
                src={vegetable.img}
                alt={vegetable.name}
              />
            </div>
            <div className={classes.inGeneralClass}>{vegetable.inGeneral}</div>
            <aside className={classes.asideButtonsClass}>
              <button onClick={() => handleVegetables(vegetable)}>
                Nutrition and Health
              </button>
              <button>Cultivation</button>
            </aside>
          </div>
        ))}
        <button
          className={classes.goBackFromList}
          onClick={() => goBack(false)}
        >
          Go Back
        </button>
      </div>
      {showNutritionAndHealth && selectedVegetable && (
        <NutritionAndHealthV vegetables={selectedVegetable} />
      )}
    </div>
  );
};
