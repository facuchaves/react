import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export const RootPaper = styled(Paper)(({theme}) => ({
  minWidth: 275,
  marginBottom: 12, //theme.spacing(1.5), // equivalente a 12px si spacing = 8
}));
