/* eslint-disable react/prop-types */
import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import classes from "../../style/universalClass.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import NutrientSortedList from "./NutrientSortedList";

export const OnNutritionList = ({ cereals, fruit, nuts, vegetable, goBack }) => {
  const [selectedNutrient, setSelectedNutrient] = useState(null);
  console.log(cereals)

  const handleChange = (event) => {
    const selectedElement = event.target.value;
    const selectedNutrientObj = 
      cereals?.nutritionText?.find((nutrient) => nutrient.element === selectedElement) ||
      fruit?.nutritionText?.find((nutrient) => nutrient.element === selectedElement) ||
      nuts?.nutritionText?.find((nutrient) => nutrient.element === selectedElement) ||
      vegetable?.nutritionText?.find((nutrient) => nutrient.element === selectedElement);

    setSelectedNutrient(selectedNutrientObj);
  };

  return (
    <div className={classes.background}>
      <div className={classes.nutritionListInfo}>
        <FontAwesomeIcon
          icon={faCircleXmark}
          size="2x"
          className={classes.closeBtn}
          onClick={() => goBack(false)}
        />
        <div>
          <h3>{fruit?.name || cereals?.name || nuts?.name || vegetable?.name}</h3>
          <label htmlFor="nutrient-select"></label>
          <select
            id="nutrient-select"
            className={classes.selectClassNutrition}
            onChange={handleChange}
            value={selectedNutrient?.element || ""}
          >
            <option value="" disabled>
              Select a nutrient
            </option>
            {(fruit?.nutritionText || cereals?.nutritionText || nuts?.nutritionText || vegetable?.nutritionText)?.map((nutrient, index) => (
              <option key={index} value={nutrient.element}>
                {nutrient?.element?.slice(0, -1)}
              </option>
            ))}
          </select>
        </div>
        <NutrientSortedList
          item={selectedNutrient?.element}
          name={cereals?.name || fruit?.name || nuts?.name || vegetable?.name}
        />
      </div>
    </div>
  );
};