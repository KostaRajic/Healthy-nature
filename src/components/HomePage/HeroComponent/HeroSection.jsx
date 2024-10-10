import classes from './HeroSection.module.scss'
import { TextSlider } from './TextSlider'


export const HeroSection = () => {

    return <div className={classes.heroSectionContainer}>
        <div className={classes.heroBackground}>
            <h1>Welcome to <br /><span>HEALTHY NATURE</span></h1>
            <TextSlider/>
        </div>
    </div>
}