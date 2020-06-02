import React from 'react';
import style from "./InfoUser.module.css"
import {Redirect} from "react-router-dom";
import NavbarContainer from '../Navbar/NavbarContainer'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';

const InfoUser = (props) =>{
  if(props.userInSystem.isLogged !== true){
      return  <Redirect to = {'/login'}/>
  }
  return(
    <div className = {style.infoUser}>
      <Header userInSystem = {props.userInSystem}/>
      <div className = {style.flex_container}>
        <div>
            <NavbarContainer dispatch = {props.dispatch} userName = {props.userInSystem}/>
        </div>

        <div className = {style.info_flex_container}>
            <div>
              <p className = {style.greeting}>Добро пожаловать в систему, {props.userInSystem.name}!</p>
              <p>Имя: {props.userInSystem.name}</p>
              <p>Фамилия: {props.userInSystem.surname}</p>
              <p>Отчество: {props.userInSystem.patronymic}</p>
              <p>Логин: {props.userInSystem.login}</p>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default InfoUser;
