import { ImageSlider } from './ImageSlider'
import classes from './MainSection.module.scss'

export const MainSection = () => {

    return <div className={classes.mainSectionContainer}>
        <div className={classes.mainSectionBackground}>
            <ImageSlider/>
        </div>
    </div>
}