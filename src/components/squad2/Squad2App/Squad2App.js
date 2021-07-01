import React, { Fragment, useState } from "react";
//import PropTypes from "prop-types";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import ManualPanel from "./ManualPanel/ManualPanel";
import ChronometerPanel from "./ChronometerPanel/ChronometerPanel";
//import { Typography } from "@material-ui/core";
//import styles from "./styles";

const Squad2App = () => {
  const [chronometer, setChronometerClicked] = useState(false);
  const [manual, setManualClicked] = useState(false);

  const handleChronometerOnClick = () => {
    setChronometerClicked(true);
    setManualClicked(false);
  }
  const handleManualOnClick = () => {
    setChronometerClicked(false);
    setManualClicked(true);
  }

  return (
    <Fragment>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <Button onClick={handleChronometerOnClick}>Cronometro</Button>
        <Button onClick={handleManualOnClick}>Manual</Button>
      </ButtonGroup>
      {
        manual && <ManualPanel manual={manual} /> ||
        chronometer && <ChronometerPanel chronometer={chronometer} />
      }
    </Fragment>
  );

};

export default Squad2App;
