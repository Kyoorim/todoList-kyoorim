import Card from "../UI/Card/Card";

import classes from "./TodoList.module.css";

const TodoList = (props) => {
  return (
    <Card className={classes.todos}>
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id} onClick={() => props.onDeleteItem(todo.id)}>
            {todo.name} : {todo.text}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TodoList;
