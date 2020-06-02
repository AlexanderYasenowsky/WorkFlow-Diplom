import React from 'react';
import * as axios from 'axios';
import Navbar from "./Navbar"
import {getDataTable, changeInputFind} from "../../redux/newDocs-reducer";
import {changeUserInSystem, getNames} from "../../redux/users-reducer";
import {getTasks} from "../../redux/tasks-reducer";

const NavbarContainer = (props) => {
  let getDataIncoming= () => {
      let recipient = new FormData();
      recipient.append('recipient', props.userName.name)
      axios({
        method: 'post',
        url: 'http://192.168.1.38:3002/document/incoming',
        data: recipient,
        headers: {authorization: "Bearer " + props.userName.token}
      }).then(function(response){
        let incomingData = [];
        for(let i = 0; i<response.data.length;i++) {
          incomingData.push(response.data[i]);
        }
        let action = getDataTable(incomingData);
        props.dispatch(action);
        props.dispatch(changeInputFind(''));
      });
  }
  let getDataOutgoing= () => {
      let registrar = new FormData();
      registrar.append('registrar', props.userName.name)
      axios({
        method: 'post',
        url: 'http://192.168.1.38:3002/document/outgoing',
        data: registrar,
        headers: {'Content-Type': 'multipart/form-data',
                  authorization: "Bearer " + props.userName.token}
      }).then(function(response){
        let outcomingData = [];
        for(let i = 0; i<response.data.length;i++) {
          outcomingData.push(response.data[i]);
        }
        let action = getDataTable(outcomingData);
        props.dispatch(action);
        props.dispatch(changeInputFind(''));
      });
  }

  let getYourTasks = () =>{
    let data = new FormData();
    data.append('recipient', props.userName.name);
    data.append('post', props.userName.post);
    axios({
      method: 'post',
      data: data,
      headers: {authorization: "Bearer " + props.userName.token},
      url: 'http://192.168.1.38:3002/tasks'
    }).then(function(response){
      props.dispatch(getTasks(response.data));
    })
  }

  let getOtherUsers = () =>{
    let data = new FormData();
    data.append('name', props.userName.name);
    axios({
      method: 'post',
      data: data,
      headers: {authorization: "Bearer " + props.userName.token},
      url: 'http://192.168.1.38:3002/getOtherUsers'
    }).then(function(response){
        let action = getNames(response.data);
        props.dispatch(action);
    })
  }

  let exit = () =>{
    props.dispatch(changeUserInSystem('',false));
  }

  return(<Navbar getData = {getDataIncoming} getOtherUsers={getOtherUsers}  getTasks = {getYourTasks} getDataOutgoing = {getDataOutgoing} userName = {props.userName} exit={exit}/>)
};

export default NavbarContainer;
