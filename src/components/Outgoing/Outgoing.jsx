import React from 'react';
import style from './Outgoing.module.css';
import TableTrOut from './TableTrOut/TableTrOut';
import {Redirect} from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/NavbarContainer';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {changeInputFind,changeSortFinish, sortByTheme} from '../../redux/newDocs-reducer';

const Outgoing = (props) =>{
  if(props.userInSystem.isLogged !== true){
    return  <Redirect to = {'/login'}/>
  };
  let dataList = React.createRef();
  let tr = [];
  let info = []
  if(props.sorted.showFinished === true){
    for(let i =0;i<props.table.length;i++){
      if(props.themeToFind.theme === ""){
        if(props.table[i].registrar === props.userInSystem.name){
          info.push(<option key={props.table[i]._id} value = {props.table[i].theme}/>)
          tr.push(<TableTrOut id = {props.table[i]._id} created = {props.table[i].created}
              recipient = {props.table[i].recipient} theme = {props.table[i].theme}
              execution ={props.table[i].execution} form ={props.table[i].form} finished ={props.table[i].finished}/>)
        }
      }else{
        if(props.table[i].registrar === props.userInSystem.name && props.table[i].theme === props.themeToFind.theme){
          info.push(<option key={props.table[i]._id} value = {props.table[i].theme}/>)
          tr.push(<TableTrOut id = {props.table[i]._id} created = {props.table[i].created}
              recipient = {props.table[i].recipient} theme = {props.table[i].theme}
              execution ={props.table[i].execution} form ={props.table[i].form} finished ={props.table[i].finished}/>)
        }
      }
      }
  }
  else{
    for(let i =0;i<props.table.length;i++){
        if(props.themeToFind.theme === ""){
          if(props.table[i].registrar === props.userInSystem.name && props.table[i].finished === false){
            info.push(<option key={props.table[i]._id} value = {props.table[i].theme}/>)
            tr.push(<TableTrOut id = {props.table[i]._id} created = {props.table[i].created}
                recipient = {props.table[i].recipient} theme = {props.table[i].theme}
                execution ={props.table[i].execution} form ={props.table[i].form} finished ={props.table[i].finished}/>)
          }
        }
        else{
          if(props.table[i].registrar === props.userInSystem.name && props.table[i].finished === false && props.table[i].theme === props.themeToFind.theme){
            info.push(<option key={props.table[i]._id} value = {props.table[i].theme}/>)
            tr.push(<TableTrOut id = {props.table[i]._id} created = {props.table[i].created}
                recipient = {props.table[i].recipient} theme = {props.table[i].theme}
                execution ={props.table[i].execution} form ={props.table[i].form} finished ={props.table[i].finished}/>)
          }
        }
      }
  }

  let showWithFinished = () =>{
    props.dispatch(changeSortFinish(document.getElementById('sort').checked));
  }

  let change =()=>{
      let newInputValue = dataList.current.value;
      let action = changeInputFind(newInputValue);
      props.dispatch(action);
  }

  let findTheme = () =>{
    let action = sortByTheme();
    props.dispatch(action)
  }

  if(tr.length === 0){
    return(
      <div className ={style.outgoing}>
        <Header userInSystem = {props.userInSystem}/>
        <div className = {style.flex_container}>
          <div>
            <Navbar dispatch = {props.dispatch} userName = {props.userInSystem}/>
          </div>
          <div>
            <input onChange = {showWithFinished} id = 'sort' type = 'checkbox' defaultValue='false'></input>
            <label for = 'sort'>Показывать выполненные</label>
          <div>
                <input list = "info" placeholder="Введите тему задания..." ref={dataList} value = {props.inputValue.value} className ={style.find_input} onChange = {change}></input>
                <datalist id="info">{info}</datalist>
                <button className ={style.buttonFind} id = "buttonFind" onClick ={findTheme}>Найти</button>
            </div>
            </div>
        </div>
        <Footer />
      </div>
    )
  }
  else{
    return(
    <div className ={style.outgoing}>
      <Header userInSystem = {props.userInSystem}/>
      <div className = {style.flex_container}>
        <div>
          <Navbar dispatch = {props.dispatch} userName = {props.userInSystem}/>
        </div>
        <div>
          <input onChange = {showWithFinished} id = 'sort' type = 'checkbox' defaultValue='false'></input>
          <label for = 'sort'>Показывать выполненные</label>
        <div className = {style.find_area}>
            <input list = "info" ref={dataList}  placeholder="Введите тему задания..." value = {props.inputValue.value} className ={style.find_input} onChange = {change}></input>
            <datalist id="info">{info}</datalist>
            <button id = "buttonFind" className ={style.buttonFind}onClick ={findTheme}>Найти</button>
        </div>
          <table className ="table table-bordered table-hover">
            <thead className ={style.thead_style}>
            <tr>
                <th>Создано</th>
                <th>Получатель</th>
                <th>Тема задания</th>
                <th>Срок исполнения</th>
                <th>Вид задания</th>
              </tr>
            </thead>
            <tbody className = 'table_body'>
              {tr}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  )
}
};

export default Outgoing;
