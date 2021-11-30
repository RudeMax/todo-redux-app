import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  const tasks = useSelector((state) => state.tasks);
  return (
    <div>
      {tasks.map((task) => (
        <div key={uuidv4()}>
          <Todo task={task} />
        </div>
      ))}
    </div>
  );
}

export default TodoList;
