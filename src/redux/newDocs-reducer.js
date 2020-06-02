const ADD_DOCUMENT = 'ADD_DOCUMENT';
const CHANGE_INPUT_NEWDOC = 'CHANGE_INPUT_NEWDOC';
const DELETE_DOC = 'DELETE_DOC';
const CHANGE_INPUT_ADDINFO = 'CHANGE_INPUT_ADDINFO';
const CONFIRM_CHANGES = 'CONFIRM_CHANGES';
const GET_DATA_TABLE = 'GET_DATA_TABLE';
const CHANGE_DESCRIPTION  = 'CHANGE_DESCRIPTION';
const CHANGE_SORT_FINISH  = 'CHANGE_SORT_FINISH';
const CHANGE_INPUT_FINISH = 'CHANGE_INPUT_FINISH';
const CHANGE_INPUT_FIND = 'CHANGE_INPUT_FIND';
const SORT_BY_THEME = 'SORT_BY_THEME';
const CHANGE_INPUT_FILENAME = 'CHANGE_INPUT_FILENAME';
const CHANGE_STATUD_ADD = 'CHANGE_STATUD_ADD';
const CHANGE_STATUD_REFRESH = 'CHANGE_STATUD_REFRESH';

let initialData = {
  table:[],
  newDocument:{
    registrar: "",
    created:"",
    recipient: "",
    theme: "",
    execution: "",
    form: "",
    description: "",
    file :""
  },
  sorted:{
    showFinished: false
  },
  inputToFind:{
    value: "",
    key: ""
  },
  themeToFind:{
    theme: ""
  },
  statusAction:{
    statusAdd:"",
    statusRefresh: ""
  }
}

const newDocsReducer = (state = initialData, action) => {
  switch (action.type) {
      case ADD_DOCUMENT:
          let newCell = {
            created: state.newDocument.created,
            registrar: state.newDocument.registrar,
            recipient: state.newDocument.recipient,
            theme: state.newDocument.theme,
            execution: state.newDocument.execution,
            form: state.newDocument.form,
            description: state.newDocument.description,
            file: state.newDocument.file,
            finished: false,
          }
          state.table.push(newCell);
          return state;

      case CHANGE_INPUT_NEWDOC:
          state.newDocument.id = action.id;
          state.newDocument.created = action.created;
          state.newDocument.registrar = action.registrar;
          state.newDocument.recipient = action.recipient;
          state.newDocument.theme = action.theme;
          state.newDocument.execution = action.execution;
          state.newDocument.form = action.form;
          state.newDocument.description = action.description;
          state.newDocument.file = action.file;
          return state;

      case DELETE_DOC:
          state.table.splice(action.index,1);
          return state;

      case CHANGE_INPUT_ADDINFO:
          state.table[action.index].description = action.description;
          return state;

      case CONFIRM_CHANGES:
          state.table[action.index].description = action.description;
          return state;

      case GET_DATA_TABLE:
          state.table = action.data;

      case CHANGE_SORT_FINISH:
          state.sorted.showFinished = action.sort;
          return state;

      case CHANGE_INPUT_FIND:
          state.inputToFind.value = action.data
          return state;

      case SORT_BY_THEME:
          state.themeToFind.theme = state.inputToFind.value
          return state;

      case CHANGE_INPUT_FILENAME:
          state.table[action.index].file = action.file;
          return state;

      case CHANGE_INPUT_FINISH:
          state.table[action.index].finished = action.finish;
          return state;

      case CHANGE_DESCRIPTION:
          state.table[action.index].description = action.description;
          return state;

      case CHANGE_STATUD_ADD:
          state.statusAction.statusAdd = action.status;
          return state;

      case CHANGE_STATUD_REFRESH:
          state.statusAction.statusRefresh = action.status;
          return state;

      default:
          return state;
      }
}

export const addNewDocumentAction = () =>{
  return {
    type: ADD_DOCUMENT
  }
}

export const changeInputNewDocAction = (created, registrar, recipient, theme, execution, form, description, file) => {
  return {
    type: CHANGE_INPUT_NEWDOC,
    created: created,
    registrar: registrar,
    recipient: recipient,
    theme: theme,
    execution: execution,
    form: form,
    description: description,
    file: file
  }
}

export const deleteDoc = (index) =>{
  return {
    type: DELETE_DOC,
    index: index
  }
}

export const confirmChanges = (description) => {
  return {
    type: CONFIRM_CHANGES,
    description: description,
  }
}

export const getDataTable = (data) => {
  return {
    type: GET_DATA_TABLE,
    data: data
  }
}

export const changeDescription = (description,index) => {
  return {
    type: CHANGE_DESCRIPTION,
    index: index,
    description: description
  }
}

export const changeFileName = (file, index) => {
  return {
    type: CHANGE_INPUT_FILENAME,
    file: file,
    index: index
  }
}


export const changeInputFind = (data) => {
  return {
    type: CHANGE_INPUT_FIND,
    data: data
  }
}

export const changeInputFinish = (finish, index) => {
  return {
    type: CHANGE_INPUT_FINISH,
    finish: finish,
    index: index
  }
}

export const changeSortFinish = (sort) => {
  return {
    type: CHANGE_SORT_FINISH,
    sort: sort
    }
}


export const changeStatusAdd = (status) => {
  return {
    type: CHANGE_STATUD_ADD,
    status: status
  }
}

export const changeStatusRefresh = (status) => {
  return {
    type: CHANGE_STATUD_REFRESH,
    status: status
  }
}

export const sortByTheme = () => {
  return {
    type: SORT_BY_THEME,
  }
}


export default newDocsReducer;
