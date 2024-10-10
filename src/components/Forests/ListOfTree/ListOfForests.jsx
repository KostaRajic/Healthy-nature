/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "../../../style/universalClass.module.scss";
import trees from "./forests";
import { ForestsAccordionInfo } from "./ForestsAccordionInfo";

export const ListOfTree = ({ goBack }) => {
  const [selectedForests, setSelectedForests] = useState(null);

  const handleForests = (tree) => {
    setSelectedForests(tree);
  };

  return (
    <div className={classes.background}>
      <div className={classes.info}>
        {trees?.map((tree) => (
          <div key={tree.id} className={classes.flexClass}>
            <div>
              <h2>{tree.name}</h2>
              <img
                className={classes.singleProduct}
                src={tree.img}
                alt={tree.name}
              />
            </div>
            <div className={classes.inGeneralClass}>{tree.inGeneral}</div>
            <aside className={classes.asideButtonsClass}>
              <button onClick={() => handleForests(tree)}>Read More</button>
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
      {selectedForests && <ForestsAccordionInfo tree={selectedForests} />
      }
    </div>
  );
};
