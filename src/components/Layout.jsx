/* eslint-disable react/prop-types */
import classes from "../style/universalClass.module.scss";
import { useContextAuth } from "./context/Context";

export const Layout = ({ children }) => {
    const { setSwitchLanguage } = useContextAuth()

    const handleLanguageChange = (e) => {
        const selectedLanguage = e.target.value;
        setSwitchLanguage(selectedLanguage === "en");
      };

    return <div>
        <select className={classes.selectLanguageClass} onChange={handleLanguageChange}>
            <option value='rs'>Српски</option>
            <option value='en'>English</option>
        </select>
        {children}
    </div>
}