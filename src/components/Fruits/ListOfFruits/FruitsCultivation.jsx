/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "../../../style/universalClass.module.scss";
import fruitsCultivationText from "./fruitsCultivationText";

export const FruitsCultivation = ({ goBack, fruitCultivationId }) => {
  const [activeId, setActiveId] = useState({});

  console.log(fruitsCultivationText[fruitCultivationId - 1])

  const toggleAccordion = (id) => {
    setActiveId((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };


  const renderAccordionItems = (items) => {

    return items?.map((item) => (
       
    <div key={item.id} style={{ padding: "10px" }}>
    <div
      className={classes.accordionTopic}
      onClick={() => toggleAccordion(item.id)}
    >
      
      {item.topic}
    </div>
    {activeId[item.id] && (
      <div
        style={{
          padding: "10px",
          backgroundColor: "#fff",
          borderRadius: "20px",
        }}
      >
        {item.text && <p className={classes.accordionText}>{item.text}</p>}
        {item.children && renderAccordionItems(item.children)}
      </div>
    )}
  </div>

     ));
  };

  return (
    <div className={classes.background}>
    <section className={classes.info}>
      <h3 className={classes.cultivationHeadingClass}>
        {fruitsCultivationText[fruitCultivationId - 1].heading}
      </h3>
      {renderAccordionItems(fruitsCultivationText[fruitCultivationId - 1].children || [])}
      <button onClick={goBack} className={classes.btnClass}>
        Go Back
      </button>
    </section>
  </div>
  );
};