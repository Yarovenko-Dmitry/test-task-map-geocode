import React, {useCallback, useState} from 'react';
import './App.css';
import {YandexMap} from './Components/YandexMap/YandexMap';
import {SendForm} from './Components/SendForm/SendForm';
import {RequestHistoryTable} from './Components/RequestHistoryTable/RequestHistoryTable';
import {DisplayObjectType} from './redux/map-reducer';
import {v1} from 'uuid';
import {useSelector} from 'react-redux';
import {AppStateType} from './redux/redux-store';


function App() {

  const [currentObject, setCurrentObject] = useState<DisplayObjectType>({
    id: '',
    latitude: '',
    longitude: ''
  });

  const displayObjects = useSelector<AppStateType, Array<DisplayObjectType>>(state => state.mapPage.displayObjects);

  // console.log('App:::: displayObjects :', displayObjects);

  const getMapCoordinates = useCallback((e: any) => {
    let newObjectCoordinates = e.get('coords');
    const newObject: DisplayObjectType = {
      id: v1(),
      latitude: newObjectCoordinates[0].toString(),
      longitude: newObjectCoordinates[1].toString()
    }
    setCurrentObject(newObject);
    console.log('newObject in App:', newObject)
  }, [])
  return (
    <div className="App">
      <div>
        <YandexMap
          getMapCoordinates={getMapCoordinates}
          displayObjects={displayObjects}
        />
      </div>
      <div>
          <SendForm
            currentObject={currentObject}/>
          <RequestHistoryTable/>
      </div>
    </div>
  );
};

export default App;
