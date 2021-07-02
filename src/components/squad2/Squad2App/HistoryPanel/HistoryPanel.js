import React, {Component} from "react";
import FlatList from 'flatlist-react';
import Button from "@material-ui/core/Button";
import styles from "./historyStyles";
import EditHistory from "./EditHistory";


export default class HistoryPanel extends Component{
    constructor(props) {
        super(props);
        this.state = {
          historyTimes: null,
        }
      }    

    fetchHistory(){
        let historyTimes = null;
        fetch('https://is3-squad2-tiempos.herokuapp.com/timeTask/getHistory/100')
        .then(response => response.json())
        .then(data => historyTimes=data)
        .then(() => this.setState({historyTimes: historyTimes}))
        .then(() => console.log(this.state.historyTimes));

    }
    

  renderItem = (item, index)=> {
    console.log(item);
    console.log(index);
    item.edit=true;
    if (item.type==="Manual" || item.type==="Chronometer" || item.type==="Pomodoro") {
        return (
                <tr style={{textAlign:"left"}}>
                    <th style={{borderBottomStyle:'solid'}}>{item.type}</th>
                    <th style={{paddingLeft:20, borderBottomStyle:'solid'}}>Horas: {item.horas}</th>
                    <th style={{paddingLeft:20, borderBottomStyle:'solid'}}>Minutos: {item.minutos}</th>
                    <th style={{paddingLeft:20, borderBottomStyle:'solid'}}>Segundos: {item.segundos}</th>

                    <EditHistory parent={this} timeTask={item}/>
                    
                </tr>        
           
        )
    }

    return (
        <tr>
            <th>Fallo</th>
        </tr>
        
  )}

  render(){
    return(
        <div>
            <Button style={{marginTop:30, marginBottom:30, borderStyle: 'solid', borderWidth:2}} onClick={() => this.fetchHistory()}>Actualizar!</Button>
            <table style={{borderSpacing:0}}>
                
                <FlatList 
                        list={this.state.historyTimes}
                        renderItem={this.renderItem}
                        renderWhenEmpty={() => <div>Todavía no se regitró ninún tiempo!</div>}
                        sort={{
                            by:"id"
                        }}
                        />
            </table>
        </div>           

    )
  }
}
