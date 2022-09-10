import React from 'react';
import StaticContex from './context/StaticContex';
// import Amplify from 'aws-amplify';
// import aws_exports from './aws-exports';
import Router from './router';
import Dashboard from './layouts/Dashboard';
// Amplify.configure(aws_exports);

const someValue = {
  name: 'Some name',
  lastName: 'Some lastname',
  isAdult: true,
};

const App = () => (
  <StaticContex.Provider value={someValue}>
    <Dashboard>
      <Router />
    </Dashboard>
  </StaticContex.Provider>
);

export default App;
