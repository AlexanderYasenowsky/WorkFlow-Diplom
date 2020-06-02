import React from 'react';
import style from "./Task.module.css"

const Task = (props) =>{
  let changeStatus = () =>{
    props.change(1);
  }
  let changeStatusBad = () =>{
    props.change(2);
  }
  let deleteTask = ()=>{
    props.deleteTask();
  }
  if(props.status === 1){
    return(
    <div>
      <details>
        <summary className ={style.taskStarted}>{props.name}</summary>
        <p>Задача для: {props.recipient}</p>
         <p>{props.description}</p>
         <button onClick = {changeStatusBad}>Закончить</button>
      </details>
    </div>
  )
  }

  else if(props.status === 2 && props.post === 1){
    return(
    <div>
      <details>
        <summary className ={style.taskStopped}>{props.name}</summary>
         <p>Задача для: {props.recipient}</p>
         <p>{props.description}</p>
         <button onClick = {changeStatus}>Возобновить</button>
         <button onClick = {deleteTask}>Удалить</button>
      </details>
    </div>
  )}

  else if(props.status === 2){
    return(
    <div>
      <details>
        <summary className ={style.taskStopped}>{props.name}</summary>
        <p>Задача для: {props.recipient}</p>
         <p>{props.description}</p>
         <button onClick = {changeStatus}>Возобновить</button>
      </details>
    </div>
  )}

  return (
    <div>
      <details className ={style.task}>
        <summary>{props.name}</summary>
        <p>Задача для: {props.recipient}</p>
         <p>{props.description}</p>
         <button onClick = {changeStatus}>Начать</button>
      </details>
    </div>
  )
}
export default Task
