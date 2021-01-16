import axios from 'axios';
import {PreviousCoordinatesType} from '../Components/SendForm/SendForm';

const yandexInstance = axios.create({
  // withCredentials: true,
  baseURL: 'https://geocode-maps.yandex.ru/1.x/',
});
// https://geocode-maps.yandex.ru/1.x/?apikey=62863b39-ff46-4e0f-a09b-34ed4079f28a&geocode=30.483445405960065,50.41855269383524
export const objectsYandexAPI = {
  geocodeNewObject(latitude: string, longitude: string) {
    return yandexInstance.get(`?geocode=${longitude},${latitude}`);
  },
}

// axios.defaults.params = {};
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
  baseURL: 'https://maps.googleapis.com/maps/api/distancematrix/',

});

export const objectsGoogleAPI = {

  // https://maps.googleapis.com/maps/api/distancematrix/json?origins=53.90600858542148,%2027.556119152511656&destinations=53.912066185896606,%2027.53531402203179&key=%20AIzaSyDZYmugNtrfSskRFo0Wa3QYPRva1AeiuwU
  getDistance(latitude: string, longitude: string,previousCoordinates: PreviousCoordinatesType){
    // debugger
    return googleInstance.get(`json?origins=${latitude},%20${longitude}&destinations=${previousCoordinates[0]},%20${previousCoordinates[1]}&key=%20AIzaSyDZYmugNtrfSskRFo0Wa3QYPRva1AeiuwU`);
  }
}

// export const setGoogleInterceptors = (instance: any) => {
//   instance.interceptors.request.use(
//     async (config: any) => {
//       const apiKey = 'AIzaSyDZYmugNtrfSskRFo0Wa3QYPRva1AeiuwU'
//       // const format = 'json'
//       // config.params = {...config.params, apikey: apiKey, format: format}
//       config.params = {...config.params, key: apiKey}
//       return config;
//     },
//     (error: any) => Promise.reject(error)
//   );
// }
//
// setGoogleInterceptors(googleInstance)

