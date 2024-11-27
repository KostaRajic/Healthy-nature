/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "../../../style/universalClass.module.scss";
import { NutritionAndHealthV } from "./NutritionAndHealthV";
import { vegetables } from "./vegetables";
import { VegetablesCultivation } from "./VegetablesCultivation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import povrce from "./povrce";
import { useContextAuth } from "../../context/Context";

export const ListOfVegetables = ({ goBack }) => {
  const [showNutritionAndHealth, setShowNutritionAndHealth] = useState(false);
  const [selectedVegetable, setSelectedVegetable] = useState(null);
  const [showCultivation, setShowCultivation] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { switchLanguage } = useContextAuth();

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

  const filteredItem = (switchLanguage ? vegetables : povrce)?.filter(
    (item, index) => item?.name.toLowerCase().includes(searchTerm.toLowerCase())
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
          <h2 className={classes.headingOfList}>
            {switchLanguage ? "VEGETABLES" : "ПОВРЋЕ"}
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
                  <div className={classes.inGeneralClass}>
                    <h3>{vegetable.inGeneralHeading}</h3>
                    {vegetable.inGeneral}
                  </div>
                </div>
                <aside className={classes.asideButtonsClass}>
                  <button onClick={() => handleVegetables(vegetable)}>
                    {switchLanguage
                      ? "Nutrition and health"
                      : "Исхрана и здравље"}
                  </button>
                  <button onClick={() => handleCultivation(vegetable)}>
                  {switchLanguage ? 'Cultivation' : 'Култивација'}
                  </button>
                </aside>
              </div>
            ))
          : (switchLanguage ? vegetables : povrce)?.map((vegetable) => (
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
                  <div className={classes.inGeneralClass}>
                    <h3>{vegetable.inGeneralHeading}</h3>
                    {vegetable.inGeneral}
                  </div>
                </div>
                <aside className={classes.asideButtonsClass}>
                  <button onClick={() => handleVegetables(vegetable)}>
                  {switchLanguage ? 'Nutrition and health' : 'Исхрана и здравље'}
                  </button>
                  <button onClick={() => handleCultivation(vegetable)}>
                  {switchLanguage ? 'Cultivation' : 'Култивација'}
                  </button>
                </aside>
              </div>
            ))}
        <button
          className={classes.goBackFromList}
          onClick={() => goBack(false)}
        >
          {switchLanguage ? 'Back' : 'Назад'}
        </button>
      </div>
      {showNutritionAndHealth && selectedVegetable && (
        <NutritionAndHealthV
          vegetable={selectedVegetable}
          goBack={() => setShowNutritionAndHealth()}
        />
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
