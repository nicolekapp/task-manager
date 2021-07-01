import React, { useCallback } from "react";
import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import { Typography } from "@material-ui/core";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeModalVisibility } from "../../../ducks/modalReducer";

import ActionsButtonGroup from "./ActionsButtonGroup";

import styles from "./styles";

const TaskCard = ({ actions, task }) => {
  const classes = styles();

  const handleOpenTask = useCallback(() => actions.changeModalVisibility(task), [actions, task]);

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
              alignItems="flex-end"
              className={classes.buttonContainer}
              item
            >
              <Grid item>
                <ActionsButtonGroup status={task.status} />
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
