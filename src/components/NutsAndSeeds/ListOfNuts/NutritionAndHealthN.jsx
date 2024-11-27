/* eslint-disable react/prop-types */
import classes from "../../../style/universalClass.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { CompareNutsAndSeeds } from "./CompareNutsAndSeeds";
import { OnNutritionList } from "../../SearchComponent/OnNutritionList";
import { useState } from "react";
import { useContextAuth } from "../../context/Context";

export const NutritionAndHealthN = ({ nuts, goBack }) => {
  const [compare, setCompare] = useState(false);
  const [nutritionOnList, setNutritionOnList] = useState(false);
  const { switchLanguage } = useContextAuth();

  return (
    <div className={classes.background}>
      <section
        className={classes.info}
        style={{
          display: compare || nutritionOnList ? "none" : "block",
        }}
      >
        <FontAwesomeIcon
          icon={faCircleXmark}
          size="2x"
          className={classes.closeBtn}
          onClick={() => goBack(false)}
        />
        <h1 style={{ fontSize: "45px" }}>{nuts.topic1}</h1>
        <h3 className={classes.nutritionHeading}>
        {switchLanguage ? 'Food list for ' : 'Списак исхране за '} <span>{nuts.name}</span>
        </h3>
        <h5 className={classes.per100Grams}>({switchLanguage ? 'per 100 grams' : 'на 100 грама'})</h5>
        <div className={classes.nutritionClass}>
          {nuts?.nutritionText?.map((item, index) => (
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
            {switchLanguage ? 'Compare' : 'Упоредите'}
          </button>
          <button
            className={classes.btnClass2}
            onClick={() => setNutritionOnList(true)}
          >
            {switchLanguage ? 'Show in list' : 'Прикажи на листи'}
          </button>
        </div>
      </section>
      {compare && (
        <CompareNutsAndSeeds nuts={nuts} goBack={() => setCompare()} />
      )}
      {nutritionOnList && (
        <OnNutritionList nuts={nuts} goBack={() => setNutritionOnList()} />
      )}
    </div>
  );
};
