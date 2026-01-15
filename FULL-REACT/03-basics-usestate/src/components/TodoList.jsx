import React from "react";
import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handlechange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handlechange}
          placeholder="add a new todo"
        />
        <button type="submit">Add todo</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
