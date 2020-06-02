import React from 'react';
import {addNewDocumentAction, changeInputNewDocAction, changeStatusAdd} from "../../redux/newDocs-reducer";
import AddnewDoc from "./AddNewDocument";
import * as axios from 'axios'
const AddnewDocContainer = (props) =>{

  let onChange = (created, registrar, recipient, theme, execution, form, description, file) => {
    let action = changeInputNewDocAction(created, props.userInSystem.name, recipient, theme, execution, form, description, file);
    props.dispatch(action);
  }

  let addDocs = () => {
    props.dispatch(addNewDocumentAction());
    let data = new FormData();
    data.append('created', props.newDocument.created);
    data.append('registrar', props.userInSystem.name);
    data.append('recipient', props.newDocument.recipient);
    data.append('theme', props.newDocument.theme);
    data.append('execution', props.newDocument.execution);
    data.append('form', props.newDocument.form);
    data.append('description', props.newDocument.description);
    data.append('file', document.getElementById("newDoc").files[0]);
    axios({
      method: 'post',
      url: 'http://192.168.1.38:3002/addnewfile',
      data: data,
      headers: {'Content-Type': 'multipart/form-data',
                 authorization: "Bearer " + props.userInSystem.token}
    }).then(function(response){
        if(response.data !== 'Документ с таким названием уже сущетсвует!'){
          props.dispatch(changeStatusAdd(response.data));
          setTimeout(()=>{props.dispatch(changeStatusAdd(""))},1500);
          document.getElementById('newDoc').value = "";
          let action = changeInputNewDocAction("0-0-0",props.userInSystem.name,"","","0-0-0","","","");
          props.dispatch(action);
        }else{
          props.dispatch(changeStatusAdd(response.data));
        }
    });
  }

  let changeStatus = () =>{
    let action = changeStatusAdd('Заполните все поля!');
    props.dispatch(action);
    setTimeout(()=>{props.dispatch(changeStatusAdd(""))},1500);
  }
  return(
    <AddnewDoc updateAddDoc = {onChange} addDocs = {addDocs}
      newDocument ={props.newDocument}
      userInSystem ={props.userInSystem}
      dispatch={props.dispatch}
      statusAction={props.statusAction}
      tasks ={props.tasks}
      names ={props.names}
      changeStatus ={changeStatus}/>
  )
}
export default AddnewDocContainer
