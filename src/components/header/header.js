import React from "react";
import { AppBar , Toolbar , IconButton , Typography, Button, Box } from '@material-ui/core';
import { useTranslation } from "react-i18next";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="App-content">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton 
              size="medium"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {t('common.news')}
            </Typography>
            <Button color="inherit">{t('common.login')}</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header;