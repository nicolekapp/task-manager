import React, { Fragment, useState, useEffect } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import ManualPanel from "./ManualPanel/ManualPanel";
import ChronometerPanel from "./ChronometerPanel/ChronometerPanel";
import HistoryPanel from "./HistoryPanel/HistoryPanel";
import TotalTime from "./TotalTime/TotalTime";
//import styles from "./styles";

const Squad2App = ({task}) => {
  const [chronometer, setChronometerClicked] = useState(true);
  const [manual, setManualClicked] = useState(false);
  const [history, setHistoryClicked] = useState(false);

  const handleChronometerOnClick = () => {
    setChronometerClicked(true);
    setManualClicked(false);
    setHistoryClicked(false);
  }
  const handleManualOnClick = () => {
    setChronometerClicked(false);
    setManualClicked(true);
    setHistoryClicked(false);
  }
  const handleHistoryOnClick = () => {
    setChronometerClicked(false);
    setManualClicked(false);
    setHistoryClicked(true);
  }

  return (
    <Fragment>
      
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <Button onClick={handleChronometerOnClick}>Cronometro</Button>
        <Button onClick={handleManualOnClick}>Manual</Button>
      </ButtonGroup>
      
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group" style={{position:'absolute',right:20}}>
        <Button onClick={handleHistoryOnClick}>Historial</Button>
      </ButtonGroup>
      {
        manual && <ManualPanel manual={manual} task={task} /> ||
        chronometer && <ChronometerPanel chronometer={chronometer} task={task}/> ||
        history && <HistoryPanel history={history} task={task}/>
      }

    </Fragment>
  );

};

export default Squad2App;
