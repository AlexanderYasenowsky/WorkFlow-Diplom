import React from 'react';
import Task from './Task';
import {changeStatus, deleteTask} from '../../../redux/tasks-reducer';
import * as axios from 'axios';
const TaskContainer = (props) =>{
  let change = (status) => {
    let data = new FormData();
    data.append('status', status);
    data.append('name', props.name);
    axios({
      method: 'post',
      url: 'http://192.168.1.38:3002/changeStatus',
      headers: {authorization: "Bearer " + props.userInSystem.token},
      data: data
    }).then((response)=>{
        let action = changeStatus(props.id, status);
        props.dispatch(action);
    })
  }

  let deleteT = () =>{
    let data = new FormData();
    data.append('id', props._id);
    axios({
      method: 'delete',
      url: 'http://192.168.1.38:3002/delete/task',
      headers: {authorization: "Bearer " + props.userInSystem.token},
      data: data
    }).then((response)=>{
        let action = deleteTask(props.id);
        props.dispatch(action);
    })
  }

  return (<Task deleteTask = {deleteT}
                change = {change}
                name = {props.name}
                status={props.status}
                description ={props.description}
                post = {props.post}
                recipient ={props.recipient}/>)
}
export default TaskContainer
