// Actions
const CHANGE_MODAL_VISIBILITY = "CHANGE_MODAL_VISIBILITY";
const CHANGE_CREATION_MODE = "CHANGE_CREATION_MODE";
const CHANGE_MODIFICATION_MODE = "CHANGE_MODIFICATION_MODE";

// Action Creators
export const changeModalVisibility =
  (task = null) =>
  (dispatch) =>
    dispatch({ type: CHANGE_MODAL_VISIBILITY, task });

export const changeCreationMode = (mode) => (dispatch) =>
  dispatch({ type: CHANGE_CREATION_MODE, mode });

export const changeModificationMode = (mode) => (dispatch) =>
  dispatch({ type: CHANGE_MODIFICATION_MODE, mode });

// State
const initialState = {
  open: false,
  task: null,
  creationMode: true,
  modificationMode: false,
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
    case CHANGE_CREATION_MODE:
      return {
        ...state,
        creationMode: action.mode,
      };
    case CHANGE_MODIFICATION_MODE:
      return {
        ...state,
        modificationMode: action.mode,
      };
    default:
      return state;
  }
};

export default modalReducer;
