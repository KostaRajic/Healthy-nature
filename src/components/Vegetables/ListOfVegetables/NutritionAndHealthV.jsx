/* eslint-disable react/prop-types */
import classes from "../../../style/universalClass.module.scss";

export const NutritionAndHealthV = ({ vegetables }) => {


    return <div className={classes.background}>
        <section className={classes.info}>

                <h1>{vegetables.topic1}</h1>
                <pre>{vegetables.text}</pre>

        </section>
    </div>
}