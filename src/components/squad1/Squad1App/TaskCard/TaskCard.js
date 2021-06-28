import React from "react";
import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

import styles from "./styles";
import { Typography } from "@material-ui/core";

const TaskCard = ({ task }) => {
  const classes = styles();

  return (
    <Grid className={classes.card} item>
      <Paper className={classes.paper}>
        <Grid container direction="row">
          <Grid
            className={classes.infoContainer}
            container
            item
            direction="column"
            justify="center"
            alignItem="flex-start"
            spacing={1}
          >
            <Grid container alignItems="center" item xs>
              <Grid className={classes.taskName} item>
                <Typography color="primary" className={classes.taskNameText} noWrap>
                  {task.name}
                </Typography>
              </Grid>
              <Grid>
                <Chip size="small" label={task.status} />
              </Grid>
            </Grid>
            <Grid item xs>
              <Typography noWrap>{task.description}</Typography>
            </Grid>
          </Grid>

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.buttonContainer}
            item
          >
            <IconButton color="inherit">
              <PlayCircleOutlineIcon className={classes.actionButton} />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object,
};

export default TaskCard;
