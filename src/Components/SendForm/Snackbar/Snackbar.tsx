import React, {useEffect} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';
import {makeStyles, Theme} from '@material-ui/core/styles';

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {width: '100%', '& > * + *': {marginTop: theme.spacing(2),},},
}));

type SnackbarMessagePropsType = {
  message: string | undefined
}

export const SnackbarMessage = ({message}: SnackbarMessagePropsType) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(true);
  }, [message])

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {message
        ? <Snackbar open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
          <Alert onClose={handleClose} severity="success">
            {message}
          </Alert>
        </Snackbar>
        : <></>}
    </div>
  );
}
