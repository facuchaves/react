import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {IssueComment} from '../issueComment/issueComment';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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

export const Issue = ( {issue} ) => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {issue?.title} #{issue?.id}
        </Typography>
        <br/>
        <Typography className={classes.pos} color="textSecondary">
          {issue?.body}
        </Typography>
      </CardContent>
    </Card>
    { issue.comments.map( comment => (
      <IssueComment comment={comment} key={comment}/> 
    ))}
    </div>
  );
}
