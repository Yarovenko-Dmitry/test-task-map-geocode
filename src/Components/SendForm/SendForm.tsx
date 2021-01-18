import React, {useEffect} from 'react';
import s from './SendForm.module.css';
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import Button from '@material-ui/core/Button';
import {TextField} from '@material-ui/core';
import {geocodeNewPoint, PointType} from '../../redux/map-reducer';
import {SnackbarMessage} from './Snackbar/Snackbar';
import {PreviousCoordinatesType} from '../../App';

type SendFormPropsType = {
  currentPoint: PointType
  setIsLoadingProcess: (isLoadingProcess: boolean) => void
  previousCoordinates: PreviousCoordinatesType
  setPreviousCoordinates: (previousCoordinates: PreviousCoordinatesType) => void
}

export const SendForm = React.memo(({currentPoint, setIsLoadingProcess, previousCoordinates, setPreviousCoordinates}: SendFormPropsType) => {

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoadingProcess(false)
  }, [currentPoint])

  const formik: any = useFormik({
    initialValues: {
      latitude: currentPoint.latitude,
      longitude: currentPoint.longitude,
      address: currentPoint.address
    },
    onSubmit: () => {
      dispatch(geocodeNewPoint(currentPoint, previousCoordinates));
      setPreviousCoordinates([currentPoint.latitude, currentPoint.longitude])
      setIsLoadingProcess(true)
      setTimeout(()=>{
        setIsLoadingProcess(false)
      }, 3000)
    },
  });

  const textField = (id: string, name: string, label: string, value: string | undefined) => {
    return (
      <TextField
        variant='outlined'
        margin='normal'
        fullWidth
        id={id}
        type='text'
        name={name}
        label={label}
        onChange={formik.handleChange}
        value={value}
      />)
  }

  return (
    <>
      <SnackbarMessage message={currentPoint.address}/>
      <div className={s.sendForm}>
        <form onSubmit={formik.handleSubmit}
              noValidate>
          {textField('latitude', 'latitude', 'Latitude', currentPoint.latitude)}
          {textField('longitude', 'longitude', 'Latitude', currentPoint.longitude)}
          {textField('address', 'address', '', currentPoint.address)}
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
          >
            Geocode
          </Button>
        </form>
      </div>
    </>
  )
});