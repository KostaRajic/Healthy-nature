import { HeroSection } from "./components/HomePage/HeroComponent/HeroSection";
import { MainSection } from "./components/HomePage/MainComponent/MainSection";
import classes from "./components/HomePage/HeroComponent/HeroSection.module.scss/";
import "./style/global.scss";
import { Layout } from "./components/Layout";

function App() {
  return (

        <div className={classes.heroBackground}>
          <HeroSection />
          <MainSection />
        </div>

  );
}

export default App;
