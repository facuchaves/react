import React from 'react';
import {Route} from 'wouter';
import EntityPage from './pages/EntityPage';
import EntitiesPage from './pages/EntitiesPage';
import constants from './constants/router.constants';

const Router = () => (
  <>
    <Route component={EntitiesPage} path={constants.router.entities} />
    <Route path={constants.router.entity}>
      {(params) => <EntityPage id={params.id} />}
    </Route>
  </>
);

export default Router;
