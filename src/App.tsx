import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import {YandexMap} from './Components/YandexMap/YandexMap';
import {SendForm} from './Components/SendForm/SendForm';
import {SearchTable} from './Components/SearchTable/SearchTable';
import {PointType} from './redux/map-reducer';
import {v1} from 'uuid';
import {useSelector} from 'react-redux';
import {ResultingDistance} from './Components/ResultingDistance/ResultingDistance';
import {pointListSelector} from './redux/map-selectors';
import {CircularProgress} from '@material-ui/core';
import {LoadingProcess} from './Components/LoadingProcess/LoadingProcess';

export type CoordinatesType = [number, number];
export type PreviousCoordinatesType = [string, string];

const App = () => {

    const [currentPoint, setCurrentPoint] = useState<PointType>({id: '', latitude: '', longitude: '', address: ''});
    const [center, setCenter] = useState<CoordinatesType>([53.91046755609704, 27.5616049442719]);
    const [zoom, setZoom] = useState<number>(18);
    const [isLoadingProcess, setIsLoadingProcess] = useState<boolean>(false);
    const pointList = useSelector(pointListSelector);

  const initialArr: PreviousCoordinatesType = ['', '']
  let [previousCoordinates, setPreviousCoordinates] = useState<PreviousCoordinatesType>(initialArr)

    useEffect(() => {
      const pointFind = pointList.find(obj => obj.id === currentPoint.id)
      pointFind && setCurrentPoint(pointFind)
      setIsLoadingProcess(false)
    }, [pointList])

    const getMapPointCoordinates = useCallback((e: any) => {
      e.preventDefault();
      setCurrentPoint({id: '', latitude: '', longitude: '', address: ''});
      setCenter(e.get('target').getCenter());
      setZoom(e.get('target').getZoom());

      let newPointCoordinates = e.get('coords');
      const newPoint: PointType = {
        id: v1(),
        latitude: newPointCoordinates[0].toString(),
        longitude: newPointCoordinates[1].toString()
      }
      setCurrentPoint(newPoint);
    }, [])

    return (
      <div className='app'>
        {isLoadingProcess
          ? <LoadingProcess/>
          : <>
            <div>
              <YandexMap
                getMapCoordinates={getMapPointCoordinates} pointList={pointList} center={center}
                zoom={zoom} setIsLoadingProcess={setIsLoadingProcess}
              />
            </div>
            <div className='infoBar'>
              <SendForm
                previousCoordinates={previousCoordinates}
              setPreviousCoordinates={setPreviousCoordinates}
                currentPoint={currentPoint}
                setIsLoadingProcess={setIsLoadingProcess}/>
              <SearchTable/>
              <ResultingDistance/>
            </div>
          </>
        }
      </div>
    );
  }
;

export default App;
