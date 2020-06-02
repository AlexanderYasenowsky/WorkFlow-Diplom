import React from 'react';
import style from "./AddNewDocuments.module.css"
import {Redirect} from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Navbar from '../Navbar/NavbarContainer'

const AddnewDoc = (props) =>{
  if(props.userInSystem.isLogged !== true){
    return  <Redirect to = {'/login'}/>
  };
  let newRecipient = React.createRef();
  let newDataCreation = React.createRef();
  let newDataExecution = React.createRef();
  let newTheme = React.createRef();
  let newForm = React.createRef();
  let newDescription = React.createRef();
  let newFile = React.createRef();

  let onChange = () => {
      let recipient = newRecipient.current.value;
      let dataCreation = newDataCreation.current.value;
      let dataExecution = newDataExecution.current.value;
      let theme = newTheme.current.value;
      let form = newForm.current.value;
      let file = newFile.current.value;
      let description = newDescription.current.value;
      props.updateAddDoc(dataCreation,"",recipient,theme,dataExecution,form,description,file);
  }

  let addDocs = () => {
      if(newRecipient.current.value !== "" && newDataCreation.current.value !== "" && newDataExecution.current.value !=="" &&
        newTheme.current.value !== "" && newForm.current.value !== "" && newFile.current.value !== "" && newDescription.current.value !== "" &&
        newRecipient.current.value !== "Выберите получателя..." && newTheme.current.value !== "Выберите тему..."){
        props.addDocs();
      }else{
        props.changeStatus();
      }
  }

  let options = []
  options.push(<option hidden className ={style.holder}>Выберите тему...</option>);
  for(let i =0;i<props.tasks.length; i++){
    if(props.tasks[i].status === 1){
      options.push(<option>{props.tasks[i].name}</option>);
    }
  }

  let optionsNames = [];
  optionsNames.push(<option hidden className ={style.holder}>Выберите получателя...</option>);
  for(let i =0;i<props.names.length; i++){
      optionsNames.push(<option>{props.names[i]}</option>);
  }

  return(
    <div className = {style.addPage}>
      <Header userInSystem = {props.userInSystem}/>
      <div className = {style.flex_container}>
          <div>
          <Navbar dispatch = {props.dispatch} userName = {props.userInSystem}/>
          </div>
          <div className = {style.addDocs}>
            <div>
              <p className ={style.optionsNewDocs}>Получатель</p>
              <p className ={style.optionsNewDocs}>Создано</p>
              <p className ={style.optionsNewDocs}>Срок исполнения</p>
              <p className ={style.optionsNewDocs}>Тема задания</p>
              <p className ={style.optionsNewDocs}>Вид задания</p>
              <p className ={style.optionsNewDocs}>Файл</p>
              <p className ={style.optionsNewDocs}>Описание задачи</p>
            </div>
            <div>
              <select id="id_res" onChange ={onChange} className ={style.inputDocs} value = {props.newDocument.recipient} ref ={newRecipient}>{optionsNames}</select>
              <input id ="id_dataCreation" onChange ={onChange} className ={style.inputDocs} type="date" value = {props.newDocument.created} ref ={newDataCreation}></input>
              <input id ="id_dataExecution" onChange ={onChange} className ={style.inputDocs} type="date" value = {props.newDocument.execution} ref ={newDataExecution}></input>
              <select id ="id_theme" onChange ={onChange} value ={props.newDocument.theme} ref ={newTheme} className = {style.inputDocs}>{options}</select>
              <input id ="id_form" onChange ={onChange} className ={style.inputDocs} value = {props.newDocument.form} ref ={newForm}></input>
              <input className = {style.inputFile} type ="file" accept=".pdf,.doc,.docx" id ="newDoc" name = 'filename' ref ={newFile}></input>
              <textarea id ="id_description"onChange ={onChange} className ={style.description_new_docs} value ={props.newDocument.description} ref ={newDescription}></textarea>
              <button id ="id_buttonAdd" className ={style.addButton} onClick = {addDocs}>Добавить документ</button>
              <p className = {style.status}>{props.statusAction.statusAdd}</p>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default AddnewDoc
