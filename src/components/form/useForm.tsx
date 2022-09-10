import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core';

export const useForm = (
  initialFValues: any,
  validateOnChange = false,
  validate = (value: any) => value,
) => {
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (
    e: React.ChangeEvent<{name: string; value: any}>,
  ) => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) validate({[name]: value});
  };

  const resetForm = () => {
    setValues(initialFValues);
    setErrors({});
  };

  return {values, setValues, errors, setErrors, handleInputChange, resetForm};
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}));

export function Form(props: any) {
  const classes = useStyles();
  const {children, ...other} = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <form className={classes.root} autoComplete="off" {...other}>
      {children}
    </form>
  );
}
