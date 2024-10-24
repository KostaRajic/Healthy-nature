/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "../../../style/universalClass.module.scss";
import { NutritionAndHealthV } from "./NutritionAndHealthV";
import { vegetables } from "./vegetables";
import { VegetablesCultivation } from "./VegetablesCultivation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export const ListOfVegetables = ({ goBack }) => {
  const [showNutritionAndHealth, setShowNutritionAndHealth] = useState(false);
  const [selectedVegetable, setSelectedVegetable] = useState(null);
  const [showCultivation, setShowCultivation] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleVegetables = (vegetable) => {
    setSelectedVegetable(vegetable);
    setShowNutritionAndHealth(true);
  };

  const handleCultivation = (vegetable) => {
    setSelectedVegetable(vegetable);
    setShowNutritionAndHealth(false);
    setShowCultivation(true);
  };

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItem = vegetables?.filter((item, index) =>
    item?.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={classes.background}>
      <div
        className={classes.info}
        style={showCultivation ? { display: "none" } : { display: "block" } && showNutritionAndHealth ? { display: "none" } : { display: "block" }}
      >
        <input type="text" onChange={handleInput} placeholder="Search..." />
        <FontAwesomeIcon
              icon={faCircleXmark}
              size="2x"
              className={classes.closeListBtn}
              onClick={() => goBack(false)}
            />
        {filteredItem
          ? filteredItem?.map((vegetable) => (
              <div key={vegetable.id} className={classes.flexClass}>
                <div>
                  <h2>{vegetable.name}</h2>
                  <img
                    className={classes.singleProduct}
                    src={vegetable.img}
                    alt={vegetable.name}
                  />
                </div>
                <div className={classes.centralContent}>
                  <h3>{vegetable.inGeneralHeading}</h3>
                  <div className={classes.inGeneralClass}>
                    {vegetable.inGeneral}
                  </div>
                </div>
                <aside className={classes.asideButtonsClass}>
                  <button onClick={() => handleVegetables(vegetable)}>
                    Nutrition and Health
                  </button>
                  <button onClick={() => handleCultivation(vegetable)}>
                    Cultivation
                  </button>
                </aside>
              </div>
            ))
          : vegetables?.map((vegetable) => (
              <div key={vegetable.id} className={classes.flexClass}>
                <div>
                  <h2>{vegetable.name}</h2>
                  <img
                    className={classes.singleProduct}
                    src={vegetable.img}
                    alt={vegetable.name}
                  />
                </div>
                <div className={classes.centralContent}>
                  <h3>{vegetable.inGeneralHeading}</h3>
                  <div className={classes.inGeneralClass}>
                    {vegetable.inGeneral}
                  </div>
                </div>
                <aside className={classes.asideButtonsClass}>
                  <button onClick={() => handleVegetables(vegetable)}>
                    Nutrition and Health
                  </button>
                  <button onClick={() => handleCultivation(vegetable)}>
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
      {showNutritionAndHealth && selectedVegetable && (
        <NutritionAndHealthV vegetable={selectedVegetable} goBack={() => setShowNutritionAndHealth()}/>
      )}
      {showCultivation && (
        <VegetablesCultivation
          vegetable={selectedVegetable}
          goBack={() => setShowCultivation()}
        />
      )}
    </div>
  );
};
