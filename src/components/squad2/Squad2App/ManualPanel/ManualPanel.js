import React, { Fragment, useState } from "react";
//import PropTypes from "prop-types";
import TimePicker from "../TimePicker/TimePicker";
import Button from "@material-ui/core/Button";

//import { Typography } from "@material-ui/core";
//import styles from "./styles";

const ManualPanel = ({ manual }) => {
    const [manualTime, setManualTime] = useState("");

    const postTime = () => {
        const requestOptions = {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({ id: 52, nombre: 'nicole' })
        };
        fetch('https://squad2-tiempos.herokuapp.com/Manual/prueba', requestOptions)
            .then(response => response.json())
            .then(json => console.log(json, 'RESPONSEEEE'));
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
