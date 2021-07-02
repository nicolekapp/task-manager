import React from "react";

const PomodoroTimer = (props) => {
    const { time, mode } = props;

    const min = Math.floor(time / 1000 / 60);
    const sec = Math.floor((time / 1000) % 60);
    return (
        <div>
            <p>{mode}</p>
            <p>
                {min}:{sec.toString().length === 1 ? "0" + sec : sec}
            </p>
        </div>
    );
};

export default PomodoroTimer;