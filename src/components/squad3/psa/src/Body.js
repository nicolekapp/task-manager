import './css/Body.css';
import React from 'react';
import CalendarioChico from './CalendarioChico';
import CalendarioGrande from './CalendarioGrande';
import { Checkbox } from '@material-ui/core';

export default class Body extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          boxAll: false
        };
    }
    handleChange = event => {
        this.setState({ boxAll: event.target.checked }, () => {
          console.log("This returned true or false", this.state.boxAll);
        });
    };
    importarGoogle = event => {
        this.setState(() => {
            if (this.state.boxAll){
                window.location.href = "./importGoogle";
            }else{
                alert('Seleccione uno de los calendarios disponibles');
            }
        });
      };
    render(){ 
        return(
            <div className="container-bd">
                <div className="row-bd">
                    <div className="col1-bd">
                        <CalendarioChico/>
                        <h3>Calendarios a Importar:</h3>
                        <div class='checks-bd'>
                            <Checkbox onChange={ this.handleChange }/> Google Calendar<br/>
                            <Checkbox disabled='true'/> Office 365 Calendar<br/>
                            <Checkbox disabled='true'/> iCloud Calendar
                        </div>
                        <button type="button" class="slide" onClick={this.importarGoogle}>
                            <div>IMPORTAR CALENDARIO</div>
                            <i class="icon-arrow-right"></i>
                        </button>
                    </div>
                    <div className="mid-bd"/>
                    <div className="col2-bd">
                        <CalendarioGrande/>
                    </div>
                </div>
            </div>
        )
    }
}