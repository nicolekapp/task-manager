import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Chip from "@material-ui/core/Chip";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  changeModalVisibility,
  changeCreationMode,
  changeModificationMode,
} from "../../../ducks/modalReducer";

import Squad1ModalContent from "../../squad1/Squad1ModalContent";
import Squad2ModalContent from "../../squad2/Squad2ModalContent";
import TaskButtonsBar from "../TaskButtonsBar";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const Modal = ({ actions, open, task, totalTime, creationMode }) => {
  const [selectedTask, setSelectedTask] = useState(null);

  const handleClose = useCallback(() => {
    actions.changeModalVisibility();
    actions.changeCreationMode(true);
    actions.changeModificationMode(false);
  }, [actions]);

  useEffect(() => {
    let t = task;
    actions.changeCreationMode(false);
    if (task === null) {
      t = null;
      actions.changeCreationMode(true);
    }

    setSelectedTask(t);
  }, [task, actions]);

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="xl">
      <DialogTitle>
        <Grid container direction="row" alignItems="center">
          <Grid item>
            {!creationMode ? (
              <Grid container spacing={2}>
                <Grid item>{selectedTask.name}</Grid>
                <Grid item>
                  <Chip label={selectedTask.state} />
                </Grid>
              </Grid>
            ) : (
              <Grid container spacing={2}>
                <Grid item>Crear Tarea</Grid>
              </Grid>
            )}
          </Grid>
          <Grid item xs></Grid>
          <TaskButtonsBar />
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Squad1ModalContent />
      </DialogContent>
      {!creationMode && (
        <DialogContent>
          <div>
            <Typography>Tiempo total dedicado = {totalTime}</Typography>
          </div>
          <Squad2ModalContent task={task} />
        </DialogContent>
      )}
    </Dialog>
  );
};

Modal.propTypes = {
  open: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  open: state.modalReducer.open,
  task: state.modalReducer.task,
  totalTime: state.modalReducer.totalTime,
  creationMode: state.modalReducer.creationMode,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    { changeModalVisibility, changeCreationMode, changeModificationMode },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
