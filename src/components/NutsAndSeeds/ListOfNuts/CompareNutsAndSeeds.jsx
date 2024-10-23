/* eslint-disable react/prop-types */

import { useState } from "react";
import classes from "../../../style/universalClass.module.scss";
import { ChooseVariety } from "../../SearchComponent/ChooseAVariety";
import { useContextAuth } from "../../context/Context";
import { nutritionBenefits } from "../../nutritionBenefits";

export const CompareNutsAndSeeds = ({ nuts, goBack }) => {
  const [selectedNutrient, setSelectedNutrient] = useState("");
  const [showVariety, setShowVariety] = useState(false);
  const { selectedItems, setSelectedItems } = useContextAuth();
  const [nutsQuantity, setNutsQuantity] = useState(null);
  const [selectedItemQuantity, setSelectedItemQuantity] = useState(null);

  const handleChange = (event) => {
    const nutrient = event.target.value;
    setSelectedNutrient(nutrient);

    const selectedNutsNutrient = nuts?.nutritionText?.find(
      (nutrientObj) => nutrientObj.element === nutrient
    );
    if (selectedNutsNutrient) {
      setNutsQuantity(selectedNutsNutrient?.quantity || 0);
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

  const quantityDifference = nutsQuantity - selectedItemQuantity;

  return (
    <div className={classes.background}>
      <div
        className={classes.info}
        style={showVariety ? { display: "none" } : { display: "block" }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <h2 className={classes.compareHeading}>
              <span style={{ color: "red" }}>{nuts.name}</span> nutrition:
            </h2>
            <select
              className={classes.selectClassNutrition}
              onChange={handleChange}
              value={selectedNutrient}
            >
              <option value="" disabled>
                Select a nutrient
              </option>
              {nuts?.nutritionText?.map((nutrient, index) => (
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
                <span style={{ color: "red" }}>{selectedItems?.name}</span>{" "}
                nutrition:
              </h2>
              <select
                className={classes.selectClassNutrition}
                onChange={handleChange}
                value={selectedNutrient}
              >
                <option value="" disabled>
                  Select a nutrient
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
        {nutritionBenefits
          ?.filter(
            (item, index) => item.element == selectedNutrient.slice(0, -1)
          )
          .map((item, index) => (
            <p
              key={index}
              className={classes.nutritionBenefitClassText}
              style={{ color: "black" }}
            >
              {item.text}
            </p>
          ))}

        {!selectedItems ? (
          <p
            className={classes.nutritionBenefitClassText}
            style={{ color: "grey" }}
          >
            Select a nutrient to see the quantity difference.
          </p>
        ) : (
          selectedNutrient && (
            <p style={{ color: "black", fontSize: "32px" }}>
              {nuts.name} has{" "}
              {quantityDifference !== 0 && (
                <span style={{ color: "red" }}>
                  {Math.abs(quantityDifference)}{" "}
                  {nuts.measurementUnits ? nuts.measurementUnits : ""}
                </span>
              )}
              {quantityDifference > 0
                ? "more than"
                : quantityDifference < 0
                ? "less than"
                : "equal to"}{" "}
              {selectedItems?.name}.
            </p>
          )
        )}
        <div className={classes.btnClassDiv}>
          <button
            className={classes.btnClass1}
            onClick={() => setShowVariety(true)}
          >
            Choose a variety
          </button>
          <button className={classes.btnClass2} onClick={handleCloseBtn}>
            Go back
          </button>
        </div>
      </div>
      {showVariety && (
        <ChooseVariety goBack={() => setShowVariety()} dontShow={nuts.name} />
      )}
    </div>
  );
};
