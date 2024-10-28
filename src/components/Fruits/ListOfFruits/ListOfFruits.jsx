/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "../../../style/universalClass.module.scss";
import { fruits } from "./fruits";
import { NutritionAndHealthFr } from "./NutritionAndHealthFr";
import { FruitsCultivation } from "./FruitsCultivation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export const ListOfFruits = ({ goBack }) => {
  const [showNutritionAndHealth, setShowNutritionAndHealth] = useState(false);
  const [showCultivation, setShowCultivation] = useState(false);
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFruit = (fruit) => {
    setSelectedFruit(fruit);
    setShowNutritionAndHealth(true);
    setShowCultivation(false);
  };

  const handleCultivation = (fruit) => {
    setSelectedFruit(fruit);
    setShowCultivation(true);
    setShowNutritionAndHealth(false);
  };

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItem = fruits?.filter((item, index) =>
    item?.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={classes.background}>
      <div
        className={classes.info}
        style={
          showCultivation
            ? { display: "none" }
            : { display: "block" } && showNutritionAndHealth
            ? { display: "none" }
            : { display: "block" }
        }
      >
        <div className={classes.headerOfList}>
          <h2 className={classes.headingOfList}>Fruits</h2>
          <input type="text" onChange={handleInput} placeholder="Search..." />
          <FontAwesomeIcon
            icon={faCircleXmark}
            size="2x"
            className={classes.closeBtn2}
            onClick={() => goBack(false)}
          />
        </div>
        {filteredItem
          ? filteredItem?.map((fruit) => (
              <div key={fruit.id} className={classes.flexClass}>
                <div>
                  <h2>{fruit.name}</h2>
                  <img
                    className={classes.singleProduct}
                    src={fruit.img}
                    alt={fruit.name}
                  />
                </div>
                <div className={classes.centralContent}>
                  <h3>{fruit.inGeneralHeading}</h3>
                  <div className={classes.inGeneralClass}>
                    {fruit.inGeneral}
                  </div>
                </div>
                <aside className={classes.asideButtonsClass}>
                  <button onClick={() => handleFruit(fruit)}>
                    Nutrition and Health
                  </button>
                  <button onClick={() => handleCultivation(fruit)}>
                    Cultivation
                  </button>
                </aside>
              </div>
            ))
          : fruits?.map((fruit) => (
              <div key={fruit.id} className={classes.flexClass}>
                <div>
                  <h2>{fruit.name}</h2>
                  <img
                    className={classes.singleProduct}
                    src={fruit.img}
                    alt={fruit.name}
                  />
                </div>
                <div className={classes.centralContent}>
                  <h3>{fruit.inGeneralHeading}</h3>
                  <div className={classes.inGeneralClass}>
                    {fruit.inGeneral}
                  </div>
                </div>
                <aside className={classes.asideButtonsClass}>
                  <button onClick={() => handleFruit(fruit)}>
                    Nutrition and Health
                  </button>
                  <button onClick={() => handleCultivation(fruit)}>
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
      {showNutritionAndHealth && selectedFruit && (
        <NutritionAndHealthFr
          fruit={selectedFruit}
          goBack={() => setShowNutritionAndHealth()}
        />
      )}
      {showCultivation && (
        <FruitsCultivation
          goBack={() => setShowCultivation()}
          fruit={selectedFruit}
        />
      )}
    </div>
  );
};
