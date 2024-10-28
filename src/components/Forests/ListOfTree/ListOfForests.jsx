/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "../../../style/universalClass.module.scss";
import trees from "./forests";
import { ForestsAccordionInfo } from "./ForestsAccordionInfo";
import { ForestsCultivation } from "./ForestsCultivation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export const ListOfTree = ({ goBack }) => {
  const [selectedTree, setSelectedTree] = useState(null);
  const [showCultivation, setShowCultivation] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleForests = (tree) => {
    setSelectedTree(tree);
    setShowReadMore(!showReadMore);
  };

  const handleCultivation = (tree) => {
    setShowCultivation(!showCultivation);
    setSelectedTree(tree);
  };

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItem = trees?.filter((item, index) =>
    item?.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className={classes.background}>
      <div
        className={classes.info}
        style={
          showCultivation
            ? { display: "none" }
            : { display: "block" } && showReadMore
            ? { display: "none" }
            : { display: "block" }
        }
      >
        <div className={classes.headerOfList}>
        <h2 className={classes.headingOfList}>Forests</h2>
        <input type="text" onChange={handleInput} placeholder="Search..." />
        <FontAwesomeIcon
          icon={faCircleXmark}
          size="2x"
          className={classes.closeBtn2}
          onClick={() => goBack(false)}
        />
        </div>
        {filteredItem
          ? filteredItem?.map((tree) => (
              <div key={tree.id} className={classes.flexClass}>
                <div>
                  <h2>{tree.name}</h2>
                  <img
                    className={classes.singleProduct}
                    src={tree.img}
                    alt={tree.name}
                  />
                </div>
                <div className={classes.centralContent}>
                  <h3>{tree.inGeneralHeading}</h3>
                  <div className={classes.inGeneralClass}>{tree.inGeneral}</div>
                </div>
                <aside className={classes.asideButtonsClass}>
                  <button onClick={() => handleForests(tree)}>
                    Read More
                  </button>
                  <button onClick={() => handleCultivation(cereals)}>
                    Cultivation
                  </button>
                </aside>
              </div>
            ))
          : trees?.map((tree) => (
              <div key={tree.id} className={classes.flexClass}>
                <div>
                  <h2>{tree.name}</h2>
                  <img
                    className={classes.singleProduct}
                    src={tree.img}
                    alt={tree.name}
                  />
                </div>
                <div className={classes.centralContent}>
                  <h3>{tree.inGeneralHeading}</h3>
                  <div className={classes.inGeneralClass}>{tree.inGeneral}</div>
                </div>
                <aside className={classes.asideButtonsClass}>
                  <button onClick={() => handleForests(tree)}>Read More</button>
                  <button onClick={() => handleCultivation(tree)}>
                    Cultivation
                  </button>
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
      {selectedTree && showReadMore && (
        <ForestsAccordionInfo
          tree={selectedTree}
          goBack={() => setShowReadMore()}
        />
      )}
      {showCultivation && (
        <ForestsCultivation
          tree={selectedTree}
          goBack={() => setShowCultivation()}
        />
      )}
    </div>
  );
};
