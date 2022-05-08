import React from "react";
import "./App.css";
import StaticContex from "./context/StaticContex";
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Router from "./router";
Amplify.configure(aws_exports);

function App() {

  return (
    //Objeto de static context creado para usar las variables globales en toda la app
    <StaticContex.Provider value={'Some Value'}>

      <div className="App">
        <Header/>
        <Router/>
        <Footer/>
      </div>

    </StaticContex.Provider>
  );
}

 export default App;
