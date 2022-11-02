import FoodItem from "./FoodItem";
import Card from "../../UI/Card";
import classes from "./AvailableFoodItems.module.css";

const DUMMY_FOODS = [
  {
    id: 1,
    name: "Pasta",
    description: "Spicy...and sweet...",
    price: 12.99,
  },
  {
    id: 2,
    name: "Fried Chicken",
    description: "Korean fried chicken.",
    price: 25.99,
  },
  {
    id: 3,
    name: "Steak",
    description: "Made with the prime grade.",
    price: 149.99,
  },
  {
    id: 4,
    name: "Kebab",
    description: "Lamb & chicken kebab.",
    price: 10.99,
  },
];

const AvailableFoodItems = (props) => {
  const foods = DUMMY_FOODS.map((food) => (
    <FoodItem key={food.id} id={food.id} name={food.name} description={food.description} price={food.price} />
  ));

  return (
    <section className={classes.foods}>
      <Card>
        <ul>{foods}</ul>
      </Card>
    </section>
  );
};

export default AvailableFoodItems;
