import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from "@material-ui/core/Button";

import {
  changeModalVisibility,
  changeCreationMode,
  changeModificationMode,
} from "../../../ducks/modalReducer";

const CreatTaskButton = ({ actions }) => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          actions.changeCreationMode(true);
          actions.changeModificationMode(true);
          actions.changeModalVisibility();
        }}
      >
        Crear Tarea
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    { changeModalVisibility, changeCreationMode, changeModificationMode },
    dispatch
  ),
});

export default connect(null, mapDispatchToProps)(CreatTaskButton);
