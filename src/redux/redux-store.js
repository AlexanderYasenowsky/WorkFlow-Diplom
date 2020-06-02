import newDocsReducer from "./newDocs-reducer";
import userReducer from "./users-reducer"
import tasksReducer from "./tasks-reducer"
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    newDocsReducer: newDocsReducer,
    userReducer: userReducer,
    tasksReducer: tasksReducer
});

let store = createStore(reducers);

export default store;
