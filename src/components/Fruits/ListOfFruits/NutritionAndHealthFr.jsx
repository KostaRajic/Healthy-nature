/* eslint-disable react/prop-types */
import classes from '../../../style/universalClass.module.scss'

export const NutritionAndHealthFr = ({ fruit }) => {

    return <div className={classes.background}>
        <section className={classes.info}>

                <h1>{fruit.topic1}</h1>
                <pre>{fruit.text}</pre>

        </section>
    </div>
}