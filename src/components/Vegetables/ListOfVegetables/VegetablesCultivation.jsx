/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "../../../style/universalClass.module.scss";

export const VegetablesCultivation = ({ vegetable, goBack }) => {
  const [activeIds, setActiveIds] = useState({});

  const toggleAccordion = (id) => {
    setActiveIds((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const renderAccordion = (vegetable) => {
    return vegetable?.map((item) => (
      <div key={item.id}>
        <div
          className={classes.accordionTopic}
          onClick={() => toggleAccordion(item.id)}
          style={{ margin: "20px" }}
        >
          {item.topic}
        </div>
        {activeIds[item.id] && (
          <div className={classes.activeIdClass}>
            {item.text && <p className={classes.accordionText}>{item.text}</p>}
            {item.children && renderAccordion(item.children, true)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className={classes.cultivationBackground}>
      <div className={classes.infoCultivation}>
        <h2>
          <span>{vegetable?.name}</span> cultivation:
        </h2>
        <h3>{vegetable?.cultivationHeading}</h3>
        {renderAccordion(vegetable?.cultivation)}
        <button className={classes.btnClass} onClick={() => goBack(false)}>
          Go Back
        </button>
      </div>
    </div>
  );
};
