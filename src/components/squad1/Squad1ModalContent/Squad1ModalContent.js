import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  changeModalVisibility,
  changeCreationMode,
  changeModificationMode,
} from "../../../ducks/modalReducer";
import { getTasks } from "../../../ducks/tasksReducer";

import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Clear";

import styles from "./styles";

const Squad1ModalContent = ({ actions, creationMode, modificationMode, task }) => {
  const classes = styles();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const [nameEntered, setNameEntered] = useState(false);
  const [changes, setChanges] = useState(false);

  useEffect(() => {
    let name = "";
    let description = "";
    let sDate = null;
    let eDate = null;

    if (task) {
      name = task.name;
      description = task.description;
      sDate = task.starting_date;
      eDate = task.starting_date + task.estimated_time;
    }

    setName(name);
    setDescription(description);
    setStartDate(sDate);
    setEndDate(eDate);
  }, [task, actions]);

  useEffect(() => {
    if (task) {
      if (
        name === task.name &&
        description === task.description &&
        startDate === task.starting_date &&
        endDate === task.starting_date + task.estimated_time
      ) {
        setChanges(false);
      } else {
        setChanges(true);
      }
    } else {
      setChanges(true);
    }
  }, [task, name, description, startDate, endDate]);

  const handleNameChange = useCallback((event) => {
    setName(event.target.value);
    setNameEntered(true);
  }, []);

  const handleDescriptionChange = useCallback((event) => {
    setDescription(event.target.value);
  }, []);

  const handleStartDateChange = useCallback((date) => {
    setStartDate(date);
  }, []);

  const handleEndDateChange = useCallback((date) => {
    setEndDate(date);
  }, []);

  const handleCancelButtonClick = useCallback(() => {
    if (creationMode) {
      actions.changeModalVisibility();
      actions.changeCreationMode(true);
      actions.changeModificationMode(false);
    } else if (modificationMode) {
      actions.changeModificationMode(false);
      setName(task.name);
      setDescription(task.description);
      setStartDate(task.starting_date);
      setEndDate(task.starting_date + task.estimated_time);
    }
  }, [actions, modificationMode]);

  const handleSaveButtonClick = useCallback(async () => {
    const request = async () => {
      if (creationMode) {
        return fetch("http://timetra.herokuapp.com/task", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            description,
            estimated_time: endDate - startDate,
            starting_date: startDate.getTime(),
          }),
        });
      } else if (modificationMode) {
        return fetch(`http://timetra.herokuapp.com/task/${task.id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            description,
            estimated_time: endDate - startDate,
            starting_date: new Date(startDate).getTime(),
          }),
        });
      }
    };

    await request()
      .then(() => {
        actions.getTasks();
        actions.changeModalVisibility();
        actions.changeCreationMode(true);
        actions.changeModificationMode(false);
      })
      .then((err) => {
        console.log(err);
      });
  }, [actions, name, description, endDate, startDate]);

  return (
    <div className={classes.root}>
      <Grid className={classes.rootGrid} container direction="column" spacing={2}>
        <Grid item xs>
          <TextField
            label="Nombre de la tarea"
            value={name}
            onChange={handleNameChange}
            variant="outlined"
            fullWidth
            helperText={nameEntered && name === "" && "Se requiere un nombre de tarea"}
            error={nameEntered && name === ""}
            disabled={!modificationMode}
          />
        </Grid>

        <Grid item xs>
          <TextField
            label="Description"
            multiline
            rowsMax={10}
            value={description}
            fullWidth
            onChange={handleDescriptionChange}
            variant="outlined"
            disabled={!modificationMode}
          />
        </Grid>
        <Grid container item spacing={4}>
          <Grid item>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                label="Fecha de inicio"
                value={startDate}
                onChange={handleStartDateChange}
                disablePast={creationMode}
                inputVariant="outlined"
                autoOk
                disabled={!modificationMode}
              />
            </MuiPickersUtilsProvider>
          </Grid>

          <Grid item>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                label="Fecha de finalización"
                value={endDate}
                onChange={handleEndDateChange}
                disablePast
                inputVariant="outlined"
                minDate={startDate}
                autoOk
                disabled={!modificationMode || startDate === null}
              />
            </MuiPickersUtilsProvider>
          </Grid>

          {(creationMode || modificationMode) && (
            <Grid container item spacing={3}>
              <Grid item>
                <Button
                  variant="contained"
                  startIcon={<CancelIcon />}
                  disableElevation
                  onClick={handleCancelButtonClick}
                >
                  Cancelar
                </Button>
              </Grid>
              <Grid item xs></Grid>
              <Grid item>
                <Button
                  color="primary"
                  variant="contained"
                  startIcon={<SaveIcon />}
                  disableElevation
                  disabled={name === "" || startDate === null || !changes}
                  onClick={handleSaveButtonClick}
                >
                  Guardar
                </Button>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  task: state.modalReducer.task,
  creationMode: state.modalReducer.creationMode,
  modificationMode: state.modalReducer.modificationMode,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    { changeModalVisibility, changeCreationMode, changeModificationMode, getTasks },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Squad1ModalContent);
