import React from 'react';
import {Grid, Paper} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import i18n from 'i18next';
import SkeletonRow from './skeletonRow';
import EntityRow from './entityRow';

type Entity = {
  id: number;
  name: string;
  score: number;
};

type Props = {
  entities: Entity[];
  loading: boolean;
  onRowClick: (id: Entity) => void;
  onEdit: (entity: Entity) => void;
  onDelete: (entity: Entity) => void;
};

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

const skeletonArray = [...Array(10).keys()];

const EntitiesTable = ({
  entities,
  loading,
  onRowClick,
  onEdit,
  onDelete,
}: Props) => (
  <EntitiesListWrapper>
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
              <SkeletonRow key={skeletonElem} />
            ))
          : entities.map((entity: any) => (
              <EntityRow
                key={entity.id}
                entity={entity}
                onClick={onRowClick}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
      </TableBody>
    </Table>
  </EntitiesListWrapper>
);

export default EntitiesTable;
