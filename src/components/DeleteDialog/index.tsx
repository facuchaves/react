import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import i18n from 'i18next';
import PropTypes from 'prop-types';

const DeleteDialog = ({
  open,
  handleAgree,
  handleClose,
}: {
  open: boolean;
  handleAgree: () => void;
  handleClose: () => void;
}) => (
  <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description">
    <DialogTitle id="alert-dialog-title">
      {i18n.t<string>('entity.delete.title')}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {i18n.t<string>('entity.delete.text')}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button
        onClick={handleClose}
        data-testid="close_delete_entity_dialog_button">
        {i18n.t<string>('entity.delete.close')}
      </Button>
      <Button
        onClick={handleAgree}
        autoFocus
        data-testid="agree_delete_entity_dialog_button">
        {i18n.t<string>('entity.delete.agree')}
      </Button>
    </DialogActions>
  </Dialog>
);

DeleteDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleAgree: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default DeleteDialog;
