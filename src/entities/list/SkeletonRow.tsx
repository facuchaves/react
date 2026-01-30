import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Skeleton from '@mui/material/Skeleton';

const SkeletonRow = () => (
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
);

export default SkeletonRow;
