import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const Squad1ModalContent = () => {
  const classes = styles();
  const [values, setValues] = React.useState(
    {
      name: "",
    },
    "Controlled"
  );
  const handleChange = (description, title, duration) => (event) => {
    setValues({
      ...values,
      [description]: event.target.value,
      [title]: event.target.value,
      [duration]: event.target.value,
    });
  };
  const error = values.description === "";
  const error2 = values.title === "";
  const error3 = values.duration === "";

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="standard-required"
          label="Nombre tarea 2"
          defaultValue="Default Value"
          className={classes.textField}
          value={values.title}
          onChange={handleChange("title")}
          helperText={error2 ? "The task needs to have a title" : "Perfect!"}
          error={error2}
        />

        <TextField
          id="task description"
          label="Task description"
          type="task description"
          multiline
          rowsMax={10}
          value={values.description}
          onChange={handleChange("description")}
          defaultValue="Default Value"
          fullWidth
          variant="outlined"
          helperText={
            error ? "The task needs to have a descirption" : "Perfect!"
          }
          error={error}
        />

        <TextField
          id="standard-helperText"
          label="Tiempo de duracion"
          defaultValue="Default Value"
          className={classes.textField}
          value={values.duration}
          onChange={handleChange("duration")}
          helperText={
            error3
              ? "The task needs to have an estimated completion time"
              : "Perfect!"
          }
          error={error3}
        />
      </div>
    </form>
  );
};

const styles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(3),
      display: "flex",
      flexWrap: "wrap",
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(3),
    },
  },
  textField: {
    width: "26ch",
  },
}));

export default Squad1ModalContent;
