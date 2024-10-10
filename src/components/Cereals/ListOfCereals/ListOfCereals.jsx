/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "../../../style/universalClass.module.scss";
import { NutritionAndHealthC } from "./NutritionAndHealthC";
import cereals from "./cereals";

export const ListOfCereals = ({ goBack }) => {
  const [showNutritionAndHealth, setShowNutritionAndHealth] = useState(false);
  const [selectedCereals, setSelectedCereals] = useState(null);

  const handleCereals = (cereals) => {
    setSelectedCereals(cereals);
    setShowNutritionAndHealth(true);
  };

  return (
    <div className={classes.background}>
      <div className={classes.info}>
        {cereals?.map((cereals) => (
          <div key={cereals.id} className={classes.flexClass}>
            <div>
              <h2>{cereals.name}</h2>
              <img
                className={classes.singleProduct}
                src={cereals.img}
                alt={cereals.name}
              />
            </div>
            <div className={classes.inGeneralClass}>{cereals.inGeneral}</div>
            <aside className={classes.asideButtonsClass}>
              <button onClick={() => handleCereals(cereals)}>
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
      {showNutritionAndHealth && selectedCereals && (
        <NutritionAndHealthC cereals={selectedCereals} />
      )}
    </div>
  );
};
