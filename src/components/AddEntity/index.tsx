import React, {SyntheticEvent, useState} from 'react';
// import {makeStyles} from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import {useTranslation} from 'react-i18next';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import styled from 'styled-components';
// import SearchIcon from '@mui/icons-material/Search';
// import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
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
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import {createEntity} from '../../services/entityService';
// import Alert from '@mui/material/Alert';
// import {useForm} from '../form/useForm';
// import {searchEntities} from '../../redux/actions';

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const AddEntityMethods = () => {
  const validateName: (name: string) => [boolean, string] = (name: string) => {
    if (name) {
      return [true, ''];
    }
    return [false, 'entity.form.validations.required'];
  };

  return {validateName};
};

export const AddEntity = ({
  handleSuccess,
  handleClose,
}: {
  handleSuccess: () => void;
  handleClose: () => void;
}) => {
  const {t} = useTranslation();
  // const classes = useStyles();
  const [fieldErrors, setFieldErrors] = useState({} as any);
  const [errorMessages, setErrorMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [entity, setEntity] = useState({
    name: '',
    state: 'pending',
  } as any);

  const skillsOptions = [
    {id: 1, value: 'nodejs', label: t('entity.skills.nodejs')},
    {id: 2, value: 'react', label: t('entity.skills.react')},
  ];

  const statusOptions = [
    {id: 1, value: 'pending', label: t('entity.state.pending')},
    {id: 2, value: 'confirmed', label: t('entity.state.confirmed')},
  ];

  const genderOptions = [
    {id: 1, value: 'female', label: t('entity.gender.female')},
    {id: 2, value: 'male', label: t('entity.gender.male')},
    {id: 3, value: 'other', label: t('entity.gender.other')},
  ];

  const validateName = (name: string) => {
    const [isValid, errorMessageKeys] = AddEntityMethods().validateName(name);
    if (isValid) {
      delete fieldErrors.name;
      setFieldErrors({...fieldErrors});
    } else {
      setFieldErrors({...fieldErrors, name: t(errorMessageKeys)});
    }
    return isValid;
  };

  const setEntityProp = (
    e: SyntheticEvent<Element, Event>,
    checked?: boolean,
  ) => {
    entity[e.target.name] = e.target.value;
    setEntity({...entity});
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateName(e.target.value);
    setEntityProp(e);
  };

  const validateForm = () => {
    let isValidForm = true;
    isValidForm = isValidForm && validateName(entity.name);
    return isValidForm;
  };

  const close = () => {
    handleClose();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    const isValidForm = validateForm();
    if (!isValidForm) {
      setErrorMessages([t('entity.form.validations.errors')]);
    } else {
      // dispatch( searchEntities(e) )
      // await sleep(1000)
      const res = await createEntity(entity);
      if (res.statusCode === 200) {
        handleSuccess();
        close();
      } else if (res.statusCode === 400) {
        setErrorMessages(res.message);
      } else {
        setErrorMessages([t('entity.form.error.generic')]);
      }
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} data-testid="add_entity_from_test_id">
      <FormControl>
        <FormGroup>
          <TextField
            margin="dense"
            variant="outlined"
            name="name"
            data-testid="name_test_id"
            value={entity.name}
            onChange={handleNameChange}
            error={fieldErrors.name?.length > 0}
            helperText={fieldErrors.name || ' '}
          />

          {skillsOptions.map((skillsOption) => (
            <FormControlLabel
              key={skillsOption.id}
              control={<Checkbox />}
              name="skill"
              value={skillsOption.value}
              label={skillsOption.label}
              onChange={setEntityProp}
            />
          ))}

          <FormControl fullWidth>
            <InputLabel> {t<string>('entity.add.state')} </InputLabel>
            <Select
              name="state"
              value={entity.state}
              label={t<string>('entity.add.state')}
              // onChange={setEntityProp}
            >
              {statusOptions.map((statusOption) => (
                <MenuItem key={statusOption.id} value={statusOption.value}>
                  {statusOption.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormLabel id="demo-radio-buttons-group-label">
            {t<string>('entity.add.gender')}
          </FormLabel>
          <RadioGroup
            name="gender"
            aria-labelledby="demo-radio-buttons-group-label"
            value={entity.gender}>
            {genderOptions.map((genderOption) => (
              <FormControlLabel
                key={genderOption.id}
                onChange={setEntityProp}
                value={genderOption.value}
                control={<Radio />}
                label={genderOption.label}
              />
            ))}
          </RadioGroup>

          {errorMessages.map((errorMessage, index) => (
            <Typography
              key={errorMessage}
              data-testid={`error_message_id_${index}`}>
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
              data-testid="save_entity_button_id">
              {t<string>('entity.add.save')}
            </LoadingButton>
            <Button
              variant="text"
              onClick={close}
              data-testid="close_modal_add_entity_button_id">
              {' '}
              {t<string>('entity.add.cancel')}{' '}
            </Button>
          </Stack>
        </FormGroup>
      </FormControl>
    </form>
  );
};
