import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import i18n from 'i18next';
import ToggleColorMode from '../ToggleColorMode';
import StyledAppBar from './styles';

const AppBar = ({
  open,
  toggleDrawer,
}: {
  open: boolean;
  toggleDrawer: () => void;
}) => (
  <StyledAppBar position="absolute">
    <Toolbar
      sx={{
        pr: '24px', // keep right padding when drawer closed
      }}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer}
        sx={{
          marginRight: '36px',
          ...(open && {display: 'none'}),
        }}>
        <MenuIcon />
      </IconButton>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{flexGrow: 1}}>
        {i18n.t<string>('appbar.dashboard')}
      </Typography>
      <ToggleColorMode />
      <IconButton color="inherit">
        <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </Toolbar>
  </StyledAppBar>
);

export default AppBar;
