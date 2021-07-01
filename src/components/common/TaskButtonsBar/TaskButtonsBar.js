import React , { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";


import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const TaskButtonsBar = ({ setModificationMode,  actions, open, task}) => {
  
  
  const handleDeleteMode = useCallback(() => {
    fetch("http://timetra.herokuapp.com/task/" + task.id, {
    method: "DELETE",
  })
    .then((res) => res.text())
    .then((res) => console.log(res));
  });
  

  return (
    <ButtonGroup
      style={{
        position: "absolute",
        right: 5,
      }}
      variant="text"
      aria-label="outlined primary button group"
    >
      <Button onClick={() => setModificationMode()}>
        <IconButton
          style={{
            position: "absolute",
          }}
          color="inherit"
        >
          <EditIcon />
        </IconButton>
      </Button>

      <Button onClick={() => handleDeleteMode()}>
        <IconButton
          style={{
            position: "absolute",
          }}
          color="inherit"
        >
          <DeleteIcon />
        </IconButton>
      </Button>
    </ButtonGroup>
  );
};

TaskButtonsBar.propTypes = {
  setModificationMode: PropTypes.func,
};

const mapStateToProps = (state) => ({
  open: state.modalReducer.open,
  task: state.modalReducer.task,
});


export default connect(mapStateToProps)(TaskButtonsBar);

