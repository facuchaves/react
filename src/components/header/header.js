import React from "react";
import { AppBar , Toolbar , IconButton , Typography, Button } from '@material-ui/core';
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="App-content">
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
        </IconButton>
        <Typography variant="h6" >
          {t('common.news')}
        </Typography>
        <Button color="inherit">{t('common.login')}</Button>
      </Toolbar>
    </AppBar>
  </div>
  );
}

export default Header;