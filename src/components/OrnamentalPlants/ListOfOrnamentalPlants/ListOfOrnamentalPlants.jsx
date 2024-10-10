/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "../../../style/universalClass.module.scss";
import { OrnamentalPlantsAccordionInfo } from "./OrnamentalPlantsAccordionInfo";
import ornamentalPlants from "./oranamentalPlants";

export const ListOfOrnamentalPlants = ({ goBack }) => {

  const [selectedOrnamentalPlants, setSelectedOrnamentalPlants] = useState(null);

  const handleOrnamentalPlants = (ornamentalPlants) => {
    setSelectedOrnamentalPlants(ornamentalPlants);
  };

  return (
    <div className={classes.background}>
      <div className={classes.info}>
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
            <div className={classes.inGeneralClass}>{ornamentalPlants.inGeneral}</div>
            <aside className={classes.asideButtonsClass}>
              <button onClick={() => handleOrnamentalPlants(ornamentalPlants)}>
                Read More
              </button>
              <button>Cultivation</button>
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
      { selectedOrnamentalPlants && <OrnamentalPlantsAccordionInfo tree={selectedOrnamentalPlants} />}
    </div>
  );
};
