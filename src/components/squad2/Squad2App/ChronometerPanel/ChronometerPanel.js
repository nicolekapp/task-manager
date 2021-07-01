import React, { useState } from "react";
//import PropTypes from "prop-types";
//import { Typography } from "@material-ui/core";
//import styles from "./styles";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Timer from "./Timer";

const ChronometerPanel = ({ chronometer }) => {
    const [pomodoroEnabled, setPomodoroEnabled] = useState(false);
    const [start, setStart] = useState(false);

    const handleOnChange = (event) => {
        setPomodoroEnabled(event.target.checked);
    };

    return (
        <div>
            <div>
                {chronometer &&
                    <FormControlLabel
                        control={
                            <Switch
                                checked={pomodoroEnabled}
                                onChange={handleOnChange}
                                name="pomodoro"
                                color="primary"
                            />
                        }
                        label="Utilizar pomodoro"
                    />
                }
            </div>
            <Timer />
        </div>
    );

};

export default ChronometerPanel;