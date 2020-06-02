import React from 'react';
import CreateTask from './CreateTask'
import * as axios from 'axios'
import {changeInput, changeStatusTask} from '../../redux/tasks-reducer'
const CreateTaskContainer = (props) =>{

  let addTask = () =>{
    let data = new FormData();
    data.append('name', props.newTask.name);
    data.append('recipient', props.newTask.recipient);
    data.append('registrar', props.userInSystem.name);
    data.append('description', props.newTask.description);
    axios({
      method: 'post',
      data: data,
      headers: {authorization: "Bearer " + props.userInSystem.token},
      url: 'http://192.168.1.38:3002/addTask',
    }).then((response)=>{
        if(response.data != 'Такое задание уже существует!'){
          props.dispatch(changeStatusTask(response.data));
          setTimeout(()=>{props.dispatch(changeStatusTask(""))},1500);
          let action = changeInput("", "", props.userInSystem.name, "");
          props.dispatch(action);
        }
        else{
          props.dispatch(changeStatusTask(response.data));
          setTimeout(()=>{props.dispatch(changeStatusTask(""))},1500);
        }
    })
  }

  let change = (name,recipient,description) =>{
    let action = changeInput(name, recipient, props.userInSystem.name, description);
    props.dispatch(action);
  }

  let changeStatus= () =>{
    let action = changeStatusTask('Заполните все поля!');
    props.dispatch(action);
    setTimeout(()=>{props.dispatch(changeStatusTask(""))},1500);
  }
  return(<CreateTask userInSystem ={props.userInSystem}
                     dispatch ={props.dispatch}
                     addTask = {addTask}
                     newTask = {props.newTask}
                     updateInput = {change}
                     names ={props.names}
                     changeStatus = {changeStatus}
                     status ={props.status}/>)
};

export default CreateTaskContainer;
