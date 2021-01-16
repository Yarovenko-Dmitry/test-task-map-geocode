import React, {useEffect, useState} from 'react';
import s from './SendForm.module.css';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import Button from '@material-ui/core/Button';
import {TextField} from '@material-ui/core';
import {DisplayObjectType, geocodeNewObject} from '../../redux/map-reducer';
import {AppStateType} from '../../redux/redux-store';
import {PopoverMessage} from '../Popover/PopoverMessage';

type SendFormPropsType = {
  currentObject: DisplayObjectType
}
export type PreviousCoordinatesType = [string, string]


export const SendForm = ({currentObject}: SendFormPropsType) => {
  let address = currentObject.address
  useEffect(() => {
    address = currentObject.address
  }, [currentObject.address])

  let [previousCoordinates, setPreviousCoordinates] = useState<PreviousCoordinatesType>(['', ''])

  // console.log('currentObject in SendForm:', currentObject);
  const dispatch = useDispatch();

  // let address = currentObject.address
  // if(currentDisplayObject?.id) {
  //   address = currentDisplayObject.address
  // }

  const formik: any = useFormik({
    initialValues: {
      latitude: currentObject.latitude,
      longitude: currentObject.longitude,
      address: currentObject.address
    },
    onSubmit: values => {
      // const {latitude, longitude} = values
      dispatch(geocodeNewObject(currentObject, previousCoordinates));
      setPreviousCoordinates([currentObject.latitude, currentObject.longitude])
    },
  });
  // console.log('formik :', formik)
  return (
    <><PopoverMessage
      address={address}
    />
      <div className={s.sendForm}>
        SendForm
        <form onSubmit={formik.handleSubmit}
              noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="latitude"
            type="text"
            name="latitude"
            label="Latitude"
            autoFocus
            onChange={formik.handleChange}
            value={currentObject.latitude}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="longitude"
            name="longitude"
            label="Longitude"
            type="text"
            onChange={formik.handleChange}
            value={currentObject.longitude}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="address"
            name="address"
            // label="Address"
            type="text"
            onChange={formik.handleChange}
            value={address}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Geocode
          </Button>
        </form>
      </div>
    </>
  )
}