import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import i18n from 'i18next';
import {modalBoxStyle, StyledAddEntityForm} from './styles';

type Props = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

const AddEntityModal = ({open, onClose, onSuccess}: Props) => (
  <Modal
    open={open}
    onClose={onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    data-testid="modal_add_entity_test_id">
    <Box sx={modalBoxStyle}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {i18n.t<string>('entity.add.modal.title')}
      </Typography>
      <StyledAddEntityForm onClose={onClose} onSuccess={onSuccess} />
    </Box>
  </Modal>
);

export default AddEntityModal;
