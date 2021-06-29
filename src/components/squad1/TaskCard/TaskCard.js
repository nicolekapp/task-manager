import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";

import PlayButton from "@material-ui/icons/PlayCircleOutline";
import PauseButton from "@material-ui/icons/PauseCircleOutline";

import styles from "./styles";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeModalVisibility } from "../../../../ducks/modalReducer";

const TaskCard = ({ actions, task }) => {
  const classes = styles();

  const handlePlayAction = useCallback(() => console.log("PLAY ACTION"), []);
  const handlePauseAction = useCallback(() => console.log("PAUSE ACTION"), []);

  const handleOpenTask = useCallback(() => actions.changeModalVisibility(task), [actions, task]);

  const [actionIcon, setActionIcon] = useState(
    <PlayButton className={`${classes.playButton} ${classes.actionButton}`} />
  );

  useEffect(() => {
    if (task.status === "InProgress") {
      setActionIcon(<PauseButton className={`${classes.pauseButton} ${classes.actionButton}`} />);
    }
  }, [task, classes]);

  return (
    <Grid className={classes.card} item>
      <Paper className={classes.paper}>
        <Grid className={classes.container} container direction="row" alignItems="center">
          <Grid
            className={classes.infoContainer}
            container
            item
            direction="column"
            justify="center"
            alignItems="flex-start"
            spacing={1}
          >
            <Grid container alignItems="center" item xs>
              <Grid className={classes.taskName} item>
                <Typography className={classes.taskNameText} noWrap onClick={handleOpenTask}>
                  {task.name}
                </Typography>
              </Grid>
              <Grid>
                <Chip label={task.status} />
              </Grid>
            </Grid>
            <Grid item xs>
              <Typography noWrap>{task.description}</Typography>
            </Grid>
          </Grid>

          {task.status !== "Completed" && (
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              className={classes.buttonContainer}
              item
            >
              <Grid item>
                <IconButton
                  color="inherit"
                  onClick={task.status === "InProgress" ? handlePauseAction : handlePlayAction}
                >
                  {actionIcon}
                </IconButton>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Paper>
    </Grid>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ changeModalVisibility }, dispatch),
});

export default connect(null, mapDispatchToProps)(TaskCard);
