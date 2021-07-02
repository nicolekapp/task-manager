import './css/BodyError.css';
import React from 'react';
import CalendarioChico from './CalendarioChico';
import { Checkbox } from '@material-ui/core';
import CalendarioGrande from './CalendarioGrande';
export default class BodyError extends React.Component{
        importarTasks = event => {
        this.setState(() => {
            window.location.href = "./importGoogle";
        });
      }
    render(){
        return(
            <div className="container-bd">
                <div className="row-bd">
                    <div className="col1-bd">
                        <CalendarioChico/>
                        <h3>Calendarios a Importar:</h3>
                        <div class='checks-bd'>
                            <Checkbox checked='true' disabled='true'/> Google Calendar<br/>
                            <Checkbox disabled='true'/> Office 365 Calendar<br/>
                            <Checkbox disabled='true'/> iCloud Calendar
                        </div>
                    </div>
                    <div className="mid-bd"/>
                    <div className="col2-bd">
                    <div className='diverror'>Se produjo un error al importar las tareas seleccionadas de Google Calendar.</div>
                       <br></br>
                       Mis tareas hasta el momento:
                       <CalendarioGrande/>
                        
                    </div>
                </div>
                <button type="button" class="slide" onClick={this.importarTasks}>
                            <div>VOLVER A IMPORTAR TAREAS</div>
                            <i class="icon-arrow-right"></i>
                </button>
            </div>
        )
    }
}