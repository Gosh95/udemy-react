import React from "react";

import classes from "./UserInput.module.css";

const UserInput = (props) => {
  return (
    <div className={classes.input}>
      <label>{props.label}</label>
      <input type={props.type} value={props.value} onChange={props.onEnterValue} />
    </div>
  );
};

export default UserInput;
