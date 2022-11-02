import { useContext, useEffect, useState } from "react";

import CartIcon from "../Components/Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../store/cart-context";

const HeaderCartButton = (props) => {
  const [itemIsAdded, setItemIsAdded] = useState(false);
  const cartCtx = useContext(CartContext);
  const { totalPrice } = cartCtx;
  const totalAmount = cartCtx.items.reduce((curAmount, item) => {
    return curAmount + item.amount;
  }, 0);
  const buttonClasses = `${classes.button} ${itemIsAdded ? classes.bump : ""}`;

  useEffect(() => {
    if (totalPrice === 0) {
      return;
    }

    const timer = setTimeout(() => {
      setItemIsAdded(false);
    }, 300);

    setItemIsAdded(true);

    return () => {
      clearTimeout(timer);
    };
  }, [totalPrice]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes["cart-icon"]}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
