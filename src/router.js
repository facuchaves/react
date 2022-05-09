import React from "react";
import { Route } from "wouter";
import { IssuePage } from "./pages/issuePage";
import IssuesPage from "./pages/issuesPage";
import { IssuesContextProvider } from "./context/IssuesContext";
import { constants } from "./constants/router.constants";

const Router = () => {
  return (
    <div className="" style={{backgroundColor : '#f5f5f5'}}>
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
    </div>
  );
}

export default Router;