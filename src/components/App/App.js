import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";

import { Route, Switch } from "react-router-dom";

import Squad1App from "../squad1/Squad1App";
import Squad2App from "../squad2/Squad2App";
import Squad3App from "../squad3/Squad3App";
import AppSQ3 from "../squad3/Squad3App/App";

import theme from "./theme";
import CreateTaskButton from "../squad1/CreatTaskButton/taskButton";
import styles from "./styles";
import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ImportButton from "../squad3/ImportButton/importButton";

const App = () => {
  const classes = styles();
  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <Toolbar>
          <Typography onClick={() => window.location.href = "./"} className={classes.title} variant="h6">
            Task Manager
          </Typography>
          <CreateTaskButton />
          <ImportButton/>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />

      <Switch>
        <Route exact path="/">
          <Squad1App />
        </Route>
        <Route exact path="/squad2">
          <Squad2App />
        </Route>
        <AppSQ3/>
      </Switch>
    </ThemeProvider>
  );
};

export default App;
