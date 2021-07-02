import React, { Fragment, useEffect, useState, useRef } from "react";
import Button from "@material-ui/core/Button";
import PomodoroTimer from './PomodoroTimer';
import Session from './Session';
import Break from './Break';
import {
  BREAKDURATION,
  SESSIONDURATION,
  SESSION,
  BREAK
} from './constants';

const Pomodoro = () => {
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
      //api call
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
    <Fragment /*className="text-center"*/>
      <h1>Pomodoro</h1>
      <p>Cycles: {cycles}</p>
      <PomodoroTimer time={timeLeft} mode={mode} />
      <div /*className="buttons" */>
        <Button onClick={toggleIsActive}>
          {isActive ? "Pausa" : "Comenzar"}
        </Button>
        <Button onClick={reset}>
          Parar
        </Button>
      </div>
      <div /*className="options"*/>
        <Break
          length={breakLength}
          decrement={decrementBreakLength}
          increment={incrementBreakLength}
        />
        <Session
          length={sessionLength}
          decrement={decrementSessionLength}
          increment={incrementSessionLength}
        />
      </div>
    </Fragment>
  );
};

export default Pomodoro;