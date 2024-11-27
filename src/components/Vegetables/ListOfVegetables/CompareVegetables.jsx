/* eslint-disable react/prop-types */

import { useState } from "react";
import classes from "../../../style/universalClass.module.scss";
import { ChooseVariety } from "../../SearchComponent/ChooseAVariety";
import { useContextAuth } from "../../context/Context";
import { nutritionBenefits } from "../../nutritionBenefits";
import { zdravstveniBenefiti } from "../../zdravstveniBenefiti";

export const CompareVegetables = ({ vegetable, goBack }) => {
  const [selectedNutrient, setSelectedNutrient] = useState("");
  const [showVariety, setShowVariety] = useState(false);
  const { selectedItems, setSelectedItems, switchLanguage } = useContextAuth();
  const [vegetableQuantity, setVegetableQuantity] = useState(0);
  const [selectedItemQuantity, setSelectedItemQuantity] = useState(0);
  const [measurementUnit, setMeasurementUnit] = useState(0);

  const handleChange = (event) => {
    const nutrient = event.target.value;
    setSelectedNutrient(nutrient);

    const selectedVegetableNutrient = vegetable?.nutritionText?.find(
      (nutrientObj) => nutrientObj.element === nutrient
    );
    if (selectedVegetableNutrient) {
      setVegetableQuantity(selectedVegetableNutrient?.quantity || 0);
      setMeasurementUnit(selectedVegetableNutrient.measurementUnits || "");
    }

    if (selectedItems) {
      const selectedItemNutrient = selectedItems?.nutritionText?.find(
        (nutrientObj) => nutrientObj.element === nutrient
      );
      if (selectedItemNutrient) {
        setSelectedItemQuantity(selectedItemNutrient?.quantity || 0);
      }
    }
  };

  const handleCloseBtn = () => {
    setSelectedItems("");
    goBack(false);
  };

  const quantityDifference = vegetableQuantity - selectedItemQuantity;

  return (
    <div className={classes.background}>
      <div
        className={classes.info}
        style={showVariety ? { display: "none" } : { display: "block" }}
      >
        <div className={classes.compareFlexDisplay}>
          <div>
            <h2 className={classes.compareHeading}>
              <span>{vegetable.name}</span>
              {switchLanguage ? " nutrition:" : " исхрана:"}
            </h2>
            <select
              className={classes.selectClassNutrition}
              onChange={handleChange}
              value={selectedNutrient}
            >
              <option value="" disabled>
                {switchLanguage
                  ? "Choose a nutrient"
                  : "Изаберите хранљиву материју"}
              </option>
              {vegetable?.nutritionText?.map((nutrient, index) => (
                <option key={index} value={nutrient.element}>
                  {nutrient.element} {nutrient.quantity}{" "}
                  {nutrient.measurementUnits}
                </option>
              ))}
            </select>
          </div>
          {selectedItems && (
            <div>
              <h2 className={classes.compareHeading}>
                <span>{selectedItems?.name}</span>{" "}
                {switchLanguage ? " nutrition:" : " исхрана:"}
              </h2>
              <select
                className={classes.selectClassNutrition}
                onChange={handleChange}
                value={selectedNutrient}
              >
                <option value="" disabled>
                  {switchLanguage
                    ? "Choose a nutrient"
                    : "Изаберите хранљиву материју"}
                </option>
                {selectedItems?.nutritionText?.map((nutrient, index) => (
                  <option key={index} value={nutrient.element}>
                    {nutrient.element} {nutrient.quantity}{" "}
                    {nutrient.measurementUnits}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        {(switchLanguage ? nutritionBenefits : zdravstveniBenefiti)
          ?.filter(
            (item, index) => item.element == selectedNutrient.slice(0, -1)
          )
          .map((item, index) => (
            <p key={index} className={classes.nutritionBenefitClassText}>
              {item.text}
            </p>
          ))}
        {!selectedItems ? (
          <p className={classes.nutritionBenefitClassText}>
            {switchLanguage
              ? "Select a type to see the quantity difference."
              : "Изаберите тип да бисте видели количинску разлику."}
          </p>
        ) : (
          selectedNutrient && (
            <p style={{ fontSize: "32px" }}>
              {vegetable.name}  {switchLanguage ? 'has' : 'има'}{" "}
              {quantityDifference !== 0 && (
                <>
                  <span style={{ color: "white", textDecoration: "underline" }}>
                    {Math.abs(quantityDifference)}{" "}
                  </span>
                  {measurementUnit}
                </>
              )}
              {quantityDifference > 0
                ? switchLanguage
                  ? " more then"
                  : " више од"
                : quantityDifference < 0
                ? switchLanguage
                  ? " less then"
                  : " мање од"
                : switchLanguage
                ? " equal to"
                : " једнако са"}{" "}
              {selectedItems?.name}.
            </p>
          )
        )}
        <div className={classes.btnClassDiv}>
          <button
            className={classes.btnClass1}
            onClick={() => setShowVariety(true)}
          >
            {switchLanguage ? "Choose a variety" : "Изаберите сорту"}
          </button>
          <button className={classes.btnClass2} onClick={handleCloseBtn}>
            {switchLanguage ? "Back" : "Назад"}
          </button>
        </div>
      </div>
      {showVariety && (
        <ChooseVariety
          dontShow={vegetable.name}
          goBack={() => setShowVariety()}
        />
      )}
    </div>
  );
};
