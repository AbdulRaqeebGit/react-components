import React, { useState, useEffect } from "react";

function TodoForm({ addTodo, editTodo }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (editTodo) {
      setTitle(editTodo.title);
    } else {
      setTitle("");
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return; // Prevent empty todos
    addTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">{editTodo ? "Update" : "Add"}</button>
    </form>
  );
}

export default TodoForm;