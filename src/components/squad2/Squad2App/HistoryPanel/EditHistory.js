import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

export default class EditForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
          edit: false,
          horas: this.props.timeTask.horas,
          minutos: this.props.timeTask.minutos,
          segundos: this.props.timeTask.segundos,
        }
      }

      enviar(){
          console.log(this.state.horas);
          console.log(this.state.minutos);
          console.log(this.state.segundos);
        const requestOptions = {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({
                "horas": this.state.horas,
                "minutos": this.state.minutos,
                "segundos": this.state.segundos,
              })
        };

        fetch('https://is3-squad2-tiempos.herokuapp.com/timeTask/editTimeTask/'+this.props.timeTask.id, requestOptions)
        .then(()=>this.props.parent.fetchHistory());

        this.setState({edit:false});
        
      }

      render(){
        return(
            <th>
                <tr >
                    <th><Button style={{ borderStyle: 'solid', borderWidth:2, marginLeft:20, marginRight:20}} onClick={() => this.setState({edit:!this.state.edit})}>Editar</Button></th>
                    <th>{this.state.edit && <TextField id="inputHours" label="Horas" defaultValue={this.state.horas} onChange={(e) => {this.setState({horas:e.target.value})}}/>}</th>
                    <th>{this.state.edit && <TextField id="inputMinutes" label="Minutos" defaultValue={this.state.minutos} onChange={(e) => {this.setState({minutos:e.target.value})}} />}</th>
                    <th>{this.state.edit && <TextField id="inputSeconds" label="Segundos" defaultValue={this.state.segundos} onChange={(e) => {this.setState({segundos:e.target.value})}} />}</th>
                    <th>{this.state.edit && <Button style={{borderStyle: 'solid', borderWidth:2}} onClick={() => this.enviar()}>Enviar</Button>}</th>
                </tr>
            </th>

            
        )
    }
}
