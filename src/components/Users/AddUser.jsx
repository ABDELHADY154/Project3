import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = e => {
    e.preventDefault();

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "invalid Input",
        message: "please enter a valid name and age",
      });
      return;
    }
    if (enteredAge < 1) {
      setError({
        title: "invalid Age",
        message: "please enter a valid age",
      });
      return;
    }
    let user = {
      id: Math.random().toString(),
      name: enteredUserName,
      age: enteredAge,
    };
    props.onAddUser(user);
    setEnteredUserName("");
    setEnteredAge("");
  };
  const userNameChangeHandler = e => {
    setEnteredUserName(e.target.value);
  };

  const ageChangeHandler = e => {
    setEnteredAge(e.target.value);
  };

  const errorModalHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={errorModalHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            name=""
            id="userName"
            onChange={userNameChangeHandler}
            value={enteredUserName}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name=""
            id="age"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
