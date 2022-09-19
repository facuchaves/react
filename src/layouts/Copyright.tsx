import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import i18n from 'i18next';

const Copyright = (props: any) => (
  <Typography
    variant="body2"
    color="text.secondary"
    align="center"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}>
    {i18n.t('copyrigth.title')}
    <Link color="inherit" href="https://mui.com/">
      {i18n.t<string>('copyrigth.text')}
    </Link>{' '}
    {new Date().getFullYear()}.
  </Typography>
);

export default Copyright;
