import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop : 15,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export const IssueComment = ( {comment} ) => {
  
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardContent>
        <Typography className={classes.pos} color="textSecondary" key={comment}>
         {comment?.body}
        </Typography>
      </CardContent>
    </Card>
  );
}
