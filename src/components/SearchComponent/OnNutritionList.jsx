/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "../../style/universalClass.module.scss";

import NutrientSortedList from "./NutrientSortedList";



export const OnNutritionList = ({ cereals }) => {
  const [selectedNutrient, setSelectedNutrient] = useState("");


  const handleChange = (event) => {
    const selectedElement = event.target.value;

    const selectedNutrientObj = cereals?.nutritionText?.find(
        (nutrient) => nutrient.element === selectedElement
      );

      setSelectedNutrient(selectedNutrientObj);

  };

  return (
    <div className={classes.background}>
      <div className={classes.info}>
        <div>
        <h3>{cereals.name}</h3>
        <select
          className={classes.selectClassNutrition}
          onChange={handleChange}
          value={selectedNutrient.element}
        >
          <option value="" disabled>
            Select a nutrient
          </option>
          {cereals?.nutritionText?.map((nutrient, index) => (
            <option key={index} value={nutrient.element}>
              {nutrient?.element?.slice(0, -1)}
            </option>
          ))}
        </select>
        </div>
          <NutrientSortedList item={selectedNutrient?.element}/>
      </div>
    </div>
  );
};
