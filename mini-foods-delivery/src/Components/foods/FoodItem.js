import { useContext } from "react";

import FoodForm from "./FoodForm";
import classes from "./FoodItem.module.css";
import CartContext from "../../store/cart-context";

const FoodItem = (props) => {
  const foodPrice = `$${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const addItemToCartHandler = (enteredAmount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: enteredAmount,
      price: props.price,
    });
  };

  return (
    <div className={classes.food}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{foodPrice}</div>
      </div>
      <div>
        <FoodForm id={props.id} onAddToCart={addItemToCartHandler} />
      </div>
    </div>
  );
};

export default FoodItem;
