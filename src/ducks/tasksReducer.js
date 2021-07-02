// Actions
const GET_TASKS = "GET_TASKS";
// Action Creators
export const getTasks = () => async (dispatch) => {
  await fetch("http://timetra.herokuapp.com/task/all")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      dispatch({ type: GET_TASKS, tasks: response });
    })
    .catch((err) => {
      console.log(err);
    });
};

// State
const initialState = {
  tasks: [],
};

// Reducer
const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.tasks,
      };
    default:
      return state;
  }
};

export default tasksReducer;
