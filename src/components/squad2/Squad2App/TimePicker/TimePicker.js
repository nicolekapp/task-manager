import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200
    }
}));

const TimePicker = ({ setManualTime }) => {
    const classes = useStyles();

    const handleOnChange = e => {
        setManualTime(e.target.value);
    }
    return (
        <form className={classes.container} noValidate>
            <TextField
                id="time"
                label="Tiempo dedicado a la tarea"
                type="time"
                defaultValue="00:00"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true
                }}
                inputProps={{
                    step: 300 // 5 min
                }}
                onChange={handleOnChange}
            />
        </form>
    );
}
export default TimePicker;
