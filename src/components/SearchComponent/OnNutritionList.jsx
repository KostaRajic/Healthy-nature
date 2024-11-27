/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "../../style/universalClass.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import NutrientSortedList from "./NutrientSortedList";
import { nutritionBenefits } from "../nutritionBenefits";
import { zdravstveniBenefiti } from "../zdravstveniBenefiti";
import { useContextAuth } from "../context/Context";

export const OnNutritionList = ({
  cereals,
  fruit,
  nuts,
  vegetable,
  goBack,
}) => {
  const [selectedNutrient, setSelectedNutrient] = useState(null);
  const { switchLanguage } = useContextAuth();

  const handleChange = (event) => {
    const selectedElement = event.target.value;
    const selectedNutrientObj =
      cereals?.nutritionText?.find(
        (nutrient) => nutrient.element === selectedElement
      ) ||
      fruit?.nutritionText?.find(
        (nutrient) => nutrient.element === selectedElement
      ) ||
      nuts?.nutritionText?.find(
        (nutrient) => nutrient.element === selectedElement
      ) ||
      vegetable?.nutritionText?.find(
        (nutrient) => nutrient.element === selectedElement
      );

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
          <h3>
            {fruit?.name || cereals?.name || nuts?.name || vegetable?.name}
          </h3>
          <label htmlFor="nutrient-select"></label>
          <select
            className={classes.selectClassNutrition}
            onChange={handleChange}
            value={selectedNutrient?.element || ""}
          >
            <option value="" disabled>
            {switchLanguage
                  ? "Choose a nutrient"
                  : "Изаберите хранљиву материју"}
            </option>

            {(
              fruit?.nutritionText ||
              cereals?.nutritionText ||
              nuts?.nutritionText ||
              vegetable?.nutritionText
            )?.map((nutrient, index) => (
              <option key={index} value={nutrient.element}>
                {nutrient?.element?.slice(0, -1)}
              </option>
            ))}
          </select>
          {(switchLanguage ? nutritionBenefits : zdravstveniBenefiti)
            ?.filter(
              (item) => item.element == selectedNutrient?.element.slice(0, -1)
            )
            .map((item, index) => (
              <p
                key={index}
                className={classes.nutritionBenefitClassText}
                style={{fontSize: '20px' }}
              >
                {item.text}
              </p>
            ))}
        </div>
        <NutrientSortedList
          item={selectedNutrient?.element}
          name={cereals?.name || fruit?.name || nuts?.name || vegetable?.name}
        />
      </div>
    </div>
  );
};
