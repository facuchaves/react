import React from 'react';
import './App.css';
import { Link, Route } from 'wouter'
import { Home } from './pages/Home';
import { GifInfoPage } from './pages/GifInfoPage'
import { ListOfGifsPage } from './pages/ListOfGifsPage';
import StaticContex from './context/StaticContex'
import { GifsContextProvider } from './context/GifsContext';

function App() {

  

  return (
    <StaticContex.Provider value={{
      name: 'Lucas',
      lastName: 'Csulak',
      isAdult: true
    }}>

      <div className="App">
        <section className="App-content">
          <Link to='/'>HOME de GIFS</Link>

          <GifsContextProvider>

            <Route
              component={Home}
              path="/"
            />

            
            <Route 
              component={ListOfGifsPage}
              path="/gif/:keyWordInput"
            />

            <Route 
              component={GifInfoPage}
              path="/gif/info/:keyWordInput"
            />
          </GifsContextProvider>
        </section>
      </div>

    </StaticContex.Provider>

  );
}

export default App;
