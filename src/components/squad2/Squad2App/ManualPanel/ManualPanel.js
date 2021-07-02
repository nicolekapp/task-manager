import React, { Fragment, useState } from "react";
//import PropTypes from "prop-types";
import TimePicker from "../TimePicker/TimePicker";
import Button from "@material-ui/core/Button";
import * as utils from '../utils';

//import { Typography } from "@material-ui/core";
//import styles from "./styles";

const ManualPanel = ({ manual }) => {
    const [manualTime, setManualTime] = useState("");
    const {convertToHours,convertToMinutes,convertToSeconds} = utils;

    const postTime = () => {
        var hours = parseInt(manualTime.slice(0, 2), 10);
        var minutes = parseInt(manualTime.slice(3, 5),10);

        const requestOptions = {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({
                "horas": hours,
                "minutos": minutes,
                "segundos": 0,
                "task": 200
              })
        };

        fetch('https://is3-squad2-tiempos.herokuapp.com/Manual/register', requestOptions);
    }

    const addManual = () => postTime();

    return (
        <div>
            {manual &&
                <Fragment>
                    <TimePicker setManualTime={setManualTime} />
                    <Button manualtime={manualTime} onClick={() => addManual(manualTime)}>
                        <div>
                            Agregar
                         </div>
                    </Button>
                </Fragment>
            }
        </div>
    );

};

export default ManualPanel;
