/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "../../../style/universalClass.module.scss";
import { NutritionAndHealthC } from "./NutritionAndHealthC";
import cereals from "./cereals";
import { CerealsCultivation } from "./CerealsCultivation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import zitarice from "./zitarice";
import { useContextAuth } from "../../context/Context";

export const ListOfCereals = ({ goBack }) => {
  const [showNutritionAndHealth, setShowNutritionAndHealth] = useState(false);
  const [selectedCereals, setSelectedCereals] = useState(null);
  const [showCultivation, setShowCultivation] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { switchLanguage } = useContextAuth();

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

  const filteredItem = (switchLanguage ? cereals : zitarice)?.filter(
    (item, index) => item?.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={classes.background}>
      <div
        className={classes.info}
        style={
          showCultivation || showNutritionAndHealth
            ? { display: "none" }
            : { display: "block" }
        }
      >
        <div className={classes.headerOfList}>
          <h2 className={classes.headingOfList}>
            {switchLanguage ? "CEREALS" : "ЖИТАРИЦЕ"}
          </h2>
          <input
            type="text"
            onChange={handleInput}
            placeholder={switchLanguage ? "Search..." : "Тражи..."}
          />
          <FontAwesomeIcon
            icon={faCircleXmark}
            size="2x"
            className={classes.closeBtn2}
            onClick={() => goBack(false)}
          />
        </div>
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
                  <div className={classes.inGeneralClass}>
                    <h3>{cereals.inGeneralHeading}</h3>
                    {cereals.inGeneral}
                  </div>
                </div>
                <aside className={classes.asideButtonsClass}>
                  <button onClick={() => handleCereals(cereals)}>
                    {switchLanguage
                      ? "Nutrition and health"
                      : "Исхрана и здравље"}
                  </button>
                  <button onClick={() => handleCultivation(cereals)}>
                    {switchLanguage ? "Cultivation" : "Култивација"}
                  </button>
                </aside>
              </div>
            ))
          : (switchLanguage ? cereals : zitarice)?.map((cereals) => (
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
                    {switchLanguage
                      ? "Nutrition and health"
                      : "Исхрана и здравље"}
                  </button>
                  <button onClick={() => handleCultivation(cereals)}>
                    {switchLanguage ? "Cultivation" : "Култивација"}
                  </button>
                </aside>
              </div>
            ))}

        <button
          className={classes.goBackFromList}
          onClick={() => goBack(false)}
        >
          {switchLanguage ? "Back" : "Назад"}
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
