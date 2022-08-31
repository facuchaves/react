import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BugReportIcon from '@mui/icons-material/BugReport';
import {useTranslation} from 'react-i18next';
import constants from '../constants/router.constants';
import {useLocation} from 'wouter';

export const MainListItems = () => {
  const {t} = useTranslation();

  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useLocation();

  return (
    <React.Fragment>
      <ListItemButton
        onClick={() => {
          setLocation(constants.router.entities);
        }}
      >
        <ListItemIcon>
          <BugReportIcon />
        </ListItemIcon>
        <ListItemText primary={t('sidebar.entities')} />
      </ListItemButton>
    </React.Fragment>
  );
};
