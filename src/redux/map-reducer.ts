import {InferActionsTypes} from './redux-store';
import {Dispatch} from 'react';
import {objectsGoogleAPI, objectsYandexAPI} from '../api/api';
import { PreviousCoordinatesType } from '../Components/SendForm/SendForm';

export type EmployeeFormikDataType = {
  first_name: string
  last_name: string
}

export type DisplayObjectType = {
  id: string,
  latitude: string,
  longitude: string,
  address?: string,
  lastPointDistance?: number
}

type MapReducerType = {
  displayObjects: Array<DisplayObjectType>
};

let initialState: MapReducerType = {
  displayObjects: []
};

export const mapReducer = (state = initialState, action: ActionType): MapReducerType => {

  switch (action.type) {
    case 'MAP-REDUCER/ADD_OBJECT': {
      return {...state, displayObjects: [...state.displayObjects, action.newObject]}
    }
    // case 'ADD_EMPLOYEE': {
    //   return {...state, employees: [...state.employees, action.newEmployee]}
    // }
    // case 'DELETE_EMPLOYEE': {
    //   return {...state, employees: state.employees.filter(emp => emp.id !== action.deletedUserId)}
    // }
    default:
      return state;
  }
}

type ActionType = InferActionsTypes<typeof actions>;

export const actions = {
  addObject: (newObject: DisplayObjectType) => ({type: 'MAP-REDUCER/ADD_OBJECT', newObject} as const),
  // addEmployee: (newEmployee: EmployeeType) => ({type: 'ADD_EMPLOYEE', newEmployee} as const),
  // delEmployee: (deletedUserId: number) => ({type: 'DELETE_EMPLOYEE', deletedUserId} as const),
}

type DispatchType = Dispatch<ActionType>;


export const geocodeNewObject = (newObject: DisplayObjectType, previousCoordinates: PreviousCoordinatesType) => {
  return async (dispatch: DispatchType) => {
    const geocodeData = await objectsYandexAPI.geocodeNewObject(newObject.latitude, newObject.longitude)
    const distanceData = await objectsGoogleAPI.getDistance(newObject.latitude, newObject.longitude,previousCoordinates)
    // // console.log('mapReducer::: data :', data.data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address.formatted)
    //
    // console.log('mapReducer::: distanceData :', distanceData)
    debugger
    newObject.address = geocodeData.data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address.formatted
    dispatch(actions.addObject(newObject));
  }
}

export const addNewEmployees = (employeeFormikData: EmployeeFormikDataType) => {
  // return async (dispatch: DispatchType) => {
  //   const newEmployee = await employeesAPI.getcreateEmployee(employeeFormikData)
  //   dispatch(actions.addEmployee(newEmployee));
  // }
}

export const deleteEmployees = (userId: number) => {
  // return async (dispatch: DispatchType) => {
  //   const deletedUserId = await employeesAPI.getUpdatedEmployees(userId)
  //   if (deletedUserId) {
  //     dispatch(actions.delEmployee(deletedUserId));
  //   }
  // }
}

