import React from 'react';
import s from './LoadingProcess.module.css';
import {CircularProgress} from '@material-ui/core';

export const LoadingProcess = () => {

  return (
    <CircularProgress className={s.loadingProcess}/>
  );
}

