import React, { useState } from "react";

import TodoInput from "./components/TodoLists/TodoInput";
import TodoList from "./components/TodoLists/TodoList";
import "./App.css";

function App() {
  const [list, setList] = useState([]);

  const addListHandler = (name, text) => {
    setList((prevList) => {
      return [
        { name: name, text: text, id: Math.random().toString() },
        ...prevList,
      ];
    });
  };

  const deleteListHandler = (listId) => {
    console.log(listId);
    setList((prevList) => {
      const updatedList = prevList.filter((list) => list.id !== listId);
      return updatedList;
    });
  };

  let content = <p style={{ textAlign: "center" }}>No todos. Maybe add one?</p>;

  if (list.length > 0) {
    content = <TodoList todos={list} onDeleteItem={deleteListHandler} />;
  }

  return (
    <React.Fragment>
      <div id="form">
        <h1 id="title">TO-DO LIST</h1>
        <TodoInput onAddTodo={addListHandler} />
      </div>
      <section id="goals">{content}</section>
    </React.Fragment>
  );
}

export default App;
