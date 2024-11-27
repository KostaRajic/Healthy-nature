/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "../../../style/universalClass.module.scss";
import { useContextAuth } from "../../context/Context";

export const FruitsCultivation = ({ fruit, goBack }) => {
  const [activeIds, setActiveIds] = useState({});
  const { switchLanguage } = useContextAuth();

  const toggleAccordion = (id) => {
    setActiveIds((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const renderAccordion = (fruit) => {
    return fruit?.map((item) => (
      <div key={item.id}>
        <div
          className={classes.accordionTopic}
          onClick={() => toggleAccordion(item.id)}
        >
          {item.topic}
        </div>
        {activeIds[item.id] && (
          <div className={classes.activeIdClass}>
            {item.text && <p className={classes.accordionText}>{item.text}</p>}
            {item.children && renderAccordion(item.children)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className={classes.cultivationBackground}>
      <div className={classes.infoCultivation}>
        <h2>
          <span>{fruit?.name}</span> {switchLanguage ? 'cultivation:' : 'култивација:'}
        </h2>
        <h3>{fruit?.cultivationHeading}</h3>
        {renderAccordion(fruit?.cultivation)}
        <button className={classes.btnClass} onClick={() => goBack(false)}>
        {switchLanguage ? 'Back' : 'Назад'}
        </button>
      </div>
    </div>
  );
};
