import React from "react";
import { Outlet } from "react-router-dom";
import AppContainer from "../layouts/AppContainer";
export default function Root() {
  return (
    <React.Fragment>
      <AppContainer>
        <Outlet />
      </AppContainer>
    </React.Fragment>
  );
}
