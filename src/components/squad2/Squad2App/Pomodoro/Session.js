import React from "react";
import Button from "@material-ui/core/Button";

const Session = (props) => {
    const { increment, decrement, length } = props;
    return (
        <div>
            <p>Sesión</p>
            <Button onClick={decrement}>
                -
        </Button>
            <span>{length / 60}</span>
            <Button onClick={increment}>
                +
        </Button>
        </div>
    );
};
export default Session;