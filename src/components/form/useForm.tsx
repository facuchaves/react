import React, {useState} from 'react';
import {styled} from '@mui/material/styles';

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

const StyledForm = styled('form')(({theme}) => ({
  '& .MuiFormControl-root': {
    width: '80%',
    margin: theme.spacing(1),
  },
}));

export function Form(props: any) {
  const {children, ...other} = props;
  return (
    <StyledForm autoComplete="off" {...other}>
      {children}
    </StyledForm>
  );
}
