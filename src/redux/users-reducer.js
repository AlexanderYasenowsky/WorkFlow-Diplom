const CHANGE_INPUT_LOGIN = "CHANGE_INPUT_LOGIN";
const CHANGE_USER_IN_SYSTEM = "CHANGE_USER_IN_SYSTEM";
const GET_NAMES = "GET_NAMES"
let initialData ={
  confirmPanel:
  {
    loginToEnter: "",
    passwordToEnter: ""
  },
  userInSystem:
  {
    name:"",
    isLogged: false,
    post: "",
    token: "",
    surname: "",
    patronymic: "",
    login: ""
  },
  names: ""
}

const userReducer = (state = initialData, action) => {
  switch (action.type) {
    case CHANGE_INPUT_LOGIN:
        state.confirmPanel.loginToEnter = action.login;
        state.confirmPanel.passwordToEnter = action.password;
        return state;
        
    case CHANGE_USER_IN_SYSTEM:
        state.userInSystem.name = action.name;
        state.userInSystem.isLogged = action.logged;
        state.userInSystem.post = action.post;
        state.userInSystem.token = action.token;
        state.userInSystem.surname = action.surname;
        state.userInSystem.patronymic = action.patronymic;
        state.userInSystem.login = action.login;
        return state;

    case GET_NAMES:
        state.names = action.names;
        return state;

    default:
        return state;
  }
}

export const getNames = (names) =>{
  return{
    type: GET_NAMES,
    names:names
  }
}

export const changeInputLogin = (login,password) => {
    return{
        type: CHANGE_INPUT_LOGIN,
        login: login,
        password: password
    }
}

export const changeUserInSystem = (name,logged,post,token, surname, patronymic,login) => {
    return{
        type: CHANGE_USER_IN_SYSTEM,
        name: name,
        logged: logged,
        post: post,
        token: token,
        surname: surname,
        patronymic: patronymic,
        login: login
    }
}

export default userReducer;
