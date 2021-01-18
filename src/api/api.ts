import axios from 'axios';
import {PreviousCoordinatesType} from '../App';

const yandexInstance = axios.create({
  baseURL: 'https://geocode-maps.yandex.ru/1.x/',
});

export const pointsYandexAPI = {
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
  baseURL: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/',
});

export const pointsGoogleAPI = {
  getDistance(latitude: string, longitude: string, previousCoordinates: PreviousCoordinatesType) {
    return googleInstance.get(`json?origins=${latitude},${longitude}&destinations=${previousCoordinates[0]},${previousCoordinates[1]}&key=AIzaSyDZYmugNtrfSskRFo0Wa3QYPRva1AeiuwU`);
  }
}

