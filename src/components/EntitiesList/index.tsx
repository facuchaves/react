import React from 'react';
import {useLocation} from 'wouter';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import i18n from 'i18next';
import constants from '../../constants/router.constants';
import DeleteDialog from '../DeleteDialog';
import {
  deleteEntity,
  EntityStatus,
  updateEntity,
} from '../../features/entity/entitySlice';
import useEntities from '../../hooks/useEntities';
import EntitiesTable from './entityTable';
import EntitiesError from './entitiesError';
import AddEntityModal from './addEntityModal';

const EntitiesList = ({query}: {query?: any}) => {
  const [addEntityModalOpened, setAddEntityModalOpened] = React.useState(false);
  const openAddEntityModal = () => setAddEntityModalOpened(true);
  const closeAddEntityModal = () => setAddEntityModalOpened(false);

  const [successAlertOpened, setSuccessAlertOpened] = React.useState(false);
  const openSuccessAlert = () => setSuccessAlertOpened(true);
  const closeSuccessAlert = () => setSuccessAlertOpened(false);

  const [deleteEntityDialogOpened, setDeleteEntityDialogOpened] =
    React.useState(false);

  const openDeleteEntityDialog = () => setDeleteEntityDialogOpened(true);
  const closeDeleteEntityDialog = () => setDeleteEntityDialogOpened(false);

  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useLocation();

  const {status, entities, dispatch} = useEntities();
  const loading = [EntityStatus.IDLE, EntityStatus.LOADING].includes(status);

  const [currentEntity, setCurrentEntity] = React.useState({} as any);

  if (EntityStatus.ERROR === status) return <EntitiesError />;

  return (
    <>
      <EntitiesTable
        entities={entities}
        loading={loading}
        onRowClick={(id) => setLocation(constants.router.entity_prefix + id)}
        onEdit={(entity) => dispatch(updateEntity(entity))}
        onDelete={(entity) => {
          setCurrentEntity(entity);
          openDeleteEntityDialog();
        }}
      />

      <DeleteDialog
        open={deleteEntityDialogOpened}
        handleAgree={() => {
          if (currentEntity) {
            dispatch(deleteEntity(currentEntity.id));
          }
          closeDeleteEntityDialog();
        }}
        handleClose={() => closeDeleteEntityDialog()}
      />

      <Box sx={{'& > :not(style)': {m: 1}}}>
        <Fab
          data-testid="open_add_entity_modal_button_id"
          color="primary"
          aria-label="add"
          sx={{float: ' right'}}
          onClick={openAddEntityModal}>
          <AddIcon />
        </Fab>
      </Box>

      <Box sx={{width: '100%'}}>
        <Collapse in={successAlertOpened}>
          <Alert
            data-testid="success_alert_test_id"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={closeSuccessAlert}>
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{mb: 2}}>
            {i18n.t<string>('entity.add.successMessage')}
          </Alert>
        </Collapse>
      </Box>

      <AddEntityModal
        addEntityModalOpened={addEntityModalOpened}
        closeAddEntityModal={closeAddEntityModal}
        openSuccessAlert={openSuccessAlert}
      />
    </>
  );
};

export default EntitiesList;
