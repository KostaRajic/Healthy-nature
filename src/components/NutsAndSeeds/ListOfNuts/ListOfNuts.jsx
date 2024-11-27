/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "../../../style/universalClass.module.scss";
import { NutritionAndHealthN } from "./NutritionAndHealthN";
import nuts from "./nuts";
import { NutsAndSeedsCultivation } from "./NuttsAndSeedsCultivation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import orasastiPlodovi from "./orasastiPlodovi";
import { useContextAuth } from "../../context/Context";

export const ListOfNuts = ({ goBack }) => {
  const [showNutritionAndHealth, setShowNutritionAndHealth] = useState(false);
  const [selectedNuts, setSelectedNuts] = useState(null);
  const [showCultivation, setShowCultivation] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { switchLanguage } = useContextAuth();

  const handleNuts = (nuts) => {
    setSelectedNuts(nuts);
    setShowNutritionAndHealth(true);
  };

  const handleCultivation = (nuts) => {
    setShowCultivation(true);
    setShowNutritionAndHealth(false);
    setSelectedNuts(nuts);
  };

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItem = (switchLanguage ? nuts : orasastiPlodovi)?.filter((item, index) =>
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
          <h2 className={classes.headingOfList} style={{fontSize: '35px'}}>{switchLanguage ? 'NUTS AND SEEDS' : 'ОРАШАСТИ ПЛОДОВИ'}</h2>
          <input type="text" onChange={handleInput} placeholder={switchLanguage ? 'Search...' :"Тражи..."} style={{transform: 'translateY(-13px)'}}/>
          <FontAwesomeIcon
            icon={faCircleXmark}
            size="2x"
            className={classes.closeBtn2}
            onClick={() => goBack(false)}

          />
        </div>
        {filteredItem
          ? filteredItem?.map((nuts) => (
              <div key={nuts.id} className={classes.flexClass}>
                <div>
                  <h2>{nuts.name}</h2>
                  <img
                    className={classes.singleProduct}
                    src={nuts.img}
                    alt={nuts.name}
                  />
                </div>
                <div className={classes.centralContent}>
                  
                  <div className={classes.inGeneralClass}>
                  <h3>{nuts.inGeneralHeading}</h3>
                  {nuts.inGeneral}</div>
                </div>
                <aside className={classes.asideButtonsClass}>
                  <button onClick={() => handleNuts(nuts)}>
                  {switchLanguage
                      ? "Nutrition and health"
                      : "Исхрана и здравље"}
                  </button>
                  <button onClick={() => handleCultivation(nuts)}>
                  {switchLanguage ? "Cultivation" : "Култивација"}
                  </button>
                </aside>
              </div>
            ))
          : (switchLanguage ? nuts : orasastiPlodovi)?.map((nuts) => (
              <div key={nuts.id} className={classes.flexClass}>
                <div>
                  <h2>{nuts.name}</h2>
                  <img
                    className={classes.singleProduct}
                    src={nuts.img}
                    alt={nuts.name}
                  />
                </div>
                <div className={classes.centralContent}>
                  
                  <div className={classes.inGeneralClass}>
                  <h3>{nuts.inGeneralHeading}</h3>
                  {nuts.inGeneral}</div>
                </div>
                <aside className={classes.asideButtonsClass}>
                  <button onClick={() => handleNuts(nuts)}>
                  {switchLanguage
                      ? "Nutrition and health"
                      : "Исхрана и здравље"}
                  </button>
                  <button onClick={() => handleCultivation(nuts)}>
                  {switchLanguage ? "Cultivation" : "Култивација"}
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
      {showNutritionAndHealth && selectedNuts && (
        <NutritionAndHealthN
          nuts={selectedNuts}
          goBack={() => setShowNutritionAndHealth()}
        />
      )}
      {showCultivation && (
        <NutsAndSeedsCultivation
          nuts={selectedNuts}
          goBack={() => setShowCultivation()}
        />
      )}
    </div>
  );
};
