/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import ReactDOM, { createPortal } from 'react-dom'
import classes from '../../../style/universalClass.module.scss'
import forestsClass from "./ForestsClass.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { ForestsAccordion } from './ForestsAccordion';
import { forestsInfo } from './forestsText';
import { forestsImages } from './forestsImages';
import { useState } from 'react';
import { ListOfTree } from '../ListOfTree/ListOfForests';

export const Forests = ({ turnOff }) => {
  const [ forests, setForests ] = useState(false)
    
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
        <div className={forestsClass.forestsBackground}>
          <div className={classes.info} style={forests ? {display: 'none'} : {display: 'block'}}>
            <FontAwesomeIcon icon={faCircleXmark} size="2x" className={classes.closeBtn} onClick={() => turnOff(false)}/>  
            <h1>Forests</h1>
            <section className={classes.imagesSection}>
              <Slider {...settings}>
                {forestsImages.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`Forests ${index + 1}`} loading="lazy"/>
                  </div>
                ))}
              </Slider>
            </section>
            <section>
              <ForestsAccordion data={forestsInfo} />
            </section>
            <button
              className={classes.btnClass}
              onClick={() => setForests(true)}
            >
              Read More
            </button>
          </div>
          { forests && <ListOfTree goBack={() => setForests(false)}/>}
        </div>
      )
};