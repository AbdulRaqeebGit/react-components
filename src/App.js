import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  // Add or Update a Todo
  const addTodo = (title) => {
    if (editTodo) {
      // Update existing todo
      const updatedTodos = todos.map((todo) =>
        todo.id === editTodo.id ? { ...todo, title } : todo
      );
      setTodos(updatedTodos);
      setEditTodo(null);
    } else {
      // Add new todo
      const newTodo = { id: Date.now(), title };
      setTodos([...todos, newTodo]);
    }
  };

  // Delete a Todo
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  // Edit a Todo
  const editTask = (todo) => {
    setEditTodo(todo);
  };

  return (
    <BrowserRouter basename="/https://github.com/AbdulRaqeebGit">
      <div className="App">
        <h1>Todo App</h1>
        <TodoForm addTodo={addTodo} editTodo={editTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} editTask={editTask} />
      </div>
    </BrowserRouter>
  );
}

export default App;