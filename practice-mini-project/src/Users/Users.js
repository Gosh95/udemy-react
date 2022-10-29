import React from "react";

import Card from "../UI/Card/Card";
import classes from "./Users.module.css";

const Users = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.length === 0 && <h2>No Users.</h2>}
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.userName} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default Users;
