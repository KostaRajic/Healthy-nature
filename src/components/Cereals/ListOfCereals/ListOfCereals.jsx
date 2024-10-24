/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "../../../style/universalClass.module.scss";
import { NutritionAndHealthC } from "./NutritionAndHealthC";
import cereals from "./cereals";
import { CerealsCultivation } from "./CerealsCultivation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export const ListOfCereals = ({ goBack }) => {
  const [showNutritionAndHealth, setShowNutritionAndHealth] = useState(false);
  const [selectedCereals, setSelectedCereals] = useState(null);
  const [showCultivation, setShowCultivation] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCereals = (cereals) => {
    setSelectedCereals(cereals);
    setShowNutritionAndHealth(true);
  };

  const handleCultivation = (cereal) => {
    setSelectedCereals(cereal);
    setShowCultivation(true);
    setShowNutritionAndHealth(false);
  };

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItem = cereals?.filter((item, index) =>
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
        <input type="text" onChange={handleInput} placeholder="Search..." />
        <FontAwesomeIcon
              icon={faCircleXmark}
              size="2x"
              className={classes.closeListBtn}
              onClick={() => goBack(false)}
            />
        {filteredItem
          ? filteredItem?.map((cereals) => (
              <div key={cereals.id} className={classes.flexClass}>
                <div>
                  <h2>{cereals.name}</h2>
                  <img
                    className={classes.singleProduct}
                    src={cereals.img}
                    alt={cereals.name}
                  />
                </div>
                <div className={classes.centralContent}>
                  <h3>{cereals.inGeneralHeading}</h3>
                  <div className={classes.inGeneralClass}>
                    {cereals.inGeneral}
                  </div>
                </div>
                <aside className={classes.asideButtonsClass}>
                  <button onClick={() => handleCereals(cereals)}>
                    Nutrition and Health
                  </button>
                  <button onClick={() => handleCultivation(cereals)}>
                    Cultivation
                  </button>
                </aside>
              </div>
            ))
          : cereals?.map((cereals) => (
              <div key={cereals.id} className={classes.flexClass}>
                <div>
                  <h2>{cereals.name}</h2>
                  <img
                    className={classes.singleProduct}
                    src={cereals.img}
                    alt={cereals.name}
                  />
                </div>
                <div className={classes.centralContent}>
                  <h3>{cereals.inGeneralHeading}</h3>
                  <div className={classes.inGeneralClass}>
                    {cereals.inGeneral}
                  </div>
                </div>
                <aside className={classes.asideButtonsClass}>
                  <button onClick={() => handleCereals(cereals)}>
                    Nutrition and Health
                  </button>
                  <button onClick={() => handleCultivation(cereals)}>
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
      {showNutritionAndHealth && selectedCereals && (
        <NutritionAndHealthC
          cereals={selectedCereals}
          goBack={() => setShowNutritionAndHealth()}
        />
      )}
      {showCultivation && (
        <CerealsCultivation
          cereals={selectedCereals}
          goBack={() => setShowCultivation()}
        />
      )}
    </div>
  );
};
