/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ReactDOM, { createPortal } from "react-dom";
import classes from "../../../style/universalClass.module.scss";
import ornamentalPlantsClass from "./OrnamentalPlants.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSmileBeam } from "@fortawesome/free-solid-svg-icons";
import { OrnamentalPlantsAccordion } from "./OrnamentalAccordion";
import { ornamentalPlantsInfo } from "./ornamentalPlantsText";
import { ornamentalPlantsImages } from "./ornamentalPlantsImages";
import { useState } from "react";
import { ListOfOrnamentalPlants } from "../ListOfOrnamentalPlants/ListOfOrnamentalPlants";
import { ukrasneBiljkeTekst } from "./ukrasneBiljkeTekst";
import { useContextAuth } from "../../context/Context";

export const OrnamentalPlants = ({ turnOff }) => {
  const [ ornamentalPlants, setOrnamentalPlants ] = useState(false)
  const { switchLanguage } = useContextAuth();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    arrows: false,
  };

  return (
        <div className={ornamentalPlantsClass.ornamentalPlantsBackground}>
          <div className={classes.info} style={ornamentalPlants ? {display: 'none'} : {display: 'block'}}>
            <FontAwesomeIcon
              icon={faCircleXmark}
              size="2x"
              className={classes.closeBtn}
              onClick={() => turnOff(false)}
            />
            <h1>{switchLanguage ? 'ORNAMENTAL PLANTS' : 'УКРАСНЕ БИЉКЕ'}</h1>
            <section className={classes.imagesSection}>
              <Slider {...settings}>
                {ornamentalPlantsImages.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Fruit ${index + 1}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </Slider>
            </section>
            <section>
              <OrnamentalPlantsAccordion data={switchLanguage ? ornamentalPlantsInfo : ukrasneBiljkeTekst} />
            </section>
            <button
              className={classes.btnClass}
              onClick={() => setOrnamentalPlants(true)}
            >
        { switchLanguage ? 'Read more' : 'Прочитајте више'}
            </button>
          </div>
          {ornamentalPlants && <ListOfOrnamentalPlants goBack={() => setOrnamentalPlants(false)}/>}
        </div>
      )
};
