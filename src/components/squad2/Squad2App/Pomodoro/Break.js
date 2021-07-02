import React from "react";
import Button from "@material-ui/core/Button";

const Break = (props) => {
    const { increment, decrement, length } = props;
    return (
        <div  style={{float:"left", borderStyle:'dashed'}}>
            <p style={{paddingLeft:30}}>Descanso</p>
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

export default Break;