/* eslint-disable react/prop-types */
import classes from "../../../style/universalClass.module.scss";

export const NutritionAndHealthC = ({ cereals }) => {


    return <div className={classes.background}>
        <section className={classes.info}>

                <h1>{cereals.topic1}</h1>
                <pre>{cereals.text}</pre>

        </section>
    </div>
}