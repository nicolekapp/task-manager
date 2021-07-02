import { unstable_createMuiStrictModeTheme } from '@material-ui/core';
import { useState, useRef } from 'react';
import * as utils from '../utils';

const useTimer = (initialState = 0) => {
    const {convertToHours,convertToMinutes,convertToSeconds} = utils;
    const [timer, setTimer] = useState(initialState)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const countRef = useRef(null)

    const handleStart = () => {
        setIsActive(true)
        setIsPaused(true)
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }

    const handlePause = () => {
        clearInterval(countRef.current)
        setIsPaused(false)
    }

    const handleResume = () => {
        setIsPaused(true)
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }

    const handleReset = () => {
        //TODO: EL NUMERO DE LA TASK ESTA HARDCODEADO !!!!!

        let hours = convertToHours(timer);
        let minutes = convertToMinutes(timer);
        let seconds = convertToSeconds(timer);

        const requestOptions = {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({
                "horas": hours,
                "minutos": minutes,
                "segundos": seconds,
                "task": 200
              })
        };

        fetch('https://is3-squad2-tiempos.herokuapp.com/Chronometer/register', requestOptions);

        clearInterval(countRef.current)
        setIsActive(false)
        setIsPaused(false)
        setTimer(0)
    }

    return { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset }
}

export default useTimer;