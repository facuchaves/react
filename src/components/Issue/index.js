import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IssueComment from '../IssueComment';
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  pos: {
    marginBottom: 12,
  },
});

export const Issue = ( {issue} ) => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <>
      <Card  className={classes.root} >
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.pos} >
            {issue?.title} #{issue?.id}
          </Typography>
          <br/>
          <Typography color="textSecondary" className={classes.pos} >
            {issue?.body}
          </Typography>
        </CardContent>
      </Card> 
      { issue.comments.length > 0 && 
      <Typography variant="h5" component="h2" className={classes.pos}>
        {t('issue.comments')}
      </Typography>
}
    { issue.comments.map( (comment,index) => (
      <IssueComment comment={comment} key={index}/> 
    ))}
    </>
  );
}
