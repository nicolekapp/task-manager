// Actions
const GET_TASKS = "GET_TASKS";
const TASK_RUNNING = "TASK_RUNNING";
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

export const thereIsOneTaskInProgress = (value) => (dispatch) => {
  dispatch({ type: TASK_RUNNING, value });
};

// State
const initialState = {
  tasks: [],
  running: false,
};

// Reducer
const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.tasks,
      };
    case TASK_RUNNING:
      return {
        ...state,
        running: action.value,
      };
    default:
      return state;
  }
};

export default tasksReducer;
