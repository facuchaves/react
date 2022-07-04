import React , { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import { useTranslation } from "react-i18next";
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useForm } from "../form/useForm";
import Stack from '@mui/material/Stack';
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import { createEntity } from '../../services/entityService';
import { searchEntities } from '../../redux/actions';
import Alert from '@mui/material/Alert';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  pos: {
    marginBottom: 12,
  },
});

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const AddEntity = ( { handleSuccess, handleClose }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [fieldErrors, setFieldErrors] = useState({})
  const [errorMessages, setErrorMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [entity, setEntity] = useState({
      name: '',
      state: 'pending'
  })
    
  const skillsOptions = [
    { value: 'nodejs', label: t('entity.skills.nodejs') },
    { value: 'react', label: t('entity.skills.react') }
  ]

  const statusOptions = [
    { value: 'pending', label: t('entity.state.pending') },
    { value: 'confirmed', label: t('entity.state.confirmed') }
  ]

  const genderOptions = [
    { value: 'female', label: t('entity.gender.female') },
    { value: 'male', label: t('entity.gender.male') },
    { value: 'other', label: t('entity.gender.other') }
  ]

  const validateName = name => {
    const [isValid , errorMessageKeys] = AddEntityMethods().validateName(name)
    if ( isValid ){
      delete fieldErrors.name
      setFieldErrors( { ...fieldErrors } )
    } else {
      setFieldErrors( { ...fieldErrors , name: t(errorMessageKeys) } )
    }
    return isValid;
  }

  const handleNameChange = ( { target } ) => {
    validateName(target.value)
    setEntityProp(target)
  }

  const setEntityProp = ( {name , value} ) => {
    entity[name] = value
    setEntity( { ...entity} );
  }

  const validateForm = () => {
    let isValidForm = true
    isValidForm = isValidForm && validateName(entity.name)
    return isValidForm
  }

  const handleSubmit = async e => {
    e.preventDefault();

    setLoading( true );
    const isValidForm = validateForm()
    if( !isValidForm ){
      setErrorMessages( [t('entity.form.validations.errors')] );
    } else {
      // dispatch( searchEntities(e) )
      // await sleep(1000)
      const res = await createEntity(entity)
      if( res.statusCode === 200 ){
        handleSuccess();
        close();
      } else if( res.statusCode === 400 ){
        setErrorMessages( res.message );
      } else {
        setErrorMessages( [t('entity.form.error.generic')] );
      }

    }
    setLoading( false );
  }

  const close = () => {
    handleClose();
  }

  return (
    <>
      <form onSubmit={handleSubmit} test_id="add_entity_from_test_id">

      <FormControl>
        <FormGroup>
          <TextField margin="dense" variant="outlined" name="name" test_id="name_test_id" value={entity.name} onChange={handleNameChange} error ={ fieldErrors.name?.length > 0 } helperText={fieldErrors.name || " "} />
          
          { skillsOptions.map( (skillsOption , index) => <FormControlLabel key={index} control={<Checkbox />} name="skill" value={skillsOption.value} label={skillsOption.label} onChange={setEntityProp} /> ) }

          <FormControl fullWidth>
            <InputLabel> {t('entity.add.state')} </InputLabel>
            <Select
              name="state"
              value={entity.state}
              label={t('entity.add.state')}
              // onChange={setEntityProp}
            >
              { statusOptions.map( ( statusOption, index ) => <MenuItem key={index} value={statusOption.value}>{statusOption.label}</MenuItem> ) }
            </Select>

          </FormControl>

          <FormLabel id="demo-radio-buttons-group-label">{t('entity.add.gender')}</FormLabel>
          <RadioGroup
            name="gender"
            aria-labelledby="demo-radio-buttons-group-label"
            value={entity.gender}
          >
            { genderOptions.map( (genderOption , index) => <FormControlLabel key={index} onChange={setEntityProp} value={genderOption.value} control={<Radio />} label={genderOption.label} /> )}
          </RadioGroup>

          {errorMessages.map( (errorMessage , index ) => (
            <Typography key={index} test_id={`error_message_id_${index}`} >
              {errorMessage}
            </Typography>
          ))}

          <Stack spacing={2} direction="row">
              <LoadingButton
                size="small"
                loading={loading}
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
                type="submit"
                test_id="save_entity_button_id"
            >
              {t('entity.add.save')}
            </LoadingButton>
            <Button variant="text" onClick={close} test_id="close_modal_add_entity_button_id"> {t('entity.add.cancel')} </Button>
          </Stack>

        </FormGroup>
      </FormControl>
    </form>
  </>
  );
}


export const AddEntityMethods = () => {
  
  const validateName = name => {
    if ( name ){
      return [ true , '' ] 
    } else {
      return [ false , 'entity.form.validations.required' ] 
    }
  }

  return {validateName}

}