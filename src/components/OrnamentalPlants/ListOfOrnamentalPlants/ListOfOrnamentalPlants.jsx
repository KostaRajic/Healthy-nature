/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "../../../style/universalClass.module.scss";
import { OrnamentalPlantsAccordionInfo } from "./OrnamentalPlantsAccordionInfo";
import ornamentalPlants from "./oranamentalPlants";
import { OrnamentalPlantsCultivation } from "./OrnamentalPlantsCultivation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export const ListOfOrnamentalPlants = ({ goBack }) => {
  const [selectedOrnamentalPlants, setSelectedOrnamentalPlants] =
    useState(null);
  const [showReadMore, setShowReadMore] = useState(false);
  const [showCultivation, setShowCultivation] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredItem = ornamentalPlants?.filter((item, index) =>
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
          <h2 className={classes.headingOfList} style={{fontSize: '35px'}}>Ornamental plants</h2>
          <input type="text" onChange={handleInput} placeholder="Search..." style={{marginTop: '6px'}}/>
          <FontAwesomeIcon
            icon={faCircleXmark}
            size="2x"
            className={classes.closeBtn2}
            onClick={() => goBack(false)}
            style={{margin: '-79px 0 64px 94%'}}
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
                  <h3>{plant.inGeneralHeading}</h3>
                  <div className={classes.inGeneralClass}>
                    {plant.inGeneral}
                  </div>
                </div>
                <aside className={classes.asideButtonsClass}>
                  <button onClick={() => handleOrnamentalPlants(plant)}>
                    Read More
                  </button>
                  <button onClick={() => handleCultivation(plant)}>
                    Cultivation
                  </button>
                </aside>
              </div>
            ))
          : ornamentalPlants?.map((ornamentalPlants) => (
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
                  <h3>{ornamentalPlants.inGeneralHeading}</h3>
                  <div className={classes.inGeneralClass}>
                    {ornamentalPlants.inGeneral}
                  </div>
                </div>
                <aside className={classes.asideButtonsClass}>
                  <button
                    onClick={() => handleOrnamentalPlants(ornamentalPlants)}
                  >
                    Read More
                  </button>
                  <button onClick={() => handleCultivation(ornamentalPlants)}>
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
