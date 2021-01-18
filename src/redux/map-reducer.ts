import {InferActionsTypes} from './redux-store';
import {Dispatch} from 'react';
import {pointsGoogleAPI, pointsYandexAPI} from '../api/api';
import {PreviousCoordinatesType} from '../App';


export type PointType = {
  id: string,
  latitude: string,
  longitude: string,
  address?: string,
  lastPointDistance?: string
}

type MapReducerType = {
  pointList: Array<PointType>
};

let initialState: MapReducerType = {
  pointList: []
};

export const mapReducer = (state = initialState, action: ActionType): MapReducerType => {

  switch (action.type) {
    case 'MAP-REDUCER/ADD_OBJECT': {
      return {...state, pointList: [...state.pointList, action.newObject]}
    }
    default:
      return state;
  }
}

type ActionType = InferActionsTypes<typeof actions>;

export const actions = {
  addPoint: (newObject: PointType) => ({type: 'MAP-REDUCER/ADD_OBJECT', newObject} as const),
}

type DispatchType = Dispatch<ActionType>;

export const geocodeNewPoint = (newPoint: PointType, previousCoordinates: PreviousCoordinatesType) => {
  return async (dispatch: DispatchType) => {

    const editPoint = {...newPoint}

    try {
      const geocodeData = await pointsYandexAPI.geocodeNewObject(newPoint.latitude, newPoint.longitude);
      editPoint.address = geocodeData.data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address.formatted;

        const distanceData = await pointsGoogleAPI.getDistance(newPoint.latitude, newPoint.longitude, previousCoordinates);
        const distance = distanceData?.data?.rows[0]?.elements[0]?.distance?.text;

        if (distance) {
          editPoint.lastPointDistance = distance;
        }

      dispatch(actions.addPoint(editPoint));
    } catch (err) {
      console.warn('geocodeNewPoint err :', err)
    }
  }
}
