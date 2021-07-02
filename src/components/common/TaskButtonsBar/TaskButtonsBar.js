import React, { useCallback } from "react";
import PropTypes from "prop-types";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getTasks } from "../../../ducks/tasksReducer";
import {
  changeModalVisibility,
  changeCreationMode,
  changeModificationMode,
} from "../../../ducks/modalReducer";
import { Grid } from "@material-ui/core";

import styles from "./styles";

const TaskButtonsBar = ({ creationMode, modificationMode, actions, task }) => {
  const classes = styles();

  const handleDeleteMode = useCallback(() => {
    if (window.confirm(`¿Estas seguro que queres borrar la tarea: ${task.name}?`)) {
      fetch("http://timetra.herokuapp.com/task/" + task.id, {
        method: "DELETE",
      })
        .then(() => {
          actions.getTasks();
          actions.changeModalVisibility();
          actions.changeCreationMode(true);
          actions.changeModificationMode(false);
        })
        .catch((err) => console.log(err));
    }
  }, [task, actions]);

  return (
    !creationMode && (
      <>
        <Grid item>
          <IconButton
            className={classes.editButton}
            onClick={() => actions.changeModificationMode(true)}
            disabled={modificationMode}
          >
            <EditIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton className={classes.deleteButton} onClick={() => handleDeleteMode()}>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </>
    )
  );
};

TaskButtonsBar.propTypes = {
  modificationMode: PropTypes.bool,
  creationMode: PropTypes.bool,
  actions: PropTypes.object,
};

const mapStateToProps = (state) => ({
  task: state.modalReducer.task,
  creationMode: state.modalReducer.creationMode,
  modificationMode: state.modalReducer.modificationMode,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    { changeModalVisibility, changeCreationMode, changeModificationMode, getTasks },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskButtonsBar);
