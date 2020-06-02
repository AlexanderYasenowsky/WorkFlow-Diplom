import React from 'react';
import LoginPage from "./LoginPage"
import {changeInputLogin,changeUserInSystem} from "../../redux/users-reducer";
import * as axios from 'axios';
import * as md5 from 'md5';

const LoginPageСontainer = (props) =>{

  let onChangeConfirm = (login, password) =>{
    let action = changeInputLogin(login, password);
    props.dispatch(action);
  }
  let enterToSystem = () => {
    let formData = new FormData();
    formData.append('login', props.usersData.confirmPanel.loginToEnter);
    formData.append('password', md5(props.usersData.confirmPanel.passwordToEnter));
    axios({
      method: 'post',
      url: 'http://192.168.1.38:3002/getLogin',
      data: formData,
      headers: {'Content-Type': 'multipart/form-data'}
    }).then(function(response){
        if(response.data === "Пользователь не найден! Проверьте данные!"){
          let action = changeUserInSystem(response.data, false, "","","","");
          props.dispatch(action);
        }else {
          let dataUser = response.data.user.name.split(' ');
          let action = changeUserInSystem(dataUser[1], true, response.data.user.post, response.data.token, dataUser[0],dataUser[2], props.usersData.confirmPanel.loginToEnter);
          props.dispatch(action);
          props.dispatch(changeInputLogin("", ""));
        }
    });
  }

  return(<LoginPage usersData = {props.usersData} updateConfirmInput = {onChangeConfirm} enterToSystem ={enterToSystem}/>)
};

export default LoginPageСontainer;
