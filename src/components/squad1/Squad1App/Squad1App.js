import React, { useEffect, useState } from "react";

import Grid from "@material-ui/core/Grid";

import CardsContainer from "../CardsContainer";

import Modal from "../../common/Modal";

import styles from "./styles";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getTasks } from "../../../ducks/tasksReducer";

const Squad1App = ({ actions, tasks }) => {
  const classes = styles();

  const [createdTasks, setCreatedTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [pausedTasks, setPausedTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    actions.getTasks();
  }, [actions]);

  useEffect(() => {
    const created = [];
    const inProgress = [];
    const paused = [];
    const completed = [];

    tasks.forEach((task) => {
      switch (task.state) {
        case "Created":
          created.push(task);
          break;
        case "InProgress":
          inProgress.push(task);

          console.log("inp");
          break;
        case "Paused":
          console.log("pushed");
          paused.push(task);
          break;
        default:
          completed.push(task);
      }
    });

    setCreatedTasks(created);
    setInProgressTasks(inProgress);
    setPausedTasks(paused);
    setCompletedTasks(completed);
  }, [tasks]);

  return (
    <div className={classes.root}>
      <Modal />
      <Grid container direction="row" justify="center" spacing={8}>
        {inProgressTasks.length !== 0 && pausedTasks.length !== 0 && (
          <Grid container item direction="column" spacing={1} xs>
            {inProgressTasks.length !== 0 && (
              <CardsContainer title="En Progreso" tasks={inProgressTasks} />
            )}
            {pausedTasks.length !== 0 && <CardsContainer title="Pausadas" tasks={pausedTasks} />}
          </Grid>
        )}

        <Grid container item direction="column" spacing={1} xs>
          {createdTasks.length !== 0 && <CardsContainer title="Backlog" tasks={createdTasks} />}
          {completedTasks.length !== 0 && (
            <CardsContainer title="Completadas" tasks={completedTasks} />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasksReducer.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ getTasks }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Squad1App);
