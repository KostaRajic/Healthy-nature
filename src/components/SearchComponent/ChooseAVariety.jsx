/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import classes from "../../style/universalClass.module.scss";
import cereals from "../Cereals/ListOfCereals/cereals";
import vegetables from "../Vegetables/ListOfVegetables/vegetables";
import fruits from "../Fruits/ListOfFruits/fruits";
import nuts from "../NutsAndSeeds/ListOfNuts/nuts";
import { useState } from "react";
import { useContextAuth } from "../context/Context";

const listOfVariety = [cereals, vegetables, fruits, nuts];

export const ChooseVariety = ({ dontShow, goBack }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { selectedItems, setSelectedItems } = useContextAuth();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleItemClick = (item) => {
    setSelectedItems(item);
    goBack(false);
  };

  const filteredItems = listOfVariety
    .flat()
    .filter((item) => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
      (!dontShow || dontShow !== item.name)).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className={classes.chooseVarietyBackground}>
      <div   className={classes.chooseVarietyInfo}>
        <div style={{display: 'flex'}}>
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search varieties..."
          />

          <div className={classes.searchedItem}>
            {filteredItems
              .flat()
              .filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((filteredItem, index) => (
                <div
                  key={index}
                  style={{ margin: "20px", cursor: "pointer" }}
                  onClick={() => handleItemClick(filteredItem)}
                >
                  {searchTerm && <h3>{filteredItem.name}</h3>}
                </div>
              ))}
          </div>
        </div>
        <div className={classes.containerVarietySearch}>
          {filteredItems.flat().map((item, index) => (
            <div
              key={index}
              className={classes.listOfVarietySearch}
              onClick={() => handleItemClick(item)}
            >
              {item.name}
            </div>
          ))}
        </div>
        </div>
        
        <button className={classes.closeVarietyBtn} onClick={() => goBack(false)}>Go back</button>
      </div>
      
    </div>
  );
};
