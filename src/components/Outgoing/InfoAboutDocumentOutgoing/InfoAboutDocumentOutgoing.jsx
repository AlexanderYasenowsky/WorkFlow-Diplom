import React from 'react';
import style from './InfoAboutDocument.module.css'
import {changeInputFind,changeSortFinish, changeDescription} from "../../../redux/newDocs-reducer";
import {NavLink} from "react-router-dom";

const InfoAboutDocumentOutgoing = (props) =>{
  let newFile = React.createRef();
  const regex = new RegExp('outgoing\/(\\w*)$');
  const location = regex.exec(window.location);
  const myLocation = location[1];
  let info = {};
  let newTextAreaInfo = React.createRef();
  for(var i = 0; i < props.documents.length; i++){
    if(props.documents[i]._id == myLocation){
      info = i;
      break;
    }
  };

  let deleteDoc = () => {
      props.deleteDoc(info, props.documents[info]._id , props.documents[info].file);
  }

  let change = () =>{
      let value = changeInputFind('');
      props.dispatch(value);
      props.dispatch(changeSortFinish(false));
  }

  let updateDoc = ()=>{
    props.updateDoc(info);
    document.getElementById('newDoc').value ='';
  }

  let downloadFile = () => {
    props.downloadFile(info);
  }

  let changeText = ()=>{
    let text = newTextAreaInfo.current.value;
    props.dispatch(changeDescription(text,info));
  }

  return(
    <div className ={style.addInfo}>
        <NavLink to = "/outgoing"><button onClick={change} className={style.back}>Назад</button></NavLink>
        <h2 className ={style.nameOfDoc}>{props.documents[info].theme}</h2>
        <div className ={style.blockInfo}>
          <div>
            <p className ={style.tbCont}>Краткая информация</p>
            <p>Получатель: {props.documents[info].recipient}</p>
            <p>Cоздано: {props.documents[info].created}</p>
            <p>Срок исполнения: {props.documents[info].execution}</p>
            <p>Вид задания: {props.documents[info].form}</p>
          </div>
          <div>
            <p className ={style.tbCont}>Описание задачи</p>
            <textarea onChange = {changeText} className ={style.textInfo} value ={props.documents[info].description} ref ={newTextAreaInfo}></textarea>
          </div>
          <div>
            <p className ={style.tbCont}>Файл</p>
            <p className ={style.link}><a onClick = {downloadFile}>{props.documents[info].file}</a></p>
            <p className ={style.tbCont}>Прикрепите новый документ</p>
            <input className = {style.inputFile} type ="file" accept=".pdf,.doc,.docx" id ="newDoc" name = 'filename' ref ={newFile}></input>
          </div>
        </div>
        <div className ={style.blockButtonsInfo}>
          <button className ={style.additionalInfoButtons} onClick ={updateDoc}>Обновить</button>
          <NavLink to= "/outgoing"><button id ="id_delete" className ={style.additionalInfoButtons} onClick = {deleteDoc}>Удалить</button></NavLink>
          <p className ={style.status}>{props.statusAction.statusRefresh}</p>
        </div>
    </div>
  )
};

export default InfoAboutDocumentOutgoing;
