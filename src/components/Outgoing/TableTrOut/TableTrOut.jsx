import React from 'react';
import {NavLink} from "react-router-dom";
import style from './TableTrOut.module.css'
const TableTrOut = (props) =>{
  if(props.finished === false){
  return(
    <tr>
      <td>{props.created}</td>
      <td>{props.recipient}</td>
      <td><NavLink to = {'/outgoing/' + props.id}>{props.theme}</NavLink></td>
      <td>{props.execution}</td>
      <td>{props.form}</td>
    </tr>
  )
}
  return(
    <tr className = {style.finished}>
      <td>{props.created}</td>
      <td>{props.recipient}</td>
      <td><NavLink to = {'/outgoing/' + props.id}>{props.theme}</NavLink></td>
      <td>{props.execution}</td>
      <td>{props.form}</td>
    </tr>
  )

}

export default TableTrOut
