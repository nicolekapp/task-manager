import './css/CalendarioGrande.css';
import React from 'react';
import logo from './img/calGrande.jpg';

export default class CalendarioGrande extends React.Component{
    render(){
        return(
        <div className='cal'>
            <img src={logo} width='60%' height='60%' alt=''/>
        </div>
        )
    }
}