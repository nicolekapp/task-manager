import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeModalVisibility } from "../../../ducks/modalReducer";
import { getTasks } from "../../../ducks/tasksReducer";

import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Clear";

const Squad1ModalContent = ({ actions, creationMode, task }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const [nameEntered, setNameEntered] = useState(false);

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
  }, [task, creationMode]);

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

  const handleClose = useCallback(() => {
    actions.changeModalVisibility();
  }, [actions]);

  const handleCreateTask = useCallback(async () => {
    await fetch("http://timetra.herokuapp.com/task", {
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
    })
      .then(() => {
        actions.getTasks();
        handleClose();
      })
      .then((err) => {
        console.log(err);
      });
  }, [name, description, endDate, startDate, handleClose]);

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <TextField
          label="Nombre de la tarea"
          value={name}
          onChange={handleNameChange}
          fullWidth
          variant="outlined"
          helperText={name === "" && "Se requiere un nombre de tarea"}
          error={nameEntered && name === ""}
        />
      </Grid>

      <Grid item>
        <TextField
          label="Description"
          multiline
          rowsMax={10}
          value={description}
          onChange={handleDescriptionChange}
          fullWidth
          variant="outlined"
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
              disabled={startDate === null}
              disablePast
              inputVariant="outlined"
              minDate={startDate}
              autoOk
            />
          </MuiPickersUtilsProvider>
        </Grid>

        {creationMode && (
          <Grid container item spacing={3}>
            <Grid item>
              <Button
                variant="contained"
                startIcon={<CancelIcon />}
                disableElevation
                onClick={handleClose}
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
                disabled={name === "" || startDate === null}
                onClick={handleCreateTask}
              >
                Guardar
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

Squad1ModalContent.propTypes = {
  creationMode: PropTypes.bool,
  task: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ changeModalVisibility, getTasks }, dispatch),
});

export default connect(null, mapDispatchToProps)(Squad1ModalContent);
