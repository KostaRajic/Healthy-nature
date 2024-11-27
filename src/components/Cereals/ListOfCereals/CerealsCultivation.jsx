/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "../../../style/universalClass.module.scss";
import { useContextAuth } from "../../context/Context";

export const CerealsCultivation = ({ cereals, goBack }) => {
  const [activeIds, setActiveIds] = useState({});
  const { switchLanguage } = useContextAuth();

  const toggleAccordion = (id) => {
    setActiveIds((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const renderAccordion = (cereals) => {
    return cereals?.map((item) => (
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
            {item.children && renderAccordion(item.children, true)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div  className={classes.cultivationBackground}>
    <div className={classes.infoCultivation}>
      <h2>
        <span>{cereals?.name}</span> {switchLanguage ? 'cultivation:' : 'култивација:'}
      </h2>
      <h3>{cereals?.cultivationHeading}</h3>
      {renderAccordion(cereals?.cultivation)}
      <button className={classes.btnClass} onClick={() => goBack(false)}>
      {switchLanguage ? 'Back' : 'Назад'}
      </button>
    </div>
    </div>
  );
};
