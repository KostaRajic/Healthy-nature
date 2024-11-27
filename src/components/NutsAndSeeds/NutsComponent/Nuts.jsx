/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ReactDOM, { createPortal } from "react-dom";
import classes from "../../../style/universalClass.module.scss";
import nutsClass from "./NutsClass.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { NutsAccordion } from "./NutsAccordion";
import { nutsInfo } from "./nutsText";
import { nutsImages } from "./nutsImages";
import { useState } from "react";
import { ListOfNuts } from "../ListOfNuts/ListOfNuts";
import  orasastiPlodovi  from "../ListOfNuts/orasastiPlodovi";
import  {orasastiPlodoviTekst}  from "./orasastiPlodoviTekst";
import { useContextAuth } from "../../context/Context";

export const Nuts = ({ turnOff }) => {
  const [ nutsAndSeeds, setNutsAndSeeds ] = useState(false);
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
    <div className={nutsClass.nutsBackground}>
      <div className={classes.info} style={nutsAndSeeds ? {display: 'none'} : {display: 'block'}}>
        <FontAwesomeIcon
          icon={faCircleXmark}
          size="2x"
          className={classes.closeBtn}
          onClick={() => turnOff(false)}
        />
        <h1>{switchLanguage ? 'NUTS AND SEEDS' : 'ОРАШАСТИ ПЛОДОВИ'}</h1>
        <section className={classes.imagesSection}>
          <Slider {...settings}>
            {nutsImages.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Nuts and Seeds ${index + 1}`}
                  loading={"lazy"}
                />
              </div>
            ))}
          </Slider>
        </section>
        <section>
          <NutsAccordion data={switchLanguage ? nutsInfo : orasastiPlodoviTekst} />
        </section>
        <button className={classes.btnClass} onClick={() => setNutsAndSeeds(true)}>
        { switchLanguage ? 'Read more' : 'Прочитајте више'}
        </button>
      </div>
      {nutsAndSeeds && <ListOfNuts goBack={() => setNutsAndSeeds(false)}/>}
    </div>
  );
};
