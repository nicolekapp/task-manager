import React from 'react'

export const CheckBox = props => {
    return (
      <li>
      <div className = "caja">
       <input key={props.id} onChange={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value} /> {props.date} - {props.value} - {props.tiempo} 
      </div>
      </li>
    )
}


export default CheckBox