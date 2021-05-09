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

function App() {
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
                News
              </Typography>
              <Button color="inherit">Login</Button>
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

export default App;
