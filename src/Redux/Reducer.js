import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./Types";

const initState = {
  tasks: [],
};

export const Reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };
    case DELETE_TODO:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task !== action.payload),
      };
    case EDIT_TODO:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task === action.payload.task ? action.payload.currentTask : task
        ),
      };
    default:
      return state;
  }
};

export default Reducer;
