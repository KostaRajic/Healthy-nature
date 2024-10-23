/* eslint-disable react/prop-types */
import classes from "../../../style/universalClass.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { OnNutritionList } from "../../SearchComponent/OnNutritionList";
import { CompareCereals } from "./CompareCereals";

export const NutritionAndHealthC = ({ cereals, goBack }) => {
  const [compare, setCompare] = useState(false);
  const [nutritionOnList, setNutritionOnList] = useState(false);

  return (
    <div className={classes.background}>
      <section
        className={classes.info}
        style={
          compare
            ? { display: "none" }
            : { display: "block" } && nutritionOnList
            ? { display: "none" }
            : { display: "block" }
        }
      >
        <FontAwesomeIcon
          icon={faCircleXmark}
          size="2x"
          className={classes.closeBtn}
          onClick={() => goBack(false)}
        />
        <h1 style={{ fontSize: "45px" }}>{cereals.topic1}</h1>
        <h3 className={classes.nutritionHeading}>
          List of <span>{cereals.name}</span> nutrition
        </h3>
        <h5 className={classes.per100Grams}>(per 100 grams)</h5>
        <div className={classes.nutritionClass}>
          {cereals?.nutritionText?.map((item, index) => (
            <div key={index} className={classes.nutritionDiv}>
              <p className={classes.nutritionElements}>- {item.element}</p>
              <p className={classes.nutritionQuantity}>{item.quantity}</p>
              <p className={classes.measurementUnits}>
                {item.measurementUnits}
              </p>
              <p className={classes.description}>{item.description}</p>
            </div>
          ))}
        </div>

        <div className={classes.btnClassDiv}>
          <button
            className={classes.btnClass1}
            onClick={() => setCompare(true)}
          >
            Compare
          </button>
          <button
            className={classes.btnClass2}
            onClick={() => setNutritionOnList(true)}
          >
            Show on list
          </button>
        </div>
      </section>
      {compare && (
        <CompareCereals cereals={cereals} goBack={() => setCompare()} />
      )}
      {nutritionOnList && (
        <OnNutritionList
          cereals={cereals}
          goBack={() => setNutritionOnList()}
        />
      )}
    </div>
  );
};
