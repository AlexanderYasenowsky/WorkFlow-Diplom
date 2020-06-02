import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
const Navbar = (props) => {
  if(props.userName.post === 0){
    return(
      <div className ={style.navbar}>
        <div>
          <div>
            <NavLink activeClassName ={style.prpr} onClick ={props.getData} to = '/incoming'><button class = {style.navbarOptions}>Входящие</button></NavLink>
          </div>
          <div>
            <NavLink activeClassName ={style.prpr} onClick = {props.getDataOutgoing} to = '/outgoing'><button class = {style.navbarOptions}>Исходящие</button></NavLink>
          </div>
          <div>
            <NavLink activeClassName ={style.prpr} to = '/create'><button onClick = {props.getTasks} className = {style.navbarOptions}>Создать</button></NavLink>
          </div>
          <div>
            <NavLink activeClassName ={style.prpr} onClick = {props.getTasks} to = '/tasks'><button class = {style.navbarOptions}>Мои задачи</button></NavLink>
          </div>
        </div>
        <div  className = {style.add_options}>
          <div>
            <NavLink activeClassName ={style.prpr} to = '/info'><button class = {style.navbarOptions}>Информация</button></NavLink>
          </div>
          <div>
            <NavLink activeClassName ={style.prpr} to = '/help'><button class = {style.navbarOptions}>Помощь</button></NavLink>
          </div>
          <div>
            <NavLink to = '/login'><button class = {style.navbarOptions} onClick = {props.exit}>Выход</button></NavLink>
          </div>
        </div>
      </div>
    )
  }
  return(
    <div className ={style.navbar}>
      <div>
        <div>
          <NavLink activeClassName ={style.prpr} onClick ={props.getData} to = '/incoming'><button class = {style.navbarOptions} >Входящие</button></NavLink>
        </div>
        <div>
          <NavLink activeClassName ={style.prpr} onClick = {props.getDataOutgoing} to = '/outgoing'><button class = {style.navbarOptions} >Исходящие</button></NavLink>
        </div>
        <div>
          <NavLink activeClassName ={style.prpr} onClick ={props.getOtherUsers} to = '/create'><button onClick = {props.getTasks} className = {style.navbarOptions}>Создать</button></NavLink>
        </div>
        <div>
          <NavLink activeClassName ={style.prpr} onClick = {props.getTasks} to = '/tasks'><button class = {style.navbarOptions}>Мои задачи</button></NavLink>
        </div>
        <div>
          <NavLink activeClassName ={style.prpr} onClick ={props.getOtherUsers} to = '/createTask'><button class = {style.navbarOptions}>Новая задача</button></NavLink>
        </div>
      </div>
      <div  className = {style.add_options}>
        <div>
          <NavLink activeClassName ={style.prpr} to = '/info'><button class = {style.navbarOptions}>Информация</button></NavLink>
        </div>
        <div>
          <NavLink activeClassName ={style.prpr} to = '/help'><button class = {style.navbarOptions}>Помощь</button></NavLink>
        </div>
        <div>
          <NavLink to = '/login'><button class = {style.navbarOptions} onClick = {props.exit}>Выход</button></NavLink>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
