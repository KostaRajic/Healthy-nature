/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "../../../style/universalClass.module.scss";

export const OrnamentalPlantsAccordionInfo = ({ tree }) => {
  console.log(tree)
  const [activeIds, setActiveIds] = useState({});
  const toggleAccordion = (id) => {
    setActiveIds((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const renderBenefits = (benefit) => {
    console.log(benefit)
    return benefit.map((item) => (
      <div key={item.id} style={{ padding: "10px" }}>
        <div
          className={classes.accordionTopic}
          onClick={() => toggleAccordion(item.id)}
        >
          {item.topic}
        </div>
        {activeIds[item.id] && (
          <div style={{ padding: "20px", backgroundColor: "#fff", borderRadius: "20px" }}>
            {item.text && <p className={classes.accordionText}>{item.text}</p>}
            {item.children && renderBenefits(item.children)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className={classes.accordionBackground}>
      <h3>{tree.benefitsHeading}</h3>
      {renderBenefits(tree.text)}
    </div>
  );
};