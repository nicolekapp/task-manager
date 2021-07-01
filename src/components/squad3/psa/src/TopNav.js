import './css/TopNav.css';
import React from 'react';

export default class TopNav extends React.Component{
    render(){
        return(
            <div className="container-tn">
                <div className="row-tn">
                    <div className="col1-tn">
                        <h1>PSA</h1>
                    </div>
                    <div className="col2-tn">
                        <a href={'./home'} className='button-tn'>Home</a>
                        <a href={'./help'} className='button-tn'>Help</a>
                        <a href={'./calendar'} className='button-tn'>Calendar</a>
                        <a href={'./import'} className='button-tn'>Import</a>
                    </div>
                    <div className="col3-tn">
                        <a href='./CerrarSesion' className='button-tn'>Cerrar Sesion</a>
                    </div>
                </div>
            </div>
        )
    }
}