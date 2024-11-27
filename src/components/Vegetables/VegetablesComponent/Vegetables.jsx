/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ReactDOM, { createPortal } from "react-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "../../../style/universalClass.module.scss";
import vegetableClass from "./VegetablesClass.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { vegetablesInfo } from "./vegetablesText";
import { VegetablesAccordion } from "./VegetablesAccordion";
import { vegetablesImages } from "./vegetablesImages";
import { useState } from "react";
import { ListOfVegetables } from "../ListOfVegetables/ListOfVegetables";
import tekstPovrca from "./tekstPovrca";
import { useContextAuth } from "../../context/Context";

export const Vegetables = ({ turnOff }) => {
  const [vegetables, setVegetables] = useState(false);
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
        <div className={vegetableClass.vegetablesBackground}>
          <div className={classes.info} style={vegetables ? {display: 'none'} : {display: 'block'}}>
            <FontAwesomeIcon
              icon={faCircleXmark}
              size="2x"
              className={classes.closeBtn}
              onClick={() => turnOff(false)}
            />
            <h1>{switchLanguage ? 'VEGETABLES' : 'ПОВРЋЕ'}</h1>
            <section className={classes.imagesSection}> 
              <Slider {...settings}>
                {vegetablesImages?.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Vegetable ${index + 1}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </Slider>
            </section>
            <section>
              <VegetablesAccordion data={switchLanguage ? vegetablesInfo : tekstPovrca} />
            </section>
            <button
              className={classes.btnClass}
              onClick={() => setVegetables(true)}
            >
        { switchLanguage ? 'Read more' : 'Прочитајте више'}
            </button>
          </div>
          { vegetables && <ListOfVegetables goBack={() => setVegetables(false)}/> }
        </div>
      )
};