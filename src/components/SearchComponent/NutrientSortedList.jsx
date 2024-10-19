/* eslint-disable react/prop-types */
import React, { useState } from "react";
import cereals from "../Cereals/ListOfCereals/cereals";
import vegetables from "../Vegetables/ListOfVegetables/vegetables";
import fruits from "../Fruits/ListOfFruits/fruits";
import nuts from "../NutsAndSeeds/ListOfNuts/nuts";

const listOfVariety = [cereals, vegetables, fruits, nuts];

const NutrientSortedList = ({ item }) => {

  console.log(item)

const combinedNutrients = listOfVariety
  .flatMap((category) => 
    category.map((item) => 
      item?.nutritionText?.map((nutrient) => ({
        food: item.name,
        element: nutrient.element,
        quantity: nutrient.quantity,
        measurementUnits: nutrient.measurementUnits
      }))
    ).flat()
  )
  .filter((item) => item?.quantity);


const groupedNutrients = combinedNutrients.reduce((acc, curr) => {
  if (!acc[curr.element]) {
    acc[curr.element] = [];
  }
  acc[curr.element].push(curr);
  return acc;
}, {});

const sortedNutrients = groupedNutrients[item]?.sort(
  (a, b) => b.quantity - a.quantity
);

console.log(combinedNutrients)

  return (
    <div>
      {sortedNutrients?.map((item, index) => 
        <div key={index}>{item.food} {item.quantity} {item.measurementUnits}</div>
      )}
      
    </div>
  );
};

export default NutrientSortedList;
