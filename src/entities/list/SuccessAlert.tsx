import React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import i18n from 'i18next';

type Props = {
  open: boolean;
  onClose: () => void;
};

const SuccessAlert = ({open, onClose}: Props) => (
  <Box sx={{width: '100%'}}>
    <Collapse in={open}>
      <Alert
        data-testid="success_alert_test_id"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={onClose}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{mb: 2}}>
        {i18n.t<string>('entity.add.successMessage')}
      </Alert>
    </Collapse>
  </Box>
);

export default SuccessAlert;
