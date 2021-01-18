import React from 'react';
import s from './YandexMap.module.css'
import {Map, Placemark, RulerControl, TypeSelector, YMaps, ZoomControl} from 'react-yandex-maps';
import {PointType} from '../../redux/map-reducer';
import pointer from './../../assets/pointer.svg';
import {CoordinatesType} from '../../App';

type YandexMapPorpsType = {
  getMapCoordinates: (e: any) => void
  pointList: Array<PointType>
  center: CoordinatesType
  zoom: number
  setIsLoadingProcess: (isLoadingProcess: boolean) => void
}

export const YandexMap = React.memo(
  ({getMapCoordinates, pointList, center, zoom}: YandexMapPorpsType) => {

  return (
    <div className={s.yandexMap}>
      <YMaps>
        <div>
          <Map className={s.Map}
               onDblClick={(e: any) => {
                 getMapCoordinates(e)
               }}
               state={{center, zoom: zoom}}>
            <ZoomControl options={{position: {right: 10, top: 10}}}/>
            <TypeSelector options={{position: {left: 10, top: 10}}}/>
            <RulerControl options={{position: {right: 50, top: 10}}}/>
            {pointList.map((obj: PointType) => <Placemark
                geometry={[+obj.latitude, +obj.longitude]}
                modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                properties={{hintContent: obj.address, balloonContent: obj.lastPointDistance,}}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: pointer,
                  iconImageSize: [100, 100],
                  iconImageOffset: [0, -100],
                }}
              />
            )}
          </Map>
        </div>
      </YMaps>
    </div>
  )
})
