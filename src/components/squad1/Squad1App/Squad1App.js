import React, { useEffect, useState } from "react";

import Grid from "@material-ui/core/Grid";

import CardsContainer from "./CardsContainer";

import styles from "./styles";

import mockedTasks from "../mockedTasks";

const Squad1App = () => {
  const classes = styles();

  const [createdTasks, setCreatedTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [pausedTasks, setPausedTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const created = [];
    const inProgress = [];
    const paused = [];
    const completed = [];
    mockedTasks.forEach((task) => {
      switch (task.status) {
        case "Created":
          created.push(task);
          break;
        case "InProgress":
          inProgress.push(task);
          break;
        case "Paused":
          paused.push(task);
          break;
        default:
          completed.push(task);
      }

      setCreatedTasks(created);
      setInProgressTasks(inProgress);
      setPausedTasks(paused);
      setCompletedTasks(completed);
    });
  }, []);

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="flex-start" spacing={8}>
        <Grid item xs>
          <CardsContainer title="En Progreso" tasks={inProgressTasks} />
          <CardsContainer title="Pausadas" tasks={pausedTasks} />
        </Grid>

        <Grid item xs>
          <CardsContainer title="Backlog" tasks={createdTasks} />
          <CardsContainer title="Completadas" tasks={completedTasks} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Squad1App;
