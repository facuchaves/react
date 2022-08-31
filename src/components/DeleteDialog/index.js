import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useTranslation} from 'react-i18next';

const DeleteDialog = (props) => {
  const {t} = useTranslation();
  const {open, handleAgree, handleClose} = props;

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {t('entity.delete.title')}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {t('entity.delete.text')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t('entity.delete.close')}</Button>
          <Button onClick={handleAgree} autoFocus>
            {t('entity.delete.agree')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteDialog;
