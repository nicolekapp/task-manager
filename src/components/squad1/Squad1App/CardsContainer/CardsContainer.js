import React from "react";
import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import styles from "./styles";
import { Typography } from "@material-ui/core";

const CardsContainer = ({ title, tasks }) => {
  const classes = styles();
  return (
    <Grid item container direction="column" spacing={1}>
      <Grid item>
        <Typography variant="h6">{title}</Typography>
      </Grid>

      <Grid container direction="column" spacing={2} item>
        {tasks.map((task, index) => (
          <Grid key={index} className={classes.card} item>
            <Paper className={classes.paper}>
              <Grid container direction="column" justify="center" alignItem="flex-start">
                <Grid item>
                  {task.name} - {task.status}
                </Grid>
                <Grid item>{task.description}</Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
        <Grid item></Grid>
      </Grid>
    </Grid>
  );
};

CardsContainer.propTypes = {
  title: PropTypes.string,
  tasks: PropTypes.array,
};

export default CardsContainer;
