/* eslint-disable react/prop-types */
import classes from "../../../style/universalClass.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export const NutritionAndHealthV = ({ vegetable, goBack }) => {

  return (
    <div className={classes.background}>
      <section className={classes.info}>
        <FontAwesomeIcon
          icon={faCircleXmark}
          size="2x"
          className={classes.closeBtn}
          onClick={() => goBack(false)}
        />
        <h1 style={{ fontSize: "45px"}}>{vegetable.topic1}</h1>
        <h3 className={classes.nutritionHeading}>
          List of <span>{vegetable.name}</span> nutrition
        </h3>
        <div className={classes.nutritionClass}>
          {vegetable?.nutritionText?.map((item, index) => (
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
          <button className={classes.btnClass1}>Compare</button>
          <button className={classes.btnClass2}>Show on list</button>
        </div>
      </section>
    </div>
  );
};
