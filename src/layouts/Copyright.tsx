import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {useTranslation} from 'react-i18next';

const Copyright = (props: any) => {
  const {t} = useTranslation();

  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}>
      {t('copyrigth.title')}
      <Link color="inherit" href="https://mui.com/">
        {t<string>('copyrigth.text')}
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
};

export default Copyright;
