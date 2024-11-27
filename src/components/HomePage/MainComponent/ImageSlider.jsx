/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unreachable */
/* eslint-disable no-dupe-keys */
/* eslint-disable no-fallthrough */
import { useState, useEffect, useRef, useMemo } from "react";
import cereals from "../../../assets/images/Cereals/Cereals.jpg";
import fruits from "../../../assets/images/Fruits.jpg";
import vegetables from "../../../assets/images/Vegetables.jpg";
import nuts from "../../../assets/images/Nuts.jpg";
import ornamentalPlants from "../../../assets/images/Ornamental plants.jpg";
import forests from "../../../assets/images/Forest.jpg";
import classes from "../MainComponent/MainSection.module.scss";
import { Vegetables } from "../../Vegetables/VegetablesComponent/Vegetables";
import { Fruits } from "../../Fruits/FruitsComponent/Fruits";
import { Cereals } from "../../Cereals/CerealsComponent/Cereals";
import { Nuts } from "../../NutsAndSeeds/NutsComponent/Nuts";
import { Forests } from "../../Forests/ForestsComponent/Forests";
import { OrnamentalPlants } from "../../OrnamentalPlants/OrnamentalPlantsComponent/OrnamentalPlants";
import { useContextAuth } from "../../context/Context";

const images = [cereals, fruits, nuts, ornamentalPlants, forests, vegetables];

const switchText = (src) => {
  if (src === cereals) return "ЖИТАРИЦЕ";
  if (src === fruits) return "ВОЋЕ";
  if (src === vegetables) return "ПОВРЋЕ";
  if (src === nuts) return "ОРАШАСТИ ПЛОДОВИ";
  if (src === ornamentalPlants) return "УКРАСНЕ БИЉКЕ";
  if (src === forests) return "ШУМЕ";
  return "Unknown";
};

const switchTextEng = (src) => {
  if (src === cereals) return "CEREALS";
  if (src === fruits) return "FRUITS";
  if (src === vegetables) return "VEGETABLES";
  if (src === nuts) return "NUTS AND SEEDS";
  if (src === ornamentalPlants) return "ORNAMENTAL PLANTS";
  if (src === forests) return "FORESTS";
  return "Unknown";
};

export const ImageSlider = () => {
  const [numb, setNumb] = useState(1);
  const [fade, setFade] = useState(true);
  const [turnFruits, setFruits] = useState(false);
  const [turnVegetables, setVegetables] = useState(false);
  const [turnCereals, setCereals] = useState(false);
  const [turnNuts, setNuts] = useState(false);
  const [turnOrnamentalPlants, setOrnamentalPlants] = useState(false);
  const [turnForests, setForests] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverStates, setHoverStates] = useState(new Array(6).fill(false));
  const { switchLanguage } = useContextAuth();

  const wrapIndex = (index) => ((index % 6) + 6) % 6;

  const imageSources = useMemo(() => {
    return images.map((img, index) => images[wrapIndex(numb - index)]);
  }, [numb]);

  const handlePortal = (src) => {
    if (src === cereals) {
      setCereals(true);
    } else if (src === fruits) {
      setFruits(true);
    } else if (src === nuts) {
      setNuts(true);
    } else if (src === vegetables) {
      setVegetables(true);
    } else if (src === forests) {
      setForests(true);
    } else if (src === ornamentalPlants) {
      setOrnamentalPlants(true);
    }
  };

  const nextSlide = () => {
    if (isHovered) return;

    setFade(false);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setNumb((prevNum) => (prevNum === 6 ? 1 : prevNum + 1));
      setFade(true);
    }, 1500);
  };

  const handleMouseEnter = (index) => {
    setHoverStates((prevStates) => {
      const updatedHoverEffect = [...prevStates];
      updatedHoverEffect[index] = true;
      return updatedHoverEffect;
    });
    setIsHovered(true);
    clearInterval(intervalRef.current);
    clearTimeout(timeoutRef.current);
  };

  const handleMouseLeave = (index) => {
    setHoverStates((prevStates) => {
      const updatedHoverEffect = [...prevStates];
      updatedHoverEffect[index] = false;
      return updatedHoverEffect;
    });
    setIsHovered(false);
    intervalRef.current = setInterval(nextSlide, 5000);
  };

  return (
    <div className={classes.responsiveStyle}>
      <div className={classes.firstThree}>
        {imageSources?.slice(0, 3).map((src, index) => (
          <div key={index}>
            <div
              className={classes.imageHoverEffect}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <img
                src={src}
                alt={`Slide${index + 1}`}
                style={{ opacity: fade ? "1" : "0" }}
              />
              {hoverStates[index] && (
                <button
                  className={classes.readMoreBtnClass}
                  onClick={() => handlePortal(src)}
                >
                  {switchLanguage ? "Read more" : "Прочитајте више"}
                </button>
              )}
            </div>
            <p
              style={{
                fontSize: switchText(src) === "ornamentalPlants" ? "21px" : "",
                opacity: fade ? "1" : "0",
              }}
            >
              {switchLanguage ? switchTextEng(src) : switchText(src)}
            </p>{" "}
          </div>
        ))}
      </div>

      <div className={classes.secondThree}>
        {imageSources?.slice(3, 6).map((src, index) => (
          <div key={index + 3}>
            <div
              className={classes.imageHoverEffect}
              onMouseEnter={() => handleMouseEnter(index + 3)}
              onMouseLeave={() => handleMouseLeave(index + 3)}
            >
              <img
                src={src}
                alt={`Slide${index + 4}`}
                style={{ opacity: fade ? "1" : "0" }}
              />
              {hoverStates[index + 3] && (
                <button
                  className={classes.readMoreBtnClass}
                  onClick={() => handlePortal(src)}
                >
                  {switchLanguage ? "Read more" : "Прочитајте више"}
                </button>
              )}
            </div>
            <p style={{ opacity: fade ? "1" : "0" }}>
              {switchLanguage ? switchTextEng(src) : switchText(src)}
            </p>
          </div>
        ))}
      </div>

      {turnFruits && <Fruits turnOff={() => setFruits()} />}
      {turnNuts && <Nuts turnOff={() => setNuts()} />}

      {turnCereals && <Cereals turnOff={() => setCereals()} />}

      {turnVegetables && <Vegetables turnOff={() => setVegetables()} />}

      {turnForests && <Forests turnOff={() => setForests()} />}

      {turnOrnamentalPlants && (
        <OrnamentalPlants turnOff={() => setOrnamentalPlants()} />
      )}
    </div>
  );
};
