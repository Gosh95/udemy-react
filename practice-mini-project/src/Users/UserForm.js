import React, { useState } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/Modal/ErrorModal";
import UserInput from "./UserInput";
import classes from "./UserForm.module.css";

class User {
  constructor(userName, age) {
    this.userName = userName;
    this.age = +age;
  }

  validateUserName() {
    if (this.userName.length < 4 || this.userName.length > 16) {
      return false;
    }
    return true;
  }

  validateAge() {
    if (this.age < 1) {
      return false;
    }
    return true;
  }
}

const UserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);
  const user = new User(userName, age);

  const enterUserNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const enterAgeHandler = (e) => {
    setAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();

    if (!user.validateUserName()) {
      setError({
        title: "Invalid user name.",
        message: "User name length must be between 4 and 16.",
      });
      return;
    }
    if (!user.validateAge()) {
      setError({
        title: "Invalid age.",
        message: "Age must be number.(age > 0)",
      });
      return;
    }
    props.onAddUser(user);

    clearForm();
  };

  const clearForm = () => {
    setUserName("");
    setAge("");
  };

  const confirmErrorModalHandler = (e) => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={confirmErrorModalHandler} />}
      <Card className={classes.form}>
        <form onSubmit={addUserHandler}>
          <UserInput label={"UserName"} type={"text"} value={userName} onEnterValue={enterUserNameHandler} />
          <UserInput label={"Age (Year)"} type={"text"} value={age} onEnterValue={enterAgeHandler} />
          <Button type={"submit"} text={"Add User"} />
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
