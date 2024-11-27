import { useState, useEffect } from "react";
import classes from "./HeroSection.module.scss";
import { useContextAuth } from "../../context/Context";

const texts = [
  "„Medicus curat, natura sanat.” The doctor helps, nature heals",
  "In all that is natural, there is something miraculous",
  "Only health and knowledge are never enough",
  'Look deeply into nature, and then you will understand everything better',
  'The desire for health is half of health',
  "Nature is a petrified city of magic",
  'Each person is the creator of his own health or illness'
];

const tekst = [
  "„Medicus curat, natura sanat.” Доктор помаже, природа лечи",
  "У свему што је природно, има нечег чудесног",
  "Само здравља и знања никад доста",
  "Погледај дубоко у природу и онда ћеш све боље разумети",
  "Жеља за здрављем је пола здравља",
  "Природа је окамењени град магије",
  "Свако је креатор свог здравља или болести",
];


export const TextSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const { switchLanguage } = useContextAuth();

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tekst.length);
      setFade(true);
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  });

  return (
    <div className={classes.sliderContainerClass}>
      <p style={{ opacity: fade ? "1" : "0" }}>{switchLanguage ? texts[currentIndex] : tekst[currentIndex] }</p>
    </div>
  );
};
