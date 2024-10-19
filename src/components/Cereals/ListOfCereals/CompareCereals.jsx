/* eslint-disable react/prop-types */

import { useState } from "react";
import classes from "../../../style/universalClass.module.scss";
import { ChooseVariety } from "../../SearchComponent/ChooseAVariety";
import { useContextAuth } from "../../context/Context";

export const CompareCereals = ({ cereals }) => {
  const [selectedNutrient, setSelectedNutrient] = useState("");
  const [showVariety, setShowVariety] = useState(false);
  const { selectedItems, setSelectedItems } = useContextAuth();
  const [cerealQuantity, setCerealQuantity] = useState(null);
  const [selectedItemQuantity, setSelectedItemQuantity] = useState(null);

  const handleChange = (event) => {
    const nutrient = event.target.value;
    setSelectedNutrient(nutrient);

    const selectedCerealNutrient = cereals?.nutritionText?.find(
      (nutrientObj) => nutrientObj.element === nutrient
    );
    if (selectedCerealNutrient) {
      setCerealQuantity(selectedCerealNutrient?.quantity);
    }

    if (selectedItems) {
      const selectedItemNutrient = selectedItems?.nutritionText?.find(
        (nutrientObj) => nutrientObj.element === nutrient
      );
      if (selectedItemNutrient) {
        setSelectedItemQuantity(selectedItemNutrient?.quantity);
      }
    }
  };

  const quantityDifference =
    cerealQuantity && selectedItemQuantity
      ? cerealQuantity - selectedItemQuantity
      : null;

  return (
    <div className={classes.background}>
      <div
        className={classes.info}
        style={showVariety ? { display: "none" } : { display: "block" }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <h2 className={classes.compareHeading}>
              <span style={{ color: "red" }}>{cereals.name}</span> nutrition:
            </h2>
            <select
              className={classes.selectClassNutrition}
              onChange={handleChange}
              value={selectedNutrient}
            >
              <option value="" disabled>
                Select a nutrient
              </option>
              {cereals?.nutritionText?.map((nutrient, index) => (
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

        {quantityDifference !== null && (
          <div>
            <h3 className={classes.quantityDifferenceClass}>
              Quantity Difference: <span>{quantityDifference}{" "}
              {cereals.measurementUnits}</span>
            </h3>
          </div>
        )}
        <button
          className={classes.btnClass}
          onClick={() => setShowVariety(true)}
        >
          Choose a variety
        </button>
      </div>
      {showVariety && <ChooseVariety goBack={() => setShowVariety()} />}
    </div>
  );
};
