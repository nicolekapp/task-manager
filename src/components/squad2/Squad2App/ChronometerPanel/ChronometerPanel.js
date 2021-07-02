import React, { useState } from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Timer from "./Timer";
import Pomodoro from "../Pomodoro/Pomodoro";
//import styles from "./styles";

const ChronometerPanel = ({ chronometer, task }) => {
    const [pomodoroEnabled, setPomodoroEnabled] = useState(false);

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
                                size="small"
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
           {/* TODO: Por alguna razon no se envía bien la task al componente!!*/}
            {
                pomodoroEnabled ? <Pomodoro task={task}/> : <Timer task={task}/>
            }

        </div>
    );

};

export default ChronometerPanel;
