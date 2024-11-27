/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "../../../style/universalClass.module.scss";
import { useContextAuth } from "../../context/Context";

export const OrnamentalPlantsAccordionInfo = ({ plant, goBack }) => {
  const [activeIds, setActiveIds] = useState({});
  const { switchLanguage } = useContextAuth();

  const toggleAccordion = (id) => {
    setActiveIds((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const renderAccordion = (plant) => {
    return plant.map((item) => (
      <div key={item.id}>
        <div
          className={classes.accordionTopic}
          onClick={() => toggleAccordion(item.id)}
        >
          {item.topic}
        </div>
        {activeIds[item.id] && (
          <div
            style={{
              padding: "20px",
              borderRadius: "20px",
              margin: '20px'
            }}
          >
            {item.text && <p className={classes.accordionText}>{item.text}</p>}
            {item.children && renderAccordion(item.children)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className={classes.accordionBackground}>
      <h2>
        <span>{plant.name}</span> {switchLanguage ? 'information:' : 'информације:'}
      </h2>
      <h3>{plant.benefitsHeading}</h3>
      {renderAccordion(plant.text)}
      <button className={classes.btnClass} onClick={() => goBack(false)}>
      {switchLanguage ? 'Back' : 'Назад'}
      </button>
    </div>
  );
};
