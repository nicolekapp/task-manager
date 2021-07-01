import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import PlayButton from "@material-ui/icons/PlayArrow";
import PauseButton from "@material-ui/icons/Pause";
import DoneIcon from "@material-ui/icons/Done";

import styles from "./styles";

const ActionsButtonGroup = ({ status }) => {
  const classes = styles();

  const handlePlayAction = useCallback(() => console.log("PLAY ACTION"), []);
  const handlePauseAction = useCallback(() => console.log("PAUSE ACTION"), []);

  const [actionIcon, setActionIcon] = useState(
    <PlayButton className={`${classes.playButton} ${classes.actionButton}`} />
  );

  useEffect(() => {
    if (status === "InProgress") {
      setActionIcon(<PauseButton className={`${classes.pauseButton} ${classes.actionButton}`} />);
    }
  }, [status, classes]);

  return (
    <ButtonGroup
      orientation="vertical"
      color="default"
      variant="contained"
      size="small"
      disableElevation
    >
      {status !== "Created" && (
        <Button startIcon={<DoneIcon color="primary" className={classes.actionButton} />}>
          Finalizar
        </Button>
      )}
      <Button
        startIcon={actionIcon}
        onClick={status === "InProgress" ? handlePauseAction : handlePlayAction}
      >
        {status === "InProgress" ? "Pausar" : status === "Paused" ? "Retomar" : "Iniciar"}
      </Button>
    </ButtonGroup>
  );
};

ActionsButtonGroup.propTypes = {
  status: PropTypes.bool,
};

export default ActionsButtonGroup;
