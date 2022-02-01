import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import popup from "./reducers/popup/popup";
import students from "./reducers/students/students";


const reducers = combineReducers({ students, popup });

export const store = createStore(reducers, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
