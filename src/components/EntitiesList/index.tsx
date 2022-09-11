import React from 'react';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';
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
import styled from 'styled-components';
import constants from '../../constants/router.constants';
import {useAppSelector, useAppDispatch} from '../../hooks/reactReduxHooks';
import DeleteDialog from '../DeleteDialog';
import {AddEntity} from '../AddEntity';
import {deleteEntity, updateEntity} from '../../features/entity/entitySlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const StyledAddEntity = styled(AddEntity)`
  width: '80%';
  padding: 20;
  display: 'inline';
  margin: '0 auto';
`;

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const [globalSuccessAlertOpen, setGlobalSuccessAlertOpen] =
    React.useState(false);
  const handleGlobalSuccessAlertOpen = () => setGlobalSuccessAlertOpen(true);

  const {t} = useTranslation();

  const skeletonArray = Array(10).fill('');

  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useLocation();
  // const entities = useEntities();
  const entities = useAppSelector((state) => state.entity.entities);
  const dispatch = useAppDispatch();
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDialog(false);
  };
  if (error)
    return (
      <Box sx={{width: '100%'}}>
        <Alert severity="error">
          <AlertTitle>{t<string>('common.error.title')}</AlertTitle>
          {t<string>('common.error.body')}
        </Alert>
      </Box>
    );

  return (
    <>
      <EntitiesListWrapper>
        <DeleteDialog
          open={openDialog}
          handleAgree={() => {
            dispatch(deleteEntity(1));
            handleCloseDeleteDialog();
          }}
          handleClose={handleCloseDeleteDialog}
        />
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>{t<string>('entity.name')}</TableCell>
              <TableCell>{t<string>('entity.score')}</TableCell>
              <TableCell>{t<string>('entity.actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading
              ? skeletonArray.map(() => (
                  <TableRow>
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
                  <TableRow key={entity.id}>
                    <TableCell
                      sx={{cursor: 'pointer'}}
                      data-testid="row-entity-id"
                      data-entityid={entity.id}
                      onClick={() => {
                        setLocation(constants.router.entity_prefix + entity.id);
                      }}>
                      {entity.name}
                    </TableCell>
                    <TableCell>{entity.score}</TableCell>
                    <TableCell>
                      <ArrowUpwardIcon sx={{cursor: 'pointer'}} />
                      <EditIcon
                        sx={{cursor: 'pointer'}}
                        onClick={() => {
                          dispatch(updateEntity(entity));
                          // setLocation(constants.router.entity_prefix + entity.id);
                        }}
                      />
                      <DeleteIcon
                        sx={{cursor: 'pointer'}}
                        onClick={() => {
                          handleClickOpen();
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
          onClick={handleOpen}>
          <AddIcon />
        </Fab>
      </Box>

      <Box sx={{width: '100%'}}>
        <Collapse in={globalSuccessAlertOpen}>
          <Alert
            data-testid="success_alert_test_id"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}>
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{mb: 2}}>
            {t<string>('entity.add.successMessage')}
          </Alert>
        </Collapse>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        data-testid="modal_add_entity_test_id">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {t<string>('entity.add.modal.title')}
          </Typography>
          <StyledAddEntity
            handleClose={handleClose}
            handleSuccess={handleGlobalSuccessAlertOpen}
          />
        </Box>
      </Modal>
    </>
  );
};

const mapStateToProps = (state: any) => state.entitiesStore;

export default connect(mapStateToProps)(EntitiesList);
