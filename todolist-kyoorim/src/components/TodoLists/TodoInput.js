import React, { useState, useRef } from "react";

import ErrorModal from "./ErrorModal";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./TodoInput.module.css";

const TodoInput = (props) => {
  const nameInputRef = useRef();
  const textInputRef = useRef();

  const [error, setError] = useState();

  const addTodoHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredText = textInputRef.current.value;

    //validity 검사
    if (enteredName.trim().length === 0 || enteredText.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and text (non-empty values).",
      });
      return;
    }

    props.onAddTodo(enteredName, enteredText);

    nameInputRef.current.value = "";
    textInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addTodoHandler}>
          <label>Name</label>
          <input id="name" type="text" ref={nameInputRef}></input>
          <label>Text</label>
          <input id="text" type="text" ref={textInputRef}></input>
          <Button type="submit">+ Add Todo</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default TodoInput;
