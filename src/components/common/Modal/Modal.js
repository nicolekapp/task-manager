import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeModalVisibility } from "../../../ducks/modalReducer";

import Squad1ModalContent from "../../squad1/Squad1ModalContent";
import Squad2ModalContent from "../../squad2/Squad2ModalContent";

const newTask = {
  name: "",
  status: "",
  description: "",
  starting_date: null,
  estimated_time: null,
};

const Modal = ({ actions, open, task }) => {
  const [selectedTask, setSelectedTask] = useState(newTask);
  const [creationMode, setCreationMode] = useState(true);

  const handleClose = useCallback(() => actions.changeModalVisibility(), [actions]);

  useEffect(() => {
    let t = task;
    if (task === null) {
      t = creationMode;
    }
    setCreationMode(false);
    setSelectedTask(t);
  }, [task]);

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="sm">
      <DialogTitle>
        {creationMode ? `${selectedTask.name} - ${selectedTask.status}` : "Crear tarea"}
      </DialogTitle>
      <DialogContent>
        <Squad1ModalContent />
      </DialogContent>
      <DialogContent>
        <Squad2ModalContent />
      </DialogContent>
    </Dialog>
  );
};

Modal.propTypes = {
  open: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  open: state.modalReducer.open,
  task: state.modalReducer.task,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ changeModalVisibility }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
