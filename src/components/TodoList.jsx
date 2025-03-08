import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, editTask }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;