import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import foodImage from "../assets/foods.png";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>Foods Delivery</h2>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["foods-image"]}>
        <img src={foodImage} alt="foods" />
      </div>
    </Fragment>
  );
};

export default Header;
