import React from 'react';
import {useLocation} from 'wouter';
import Box from '@mui/material/Box';
import {Grid, Paper} from '@mui/material';
import Alert from '@mui/material/Alert';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
// import EntitiesActionsButton from '../EntitiesActionsButton';
// import {gql, useQuery} from '@apollo/client';
import AlertTitle from '@mui/material/AlertTitle';
import Skeleton from '@mui/material/Skeleton';
import i18n from 'i18next';
import constants from '../../constants/router.constants';
import DeleteDialog from '../DeleteDialog';
import {
  deleteEntity,
  EntityStatus,
  updateEntity,
} from '../../features/entity/entitySlice';
import {style, StyledAddEntity} from './styles';
import useEntities from '../../hooks/useEntities';

const EntitiesListWrapper = ({children}: {children: any}) => (
  <Grid item xs={12}>
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        height: 400,
        width: '100%',
      }}>
      {children}
    </Paper>
  </Grid>
);

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

  const skeletonArray = [...Array(10).keys()];
  const {status, entities, dispatch} = useEntities();
  const loading = [EntityStatus.IDLE, EntityStatus.LOADING].includes(status);

  const [currentEntity, setCurrentEntity] = React.useState({} as any);

  if (EntityStatus.ERROR === status)
    return (
      <Box sx={{width: '100%'}}>
        <Alert severity="error">
          <AlertTitle>{i18n.t<string>('common.error.title')}</AlertTitle>
          {i18n.t<string>('common.error.body')}
        </Alert>
      </Box>
    );

  return (
    <>
      <EntitiesListWrapper>
        <DeleteDialog
          open={deleteEntityDialogOpened}
          handleAgree={() => {
            dispatch(deleteEntity(currentEntity.id));
            closeDeleteEntityDialog();
          }}
          handleClose={closeDeleteEntityDialog}
        />
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>{i18n.t<string>('entity.name')}</TableCell>
              <TableCell>{i18n.t<string>('entity.score')}</TableCell>
              <TableCell>{i18n.t<string>('entity.actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading
              ? skeletonArray.map((skeletonElem: number) => (
                  <TableRow key={skeletonElem}>
                    <TableCell sx={{cursor: 'pointer'}}>
                      <Skeleton variant="text" sx={{fontSize: '1rem'}} />
                    </TableCell>
                    <TableCell>
                      <Skeleton variant="text" sx={{fontSize: '1rem'}} />
                    </TableCell>
                    <TableCell>
                      {' '}
                      <Skeleton variant="text" sx={{fontSize: '1rem'}} />
                    </TableCell>
                  </TableRow>
                ))
              : entities.map((entity: any) => (
                  <TableRow
                    key={entity.entity_id}
                    data-testid={`table-row-entity-id-${entity.id}`}>
                    <TableCell
                      sx={{cursor: 'pointer'}}
                      data-testid={`row-entity-name-${entity.id}`}
                      onClick={() => {
                        setLocation(constants.router.entity_prefix + entity.id);
                      }}>
                      {entity.name}
                    </TableCell>
                    <TableCell>{entity.score}</TableCell>
                    <TableCell>
                      <ArrowUpwardIcon sx={{cursor: 'pointer'}} />
                      <EditIcon
                        data-testid={`button-edit-entity-id-${entity.id}`}
                        sx={{cursor: 'pointer'}}
                        onClick={() => {
                          dispatch(updateEntity(entity));
                          // setLocation(constants.router.entity_prefix + entity.id);
                        }}
                      />
                      <DeleteIcon
                        sx={{cursor: 'pointer'}}
                        data-testid={`button-delete-entity-id-${entity.id}`}
                        onClick={() => {
                          setCurrentEntity(entity);
                          openDeleteEntityDialog();
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </EntitiesListWrapper>

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
    </>
  );
};

export default EntitiesList;
