import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from "react-i18next";

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

export default function SimpleCard(props) {
  const { t } = useTranslation();

  const { issue }  = props
  
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const consoleIssue = (issue) => {
    console.log(issue);
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {t('issue.info')}
        </Typography>
        <Typography variant="h5" component="h2">
          {t('issue.id')} : {bull} {issue?.id} {bull}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {t('issue.title')} : {issue?.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {t('issue.body')} : {issue?.body}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {t('issue.comments')}
        </Typography>
        { issue.comments.map( comment => (
          <Typography className={classes.pos} color="textSecondary" key={comment}>
            {t('issue.body')} : {comment?.body}
          </Typography>
      )) }
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => consoleIssue(issue)}> {t('issue.logConsole')} </Button>
      </CardActions>
    </Card>
  );
}
