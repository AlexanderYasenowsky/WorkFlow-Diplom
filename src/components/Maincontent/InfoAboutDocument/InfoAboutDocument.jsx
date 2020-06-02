import React from 'react';
import style from './InfoAboutDocument.module.css';
import {NavLink} from 'react-router-dom';
const InfoAboutDocument = (props) =>{
  let newFile = React.createRef();
  let newDescription = React.createRef();
  const regex = new RegExp('incoming\/(\\w*)$');
  const location = regex.exec(window.location);
  const myLocation = location[1];
  let info = {};

  for(var i = 0; i < props.documents.length; i++){
    if(props.documents[i]._id === myLocation){
      info = i;
      break;
    }
  }

  let checkBox = () =>{
  if(props.documents[info].finished === true){
    return (<div>
                <input type ="checkbox" id ="finish" defaultChecked='true'></input>
                <label for="finish">Закончить задачу</label>
           </div>)
    }
  else{
    return (<div>
                <input type ="checkbox" id ="finish"></input>
                <label for="finish">Закончить задачу</label>
           </div>)
    }
  }
  let change = () =>{
    props.change();
  }

  let downloadFile = () =>{
      props.downloadFile(info);
  }

  let updateDoc =() =>{
      props.updateDoc(info);
      document.getElementById('newDoc').value ='';
  }

  let changeInput = ()=>{
      let text = newDescription.current.value;
      props.changeInput(text,info);
  }

  return(
    <div className ={style.addInfo}>
        <NavLink to = "/incoming"><button className ={style.back} onClick = {change}>Назад</button></NavLink>
        <h2 className ={style.nameOfDoc}>{props.documents[info].theme}</h2>
        <div className ={style.blockInfo}>
          <div>
            <p className ={style.tbCont}>Краткая информация</p>
            <p>Регистратор: {props.documents[info].registrar}</p>
            <p>Cоздано: {props.documents[info].created}</p>
            <p>Срок исполнения: {props.documents[info].execution}</p>
            <p>Вид задания: {props.documents[info].form}</p>
            {checkBox()}
          </div>
          <div>
            <p className ={style.tbCont}>Описание задачи</p>
            <textarea ref ={newDescription} className ={style.textInfo} onChange = {changeInput} value ={props.documents[info].description}></textarea>
          </div>
          <div>
            <p className ={style.tbCont}>Файл</p>
            <p className ={style.link}><a onClick ={downloadFile}>{props.documents[info].file}</a></p>
            <p className ={style.tbCont}>Прикрепите новый документ</p>
            <input className = {style.inputFile} type ="file" accept=".pdf,.doc,.docx" id ="newDoc" name = 'filename' ref ={newFile}></input>
          </div>
        </div>
        <div className ={style.blockButtonsInfo}>
            <button className ={style.additionalInfoButtons} onClick ={updateDoc}>Обновить</button>
            <p className = {style.status}>{props.statusAction.statusRefresh}</p>
        </div>
    </div>
  )
};

export default InfoAboutDocument;
