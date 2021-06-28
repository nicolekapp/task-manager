import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";

import { Route, Switch } from "react-router-dom";

import Squad1App from "../squad1/Squad1App";
import Squad2App from "../squad2/Squad2App";
import Squad3App from "../squad3/Squad3App";

import theme from "./theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <AppBar>
      <Toolbar>
        <Typography variant="h6">Task Manager</Typography>
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
      <Route exact path="/squad3">
        <Squad3App />
      </Route>
    </Switch>
  </ThemeProvider>
);

export default App;
