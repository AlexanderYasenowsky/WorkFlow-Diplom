import React from 'react';
import style from "./TableTr.module.css";
import {NavLink} from "react-router-dom";

const TableTr = (props) =>{
  if(props.finished === false){
  return(
    <tr>
      <td>{props.created}</td>
      <td>{props.registrar}</td>
      <td><NavLink to = {'/incoming/' + props.id}>{props.theme}</NavLink></td>
      <td>{props.execution}</td>
      <td>{props.form}</td>
    </tr>
  )
}
  return(
    <tr className = {style.finished}>
      <td>{props.created}</td>
      <td>{props.registrar}</td>
      <td><NavLink to = {'/incoming/' + props.id}>{props.theme}</NavLink></td>
      <td>{props.execution}</td>
      <td>{props.form}</td>
    </tr>
  )
}

export default TableTr
