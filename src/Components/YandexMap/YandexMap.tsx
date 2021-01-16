import React from 'react';
import s from './YandexMap.module.css'
import {Map, RulerControl, Placemark, TypeSelector, YMaps, ZoomControl} from 'react-yandex-maps';
import {DisplayObjectType} from '../../redux/map-reducer';
import pointer from './../../assets/pointer.svg';

type YandexMapPorpsType = {
  getMapCoordinates: (e: any) => void
  displayObjects: Array<DisplayObjectType>
}
export const YandexMap = React.memo(({getMapCoordinates, displayObjects}: YandexMapPorpsType) => {
  return (
    <div className={s.yandexMap}>
      <YMaps>
        <div>
          <Map className={s.Map}
               onDblClick={(e:any) => {
                 getMapCoordinates(e)
               }}
               state={{center: [53.905957, 27.556118], zoom: 20}}>
            <ZoomControl options={{position: {right: 10, top: 10}}}/>
            <TypeSelector options={{position: {left: 10, top: 10}}}/>
            <RulerControl options={{position: {right: 50, top: 10}}}/>
            {/*    {props.displaySearchObjects.map((displaySearchObject: displaySearchObjectType) => <Placemark
                geometry={[displaySearchObject.newSchoolLatitude, displaySearchObject.newSchoolLongitude]}
                modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                properties={{
                  hintContent: displaySearchObject.schoolName,
                  balloonContent: displaySearchObject.description,
                }}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: pointer,
                  iconImageSize: [40, 50],
                  iconImageOffset: [-20, -55],
                }}
              />
            )}*/}
             {displayObjects.map((obj: DisplayObjectType) => <Placemark
                geometry={[+obj.latitude, +obj.longitude]}
                modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                properties={{
                  hintContent: obj.address,
                  balloonContent: obj.lastPointDistance,
                }}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: pointer,
                  iconImageSize: [100, 100],
                  iconImageOffset: [, -100],
                }}
              />
            )}
          </Map>
        </div>
      </YMaps>
    </div>
  )
})
