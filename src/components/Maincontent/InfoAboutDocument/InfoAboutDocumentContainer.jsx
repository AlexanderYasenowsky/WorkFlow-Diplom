import React from 'react';
import * as axios from 'axios';
import InfoAboutDocument from './InfoAboutDocument'
import {changeDescription, changeInputFind, changeFileName,changeInputFinish,changeSortFinish, changeStatusRefresh} from '../../../redux/newDocs-reducer';
const InfoAboutDocumentContainer = (props) =>{

  let downloadFile = (info) =>{
    let file = new FormData();
    file.append('file', props.documents[info].file);
    axios({
      method: 'post',
      url: 'http://192.168.1.38:3002/getfile',
      headers: {authorization: "Bearer " + props.userInSystem.token},
      data: file,
      responseType: 'stream',
    }).then(function(response){
        document.location.replace('http://192.168.1.38:3002/getfile');
    })
  }

  let updateDoc = (info) => {
      let data = new FormData();
      data.append('id', props.documents[info]._id);
      data.append('finished', document.getElementById('finish').checked);
      data.append('description', props.documents[info].description);
      if(document.getElementById("newDoc").files[0] !== undefined){
          data.append('filename', props.documents[info].file);
          data.append('file', document.getElementById("newDoc").files[0]);
      }
      axios({
        method: 'post',
        url: 'http://192.168.1.38:3002/changeinfoaboutdocument',
        data: data,
        headers: {'Content-Type': 'multipart/form-data',
                   authorization: "Bearer " + props.userInSystem.token}
      }).then(function(response){
        if(response.data !== 'Документ с таким названием уже сущеcтвует!' && response.data !== ''){
          props.dispatch(changeFileName(response.data,info));
          props.dispatch(changeStatusRefresh('Документ изменен!'));
          setTimeout(()=>{props.dispatch(changeStatusRefresh(""))},1500);
        }else{
          props.dispatch(changeStatusRefresh(response.data));
          setTimeout(()=>{props.dispatch(changeStatusRefresh(""))},1500);
        }
        props.dispatch(changeInputFinish(document.getElementById('finish').checked, info));
      });

  }

  let change = () =>{
      let value = changeInputFind('');
      props.dispatch(value);
      props.dispatch(changeSortFinish(false));
  }

  let changeInput = (newText,info) =>{
      props.dispatch(changeDescription(newText, info));
  }


  return(<InfoAboutDocument updateDoc={updateDoc}
                            downloadFile ={downloadFile}
                            change ={change}
                            changeInput = {changeInput}
                            documents = {props.documents}
                            statusAction ={props.statusAction}/>)
};

export default InfoAboutDocumentContainer
