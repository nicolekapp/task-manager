import './css/BodyGoogle.css';
import React from 'react';
import CalendarioChico from './CalendarioChico';
import { Checkbox } from '@material-ui/core';
import CheckBoxIm from './CheckBoxIm';
import { Link } from 'react-router-dom';

export default class Body extends React.Component{
    async componentWillMount() {

        this.state = {
            googleTasks: [

          ],
          mytasks: [

          ],
          diferidas: [],
          render: false
        }

        const responseee = await fetch('https://import-api-squad3-is3.herokuapp.com/setup');

        const requestOptions = {
            method: 'POST',
        };

        //API GRUPO 1
        const taskGrupo1 = await fetch('https://timetra.herokuapp.com/task/all');
        const json2 = await taskGrupo1.json();
        //console.log(json2[0].name);

        const response = await fetch('https://import-api-squad3-is3.herokuapp.com/getTasks?from_date=2021-06-06T00:00:00Z&to_date=2021-07-14T23:59:59Z', requestOptions);
        const json = await response.json();
        console.log(json);

        let lengthTasks = json.length;
        for (var i = 0; i < lengthTasks; i++) {
            this.setState({ googleTasks: [...this.state.googleTasks, {value: (json[i])[0], date: ((Date(Date.parse((json[i])[1]))).toLocaleString()), desc: (json[i])[2] ,tiempo: 0, isChecked: false} ] });
        }


        let lengthTasks2 = json2.length;
        for (var i = 0; i < lengthTasks2; i++) {
            this.setState({ mytasks: [...this.state.mytasks, {value: (json2[i]).name, date: ((Date((json2[i]).starting_date)).toLocaleString()), desc: (json2[i]).description ,tiempo: (json2[i]).estimated_time, isChecked: false} ] });
        }

        let bandera = 0;
        for(let i=0; i< this.state.googleTasks.length; i++ ){
            for(let j=0; j< this.state.mytasks.length; j++ ){
                if(this.state.mytasks[j].tiempo == this.state.googleTasks[i].tiempo && this.state.mytasks[j].date == this.state.googleTasks[i].date && this.state.mytasks[j].value == this.state.googleTasks[i].value){
                    bandera = 1;
                }
            }
            if(bandera == 0){
                this.state.diferidas.push(this.state.googleTasks[i])
            }
            bandera = 0;
        }

        this.setState({render: true})
    }

    async componentDidMount() {

    }

    constructor(props) {
        super(props)
      }
      importarTasks = async() => {

        let sinTareas = 0;

        let taskImport = [];

        for (var i = 0; i < this.state.diferidas.length; i++) {
            if ( (this.state.diferidas[i]).isChecked == true )
            {
                taskImport.push(this.state.diferidas[i]);
            }
        }


        if( taskImport.length > 0)
        {

        for (var i = 0; i < taskImport.length; i++) {

            let name = ((taskImport[i]).value);
            let description = ((taskImport[i]).desc);
            let estimated_time = (taskImport[i]).tiempo;
            let starting_date = Date.parse((taskImport[i]).date);

            const response = await fetch("http://timetra.herokuapp.com/task", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                "name": name,
                "description": description,
                "estimated_time": estimated_time,
                "starting_date": starting_date
              }),
            });

            if( response.status != 201 )
            {
                window.location.href = "./importError";
                break;
            }

        }
        window.location.href = "./importOk";
        }
        else
        {
            alert("No seleccionaste nada para importar!");
        }

      };

      handleCheckChieldElement = (event) => {
        let googleTasks = this.state.googleTasks
        googleTasks.forEach(task => {
           if (task.value === event.target.value)
           task.isChecked =  event.target.checked
        })
        this.setState({googleTasks: googleTasks})
      }
    render(){
        return(
            <div className="container-bd">
                <div className="row-bd">
                    <div className="col1-bd">
                        <CalendarioChico/>
                        <h3>Calendarios a Importar:</h3>
                        <div class='checks-bd'>
                            <Checkbox disabled='true' checked='true'/> Google Calendar<br/>
                            <Checkbox disabled='true'/> Office 365 Calendar<br/>
                            <Checkbox disabled='true'/> iCloud Calendar
                        </div>

                    </div>
                    <div className="mid-bd"/>
                    <div className="col2-bd">
                        <div className='row-bd'>
                            <div className='col3-bd'>
                                <h3>Mis tareas:</h3>
                                {this.state.mytasks.map(function(d, idx){
                                    return (<li key={idx}><div className = "caja">{d.value} - {d.date} - {d.tiempo}</div></li>)
                                })}
                                <h3>{this.state.test}</h3>
                            </div>
                            <div className="mid-bd"/>
                            <div className='col4-bd'>
                                <h3>Tareas a importar de Google:</h3>
                                <ul>
                                {
                                this.state.diferidas.map((task, index) => {
                                    return (<CheckBoxIm key={index} handleCheckChieldElement={this.handleCheckChieldElement}  {...task} />)
                                })
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                    <div>
                        <button type="button" class="slide" onClick={this.importarTasks}>
                            <div>IMPORTAR TAREAS</div>
                            <i class="icon-arrow-right"></i>
                        </button>
                    </div>
            </div>
        )
    }
}
