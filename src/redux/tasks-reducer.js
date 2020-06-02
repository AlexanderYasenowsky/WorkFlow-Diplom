const GET_TASKS = "GET_TASKS";
const ADD_TASK ='ADD_TASK'
const CHANGE_INPUT ='CHANGE_INPUT'
const DELETE_TASK ="DELETE_TASK";
const CHANGE_STATUS ='CHANGE_STATUS'
const CHANGE_STATUS_TASK_ADD = 'CHANGE_STATUS_TASK_ADD'
let initialData ={
  tasks: [],
  showButtons:{
    showIn: false,
    showOut: false
  },
  newTask:{
    name: "",
    registrar:"",
    recipient:"",
    description:""
  },
  status:{
    statusAdd:""
  }
}

const tasksReducer = (state = initialData, action) => {
  switch (action.type) {
    case GET_TASKS:
        state.tasks = action.data;
        return state;

    case ADD_TASK:
        let newTask = {
          name: state.newTask.name,
          recipient: state.newTask.recipient,
          registrar: state.newTask.registrar,
          description: state.newTask.description,
          status: 0
        }
        state.tasks.push(newTask);
        return state;

    case CHANGE_INPUT:
        state.newTask.name = action.name;
        state.newTask.recipient = action.recipient;
        state.newTask.registrar = action.registrar;
        state.newTask.description = action.description;
        return state;

    case CHANGE_STATUS:
        state.tasks[action.index].status = action.status;
        return state;

    case DELETE_TASK:
        state.tasks.splice(action.index,1);
        return state;

    case CHANGE_STATUS_TASK_ADD:
        state.status.statusAdd = action.status;
        return state;

    default:
        return state;
  }
}

export const getTasks = (data,status) => {
    return{
        type: GET_TASKS,
        data: data,
        status: status
    }
}

export const addTask = () => {
    return{
        type: ADD_TASK
    }
}


export const changeInput = (name, recipient, registrar, description) => {
    return{
        type: CHANGE_INPUT,
        name: name,
        recipient: recipient,
        registrar: registrar,
        description: description
    }
}

export const changeStatus = (index,status) => {
    return{
        type: CHANGE_STATUS,
        status: status,
        index: index
    }
}

export const deleteTask = (index) =>{
  return {
    type: DELETE_TASK,
    index: index
  }
}

export const changeStatusTask = (status) =>{
  return {
    type: CHANGE_STATUS_TASK_ADD,
    status: status
  }
}

export default tasksReducer;
