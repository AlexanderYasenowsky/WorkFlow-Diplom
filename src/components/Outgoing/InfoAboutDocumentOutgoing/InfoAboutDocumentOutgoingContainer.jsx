import React from 'react';
import {deleteDoc, changeDescription, changeStatusRefresh, changeFileName} from "../../../redux/newDocs-reducer";
import InfoAboutDocumentOutgoing from "./InfoAboutDocumentOutgoing";
import * as axios from 'axios';

const InfoAboutDocumentOutgoingContainer = (props) =>{

    let change = (description) => {
      let action = changeDescription(description);
      props.dispatch(action);
    }

    let deleteButton = (index, id, filename) => {
      let data = new FormData();
      data.append("id", id);
      data.append('filename', filename);
      axios({
        method: 'delete',
        url: 'http://192.168.1.38:3002/delete/document',
        data: data,
        headers: {'Content-Type': 'multipart/form-data',
                  authorization: "Bearer " + props.userInSystem.token}
      }).then(function(response){
        let action = deleteDoc(index);
        props.dispatch(action)
      });
    }

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
                     authorization: "Bearer " + props.userInSystem.token},
        }).then(function(response){
          if(response.data !== 'Документ с таким названием уже сущеcтвует!' && response.data !== ''){
            props.dispatch(changeFileName(response.data,info));
          }else{
            props.dispatch(changeStatusRefresh(response.data));
            setTimeout(()=>{props.dispatch(changeStatusRefresh(""))},1500);
          }
        });
    }


  return(<InfoAboutDocumentOutgoing documents = {props.documents}
                                    deleteDoc = {deleteButton}
                                    updateDescription ={change}
                                    dispatch ={props.dispatch}
                                    downloadFile ={downloadFile}
                                    updateDoc ={updateDoc}
                                    statusAction ={props.statusAction}/>)
};

export default InfoAboutDocumentOutgoingContainer;
