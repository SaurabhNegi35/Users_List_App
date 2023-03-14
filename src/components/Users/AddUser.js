import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  //   const [enteredUsername, setEnteredUsername] = useState("");
  //   const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    // if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
    //   setError({
    //     title: "Invalid Input",
    //     message: "Please Enter a Valid Name and Age (Non-Empty Values).",
    //   });
    //   return;
    // }
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Enter a Valid Name and Age (Non-Empty Values).",
      });
      return;
    }

    // if (+enteredAge < 1) {
    //   setError({
    //     title: "Invalid Age",
    //     message: "Please Enter a Valid Age (Age Should we greater then 0).",
    //   });
    //   return;
    // }

    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please Enter a Valid Age (Age Should we greater then 0).",
      });
      return;
    }

    // console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // setEnteredUsername("");
    // setEnteredAge("");
  };

  //   const usernameChangeHandler = (event) => {
  //     setEnteredUsername(event.target.value);
  //   };

  //   const ageChangeHandler = (event) => {
  //     setEnteredAge(event.target.value);
  //   };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            // value={enteredUsername}
            placeholder="Enter Your Username"
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            type="number"
            id="age"
            name="age"
            // value={enteredAge}
            placeholder="Enter Your Age"
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
