/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "../../../style/universalClass.module.scss";
import { fruits } from "./fruits";
import { NutritionAndHealthFr } from "./NutritionAndHealthFr";
import { FruitsCultivation } from "./FruitsCultivation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import voce from "./voce";
import { useContextAuth } from "../../context/Context";

export const ListOfFruits = ({ goBack }) => {
  const [showNutritionAndHealth, setShowNutritionAndHealth] = useState(false);
  const [showCultivation, setShowCultivation] = useState(false);
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { switchLanguage } = useContextAuth();

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

  const filteredItem = (switchLanguage ? fruits : voce)?.filter((item, index) =>
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
          <h2 className={classes.headingOfList}>{switchLanguage ? 'FRUITS' : 'ВОЋЕ'}</h2>
          <input type="text" onChange={handleInput} placeholder={(switchLanguage ? 'Search...' : "Тражи...")} />
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
                  
                  <div className={classes.inGeneralClass}>
                  <h3>{fruit.inGeneralHeading}</h3>
                    {fruit.inGeneral}
                  </div>
                </div>
                <aside className={classes.asideButtonsClass}>
                  <button onClick={() => handleFruit(fruit)}>
                  {switchLanguage ? 'Nutrition and health' : 'Исхрана и здравље'}
                  </button>
                  <button onClick={() => handleCultivation(fruit)}>
                  {switchLanguage ? 'Cultivation' : 'Култивација'}
                  </button>
                </aside>
              </div>
            ))
          : (switchLanguage ? fruits : voce)?.map((fruit) => (
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
                  {switchLanguage ? 'Nutrition and health' : 'Исхрана и здравље'}
                  </button>
                  <button onClick={() => handleCultivation(fruit)}>
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
