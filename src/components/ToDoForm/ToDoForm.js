import React from "react";

const ToDoForm = ({ handleSubmit, todo, setTodo }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        className="inputBox"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ToDoForm;
