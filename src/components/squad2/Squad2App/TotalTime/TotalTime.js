import React, {Component} from "react";


export default class TotalTime extends Component{
    constructor(props) {
        super(props);
        this.state = {
          time: "",
        }
      }    
      componentDidMount(){

      }
    fetchTotalTime(){
        fetch('https://is3-squad2-tiempos.herokuapp.com/timeTask/getTotalTime/100')
        .then(data => this.setState({time: data}))
    }
    
  render(){
    return(
        <div style={{marginRight:30}}>
            Tiempo total dedicado: {this.props.task.id}
        </div>           

    )
  }
}
