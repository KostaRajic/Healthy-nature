import { useState, useEffect } from 'react';
import classes from './HeroSection.module.scss'

const texts = [
  "„Medicus curat, natura sanat.” The doctor helps, nature heals",
  "In all that is natural, there is something miraculous",
  "Only health and knowledge are never enough",
  'Look deeply into nature, and then you will understand everything better',
  'The desire for health is half of health',
  "Nature is a petrified city of magic",
  'Each person is the creator of his own health or illness'
];


export const TextSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);


  const nextSlide = () => {
    setFade(false)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setFade(true)
    }, 1000);
}


  useEffect(() => {
    const interval = setInterval(nextSlide, 3500); 
    return () => clearInterval(interval);
})


  return (
    <div className={classes.sliderContainerClass}>
      <p style={{opacity: fade ? '1' : '0'}}>{texts[currentIndex]}</p>
    </div>
  );
};
