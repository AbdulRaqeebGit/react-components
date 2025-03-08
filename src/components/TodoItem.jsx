import React from "react";

function TodoItem({ todo, deleteTodo, editTask }) {
  return (
    <li>
      <span>{todo.title}</span>
      <button className="edit" onClick={() => editTask(todo)}>
        Edit
      </button>
      <button className="delete" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;