import React, { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const deleteTodo = (index) => {
    const removeOnIndex = todos.splice(index, 1);
    setTodos(removeOnIndex);
  };

  const updateTodo = (todo) => {
    const updated = [...todos];
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add New Todo"
        onChange={(e) => setNewTodo(e.target.value)}
      ></input>
      <button onClick={addNewTodo}>Add to Todo List</button>
      <ul>
        {todos.map((todo) => (
          <li>
            <input
              type="text"
              value={todo}
              onChange={(e) => updateTodo(e.target.value)}
            ></input>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
