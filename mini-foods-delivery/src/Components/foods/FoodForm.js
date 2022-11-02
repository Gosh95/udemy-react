import { useState, useRef } from "react";

import Input from "../../UI/Input";
import Button from "../../UI/Button";
import classes from "./FoodForm.module.css";

const FoodForm = (props) => {
  const amountRef = useRef();
  const [isValidAmount, setIsValidAmount] = useState(true);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 99) {
      setIsValidAmount(true);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "99",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button className={classes["food-form__button"]} title="+Add" />
      {!isValidAmount && <p>Please enter a valid amount. (1 ~ 99)</p>}
    </form>
  );
};

export default FoodForm;
