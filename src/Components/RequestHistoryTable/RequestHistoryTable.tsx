import React from 'react';
import s from './RequestHistoryTable.module.css'
import {ColDef, DataGrid} from '@material-ui/data-grid';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {DisplayObjectType} from '../../redux/map-reducer';

export const RequestHistoryTable = () => {

  const rows = useSelector<AppStateType, Array<DisplayObjectType>>(state => state.mapPage.displayObjects);
  // console.log('Table:::: displayObjects :', rows);
  return (
    <div className={s.historyTable}>
      <div style={{height: 400, width: '100%'}}>
        <DataGrid rows={rows} columns={columns} pageSize={5}/>
      </div>
    </div>
  )
}

const columns: ColDef[] = [
  {field: 'latitude', headerName: 'Latitude', width: 165},
  {field: 'longitude', headerName: 'Longitude', width: 165},
  {field: 'address', headerName: 'Address', width: 300},
  {field: 'lastPointDistance', headerName: 'Distance', width: 90},
];
