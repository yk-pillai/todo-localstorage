import React, { useState } from "react";
import { useTodoContext, TodoProvider } from "./TodoContext";

const TodoInput = () => {
  const [input, setInput] = useState("");
  const { dispatch } = useTodoContext();
  const handleSubmit = () => {
    setInput("");
    dispatch({ type: "ADD", payload: input });

  };
  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} value={input}></input>
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

const TodoList = () => {
  const { todos, dispatch } = useTodoContext();

  const handleRemove = (id) => {
    dispatch({
      type: "REMOVE",
      payload: id,
    });
  };
  const handleToggle = (id) => {
    dispatch({
      type: "TOGGLE",
      payload: id,
    });
  };

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <input type="checkbox" checked={todo.done} onChange={() => handleToggle(todo.id)}></input>
            <span style={{textDecoration:todo.done?"line-through":"none"}}>{todo.name}</span>
            <button onClick={() => handleRemove(todo.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

const TodoApp = () => {
  return (
    <TodoProvider>
      <TodoInput />
      <TodoList />
    </TodoProvider>
  );
};

export default TodoApp;
