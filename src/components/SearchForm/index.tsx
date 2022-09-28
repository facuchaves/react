import React from 'react';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';
import {useForm} from '../form/useForm';

const Form = styled.form`
  display: inline-flex;
  margin: 0 auto;
`;

const initialFValues = {
  q: '',
  state: 'OPEN',
};

const SearchForm = () => {
  const {t} = useTranslation();

  const {values, handleInputChange} = useForm(initialFValues, true, () => {});

  const handleSubmitInternal = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handleSubmit(values);
  };

  const handleSwitchChange = (event: any) => {
    // eslint-disable-next-line no-param-reassign
    event.target.value = event.target.value === 'OPEN' ? 'CLOSED' : 'OPEN';
    handleInputChange(event);
  };

  return (
    <Form
      onSubmit={handleSubmitInternal}
      data-testid="search_entity_from_test_id">
      <TextField
        variant="outlined"
        name="q"
        value={values.q}
        onChange={handleInputChange}
      />

      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>{t<string>('common.closed')}</Typography>
        <Switch
          defaultChecked
          name="state"
          value={values.state}
          onClick={handleSwitchChange}
        />
        <Typography>{t<string>('common.open')}</Typography>
      </Stack>

      <Button variant="outlined" type="submit">
        {' '}
        <SearchIcon />{' '}
      </Button>
    </Form>
  );
};

export default SearchForm;
