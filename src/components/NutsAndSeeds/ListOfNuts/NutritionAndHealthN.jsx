/* eslint-disable react/prop-types */
import classes from '../../../style/universalClass.module.scss'

export const NutritionAndHealthN = ({ nuts }) => {

    return <div className={classes.background}>
        <section className={classes.info}>

                <h1>{nuts.topic1}</h1>
                <pre>{nuts.text}</pre>

        </section>
    </div>
}