import React from "react";

const ToDoList = ({ todos, handleDelete }) => {
  return (
    <ul className="todoList">
      {todos.map((t) => (
        <li key={t.id} className="todoItem">
          <span className="todoText">{t.task}</span>
          <button onClick={() => handleDelete(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
