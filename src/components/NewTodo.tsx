import { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input ref={todoTextInputRef} type="text" id="text"></input>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
