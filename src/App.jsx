import { HeroSection } from "./components/HomePage/HeroComponent/HeroSection";
import { MainSection } from "./components/HomePage/MainComponent/MainSection";
import classes from "./components/HomePage/HeroComponent/HeroSection.module.scss/";
import "./style/global.scss";

function App() {
  return (
    <>
        <div className={classes.heroBackground}>
          <HeroSection />
          <MainSection />
        </div>
    </>
  );
}

export default App;
