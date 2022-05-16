import React from "react";
import { Route } from "wouter";
import IssuePage from "./pages/IssuePage";
import IssuesPage from "./pages/IssuesPage";
import { IssuesContextProvider } from "./context/IssuesContext";
import constants from "./constants/router.constants";

const Router = () => {
  return (
    <>
        <IssuesContextProvider>
          <Route
              component={IssuesPage}
              path={constants.router.issues}
          />
          <Route
              component={IssuePage}
              path={constants.router.issue}
          />
        </IssuesContextProvider>
    </>
  );
}

export default Router;