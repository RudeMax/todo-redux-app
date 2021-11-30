import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./Types";

export const addTodo = (task) => {
  return {
    type: ADD_TODO,
    payload: task,
  };
};

export const deleteTodo = (task) => {
  return {
    type: DELETE_TODO,
    payload: task,
  };
};

export const editTodo = ({ task, currentTask }) => {
  return {
    type: EDIT_TODO,
    payload: { task, currentTask },
  };
};
