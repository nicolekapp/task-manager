import React, {Component} from "react";


export default class TotalTime extends Component{
    constructor(props) {
        super(props);
        this.state = {
          time: "",
        }
      }    
    
  render(){
      //TODO: Hacer la consulta con el fetch!!
    return(
        <div style={{marginRight:30}}>
            {/* Tiempo total dedicado: {this.props.task.id} */}
            Tiempo total dedicado: {this.props.total}
        </div>           

    )
  }
}
