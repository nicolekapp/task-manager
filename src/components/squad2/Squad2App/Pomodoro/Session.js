import React from "react";
import Button from "@material-ui/core/Button";

const Session = (props) => {
    const { increment, decrement, length } = props;
    return (
        <div style={{ float:"left", borderStyle:'dashed', borderRightStyle:'none'}}>
            <p style={{paddingLeft:30}}>Sesión</p>
            <Button onClick={decrement}>
                -
        </Button>
            <span>{length / 60} min</span>
            <Button onClick={increment}>
                +
        </Button>
        </div>
    );
};
export default Session;