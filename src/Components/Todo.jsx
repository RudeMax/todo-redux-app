import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../Redux/Actions";

function Todo({ task }) {
  const dispatch = useDispatch();
  const [checkedBox, setCheckedBox] = useState("");
  const [checked, setChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(task);
  useEffect(() => {
    checked ? setCheckedBox("check") : setCheckedBox("");
  }, [checked]);
  const handleChange = (e) => {
    setChecked(!checked);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(task));
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleEditChange = (e) => {
    e.preventDefault();
    setCurrentTask(e.target.value);
  };

  const handleSaveEdit = () => {
    dispatch(editTodo({ task: task, currentTask: currentTask }));
    setIsEditing(!isEditing);
    setCurrentTask(task);
  };

  return (
    <div>
      {isEditing ? (
        <div className="todo">
          <input
            className="text-input"
            type="text"
            value={currentTask}
            onChange={(e) => handleEditChange(e)}
          />{" "}
          <div className="button-box">
            <button onClick={handleSaveEdit}>&#x2714;</button>
            <button onClick={handleEdit}>&#8629;</button>
          </div>
        </div>
      ) : (
        <div className="todo">
          <input
            className="check-input"
            type="checkbox"
            checked={checked}
            onChange={(e) => handleChange(e)}
          />

          <p className={`todo-text ${checkedBox}`}>{task}</p>
          <div className="button-box">
            <button onClick={handleEdit}>&#x270E;</button>
            <br />
            <button onClick={handleDelete}>&#x2716;</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Todo;
