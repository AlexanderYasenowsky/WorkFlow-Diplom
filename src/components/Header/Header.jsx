import React from 'react';
import style from './Header.module.css'

const Header = (props) =>{
  return(
    <header>
      <div>
        <p className = {style.login}>АНО "Центр квалитет"</p>
      </div>
      <div>
        <p className = {style.name}>{props.userInSystem.name}</p>
      </div>
    </header>
  )
};

export default Header;
