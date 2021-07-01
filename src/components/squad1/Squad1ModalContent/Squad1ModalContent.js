import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const Squad1ModalContent = ({ creationMode, task }) => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  useEffect(() => {
    let name = "";
    let description = "";
    let sDate = null;
    let eDate = null;

    if (task) {
      name = task.name;
      description = task.description;
      sDate = task.starting_date;
      eDate = null; //fix this
    }

    setName(name);
    setDescription(description);
    setStartDate(sDate);
    setEndDate(eDate);
  }, [creationMode]);

  const handleNameChange = useCallback((input) => {
    setName(input);
  }, []);

  const handleDescriptionChange = useCallback((input) => {
    setDescription(input);
  }, []);

  const handleStartDateChange = useCallback((date) => {
    setStartDate(date);
  }, []);

  const handleEndDateChange = useCallback((date) => {
    setEndDate(date);
  }, []);

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <TextField
          aria-required
          label="Nombre de la tarea"
          value={name}
          onChange={handleNameChange}
          fullWidth
          variant="outlined"
          helperText={name === "" && "Se requiere un nombre de tarea"}
          error={name === ""}
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
      <Grid container item spacing={4} justify="center">
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
            />
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
    </Grid>
  );
};

Squad1ModalContent.propTypes = {
  creationMode: PropTypes.bool,
  task: PropTypes.object,
};

export default Squad1ModalContent;
