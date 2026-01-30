import React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

type Props = {
  onClick: () => void;
};

const OpenAddEntityModalButton = ({onClick}: Props) => (
  <Box sx={{'& > :not(style)': {m: 1}}}>
    <Fab
      data-testid="open_add_entity_modal_button_id"
      color="primary"
      aria-label="add"
      sx={{float: ' right'}}
      onClick={onClick}>
      <AddIcon />
    </Fab>
  </Box>
);

export default OpenAddEntityModalButton;
