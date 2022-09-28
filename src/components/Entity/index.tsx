import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import useStyles from './styles';

const Entity = ({entity}: {entity: any}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.pos}>
          #{entity?.id}
        </Typography>
        <Typography variant="h5" component="h2" className={classes.pos}>
          {entity?.name}
        </Typography>
        <Typography variant="h5" component="h2" className={classes.pos}>
          {entity?.score}
        </Typography>
      </CardContent>
    </Card>
  );
};

Entity.propTypes = {
  entity: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
};

export default Entity;
