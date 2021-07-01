import React, { Fragment, useState } from "react";
//import PropTypes from "prop-types";
import TimePickers from "../TimePicker/TimePicker";
import Button from "@material-ui/core/Button";

//import { Typography } from "@material-ui/core";
//import styles from "./styles";

const ManualPanel = ({ manual }) => {
    const [manualTime, setManualTime] = useState("");
    const addManual = () => console.log(manualTime, "manual time");
    return (
        <div>
            {manual &&
                <Fragment>
                    <TimePickers setManualTime={setManualTime} />
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
