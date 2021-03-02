import React from "react";
import "./App.css";
import { Link, Route } from "wouter";
import { Home } from "./pages/Home";
import { GifInfoPage } from "./pages/GifInfoPage";
import { ListOfGifsPage } from "./pages/ListOfGifsPage";
import StaticContex from "./context/StaticContex";
import { GifsContextProvider } from "./context/GifsContext";

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
          <Link to="/">HOME de GIFS</Link>

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
        </section>
      </div>
    </StaticContex.Provider>
  );
}

export default App;
