import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import {useTranslation} from 'react-i18next';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 275,
    },
    pos: {
      marginBottom: 12,
    },
  }),
);

// const {t} = useTranslation();
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

export default Entity;
