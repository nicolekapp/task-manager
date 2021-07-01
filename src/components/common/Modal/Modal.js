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

const Modal = ({ actions, open, task }) => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [creationMode, setCreationMode] = useState(true);

  const handleClose = useCallback(() => actions.changeModalVisibility(), [actions]);

  useEffect(() => {
    let t = task;
    setCreationMode(false);
    if (task === null) {
      t = null;
      setCreationMode(true);
    }

    setSelectedTask(t);
  }, [task]);

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="md">
      <DialogTitle>
        {!creationMode ? `${selectedTask.name} - ${selectedTask.state}` : "Crear tarea"}
      </DialogTitle>
      <DialogContent>
        <Squad1ModalContent creationMode={creationMode} task={task} />
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
