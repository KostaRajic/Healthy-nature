/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "../../../style/universalClass.module.scss";
import { NutritionAndHealthN } from "./NutritionAndHealthN";
import nuts from "./nuts";

export const ListOfNuts = ({ goBack }) => {
  const [showNutritionAndHealth, setShowNutritionAndHealth] = useState(false);
  const [selectedNuts, setSelectedNuts] = useState(null);

  const handleNuts = (nuts) => {
    setSelectedNuts(nuts);
    setShowNutritionAndHealth(true);
  };

  return (
    <div className={classes.background}>
      <div className={classes.info}>
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
            <div className={classes.inGeneralClass}>{nuts.inGeneral}</div>
            <aside className={classes.asideButtonsClass}>
              <button onClick={() => handleNuts(nuts)}>
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
      {showNutritionAndHealth && selectedNuts && (
        <NutritionAndHealthN nuts={selectedNuts} />
      )}
    </div>
  );
};
