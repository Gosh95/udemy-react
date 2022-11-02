import { useContext } from "react";

import CartItem from "./CartItem";
import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalPrice = `$${cartCtx.totalPrice.toFixed(2)}`;

  const increaseItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const decreaseItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onIncreaseItem={increaseItemHandler.bind(null, item)}
          onDecreaseItem={decreaseItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes["total-price"]}>
        <span>Total Price</span>
        <span>{totalPrice}</span>
      </div>
      <div className={classes["button-group"]}>
        <Button type="button" title="Close" onClick={props.onHideCart} />
        <Button type="button" title="Order" />
      </div>
    </Modal>
  );
};

export default Cart;
