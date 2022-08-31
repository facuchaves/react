import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {useTranslation} from 'react-i18next';

const Copyright = (props) => {
  const {t} = useTranslation();

  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {t('copyrigth.title')}
      <Link color="inherit" href="https://mui.com/">
        {t('copyrigth.text')}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
