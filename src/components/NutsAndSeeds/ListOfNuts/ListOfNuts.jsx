/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "../../../style/universalClass.module.scss";
import { NutritionAndHealthN } from "./NutritionAndHealthN";
import nuts from "./nuts";
import { NutsAndSeedsCultivation } from "./NuttsAndSeedsCultivation";

export const ListOfNuts = ({ goBack }) => {
  const [showNutritionAndHealth, setShowNutritionAndHealth] = useState(false);
  const [selectedNuts, setSelectedNuts] = useState(null);
  const [showCultivation, setShowCultivation] = useState(false);

  const handleNuts = (nuts) => {
    setSelectedNuts(nuts);
    setShowNutritionAndHealth(true);
  };

  const handleCultivation = (nuts) => {
    setShowCultivation(true);
    setShowNutritionAndHealth(false);
    setSelectedNuts(nuts);
  };

  return (
    <div className={classes.background}>
      <div
        className={classes.info}
        style={showCultivation ? { display: "none" } : { display: "block" } && showNutritionAndHealth ? { display: "none" } : { display: "block" }}
      >
        {nuts?.map((nuts) => (
          <div key={nuts.id} className={classes.flexClass}>
            <div>
              <h2>{nuts.name}</h2>
              <img
                className={classes.singleProduct}
                src={nuts.img}
                alt={nuts.name}
                style={{ width: "300px" }}
              />
            </div>
            <div className={classes.centralContent}>
              <h3>{nuts.inGeneralHeading}</h3>
              <div className={classes.inGeneralClass}>{nuts.inGeneral}</div>
            </div>
            <aside className={classes.asideButtonsClass}>
              <button onClick={() => handleNuts(nuts)}>
                Nutrition and Health
              </button>
              <button onClick={() => handleCultivation(nuts)}>
                Cultivation
              </button>
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
      {showNutritionAndHealth && selectedNuts && (
        <NutritionAndHealthN nuts={selectedNuts} goBack={() => setShowNutritionAndHealth()}/>
      )}
      {showCultivation && (
        <NutsAndSeedsCultivation
          nuts={selectedNuts}
          goBack={() => setShowCultivation()}
        />
      )}
    </div>
  );
};
