import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import PlayButton from "@material-ui/icons/PlayArrow";
import PauseButton from "@material-ui/icons/Pause";
import DoneIcon from "@material-ui/icons/Done";

import styles from "./styles";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getTasks } from "../../../../ducks/tasksReducer";

const ActionsButtonGroup = ({ actions, id, state, running }) => {
  const classes = styles();

  const newFunction = async (state) => {
    await fetch(`http://timetra.herokuapp.com/task/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        state: state,
      }),
    })
      .then(() => {
        actions.getTasks();
      })
      .then((err) => {
        console.log(err);
      });
  };

  const handlePlayAction = useCallback(async () => newFunction("InProgress"), [newFunction]);

  const handlePauseAction = useCallback(async () => newFunction("Paused"), [newFunction]);

  const handleCompleteTask = useCallback(async () => newFunction("Completed"), [newFunction]);

  const [actionIcon, setActionIcon] = useState(
    <PlayButton className={`${classes.playButton} ${classes.actionButton}`} />
  );

  useEffect(() => {
    if (state === "InProgress") {
      setActionIcon(<PauseButton className={`${classes.pauseButton} ${classes.actionButton}`} />);
    }
  }, [state, classes]);

  return (
    <ButtonGroup
      orientation="vertical"
      color="default"
      variant="contained"
      size="small"
      disableElevation
    >
      {state !== "Created" && (
        <Button
          startIcon={<DoneIcon color="primary" className={classes.actionButton} />}
          onClick={handleCompleteTask}
        >
          Finalizar
        </Button>
      )}
      <Button
        startIcon={actionIcon}
        onClick={state === "InProgress" ? handlePauseAction : handlePlayAction}
        disabled={state !== "InProgress" && running}
      >
        {state === "InProgress" ? "Pausar" : state === "Paused" ? "Retomar" : "Iniciar"}
      </Button>
    </ButtonGroup>
  );
};

const mapStateToProps = (state) => ({
  running: state.tasksReducer.running,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ getTasks }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionsButtonGroup);
