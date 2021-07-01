import React, { useCallback, useState } from "react";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const Squad1ModalContent = () => {
  const [values, setValues] = useState(
    {
      name: "",
    },
    "Controlled"
  );

  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const handleStartDateChange = useCallback((date) => {
    setStartDate(date);
  }, []);

  const handleEndDateChange = useCallback((date) => {
    setEndDate(date);
  }, []);

  const handleChange = (description, title, durationDays, durationHours) => (event) => {
    setValues({
      ...values,
      [description]: event.target.value,
      [title]: event.target.value,
      [durationDays]: event.target.value,
      [durationHours]: event.target.value,
    });
  };
  const error = values.description === "";
  const error2 = values.title === "";

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <TextField
          aria-required
          label="Nombre de la tarea"
          value={values.title}
          onChange={handleChange("title")}
          fullWidth
          variant="outlined"
          helperText={error2 && "The task needs to have a title"}
          error={error2}
        />
      </Grid>

      <Grid item>
        <TextField
          label="Description"
          multiline
          rowsMax={10}
          value={values.description}
          onChange={handleChange("description")}
          fullWidth
          variant="outlined"
          helperText={error && "The task needs to have a descirption"}
          error={error}
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
            />
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Squad1ModalContent;
