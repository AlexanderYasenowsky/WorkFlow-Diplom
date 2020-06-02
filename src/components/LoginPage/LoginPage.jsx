import React from 'react';
import style from "./LoginPage.module.css"
import {Redirect} from 'react-router-dom'
const LoginPage = (props) =>{
  if(props.usersData.userInSystem.isLogged === true){
    return  <Redirect to = {'/info'}/>
  };
  let loginEnter = React.createRef();
  let passwordEnter = React.createRef();
  let onChangeConfirm = ()=>{
    let newLog = loginEnter.current.value;
    let newPass = passwordEnter.current.value;
    props.updateConfirmInput(newLog, newPass);
  }
  return(
    <div className= {style.loginPage}>
        <div>
          <p>Войдите в систему</p>
          <input  onChange ={onChangeConfirm} id ="placeForLogin" placeholder = "Логин" className = {style.inputLoginPage} value = {props.usersData.confirmPanel.loginToEnter} ref ={loginEnter}></input>
        </div>
        <div>
          <input onChange ={onChangeConfirm} id ="placeForPassword" placeholder = "Пароль" className={style.inputLoginPage} value = {props.usersData.confirmPanel.passwordToEnter} type="password" ref={passwordEnter}></input>
        </div>
        <div>
          <button type="button" id ="login" className = {style.logButton} onClick = {props.enterToSystem}>Войти</button>
          <p className ={style.error}>{props.usersData.userInSystem.name}</p>
        </div>
    </div>
  )
};

export default LoginPage;
