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

  const { player }  = props
  
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const consolePlayer = (player) => {
    console.log(player);
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {t('player.info')}
        </Typography>
        <Typography variant="h5" component="h2">
          Player ID: {bull} {player?.id} {bull}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Name : {player?.playerNameCol}
        </Typography>
        <Typography variant="body2" component="p">
          Score : {player?.playerScoreCol}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => consolePlayer(player)}>Log Player in console</Button>
      </CardActions>
    </Card>
  );
}
