import React from "react";
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useForm } from "../form/useForm";
import Stack from '@mui/material/Stack';
import styled from 'styled-components';
import { useTranslation } from "react-i18next";

const Form = styled.form`
    display: inline-flex;
    margin: 0 auto;
`;

const initialFValues = {
  q: '',
  state: 'OPEN'
}

 const SearchForm = ({ handleSubmit }) => {
  const { t } = useTranslation();

  const { values, handleInputChange } = useForm(initialFValues, true, ()=>{});

  const handleSubmitInternal = event => {
    event.preventDefault();
    handleSubmit(values);
  }


  const handleSwitchChange = event => {
    event.target.value = "OPEN" === event.target.value ? "CLOSED" : "OPEN";
    handleInputChange(event)
  }

  return (
    <>
      <Form onSubmit={handleSubmitInternal} test_id="search_entity_from_test_id">

        <TextField variant="outlined" name="q" value={values.q} onChange={handleInputChange}/>
        
        <Stack direction="row" spacing={1} alignItems="center">
          
          <Typography>{t('common.closed')}</Typography>
          <Switch defaultChecked name="state" value={values.state} onClick={handleSwitchChange} />
          <Typography>{t('common.open')}</Typography>

        </Stack>
        
        <Button variant="outlined" type="submit"> <SearchIcon/> </Button>

      </Form>
    </>
  );
};

export default SearchForm;
