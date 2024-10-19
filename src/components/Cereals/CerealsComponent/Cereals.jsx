/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import ReactDOM, { createPortal } from "react-dom";
import classes from "../../../style/universalClass.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cerealsInfo from "./cerealsText";
import { CerealsAccordion } from "./CerealsAccordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { cerealsImages } from "./cerealsImages";
import cerealsClass from "./CerealsClass.module.scss";
import { useState } from "react";
import { ListOfCereals } from "../ListOfCereals/ListOfCereals";

export const Cereals = ({ turnOff }) => {
  const [cereals, setCereals] = useState(false);

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
    <div className={cerealsClass.cerealsBackground}>
      <div
        className={classes.info}
        style={cereals ? { display: "none" } : { display: "block" }}
      >
        <FontAwesomeIcon
          icon={faCircleXmark}
          size="2x"
          className={classes.closeBtn}
          onClick={() => turnOff(false)}
        />
        <h1>Cereals</h1>
        <section className={classes.imagesSection}>
          <Slider {...settings}>
            {cerealsImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Cereal ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </Slider>
        </section>
        <section>
          <CerealsAccordion data={cerealsInfo} />
        </section>
        <button className={classes.btnClass} onClick={() => setCereals(true)}>
          Read More
        </button>
      </div>
      {cereals && <ListOfCereals goBack={() => setCereals(false)} />}
    </div>
  );
};
