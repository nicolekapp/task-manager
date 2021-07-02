import React from "react";
import Button from "@material-ui/core/Button";

const Break = (props) => {
    const { increment, decrement, length } = props;
    return (
        <div  style={{float:"left", width:200}}>
            <p style={{paddingLeft:25}}>Descanso</p>
            <Button onClick={decrement}>
            <p style={{backgroundColor:'#1976D2', color: 'white', fontWeight: 'bold', width:25,height:25, borderRadius:25}}>-</p>
        </Button>
            <span>{length / 60} min</span>
            <Button onClick={increment}>
            <p style={{backgroundColor:'#1976D2', color: 'white', fontWeight: 'bold', width:25,height:25, borderRadius:25}}>+</p>
        </Button>
        </div>
    );
};

export default Break;