/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "../../../style/universalClass.module.scss";
import { useContextAuth } from "../../context/Context";

export const ForestsAccordionInfo = ({ tree, goBack }) => {
  const [activeIds, setActiveIds] = useState({});
  const { switchLanguage } = useContextAuth();

  const toggleAccordion = (id) => {
    setActiveIds((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const renderBenefits = (benefit) => {
    return benefit.map((item) => (
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

              borderRadius: "20px",
              margin: "20px 20px 0 20px",
            }}
          >
            {item.text && <p className={classes.accordionText}>{item.text}</p>}
            {item.children && renderBenefits(item.children)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className={classes.accordionBackground}>
      <h2>
        <span>{tree.name}</span> {switchLanguage ? 'information:': 'информација:'}
      </h2>
      <h3>{tree.benefitsHeading}</h3>
      {renderBenefits(tree.text)}
      <button className={classes.btnClass} onClick={() => goBack(false)}>
      {switchLanguage ? 'Back' : 'Назад'}
      </button>
    </div>
  );
};
