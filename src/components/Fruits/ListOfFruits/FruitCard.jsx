/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
const FruitCard = ({ fruit, onSelectNutrition, onSelectCultivation }) => (
  <div key={fruit.id} className={classes.flexClass}>
    <div>
      <h2>{fruit.name}</h2>
      <img
        className={classes.singleProduct}
        src={fruit.img}
        alt={fruit.name}
        style={{ width: "300px" }}
      />
    </div>
    <div className={classes.inGeneralClass}>{fruit.inGeneral}</div>
    <aside className={classes.asideButtonsClass}>
      <button onClick={() => onSelectNutrition(fruit)}>
        Nutrition and Health
      </button>
      <button onClick={() => onSelectCultivation(fruit)}>Cultivation</button>
    </aside>
  </div>
);

export default FruitCard;