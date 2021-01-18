import { applyMiddleware } from "redux";
import { combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import {mapReducer} from './map-reducer';

const reducers = combineReducers({
  mapPage: mapReducer,
});

export type AppStateType = ReturnType<typeof reducers>

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type InferActionsTypes<T extends { [key: string]: (...arg: any[]) => any }> = ReturnType<PropertiesTypes<T>>

const store: ReturnType<typeof createStore> = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;