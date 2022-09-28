import React from 'react';
// import Amplify from 'aws-amplify';
// import aws_exports from './aws-exports';
import Router from './router';
import Dashboard from './layouts/Dashboard';
// Amplify.configure(aws_exports);

const App = () => (
  <Dashboard>
    <Router />
  </Dashboard>
);

export default App;
