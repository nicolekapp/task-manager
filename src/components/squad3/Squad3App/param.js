import React from 'react';
import { useParams } from 'react-router-dom';

const Repetidas = () => {
    const params = useParams();
    console.log(params);
    return( 
        <div>
            {JSON.stringify(params)}
        </div>
    )
}

export default Repetidas;