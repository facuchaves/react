import React, {useState} from 'react';
// import {makeStyles} from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import i18n from 'i18next';
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
import PropTypes from 'prop-types';
import {useAppDispatch} from '../../hooks/reactReduxHooks';
import {createEntity} from '../../features/entity/entitySlice';
import AddEntityMethods from './AddEntityHelper';
import {genderOptions, skillsOptions, statusOptions} from './staticData';
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

const AddEntity = ({
  handleSuccess,
  handleClose,
}: {
  handleSuccess: () => void;
  handleClose: () => void;
}) => {
  // const classes = useStyles();
  const [fieldErrors, setFieldErrors] = useState({} as any);
  const [errorMessages, setErrorMessages] = useState([] as string[]);
  const [loading, setLoading] = useState(false);
  const [entity, setEntity] = useState({
    name: '',
    state: 'pending',
  } as any);

  const dispatch = useAppDispatch();

  const validateName = (name: string) => {
    const [isValid, errorMessageKeys] = AddEntityMethods().validateName(name);
    if (isValid) {
      delete fieldErrors.name;
      setFieldErrors({...fieldErrors});
    } else {
      setFieldErrors({...fieldErrors, name: i18n.t(errorMessageKeys)});
    }
    return isValid;
  };

  const setEntityProp = (e: any, checked?: boolean) => {
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
      setErrorMessages([i18n.t('entity.form.validations.errors')]);
    } else {
      // dispatch( searchEntities(e) )
      // await sleep(1000)
      // const res = await createEntity(entity);
      // if (res.statusCode === 200) {
      //   handleSuccess();
      //   close();
      // } else if (res.statusCode === 400) {
      //   setErrorMessages(res.message);
      // } else {
      //   setErrorMessages([t('entity.form.error.generic')]);
      // }
      dispatch(createEntity({id: 100, name: entity.name, score: 99}));
      handleSuccess();
      close();
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
            <InputLabel> {i18n.t<string>('entity.add.state')} </InputLabel>
            <Select
              name="state"
              value={entity.state}
              label={i18n.t<string>('entity.add.state')}
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
            {i18n.t<string>('entity.add.gender')}
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
              {i18n.t<string>('entity.add.save')}
            </LoadingButton>
            <Button
              variant="text"
              onClick={close}
              data-testid="close_modal_add_entity_button_id">
              {' '}
              {i18n.t<string>('entity.add.cancel')}{' '}
            </Button>
          </Stack>
        </FormGroup>
      </FormControl>
    </form>
  );
};

AddEntity.propTypes = {
  handleSuccess: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AddEntity;
