import React from 'react';
import style from './Help.module.css';
import {Redirect} from  "react-router-dom";
import NavbarContainer from '../Navbar/NavbarContainer'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
const Help = (props) =>{

  if(props.userInSystem.isLogged !== true){
    return  <Redirect to = {'/login'}/>
  };

  return(
    <div className = {style.help}>
      <Header userInSystem = {props.userInSystem}/>
      <div className = {style.flex_container}>
        <div>
            <NavbarContainer dispatch = {props.dispatch} userName = {props.userInSystem}/>
        </div>
        <div>
            <details className ="helpOptions">
              <summary>Получить информацию о документах</summary>
               <p>Чтобы получить информацию об интересующих документах, нужно нажать на соответвующую кнопку "Входиящие" или "Исходящие".
               После в таблице будут показаны документы, которые предназначены Вам.</p>
               <button>Начать</button>
            </details>
            <details className ="helpOptions">
              <summary>Как внести новый документ в систему</summary>
               <p>Чтобы создать документ, требуется кликнуть по соответвующей кнопке "Создать"...</p>
            </details>

            <details className ="helpOptions" id ="dsad">
              <summary>Как удалить документ из системы</summary>
               <p>Чтобы создать документ, требуется кликнуть по соответвующей кнопке "Создать"...</p>
            </details>

            <details className ="helpOptions">
              <summary>Как изменить документ</summary>
               <p>Чтобы создать документ, требуется кликнуть по соответвующей кнопке "Создать"...</p>
            </details>
            <details className ="helpOptions">
              <summary>Как найти нужный документ</summary>
               <p>Чтобы создать документ, требуется кликнуть по соответвующей кнопке "Создать"...</p>
            </details>
            <details className ="helpOptions">
              <summary>Управление задачами</summary>
               <p>Чтобы создать документ, требуется кликнуть по соответвующей кнопке "Создать"...</p>
            </details>
        </div>
      </div>
      <Footer />  
    </div>
  )
};

export default Help;
