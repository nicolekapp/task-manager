import React from 'react';
import PlayButton from "@material-ui/icons/PlayCircleOutline";
import PauseButton from "@material-ui/icons/PauseCircleOutline";
import StopIcon from '@material-ui/icons/Stop';
import useTimer from './useTimer';
import styles from "./styles";
import Grid from "@material-ui/core/Grid";

const Timer = () => {
    const classes = styles();
    const { playButton, pauseButton, stopButton, container } = classes;
    const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset } = useTimer(0);

    const formatTime = (timer) => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }
    return (
        <div className={container}>
            <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                <Grid container item direction="row" spacing={1} xs>
                    {
                        !isActive && !isPaused ?
                            <PlayButton className={playButton} onClick={handleStart} />
                            : (
                                isPaused ? <PauseButton className={pauseButton} onClick={handlePause} /> :
                                    <PlayButton className={playButton} onClick={handleResume} />
                            )
                    }
                    <StopIcon className={stopButton} onClick={handleReset} disabled={!isActive} />
                </Grid>
                <Grid container item direction="row" spacing={1} xs>
                    <p>{formatTime(timer)}</p>
                </Grid>
            </Grid>
        </div>
    );
}

export default Timer;