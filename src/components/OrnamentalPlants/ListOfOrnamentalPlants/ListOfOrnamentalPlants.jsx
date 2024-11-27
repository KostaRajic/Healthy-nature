/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "../../../style/universalClass.module.scss";
import { OrnamentalPlantsAccordionInfo } from "./OrnamentalPlantsAccordionInfo";
import ornamentalPlants from "./oranamentalPlants";
import { OrnamentalPlantsCultivation } from "./OrnamentalPlantsCultivation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { ukrasneBiljke } from "./ukrasneBiljke";
import { useContextAuth } from "../../context/Context";

export const ListOfOrnamentalPlants = ({ goBack }) => {
  const [selectedOrnamentalPlants, setSelectedOrnamentalPlants] =
    useState(null);
  const [showReadMore, setShowReadMore] = useState(false);
  const [showCultivation, setShowCultivation] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { switchLanguage } = useContextAuth();

  const handleOrnamentalPlants = (ornamentalPlants) => {
    setSelectedOrnamentalPlants(ornamentalPlants);
    setShowReadMore(true);
  };

  const handleCultivation = (ornamentalPlants) => {
    setShowCultivation(true);
    setSelectedOrnamentalPlants(ornamentalPlants);
    setShowReadMore(false);
  };

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItem = (switchLanguage ? ornamentalPlants : ukrasneBiljke)?.filter((item, index) =>
    item?.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={classes.background}>
      <div
        className={classes.info}
        style={
          showCultivation
            ? { display: "none" }
            : { display: "block" } && showReadMore
            ? { display: "none" }
            : { display: "block" }
        }
      >
        <div className={classes.headerOfList}>
          <h2 className={classes.headingOfList} style={{fontSize: '30px'}}>{switchLanguage ? 'ORNAMENTAL PLANTS' : 'УКРАСНЕ БИЉКЕ'}</h2>
          <input type="text" onChange={handleInput} placeholder="Search..." style={{marginTop: '20px'}}/>
          <FontAwesomeIcon
            icon={faCircleXmark}
            size="2x"
            className={classes.closeBtn2}
            onClick={() => goBack(false)}
          />
        </div>
        {filteredItem
          ? filteredItem?.map((plant) => (
              <div key={plant.id} className={classes.flexClass}>
                <div>
                  <h2>{plant.name}</h2>
                  <img
                    className={classes.singleProduct}
                    src={plant.img}
                    alt={plant.name}
                  />
                </div>
                <div className={classes.centralContent}>
                  
                  <div className={classes.inGeneralClass}>
                  <h3>{plant.inGeneralHeading}</h3>
                    {plant.inGeneral}
                  </div>
                </div>
                <aside className={classes.asideButtonsClass}>
                  <button onClick={() => handleOrnamentalPlants(plant)}>
                  {switchLanguage
                      ? "Read more"
                      : "Прочитајте више"}
                  </button>
                  <button onClick={() => handleCultivation(plant)}>
                  {switchLanguage
                      ? "Cultivation"
                      : "Култивација"}
                  </button>
                </aside>
              </div>
            ))
          : (switchLanguage ? ornamentalPlants : ukrasneBiljke)?.map((ornamentalPlants) => (
              <div key={ornamentalPlants.id} className={classes.flexClass}>
                <div>
                  <h2>{ornamentalPlants.name}</h2>
                  <img
                    className={classes.singleProduct}
                    src={ornamentalPlants.img}
                    alt={ornamentalPlants.name}
                  />
                </div>
                <div className={classes.centralContent}>
                  
                  <div className={classes.inGeneralClass}>
                  <h3>{ornamentalPlants.inGeneralHeading}</h3>
                    {ornamentalPlants.inGeneral}
                  </div>
                </div>
                <aside className={classes.asideButtonsClass}>
                  <button
                    onClick={() => handleOrnamentalPlants(ornamentalPlants)}
                  >
                  {switchLanguage
                      ? "Read more"
                      : "Прочитајте више"}
                  </button>
                  <button onClick={() => handleCultivation(ornamentalPlants)}>
                  {switchLanguage
                      ? "Cultivation"
                      : "Култивација"}
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
      {selectedOrnamentalPlants && showReadMore && (
        <OrnamentalPlantsAccordionInfo
          plant={selectedOrnamentalPlants}
          goBack={() => setShowReadMore()}
        />
      )}
      {showCultivation && (
        <OrnamentalPlantsCultivation
          plant={selectedOrnamentalPlants}
          goBack={() => setShowCultivation()}
        />
      )}
    </div>
  );
};
