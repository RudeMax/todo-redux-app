import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/Actions";

function TodoForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(task));
    setTask("");
  };
  return (
    <div className="todo">
      NEW_TASK:
      <form>
        <input
          className="text-input"
          value={task}
          type="text"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={(e) => handleSubmit(e)}>&#x271A;</button>
      </form>
    </div>
  );
}

export default TodoForm;
