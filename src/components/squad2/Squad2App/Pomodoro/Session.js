import React from "react";
import Button from "@material-ui/core/Button";

const Session = (props) => {
    const { increment, decrement, length } = props;
    return (
        <div style={{borderStyle:'dashed', borderBottomStyle:'none', width:200}}>
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