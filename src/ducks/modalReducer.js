// Actions
const CHANGE_MODAL_VISIBILITY = "CHANGE_MODAL_VISIBILITY";

// Action Creators
export const changeModalVisibility =
  (task = null) =>
  (dispatch) =>
    dispatch({ type: CHANGE_MODAL_VISIBILITY, task });

// State
const initialState = {
  open: false,
  task: null,
};

// Reducer
const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MODAL_VISIBILITY:
      return {
        ...state,
        open: !state.open,
        task: action.task,
      };
    default:
      return state;
  }
};

export default modalReducer;
