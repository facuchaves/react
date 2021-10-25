import React from "react";
import "./App.css";
import { Link, Route } from "wouter";
import { Home } from "./pages/Home";
import { GifInfoPage } from "./pages/GifInfoPage";
import { ListOfGifsPage } from "./pages/ListOfGifsPage";
import { PlayersPage } from "./pages/playersPage";
import StaticContex from "./context/StaticContex";
import { GifsContextProvider } from "./context/GifsContext";
import { PlayersContextProvider } from "./context/PlayersContext";
import { AppBar , Toolbar , IconButton , Typography, Button , BottomNavigation , BottomNavigationAction } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useTranslation } from "react-i18next";
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

function App() {
  const { t } = useTranslation();

  return (
    //objeto de static context creado para usar las variables globales en toda la app
    <StaticContex.Provider
      value={{
        name: "Lucas",
        lastName: "Csulak",
        isAdult: true,
      }}
    >
      <div className="App">
        <section className="App-content">
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
        </section>
        <section className="">

          {/* objeto de static context creado para usar las variables globales en toda la app
              tener en cuenta que tiene que "envolver" los componentes donde voy a querer consumirlo
          */}
          <GifsContextProvider>
            <Route component={Home} path="/" />

            <Route
              //si vamos al componente ListOfGifsPage vemos que por los "params" recuperamos los valores de la url para "keyWordInput" y "rating"
              //aca al path le agregue el ? porque si no enviamos el rating solo toma hasta el keyWordInput
              component={ListOfGifsPage}
              path="/gif/:keyWordInput/:rating?"
            />

            <Route component={GifInfoPage} path="/gif-info/:keyWordInput" />
          </GifsContextProvider>
          
          <PlayersContextProvider>
            <Route
              component={PlayersPage}
              path="/players"
            />
          </PlayersContextProvider>
          
        </section>
        <section>
          <BottomNavigation>
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          </BottomNavigation>
        </section>

      </div>
    </StaticContex.Provider>
  );
}

export default withAuthenticator(App, true);
// export default App;
