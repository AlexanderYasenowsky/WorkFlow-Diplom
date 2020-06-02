import React from 'react';
import style from './MyTasks.module.css';
import {Redirect} from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Navbar from '../Navbar/NavbarContainer'
import Task from './Task/TaskContainer'

const MyTasks = (props) =>{
  if(props.userInSystem.isLogged !== true){
    return <Redirect to = {'/login'}/>
  }
  let tasks = [];
  for(let i = 0; i<props.myTasks.tasks.length;i++){
    tasks.push(<Task _id = {props.myTasks.tasks[i]._id} id = {i}
                    name = {props.myTasks.tasks[i].name}
                    description = {props.myTasks.tasks[i].description}
                    status = {props.myTasks.tasks[i].status}
                    dispatch={props.dispatch}
                    post = {props.userInSystem.post}
                    recipient = {props.myTasks.tasks[i].recipient}
                    userInSystem ={props.userInSystem}/>)
  }

  return (
    <div className ={style.myTasks}>
      <Header userInSystem = {props.userInSystem}/>
      <div className = {style.flex_container}>
        <div>
            <Navbar dispatch = {props.dispatch} userName = {props.userInSystem}/>
        </div>
        <div classNamme = {style.infoAboutTasks} id ="myTasks">
            {tasks}
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default MyTasks;
