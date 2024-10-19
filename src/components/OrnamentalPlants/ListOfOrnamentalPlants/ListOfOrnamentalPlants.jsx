/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "../../../style/universalClass.module.scss";
import { OrnamentalPlantsAccordionInfo } from "./OrnamentalPlantsAccordionInfo";
import ornamentalPlants from "./oranamentalPlants";
import { OrnamentalPlantsCultivation } from "./OrnamentalPlantsCultivation";

export const ListOfOrnamentalPlants = ({ goBack }) => {
  const [selectedOrnamentalPlants, setSelectedOrnamentalPlants] =
    useState(null);
  const [showReadMore, setShowReadMore] = useState(false);
  const [showCultivation, setShowCultivation] = useState(false);

  const handleOrnamentalPlants = (ornamentalPlants) => {
    setSelectedOrnamentalPlants(ornamentalPlants);
    setShowReadMore(true);
  };

  const handleCultivation = (ornamentalPlants) => {
    setShowCultivation(true);
    setSelectedOrnamentalPlants(ornamentalPlants);
    setShowReadMore(false);
  };

  return (
    <div className={classes.background}>
      <div
        className={classes.info}
        style={showCultivation ? { display: "none" } : { display: "block" } && showReadMore ? { display: "none" } : { display: "block" }}
      >
        {ornamentalPlants?.map((ornamentalPlants) => (
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
              <button onClick={() => handleOrnamentalPlants(ornamentalPlants)}>
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
        <OrnamentalPlantsAccordionInfo plant={selectedOrnamentalPlants} goBack={() => setShowReadMore()}/>
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
