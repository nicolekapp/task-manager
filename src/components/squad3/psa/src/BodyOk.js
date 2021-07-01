import './css/BodyOk.css';
import React from 'react';
import CalendarioChico from './CalendarioChico';
import CalendarioGrande from './CalendarioGrande';
import { Checkbox } from '@material-ui/core';

export default class BodyOk extends React.Component{
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
                    <div className='divok'>Se han importado correctamente todas las tareas seleccionadas de Google Calendar.</div>
                        <CalendarioGrande/>
                    </div>
                </div>
            </div>
        )
    }
}