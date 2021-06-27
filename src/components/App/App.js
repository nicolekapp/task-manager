import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import styles from "./styles";
import { Route, Switch } from "react-router-dom";

import Squad1App from "../squad1/Squad1App";
import Squad2App from "../squad2/Squad2App";
import Squad3App from "../squad3/Squad3App";

const App = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Task Manager</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <div className={classes.content}>
        <Switch>
          <Route exact path="/">
            <Squad1App />
          </Route>
          <Route exact path="/squad2">
            <Squad2App />
          </Route>
          <Route exact path="/squad3">
            <Squad3App />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
