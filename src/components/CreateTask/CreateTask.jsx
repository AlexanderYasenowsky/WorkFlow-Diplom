import React from 'react';
import style from "./CreateTask.module.css"
import {Redirect} from "react-router-dom";
import NavbarContainer from '../Navbar/NavbarContainer'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';

const CreateTask = (props) =>{
  if(props.userInSystem.isLogged !== true){
      return  <Redirect to = {'/login'}/>
  }
  let newName = React.createRef();
  let newDescription = React.createRef();
  let newRecipient = React.createRef();

  let change = () =>{
    let name = newName.current.value;
    let description = newDescription.current.value;
    let recipient = newRecipient.current.value;
    props.updateInput(name, recipient, description);
  }

  let addTask = () =>{
    if(newName.current.value !== '' && newRecipient.current.value !== '' && newDescription.current.value !== '' &&
    newRecipient.current.value !== "Выберите получателя..."){
      props.addTask();
    }
    else{
      props.changeStatus();
    }
  }

  let options = [];
  options.push(<option hidden>Выберите получателя...</option>);
  for(let i =0;i<props.names.length; i++){
      options.push(<option>{props.names[i]}</option>);
  }

  return(
    <div className = {style.createTask}>
      <Header userInSystem = {props.userInSystem}/>
      <div className = {style.flex_container}>
        <div>
            <NavbarContainer dispatch = {props.dispatch} userName = {props.userInSystem}/>
        </div>
        <div className = {style.info_flex_container}>
            <div>
              <p className ={style.optionTask}>Тема</p>
              <p className ={style.optionTask}>Получатель</p>
              <p className ={style.optionTask}>Описание</p>
            </div>
            <div>
              <input id ="id_name" onChange ={change} ref = {newName} className ={style.inputTask} value = {props.newTask.name}></input>
              <select id ="id_recipient" onChange ={change} ref = {newRecipient} className ={style.inputTask} value = {props.newTask.recipient}>{options}</select>
              <textarea id ="id_textarea" onChange ={change} ref = {newDescription} className ={style.textareaTask} value = {props.newTask.description}></textarea>
              <button id ="id_add_button" onClick = {addTask} className ={style.addButton}>Добавить задачу</button>
              <p className ={style.status}>{props.status.statusAdd}</p>
            </div>
          </div>
        </div>
      <Footer />
    </div>
    )
};

export default CreateTask;
