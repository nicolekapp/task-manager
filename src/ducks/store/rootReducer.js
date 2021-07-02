import { combineReducers } from "redux";

import modalReducer from "../modalReducer";
import tasksReducer from "../tasksReducer";

const rootReducer = () =>
  combineReducers({
    modalReducer,
    tasksReducer,
  });

export default rootReducer;
