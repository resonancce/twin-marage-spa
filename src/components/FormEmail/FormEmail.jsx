import React, { memo, useEffect, useMemo, useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import Parse from "parse";
import AOS from "aos";
import { makeStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './FormEmail.module.scss';

//PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.initialize(
  process.env.REACT_APP_BACK4APP_APPLICATION_KEY,
  process.env.REACT_APP_BACK4APP_JS_KEY
);
Parse.serverURL = 'https://parseapi.back4app.com/';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '760px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '& .MuiTextField-root': {
      width: '100%',
      marginBottom: theme.spacing(1),
    },
    '& .MuiTextField-root:not(:first-child)': {
      marginBottom: theme.spacing(4),
      width: '100%'
    },
    '& .MuiInputLabel-formControl': {
      color: 'white',
    },
    '& label.Mui-focused': {
      color: '#2196f3',
    },
    "& .MuiInput-underline:before": {
      borderColor: 'white',
    },
    "& .MuiInputBase-input": {
      color: 'white',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2196f3',
      },
    },
    '& .MuiButtonBase-root': {
      backgroundColor: 'white',
      color: 'black',
      fontSize: '16px',
      width: '100%',
      height: '60px',
      borderRadius: '30px',
      maxWidth: '320px',
      '&.Mui-disabled': {
        opacity: '.3'
      },
      '&:hover': {
        backgroundColor: '#2196f3',
      },
    },
  },
  loader: {
    marginLeft: theme.spacing(2),
  }
}));

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !re.test(String(email).toLowerCase());
}

const SUCCESS_MESSAGE = 'Успешно отравлено!';
const ERROR_MESSAGE = 'Ошибка отправки!';
const SNACK_BAR_POSITION = { vertical: 'top', horizontal: 'center' };

const FormEmail = () => {
  const [{
    mail,
    fio,
    link,
    describe,
  }, setFormField] = useState({
    mail: '',
    fio: '',
    link: '',
    describe: '',
  });
  const [errorMail, setErrorMail] = useState(false);
  const [isLoading, setLoader] = useState(false);
  const [{
    isShowSnackbar,
    message,
    status,
  }, setResponse] = useState({
    isShowSnackbar: false,
    message: '',
    status: 'success',
  });

  const classes = useStyles();

  const validateMailHandler = () => {
    const isValid = validateEmail(mail);
    setErrorMail(isValid);
  };

  const isValidField = useMemo(() => (
    Boolean(
      link
      && fio
      && describe
      && !errorMail
      && (mail)
    )
  ),[errorMail, describe, link, fio, mail]);

  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    setFormField((prevState => ({
      ...prevState,
      [name]: value
    })))
  };

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 700,
      easing: 'ease-in-sine',
      delay: 150,
    });
  }, []);

  const sendFormHandler = async () => {
    setLoader(true);
    await Parse.Cloud.run('sendForm', {
      mail,
      fio,
      link,
      describe,
    }).then((result) => {
      if (result === 'ok') {
        setResponse({
          isShowSnackbar: true,
          message: SUCCESS_MESSAGE,
          status: 'success'
        });
      } else {
        setResponse({
          isShowSnackbar: true,
          message: ERROR_MESSAGE,
          status: 'error'
        });
      }
    });
    setLoader(false);
    setFormField({
      mail: '',
      fio: '',
      link: '',
      describe: '',
    })
  };

  const closeSnackbar = () => {
    setResponse((prevState) =>
      ({ ...prevState, isShowSnackbar: false })
    )
  };

  return (
     <div
       id="formMail"
       className={styles.formContainer}
     >
       <div
         className={styles.formEmail}
         data-aos="zoom-out"
       >
         <h2 className={styles.title}>
           Оставить заявку
         </h2>
         <form
           className={cn([classes.root, { [styles.disabledForm]: isLoading}])}
         >
           <TextField
             variant="outlined"
             label="Адрес электронной почты"
             value={mail}
             onChange={onChangeHandler}
             name="mail"
             onBlur={validateMailHandler}
             error={errorMail}
             helperText='Введите корректный email'
           />
           <TextField
             variant="outlined"
             label="ФИО"
             value={fio}
             name="fio"
             onChange={onChangeHandler}
           />
           <TextField
             variant="outlined"
             label="Ссылка на сайт или социальные сети"
             value={link}
             name="link"
             onChange={onChangeHandler}
           />
           <TextField
             label="Интересующие услуги / Задачи проекта"
             multiline
             rows={10}
             variant="outlined"
             value={describe}
             name="describe"
             onChange={onChangeHandler}
           />
           <Button
             variant="contained"
             color="secondary"
             onSubmit={sendFormHandler}
             onClick={sendFormHandler}
             disabled={!isValidField || isLoading}
           >
             Отправить
             {isLoading && (
               <CircularProgress
                 className={classes.loader}
                 size={20}
               />
             )}
           </Button>
         </form>
       </div>
       <Snackbar
         anchorOrigin={SNACK_BAR_POSITION}
         open={isShowSnackbar}
         autoHideDuration={2000}
         onClose={closeSnackbar}
       >
         <Alert severity={status}>
           {message}
         </Alert>
       </Snackbar>
     </div>
  );
}

export default memo(FormEmail);
