/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "../../../style/universalClass.module.scss";

export const OrnamentalPlantsAccordion = ({ data }) => {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div>
      {data?.map((item) => (
        <div key={item.id} style={{ padding: "10px" }}>
          <div
            className={classes.accordionTopic}
            onClick={() => toggleAccordion(item.id)}
          >
            {item.topic}
          </div>
          {activeId === item.id && (
            <div
              style={{
                padding: "10px",
                backgroundColor: "#fff",
                borderRadius: "20px",
                marginTop: "20px",
              }}
            >
              {item.text && (
                <p className={classes.accordionText}>{item.text}</p>
              )}
              {item.children && (
                <OrnamentalPlantsAccordion data={item.children} />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
