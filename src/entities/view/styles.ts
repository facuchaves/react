import {makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minWidth: 275,
    },
    pos: {
      marginBottom: 12,
    },
  }),
);

export default useStyles;
