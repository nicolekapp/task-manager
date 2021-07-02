// Actions
const CHANGE_MODAL_VISIBILITY = "CHANGE_MODAL_VISIBILITY";
const CHANGE_CREATION_MODE = "CHANGE_CREATION_MODE";
const CHANGE_MODIFICATION_MODE = "CHANGE_MODIFICATION_MODE";

// Action Creators
export const changeModalVisibility =
(task = null) =>
async (dispatch) => {
  if(task!=null){
        await  fetch('https://is3-squad2-tiempos.herokuapp.com/timeTask/getTotalTime/'+task.id)
          .then(response => response.text())
          .then(totalTime => dispatch({ type: CHANGE_MODAL_VISIBILITY, task , totalTime}))
        }else{
          dispatch({ type: CHANGE_MODAL_VISIBILITY, task, totalTime:""})
        }
  }

export const changeCreationMode = (mode) => (dispatch) =>
  dispatch({ type: CHANGE_CREATION_MODE, mode });

export const changeModificationMode = (mode) => (dispatch) =>
  dispatch({ type: CHANGE_MODIFICATION_MODE, mode });

// State
const initialState = {
  open: false,
  task: null,
  totalTime: "",
  creationMode: true,
  modificationMode: false,

};

// Reducer
const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MODAL_VISIBILITY:
      console.log(action.totalTime)
      return {
        ...state,
        open: !state.open,
        task: action.task,
        totalTime:action.totalTime,
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
