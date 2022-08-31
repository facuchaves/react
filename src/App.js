import React from 'react';
import StaticContex from './context/StaticContex';
// import Amplify from 'aws-amplify';
// import aws_exports from './aws-exports';
import Router from './router';
import Dashboard from './layouts/Dashboard';
// Amplify.configure(aws_exports);

function App() {
  return (
    //Objeto de static context creado para usar las variables globales en toda la app
    <StaticContex.Provider value={'Some Value'}>
      <Dashboard>
        <Router />
      </Dashboard>
    </StaticContex.Provider>
  );
}

export default App;
