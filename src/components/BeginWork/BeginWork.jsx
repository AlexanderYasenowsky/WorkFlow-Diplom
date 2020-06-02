import React from 'react';
import style from "./BeginWork.module.css"
import {Redirect} from "react-router-dom";
const BeginWork = (props) =>{
  if(props.userInSystem.isLogged !== true){
      return  <Redirect to = {'/login'}/>
  }
  return(
    <div className ={style.beginWork}>
        
    </div>
  )
};

export default BeginWork;
