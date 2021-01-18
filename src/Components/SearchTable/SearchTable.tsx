import React from 'react';
import s from './SearchTable.module.css'
import {ColDef, DataGrid} from '@material-ui/data-grid';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {PointType} from '../../redux/map-reducer';

export const SearchTable = () => {

  const rows = useSelector<AppStateType, Array<PointType>>(state => state.mapPage.pointList);
  return (
    <div className={s.historyTable}>
      <div style={{height: 400, width: '100%'}}>
        <DataGrid rows={rows} columns={columns} className={s.TEST} pageSize={5}/>
      </div>
    </div>
  )
}

const columns: ColDef[] = [
  {field: 'latitude', align: 'center', headerName: 'Latitude', type: 'number', width: 180},
  {field: 'longitude', align: 'center', headerName: 'Longitude', type: 'number', width: 180},
  {field: 'address', align: 'center', headerName: 'Address', type: 'string', width: 450},
  {field: 'lastPointDistance', align: 'center', headerName: 'Distance', type: 'string', width: 110},
];
