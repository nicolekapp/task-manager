import React from "react";

const PomodoroTimer = (props) => {
    const { time, mode } = props;

    const min = Math.floor(time / 1000 / 60);
    const sec = Math.floor((time / 1000) % 60);
    return (
        <div>
            <p style={{float: "left"}}>{mode}</p>
            <p style={{float: "left", marginLeft:15}}>
                {min}:{sec.toString().length === 1 ? "0" + sec : sec}
            </p>
        </div>
    );
};

export default PomodoroTimer;