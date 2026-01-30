import React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import i18n from 'i18next';

const EntitiesError = () => (
  <Box sx={{width: '100%'}}>
    <Alert severity="error">
      <AlertTitle>{i18n.t<string>('common.error.title')}</AlertTitle>
      {i18n.t<string>('common.error.body')}
    </Alert>
  </Box>
);

export default EntitiesError;
