import React from 'react';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {PointType} from '../../redux/map-reducer';
import s from './ResultingDistance.module.css';

export const ResultingDistance = () => {
  const displayObjects = useSelector<AppStateType, Array<PointType>>(state => state.mapPage.pointList);

  const resultingDistance = displayObjects.reduce(function (result: number, currentObj: PointType) {
    let distance: number = 0;
    if (currentObj.lastPointDistance) {
      distance = Number(currentObj.lastPointDistance.replace(/,/, '.').replace(/[^0-9\.-]+/g, ""))

      if (currentObj.lastPointDistance.includes('км') || currentObj.lastPointDistance.includes('km')) {
        return result + distance;
      }
      if (currentObj.lastPointDistance.includes('м') || currentObj.lastPointDistance.includes('m')) {
        return result + distance / 1000;
      }
    }
    return result + distance;
  }, 0);

  return (
    <div className={s.resultingDistance}>
      Resulting distance {resultingDistance.toFixed(3)} км
    </div>
  );
}

