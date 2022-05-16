import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop : 15,
  },
  pos: {
    marginBottom: 12,
  },
});

const IssueComment = ( {comment} ) => {
  
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

export default IssueComment