import {InferActionsTypes} from './redux-store';
import {Dispatch} from 'react';
import {objectsGoogleAPI, objectsYandexAPI} from '../api/api';
import {PreviousCoordinatesType} from '../Components/SendForm/SendForm';

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
    default:
      return state;
  }
}

type ActionType = InferActionsTypes<typeof actions>;

export const actions = {
  addObject: (newObject: DisplayObjectType) => ({type: 'MAP-REDUCER/ADD_OBJECT', newObject} as const),
}

type DispatchType = Dispatch<ActionType>;

export const geocodeNewObject = (newObject: DisplayObjectType, previousCoordinates: PreviousCoordinatesType) => {
  return async (dispatch: DispatchType) => {
    const geocodeData = await objectsYandexAPI.geocodeNewObject(newObject.latitude, newObject.longitude);
    // console.log('mapReducer::: geocodeData :', geocodeData.data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address.formatted)
    newObject.address = geocodeData.data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address.formatted
    dispatch(actions.addObject(newObject));
    const distanceData = await objectsGoogleAPI.getDistance(newObject.latitude, newObject.longitude, previousCoordinates);
    console.log('mapReducer::: distanceData :', distanceData)
    debugger
  }
}
