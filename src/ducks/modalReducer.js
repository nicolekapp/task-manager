// Actions
const CHANGE_MODAL_VISIBILITY = "CHANGE_MODAL_VISIBILITY";

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
// State
const initialState = {
  open: false,
  task: null,
  totalTime: "",
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
    default:
      return state;
  }
};

export default modalReducer;
