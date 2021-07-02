import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getTasks } from "../../../ducks/tasksReducer";
import { changeModalVisibility } from "../../../ducks/modalReducer";
import { Grid } from "@material-ui/core";

const TaskButtonsBar = ({ creationMode, setModificationMode, actions, open, task }) => {
  const handleDeleteMode = useCallback(() => {
    fetch("http://timetra.herokuapp.com/task/" + task.id, {
      method: "DELETE",
    })
      .then(() => {
        actions.getTasks();
        actions.changeModalVisibility();
      })
      .catch((err) => console.log(err));
  });

  return (
    !creationMode && (
      <>
        <Grid item>
          <IconButton color="inherit" onClick={() => setModificationMode()}>
            <EditIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton color="inherit" onClick={() => handleDeleteMode()}>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </>
    )
  );
};

TaskButtonsBar.propTypes = {
  setModificationMode: PropTypes.func,
};

const mapStateToProps = (state) => ({
  open: state.modalReducer.open,
  task: state.modalReducer.task,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ changeModalVisibility, getTasks }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskButtonsBar);
