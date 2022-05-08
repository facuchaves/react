import React from "react";
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useForm , Form } from "../form/useForm";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const initialFValues = {
  q: '',
  status: 'OPEN'
}

const SearchFormHome = (props) => {

  const { handleSubmit } = props;
  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('q' in fieldValues)
        temp.q = fieldValues.q ? "" : "This field is required."
    setErrors({
        ...temp
    })

    if (fieldValues === values)
        return Object.values(temp).every(x => x === "")
}

  const {
      values,
      errors,
      setErrors,
      handleInputChange,
      resetForm
  } = useForm(initialFValues, true, validate);

  const handleSubmitInternal = event => {
    event.preventDefault();
  //   if (validate()){
      handleSubmit(values);
  //     resetForm()
  // }
  }


  const handleSwitchChange = event => {
    if( "OPEN" === event.target.value ){
      event.target.value = "CLOSED"
    } else {
      event.target.value = "OPEN"
    }
    handleInputChange(event)
  }

  return (
    <div>

      <form onSubmit={handleSubmitInternal} style={{display: 'inline-flex'}}>
        <TextField 
              id="outlined-basic" 
              label="Outlined" 
              variant="outlined" 
              name="q"
              value={values.q}
              onChange={handleInputChange}/>
        
        <Typography>Closed</Typography>
        <Switch 
          {...label} 
          defaultChecked
          name="status"
          value={values.status}
          onClick={handleSwitchChange} />
        <Typography>Open</Typography>
        
        <Button variant="outlined" type="submit"> <SearchIcon/> </Button>
      </form>

    </div>
  );
};

//basicamente con el react.memo lo que hacemos es que solo se renderice este compoenente
// en el caso de que sus props se modifiquen
export default React.memo(SearchFormHome);
