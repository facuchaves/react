import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BugReportIcon from '@mui/icons-material/BugReport';
import i18n from 'i18next';
import {useLocation} from 'wouter';
import constants from '../constants/router.constants';

const MainListItems = () => {
  const [location, setLocation] = useLocation();

  return (
    <ListItemButton
      onClick={() => {
        setLocation(constants.router.entities);
      }}>
      <ListItemIcon>
        <BugReportIcon />
      </ListItemIcon>
      <ListItemText primary={i18n.t<string>('sidebar.entities')} />
    </ListItemButton>
  );
};

export default MainListItems;
