/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ReactDOM, { createPortal } from "react-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from '../../../style/universalClass.module.scss'
import fruitsClass from './FruitsClass.module.scss'
import { FruitsAccordion } from "./FruitsAccordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import fruitsInfo from "./fruitsText";
import { useState } from "react";
import { fruitsImages } from "./fruitsImages";
import { ListOfFruits } from "../ListOfFruits/ListOfFruits";

export const Fruits = ({ turnOff }) => {

  const [fruits, setFruits] = useState(false);

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
        <div className={fruitsClass.fruitsBackground}>
          <div className={classes.info} style={fruits ? {display: 'none'} : {display: 'block'}}>
            <FontAwesomeIcon
              icon={faCircleXmark}
              size="2x"
              className={classes.closeBtn}
              onClick={() => turnOff(false)}
            />
            <h1>Fruits</h1>
            <section className={classes.imagesSection}>
              <Slider {...settings}>
                {fruitsImages.map((image, index) => (
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
              <FruitsAccordion data={fruitsInfo} />
            </section>
            <button
              className={classes.btnClass}
              onClick={() => setFruits(true)}
            >
              Read More
            </button>
          </div>
          {fruits && <ListOfFruits goBack={() => setFruits()}/>}
        </div>
      )
    };