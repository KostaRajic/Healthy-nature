/* eslint-disable react/prop-types */
import cereals from "../Cereals/ListOfCereals/cereals";
import vegetables from "../Vegetables/ListOfVegetables/vegetables";
import fruits from "../Fruits/ListOfFruits/fruits";
import nuts from "../NutsAndSeeds/ListOfNuts/nuts";
import classes from "../../style/universalClass.module.scss";


const listOfVariety = [cereals, vegetables, fruits, nuts];

const NutrientSortedList = ({ item, name}) => {


  const combinedNutrients = listOfVariety
    .flatMap((category) =>
      category
        .map((item) =>
          item?.nutritionText?.map((nutrient) => ({
            food: item.name,
            element: nutrient.element,
            quantity: nutrient.quantity !== undefined ? nutrient.quantity : 0,
            measurementUnits: nutrient.measurementUnits || "g",
          }))
        )
        .flat()
    )
    .filter((item) => item?.quantity !== null && item?.quantity !== undefined);

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

  return (
    <div>
      {sortedNutrients?.map((item, index) => (
        <div key={index}>
          <p
            className={classes.elementFromList}
            style={item.food === name ? { color: "red", textDecoration: 'underline' } : {}}
          >
            {item.food} {item.quantity} {item.measurementUnits}
          </p>
        </div>
      ))}
    </div>
  );
};

export default NutrientSortedList;
