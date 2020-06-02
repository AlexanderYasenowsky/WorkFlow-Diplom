import React from 'react';
import style from './Footer.module.css'
const Footer = () =>{
  return(
    <footer className ={style.foot}>
      <div>
        <p>Фридов Иван Алексеевич 8-905-653-99-65</p>
        <p>Мишин Андрей Леонидович 8-964-321-44-33</p>
      </div>
      <div>
        <p>kvalitet@mail.ru</p>
        <p>kvalitetANO@yandex.ru</p>
      </div>
    </footer>
  )
};

export default Footer;
