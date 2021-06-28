import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

import TaskCard from "../TaskCard";

const CardsContainer = ({ title, tasks }) => (
  <Grid item container direction="column" spacing={1}>
    <Grid item>
      <Typography variant="h6">{title}</Typography>
    </Grid>

    <Grid container direction="column" spacing={2} item wrap="nowrap">
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
      <Grid item></Grid>
    </Grid>
  </Grid>
);

CardsContainer.propTypes = {
  title: PropTypes.string,
  tasks: PropTypes.array,
};

export default CardsContainer;
