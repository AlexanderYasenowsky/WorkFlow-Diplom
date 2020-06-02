import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Maincontent from './components/Maincontent/Maincontent';
import Outgoing from './components/Outgoing/Outgoing';
import AddnewDocContainer from './components/AddNewDocument/AddNewDocumentContainer';
import InfoAboutDocumentContainer from './components/Maincontent/InfoAboutDocument/InfoAboutDocumentContainer'
import BeginWork from './components/BeginWork/BeginWork'
import CreateTask from './components/CreateTask/CreateTaskContainer'
import LoginPageContainer from './components/LoginPage/LoginPageContainer'
import InfoAboutDocumentOutgoingContainer from './components/Outgoing/InfoAboutDocumentOutgoing/InfoAboutDocumentOutgoingContainer'
import InfoUser from './components/InfoUser/InfoUser'
import Help from './components/Help/Help';
import MyTasks from './components/MyTasks/MyTasks'
import {Route,BrowserRouter} from 'react-router-dom'

function App(props){
  const additionalInfIncoming = new RegExp('incoming/\\w+');
  const additionalInfOutgoing = new RegExp('outgoing/\\w+');
  return (
    <BrowserRouter>
    <div className="App">
      <Route path = {additionalInfOutgoing} render = {() => <InfoAboutDocumentOutgoingContainer dispatch = {props.dispatch} documents = {props.state.newDocsReducer.table} statusAction={props.state.newDocsReducer.statusAction} userInSystem={props.state.userReducer.userInSystem}/>}/>
      <Route path = {additionalInfIncoming} render = {() => <InfoAboutDocumentContainer documents = {props.state.newDocsReducer.table} dispatch = {props.dispatch} statusAction={props.state.newDocsReducer.statusAction} userInSystem={props.state.userReducer.userInSystem}/>}/>
      <Route exact path ="/" render = {()=> <BeginWork userInSystem = {props.state.userReducer.userInSystem}/>}/>
      <Route exact path ="/info" render = {()=> <InfoUser dispatch = {props.dispatch} userInSystem = {props.state.userReducer.userInSystem} />}/>
      <Route exact path ="/login" render = {()=> <LoginPageContainer dispatch = {props.dispatch} usersData = {props.state.userReducer} />}/>
      <Route exact path ="/help" render = {() => <Help userInSystem = {props.state.userReducer.userInSystem} dispatch = {props.dispatch}/>}/>
      <Route exact path ='/incoming' render =  { () => <Maincontent dispatch = {props.dispatch} table = {props.state.newDocsReducer.table} userInSystem = {props.state.userReducer.userInSystem} inputValue= {props.state.newDocsReducer.inputToFind} sorted = {props.state.newDocsReducer.sorted} themeToFind = {props.state.newDocsReducer.themeToFind}/>}/>
      <Route exact path ='/outgoing' render = {() => <Outgoing dispatch = {props.dispatch} table = {props.state.newDocsReducer.table} userInSystem = {props.state.userReducer.userInSystem} inputValue= {props.state.newDocsReducer.inputToFind} sorted = {props.state.newDocsReducer.sorted} themeToFind = {props.state.newDocsReducer.themeToFind}/>} />
      <Route exact path ='/create' render = { () => <AddnewDocContainer dispatch = {props.dispatch} userInSystem = {props.state.userReducer.userInSystem} newDocument ={props.state.newDocsReducer.newDocument} statusAction={props.state.newDocsReducer.statusAction} tasks={props.state.tasksReducer.tasks} names = {props.state.userReducer.names}/>}/>
      <Route exact path ='/tasks' render = {() => <MyTasks myTasks = {props.state.tasksReducer} dispatch ={props.dispatch} userInSystem ={props.state.userReducer.userInSystem}/>}/>
      <Route exact path ="/createTask" render = {()=> <CreateTask newTask = {props.state.tasksReducer.newTask} dispatch = {props.dispatch} userInSystem = {props.state.userReducer.userInSystem} names = {props.state.userReducer.names} status ={props.state.tasksReducer.status}/>}/>

    </div>
    </BrowserRouter>
  )
}

export default App;
