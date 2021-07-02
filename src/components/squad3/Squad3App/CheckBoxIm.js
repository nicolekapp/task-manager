import React from 'react'

export const CheckBox = props => {
    return (
      <li>
      <div className = "caja" style={{backgroundColor: props.isChecked ? "#e8f4f8" : "#d4ebf2"}}>
       <input key={props.id} onChange={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value}/> 
         {props.value} - {props.date} - {props.tiempo}
      </div>
      </li>
    )
}


export default CheckBox