import React, { Fragment, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import PomodoroTimer from './PomodoroTimer';
import Session from './Session';
import Break from './Break';
import styles from "./styles";

import {
  BREAKDURATION,
  SESSIONDURATION,
  SESSION,
  BREAK
} from './constants';
import * as utils from '../utils';

const Pomodoro = (props) => {
  const { task } = props;
  const {convertToHours,convertToMinutes,convertToSeconds} = utils;
  const classes = styles();
  const { button, buttonContainer } = classes;
  const [breakLength, setBreakLength] = useState(BREAKDURATION);
  const [sessionLength, setSessionLength] = useState(SESSIONDURATION);
  const [mode, setMode] = useState(SESSION);
  const [timeLeft, setTimeLeft] = useState();
  const [isActive, setIsActive] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [cycles, setCycles] = useState(0);

  const decrementBreakLength = () => {
    const decreasedBreakLength = breakLength - 60 > 60 ? breakLength - 60 : 60;
    setBreakLength(decreasedBreakLength);
  }

  const incrementBreakLength = () => {
    const incrementedBreakLength =
      breakLength + 60 <= 60 * 60 ? breakLength + 60 : 60 * 60;
    setBreakLength(incrementedBreakLength);
  }

  const decrementSessionLength = () => {
    const decreasedSessionLength =
      sessionLength - 60 > 60 ? sessionLength - 60 : 60;

    setSessionLength(decreasedSessionLength);
  }

  const incrementSessionLength = () => {
    const incrementedSessionLength =
      sessionLength + 60 <= 60 * 60 ? sessionLength + 60 : 60;
    setSessionLength(incrementedSessionLength);
  }

  const reset = () => {
    setBreakLength(BREAKDURATION);
    setSessionLength(SESSIONDURATION);
    setTimeLeft(mode == SESSION ? sessionLength * 1000 : breakLength * 1000);

    if (isActive) {
      setIsActive(false);
      setTimeSpent(0);

      let total_seconds = cycles * (breakLength + sessionLength);
      let hours = convertToHours(total_seconds);
      let minutes = convertToMinutes(total_seconds);
      let seconds = convertToSeconds(total_seconds);

      let session_minutes = convertToMinutes(sessionLength);
      let break_minutes = convertToMinutes(breakLength);

      const requestOptions = {
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
          body: JSON.stringify({
              "horas": hours,
              "minutos": minutes,
              "segundos": seconds,
              "cycles": cycles,
              "work": session_minutes,
              "pause": break_minutes,
              "task": task.id
            })
      };

      fetch('https://is3-squad2-tiempos.herokuapp.com/Pomodoro/register', requestOptions);
      
      setCycles(0);
      }
  }
  const toggleIsActive = () => {
    setIsActive(!isActive);
  }

  useEffect(() => {
    setTimeLeft(mode == SESSION ? sessionLength * 1000 : breakLength * 1000);
  }, [sessionLength, breakLength]);

  useEffect(() => {
    let interval;

    if (isActive && timeLeft > 1) {
      setTimeLeft(
        mode == SESSION
          ? sessionLength * 1000 - timeSpent
          : breakLength * 1000 - timeSpent
      );
      interval = setInterval(() => {
        setTimeSpent((timeSpent) => timeSpent + 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    if (timeLeft === 0) {
      setTimeSpent(0);
      if (mode === BREAK) {
        setCycles(cycles + 1);
      }
      setMode((mode) => (mode == SESSION ? BREAK : SESSION));
      setTimeLeft(
        mode == SESSION ? sessionLength * 1000 : breakLength * 1000
      );
    }
    return () => clearInterval(interval);
  }, [isActive, timeSpent]);


  return (
    <Fragment >
      <div /*className="options"*/style={{float:"left",marginTop:10, borderStyle:'solid', borderRadius:10, borderWidth:2}}>

        <Session
        length={sessionLength}
        decrement={decrementSessionLength}
        increment={incrementSessionLength}
        />

        <Break
        length={breakLength}
        decrement={decrementBreakLength}
        increment={incrementBreakLength}
        />



      </div>
      <div style={{float:"left", marginLeft:50,marginTop:10}}>

        <div>Ciclos {cycles}</div>
        <PomodoroTimer time={timeLeft} mode={mode} />
        <div className={buttonContainer}>
          

         
          <Button className={button} onClick={toggleIsActive} style={{backgroundColor:'#1976D2', color: 'white', fontWeight: 'bold', width:90}}>
            {isActive ? "Pausa" : "Comenzar"}
          </Button>
          
          <Button className={button} onClick={reset} style={{position:'relative',left:110,bottom:29, backgroundColor:'#1976D2', color: 'white', fontWeight: 'bold', width:90}}>
            Parar
          </Button>
          
        </div>
      </div>
      
    </Fragment>
  );

  function convertHMS(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours   = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
  }
};

export default Pomodoro;