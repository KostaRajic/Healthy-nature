/* eslint-disable react/prop-types */
import cereals from "../Cereals/ListOfCereals/cereals";
import vegetables from "../Vegetables/ListOfVegetables/vegetables";
import fruits from "../Fruits/ListOfFruits/fruits";
import nuts from "../NutsAndSeeds/ListOfNuts/nuts";
import classes from "../../style/universalClass.module.scss";
import zitarice from "../Cereals/ListOfCereals/zitarice";
import povrce from "../Vegetables/ListOfVegetables/povrce";
import voce from "../Fruits/ListOfFruits/voce";
import orasastiPlodovi from "../NutsAndSeeds/ListOfNuts/orasastiPlodovi";
import { useContextAuth } from "../context/Context";


const listOfVariety = [vegetables, cereals, fruits, nuts];
const listaSorti = [povrce, zitarice, voce, orasastiPlodovi]


const NutrientSortedList = ({ item, name}) => {
  const { switchLanguage } = useContextAuth();

  const combinedNutrients = (switchLanguage ? listOfVariety : listaSorti)
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
            style={item.food === name ? { border: "2px solid white", padding: '10px' } : {}}
          >
            {item.food} {item.quantity} {item.measurementUnits}
          </p>
        </div>
      ))}
    </div>
  );
};

export default NutrientSortedList;
