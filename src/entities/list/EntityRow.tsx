import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import EditIcon from '@mui/icons-material/Edit';

type Entity = {
  id: number;
  name: string;
  score: number;
};

type Props = {
  entity: Entity;
  onClick: (entity: Entity) => any;
  onEdit: (entity: Entity) => any;
  onDelete: (entity: Entity) => any;
};

const EntityRow = ({entity, onClick, onEdit, onDelete}: Props) => (
  <TableRow key={entity.id} data-testid={`table-row-entity-id-${entity.id}`}>
    <TableCell
      sx={{cursor: 'pointer'}}
      data-testid={`row-entity-name-${entity.id}`}
      onClick={() => onClick(entity)}>
      {entity.name}
    </TableCell>
    <TableCell>{entity.score}</TableCell>
    <TableCell>
      <ArrowUpwardIcon sx={{cursor: 'pointer'}} />
      <EditIcon
        data-testid={`button-edit-entity-id-${entity.id}`}
        sx={{cursor: 'pointer'}}
        onClick={() => onEdit(entity)}
      />
      <DeleteIcon
        sx={{cursor: 'pointer'}}
        data-testid={`button-delete-entity-id-${entity.id}`}
        onClick={() => onDelete(entity)}
      />
    </TableCell>
  </TableRow>
);

export default EntityRow;
