import React from 'react';
import {useLocation} from 'wouter';
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
import SuccessAlert from './successAlert';
import OpenAddEntityModalButton from './openAddEntityModalButton';

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

      <OpenAddEntityModalButton onClick={openAddEntityModal} />

      <SuccessAlert />

      <AddEntityModal
        addEntityModalOpened={addEntityModalOpened}
        closeAddEntityModal={closeAddEntityModal}
        openSuccessAlert={openSuccessAlert}
      />
    </>
  );
};

export default EntitiesList;
