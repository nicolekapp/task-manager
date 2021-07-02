import './css/CalendarioChico.css';
import React from 'react';
import logo from './img/calchico.jpg';

export default class CalendarioChico extends React.Component{
    render(){
        return(
        <div className='cal'>
            <img src={logo} alt='' width="70%" />
        </div>
        )
    }
}