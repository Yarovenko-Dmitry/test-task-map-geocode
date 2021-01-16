import React from 'react';
import s from './RequestHistoryTable.module.css'
import { DataGrid, ColDef, ValueGetterParams } from '@material-ui/data-grid';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {DisplayObjectType} from '../../redux/map-reducer';


export const RequestHistoryTable = () => {

  const rows = useSelector<AppStateType, Array<DisplayObjectType>>(state => state.mapPage.displayObjects);
  console.log('Table:::: displayObjects :', rows);
  return (
    <div className={s.historyTable}>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} />
      </div>
    </div>
  )
}


const columns: ColDef[] = [
  // { field: 'id', headerName: 'ID', width: 70 },
  { field: 'latitude', headerName: 'Latitude', width: 165 },
  { field: 'longitude', headerName: 'Longitude', width: 165 },
  {
    field: 'address',
    headerName: 'Address',
    // type: 'number',
    width: 300,
  },
  {
    field: 'distance',
    headerName: 'Distance',
    description: 'This column has a value getter and is not sortable.',
    // sortable: false,
    width: 90,
    valueGetter: (params: ValueGetterParams) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];
