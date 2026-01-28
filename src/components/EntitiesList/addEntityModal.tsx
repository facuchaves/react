import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import i18n from 'i18next';
import {style, StyledAddEntity} from './styles';

type Props = {
  addEntityModalOpened: any;
  closeAddEntityModal: any;
  openSuccessAlert: any;
};

const AddEntityModal = ({
  addEntityModalOpened,
  closeAddEntityModal,
  openSuccessAlert,
}: Props) => (
  <Modal
    open={addEntityModalOpened}
    onClose={closeAddEntityModal}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    data-testid="modal_add_entity_test_id">
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {i18n.t<string>('entity.add.modal.title')}
      </Typography>
      <StyledAddEntity
        handleClose={closeAddEntityModal}
        handleSuccess={openSuccessAlert}
      />
    </Box>
  </Modal>
);

export default AddEntityModal;
