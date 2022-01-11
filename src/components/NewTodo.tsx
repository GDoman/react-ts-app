import { useRef } from "react";

const NewTodo: React.FC<{}> = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current?.value;
  };

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input ref={todoTextInputRef} type="text" id="text"></input>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
