import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography, {TypographyProps} from '@mui/material/Typography';
import PropTypes from 'prop-types';
// import useStyles from './styles';
import {styled} from '@mui/material/styles';

// Reemplaza useStyles con styled
const StyledCard = styled(Card)(({theme}) => ({
  minWidth: 275,
}));

const PosTypography = styled(Typography)<TypographyProps>(({theme}) => ({
  marginBottom: 12,
}));

const Entity = ({entity}: {entity: any}) => {
  // const classes = useStyles();
  return (
    <StyledCard>
      <CardContent>
        <PosTypography variant="h5" component="h2">
          #{entity?.entity_id}
        </PosTypography>
        <PosTypography variant="h5" component="h2">
          {entity?.name}
        </PosTypography>
        <PosTypography variant="h5" component="h2">
          {entity?.score}
        </PosTypography>
      </CardContent>
    </StyledCard>
  );
};

Entity.propTypes = {
  entity: PropTypes.shape({
    entity_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
};

export default Entity;
