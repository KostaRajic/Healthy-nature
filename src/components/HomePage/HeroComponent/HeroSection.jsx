import { useContextAuth } from "../../context/Context";
import classes from "./HeroSection.module.scss";
import { TextSlider } from "./TextSlider";

export const HeroSection = () => {
  const { switchLanguage, setSwitchLanguage } = useContextAuth();

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setSwitchLanguage(selectedLanguage === "en");
  };

  return (
    <div className={classes.heroSectionContainer}>
      <div className={classes.selectLanguageClass}>
        <p>{switchLanguage ? "Language:" : "Језик:"}</p>
        <select onChange={handleLanguageChange}>
          <option value="rs">Српски</option>
          <option value="en">English</option>
        </select>
      </div>

      <div>
        {switchLanguage ? (
          <h1>
            Welcome to <br />
            <span>HEALTHY NATURE</span>
          </h1>
        ) : (
          <h1>
            Добродошли у <br />
            <span>ЗДРАВУ ПРИРОДУ</span>
          </h1>
        )}
        <TextSlider />
      </div>
    </div>
  );
};
