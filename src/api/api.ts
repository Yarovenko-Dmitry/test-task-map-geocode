import axios from 'axios';
import {PreviousCoordinatesType} from '../Components/SendForm/SendForm';

const yandexInstance = axios.create({
  baseURL: 'https://geocode-maps.yandex.ru/1.x/',
});

export const objectsYandexAPI = {
  geocodeNewObject(latitude: string, longitude: string) {
    return yandexInstance.get(`?geocode=${longitude},${latitude}`);
  },
}

export const setYandexInterceptors = (instance: any) => {
  instance.interceptors.request.use(
    async (config: any) => {
      const apiKey = '62863b39-ff46-4e0f-a09b-34ed4079f28a'
      const format = 'json'
      config.params = {...config.params, apikey: apiKey, format: format}
      return config;
    },
    (error: any) => Promise.reject(error)
  );
}

setYandexInterceptors(yandexInstance)

const googleInstance = axios.create({

  // withCredentials: true,
  // baseURL: 'https://maps.googleapis.com/maps/api/distancematrix/',
  baseURL: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/',
  headers: {
    'Access-Control-Allow-Origin': '*'

    // 'Access-Control-Allow-Methods': "GET,PUT,POST,DELETE,OPTIONS",
    // 'Access-Control-Allow-Origin': 'https://maps.googleapis.com/',
    // 'Access-Control-Allow-Headers': "Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin,",
    // 'Access-Control-Allow-Credentials': true,
    // 'scheme': 'https',
    // 'access-control-allow-origin': 'https://maps.googleapis.com/',
  },

});

export const objectsGoogleAPI = {

  // https://maps.googleapis.com/maps/api/distancematrix/json?origins=53.90600858542148,%2027.556119152511656&destinations=53.912066185896606,%2027.53531402203179&key=%20AIzaSyDZYmugNtrfSskRFo0Wa3QYPRva1AeiuwU
  getDistance(latitude: string, longitude: string, previousCoordinates: PreviousCoordinatesType) {
    return googleInstance.get(`json?origins=${latitude},${longitude}&destinations=${previousCoordinates[0]},${previousCoordinates[1]}&key=AIzaSyDZYmugNtrfSskRFo0Wa3QYPRva1AeiuwU`);
  }
}

