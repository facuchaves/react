import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  pos: {
    marginBottom: 12,
  },
});

export const Entity = ( {entity} ) => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <>
      <Card  className={classes.root} >
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.pos} >
            #{entity?.id}
          </Typography>
          <Typography variant="h5" component="h2" className={classes.pos} >
            {entity?.name}
          </Typography>
          <Typography variant="h5" component="h2" className={classes.pos} >
            {entity?.score}
          </Typography>
        </CardContent>
      </Card> 
    </>
  );
}
